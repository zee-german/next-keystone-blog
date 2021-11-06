import {
    GetStaticPathsResult,
    GetStaticPropsContext,
    InferGetStaticPropsType,
  } from 'next';
  import Link from 'next/link';
  import { query } from '.keystone/api';
  import { DocumentRenderer, DocumentRendererProps } from '@keystone-next/document-renderer';
  

  const renderers: DocumentRendererProps['renderers'] = {
    // Render heading blocks
    block: {
      heading({ level, children, textAlign }) {
        const Comp = `h${level}` as const;
        return <Comp style={{ textAlign, textTransform: 'uppercase' }}>{children}</Comp>;
      },
    },
    // Render inline relationships
    inline: {
      relationship({ relationship, data }) {
        // If there is more than one inline relationship defined on the document
        // field we need to handle each of them separately by checking the `relationship` argument.
        // It is good practice to include this check even if you only have a single inline relationship.
        if (relationship === 'mention') {
          if (data === null || data.data === undefined) {
            // data can be null if the content writer inserted a mention but didn't select an author to mention.
            // data.data can be undefined if the logged in user does not have permission to read the linked item
            // or if the linked item no longer exists.
            return <span>[unknown author]</span>;
          } else {
            // If the data exists then we render the mention as a link to the author's bio.
            // We have access to `id` an `name` fields here because we named them in the
            // `selection` config argument.
            return <Link href={`/author/${data.data.id}`}>{data.data.name}</Link>;
          }
        }
        return null;
      },
    },
  };


  export default function PostPage({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <div>
        <main style={{margin: "3rem"}}>
        <div>
          <Link href="/">
            <a>&larr; back home</a>
          </Link>
        </div>
        <h1>{post.title}</h1>
        <DocumentRenderer document={post.content.document} renderers={renderers} />
        </main>
      </div>
    );
  }
  
  export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await query.Post.findMany({
      query: `slug`,
    });
  
    const paths = posts
      .map(post => post.slug)
      .filter((slug): slug is string => !!slug)
      .map(slug => `/post/${slug}`);
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({
    params,
  }: GetStaticPropsContext) {
    const post = await query.Post.findOne({
      where: { slug: params!.slug as string },
      query: 'id title content { document} ',
    });
    return { props: { post } };
  }
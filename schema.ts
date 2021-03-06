import { list } from "@keystone-next/keystone";
import {
  select,
  relationship,
  text,
  timestamp,
} from "@keystone-next/keystone/fields";
import { document } from "@keystone-next/fields-document";
import { image } from '@keystone-next/keystone/fields';
import { componentBlocks } from './component-blocks';

export const lists = {
  Post: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ isIndexed: "unique" }),
      status: select({
        type: "enum",
        options: [
          { label: "Draft", value: "draft" },
          { label: "Published", value: "published" },
        ],
      }),
      content: document({
        // We want to have support a fully featured document editor for our
        // authors, so we're enabling all of the formatting abilities and
        // providing 1, 2 or 3 column layouts.
        ui: { views: require.resolve('./component-blocks.tsx') },
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
        // We want to support twitter-style mentions in blogs, so we add an
        // inline relationship which references the `Author` list.
        relationships: {
          mention: {
            kind: "inline",
            listKey: "Author",
            label: "Mention", // This will display in the Admin UI toolbar behind the `+` icon
            selection: "id name", // These fields will be available to the renderer
          },
        },
        componentBlocks
      }),

      publishDate: timestamp(),
      author: relationship({ ref: "Author.posts", many: false }),
    },
  }),
  Author: list({
    fields: {
      name: text({ isIndexed: "unique", validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true } }),
      posts: relationship({ ref: "Post.author", many: true }),
    },
  }),
  Image: list({
    fields: {
      image: image(),
      title: text({ validation: { isRequired: true } }),
    },
  }),
};

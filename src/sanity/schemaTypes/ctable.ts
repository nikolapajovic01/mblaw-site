import { defineArrayMember, defineField, defineType } from "sanity";

// Comparison table inside an article body. Same shape the content pipeline already
// writes for its other Sanity brands: `head` is the header row, each row is its cells.
export const ctable = defineType({
  name: "ctable",
  title: "Tabela",
  type: "object",
  fields: [
    defineField({
      name: "head",
      title: "Zaglavlje",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "rows",
      title: "Redovi",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Ćelije",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "highlight", title: "Istaknut red", type: "boolean" }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare: ({ cells }) => ({ title: (cells ?? []).join(" | ") }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { head: "head" },
    prepare: ({ head }) => ({ title: "Tabela", subtitle: (head ?? []).join(" | ") }),
  },
});

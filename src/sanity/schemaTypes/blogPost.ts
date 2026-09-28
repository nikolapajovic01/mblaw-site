import { defineArrayMember, defineField, defineType } from "sanity";
import { practiceAreas } from "../../data/practice-areas";
import { attorneys } from "../../data/team";

// One "Uvid" (blog article), rendered at /sr/uvidi/{slug}. Author and practice area
// are stored as slugs and resolved against src/data/team.ts and practice-areas.ts, so
// names, photos and links stay defined in one place.
export const blogPost = defineType({
  name: "blogPost",
  title: "Uvid",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kratak opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "metaTitle",
      title: "Meta naslov",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Vreme čitanja (min)",
      type: "number",
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      options: {
        list: attorneys
          .filter((attorney) => !attorney.comingSoon)
          .map((attorney) => ({ title: attorney.name, value: attorney.slug })),
      },
      initialValue: "dusan-s-markovic",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "practiceArea",
      title: "Oblast rada",
      type: "string",
      options: {
        list: practiceAreas.map((area) => ({ title: area.title, value: area.slug })),
      },
    }),
    defineField({
      name: "heroImage",
      title: "Glavna slika",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt tekst", type: "string" })],
    }),
    defineField({
      name: "body",
      title: "Sadržaj",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Pasus", value: "normal" },
            { title: "Naslov H2", value: "h2" },
            { title: "Naslov H3", value: "h3" },
          ],
          lists: [],
          marks: {
            decorators: [{ title: "Bold", value: "strong" }],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt tekst", type: "string" })],
        }),
        defineArrayMember({ type: "ctable" }),
      ],
    }),
    defineField({
      name: "faq",
      title: "Česta pitanja",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "q", title: "Pitanje", type: "string" }),
            defineField({ name: "a", title: "Odgovor", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "q", subtitle: "a" } },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Datum objave, najnovije",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "heroImage" },
  },
});

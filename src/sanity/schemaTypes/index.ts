import type { SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { ctable } from "./ctable";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, ctable],
};

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Public dataset, read without a token. The CDN is skipped so a freshly approved
// article shows up on the next revalidation instead of waiting on CDN propagation.
export const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

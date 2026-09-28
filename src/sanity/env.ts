// Project ID and dataset are public identifiers (the dataset is public-read), so they
// default to the real MB Law project and can still be overridden per environment.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o0m11qhj";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-28";

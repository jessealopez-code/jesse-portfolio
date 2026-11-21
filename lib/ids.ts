/** Anchor id for a company block, e.g. "Intuit" -> "co-intuit". Safe on server and client. */
export const companyId = (name: string) => `co-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

# REELDROP SEO RULES

1. **No Keyword Stuffing**: Never dump raw keywords from the JSON files onto any frontend page.
2. **True Support Only**: Keywords involving "private" content must ONLY be used to explicitly explain that REELDROP does not support private URLs.
3. **Primary Mapping**: Each page gets strictly one `primaryKeyword` enforced by `page-map.json`.
4. **Validation Pipeline**: Code cannot be deployed unless `npm run seo:audit` passes 100%.
5. **AEO Formatting**: Guide pages must feature direct answers, `<ol>` steps, and clear H2 question blocks.
6. **No Hidden Text**: Keywords should only be used in natural visible paragraphs or semantic HTML (Titles, H1s, `alt` text).
7. **Performance**: All keyword logic is resolved at build time (SSR). No keyword dictionaries are sent to the client.

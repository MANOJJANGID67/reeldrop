# REELDROP Content Strategy & SEO Visibility Engine

## 1. Primary Objectives
- **Brand Identity**: Establish REELDROP ("Public Reels. Simple Downloads.") as a premier, trustworthy, and privacy-respecting online tool.
- **Search Intent Alignment**: Map distinct user queries (e.g., iPhone reel downloads, PC video saving, general reel downloading) to specific, high-quality, statically rendered pages.
- **AI/LLM Citability (AEO/GEO)**: Format guides using direct "Question & Answer" layouts, step-by-step ordered lists, and semantic HTML to encourage extraction by AI Overviews, Copilot, and Perplexity.
- **Technical Excellence**: Maintain 100% Core Web Vitals, SSR output without hydration dependency, pristine `robots.txt`/`sitemap.xml`, and robust `JSON-LD` schemas.

## 2. Topic Clusters
- **Cluster A (Core Downloaders)**: Target high-volume, bottom-of-funnel searches (`/instagram-reel-downloader`, `/reel-downloader`).
- **Cluster B (Video Variants)**: Capture users looking for broad media support (`/instagram-video-downloader`).
- **Cluster C (Public Focus)**: Highlight privacy and access limitations to build trust (`/public-instagram-reel-downloader`).
- **Cluster D (Device-Specific Guides)**: Capture middle-of-funnel searches from users struggling with iOS Safari or desktop workflows (`/guides/instagram-reel-downloader-iphone`).

## 3. AEO (Answer Engine Optimization) Directives
Every guide page must follow a strict semantic structure:
1. **Direct Answer Block**: 1-2 sentences at the top of the guide answering the core question.
2. **Ordered Instructions**: `<ol>` tags representing step-by-step flows.
3. **Limitations Transparency**: Explicitly stating that REELDROP cannot bypass private accounts or Instagram's anti-bot measures.

## 4. Entity & Trust Identity
- **Legal Alignment**: `/privacy`, `/terms`, and `/dmca` must be present and linked in the global footer.
- **Affiliation Statement**: "REELDROP is an independent service. Not affiliated with Instagram." must be heavily featured.
- **Structured Data**: `WebApplication` JSON-LD represents the tool.

## 5. 30-60-90 Day Execution
- **Day 1-30**: Deploy to Vercel, submit sitemap to Google Search Console and Bing Webmaster Tools. Monitor indexation and Core Web Vitals.
- **Day 30-60**: Analyze Google Search Console for impressions. Expand guides based on long-tail queries where REELDROP ranks 10-20.
- **Day 60-90**: Audit AI Overviews for brand mentions. Refine step-by-step guide formatting if citations are missed.

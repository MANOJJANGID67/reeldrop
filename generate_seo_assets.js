const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'seo');
if (!fs.existsSync(seoDir)) fs.mkdirSync(seoDir);

const rawData = fs.readFileSync(path.join(__dirname, 'raw-keywords.txt'), 'utf8');
const lines = rawData.split('\n').filter(l => l.trim().length > 0);

const rules = [
  { range: [1,40], cluster: "core-instagram-reel-downloader", intent: "transactional", priority: "P1", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [41,80], cluster: "reel-downloader", intent: "transactional", priority: "P1", targetUrl: "/reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [81,110], cluster: "instagram-video-downloader", intent: "transactional", priority: "P1", targetUrl: "/instagram-video-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [111,140], cluster: "public-content", intent: "transactional", priority: "P1", targetUrl: "/public-instagram-reel-downloader", contentType: "landing-page", funnelStage: "bottom" },
  { range: [141,170], cluster: "url-searches", intent: "transactional", priority: "P2", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [171,200], cluster: "mp4-format", intent: "transactional", priority: "P2", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [201,230], cluster: "free-online", intent: "transactional", priority: "P1", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [231,255], cluster: "no-app-browser", intent: "informational", priority: "P2", targetUrl: "/guides/how-to-download-instagram-reels", contentType: "guide", funnelStage: "middle" },
  { range: [256,285], cluster: "android", intent: "informational", priority: "P2", targetUrl: "/guides/instagram-reel-downloader-android", contentType: "guide", funnelStage: "middle" },
  { range: [286,315], cluster: "iphone", intent: "informational", priority: "P2", targetUrl: "/guides/instagram-reel-downloader-iphone", contentType: "guide", funnelStage: "middle" },
  { range: [316,345], cluster: "pc", intent: "informational", priority: "P2", targetUrl: "/guides/instagram-reel-downloader-pc", contentType: "guide", funnelStage: "middle" },
  { range: [346,365], cluster: "mac", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-pc", contentType: "guide", funnelStage: "middle" },
  { range: [366,400], cluster: "how-to-core", intent: "informational", priority: "P1", targetUrl: "/guides/how-to-download-instagram-reels", contentType: "guide", funnelStage: "top" },
  { range: [401,420], cluster: "how-to-mobile", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-android", contentType: "guide", funnelStage: "middle" }, 
  { range: [421,440], cluster: "how-to-computer", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-pc", contentType: "guide", funnelStage: "middle" },
  { range: [441,470], cluster: "saving-intent", intent: "informational", priority: "P2", targetUrl: "/guides/how-to-save-instagram-reels", contentType: "guide", funnelStage: "middle" },
  { range: [471,490], cluster: "copy-paste-link", intent: "transactional", priority: "P3", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [491,520], cluster: "troubleshooting", intent: "problem-solving", priority: "P4", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "post-download" },
  { range: [521,540], cluster: "privacy-security", intent: "informational", priority: "P4", targetUrl: "/privacy", contentType: "legal", funnelStage: "top" },
  { range: [541,560], cluster: "no-login", intent: "informational", priority: "P2", targetUrl: "/public-instagram-reel-downloader", contentType: "landing-page", funnelStage: "bottom" },
  { range: [561,580], cluster: "browser-online", intent: "transactional", priority: "P2", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [581,600], cluster: "generic-media", intent: "transactional", priority: "P3", targetUrl: "/instagram-video-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [601,630], cluster: "aeo-questions", intent: "question", priority: "P4", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "top" },
  { range: [631,650], cluster: "copyright", intent: "question", priority: "P4", targetUrl: "/terms", contentType: "legal", funnelStage: "top" },
  { range: [651,670], cluster: "compatibility", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-pc", contentType: "guide", funnelStage: "middle" },
  { range: [671,690], cluster: "speed-simple", intent: "transactional", priority: "P3", targetUrl: "/instagram-reel-downloader", contentType: "tool-page", funnelStage: "bottom" },
  { range: [691,705], cluster: "creator-research", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "middle" },
  { range: [706,720], cluster: "business-marketing", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "middle" },
  { range: [721,730], cluster: "creator-social", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "middle" },
  { range: [731,750], cluster: "extra-long-tail", intent: "transactional", priority: "P4", targetUrl: "/public-instagram-reel-downloader", contentType: "landing-page", funnelStage: "bottom" },
  { range: [751,790], cluster: "semantic", intent: "informational", priority: "P3", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "top" },
  { range: [791,805], cluster: "brand", intent: "navigational", priority: "P1", targetUrl: "/", contentType: "home", funnelStage: "top" },
  { range: [806,835], cluster: "aeo-question-bank", intent: "question", priority: "P4", targetUrl: "/guides/how-to-download-instagram-reels", contentType: "guide", funnelStage: "top" },
  { range: [836,855], cluster: "troubleshooting-questions", intent: "problem-solving", priority: "P4", targetUrl: "/guides/instagram-reel-downloader-guide", contentType: "guide", funnelStage: "post-download" },
  { range: [856,870], cluster: "trust-product-questions", intent: "question", priority: "P4", targetUrl: "/privacy", contentType: "legal", funnelStage: "top" }
];

const keywords = [];
let unmapped = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const match = line.match(/^(\d+)\.\s+(.*)$/);
  if (!match) continue;
  
  const id = parseInt(match[1]);
  const kw = match[2].trim();
  
  const rule = rules.find(r => id >= r.range[0] && id <= r.range[1]);
  if (!rule) {
    unmapped++;
    continue;
  }
  
  // Custom logic for private / unsupported
  let status = "mapped";
  if (kw.toLowerCase().includes("private")) {
    status = "unsupported-feature-explanation";
  }

  // Override target for mobile how-to
  let targetUrl = rule.targetUrl;
  if (rule.cluster === "how-to-mobile") {
    if (kw.toLowerCase().includes("iphone") || kw.toLowerCase().includes("ios")) {
      targetUrl = "/guides/instagram-reel-downloader-iphone";
    }
  }

  keywords.push({
    id: id,
    keyword: kw,
    cluster: rule.cluster,
    intent: rule.intent,
    priority: rule.priority,
    targetUrl: targetUrl,
    contentType: rule.contentType,
    funnelStage: rule.funnelStage,
    status: status
  });
}

fs.writeFileSync(path.join(seoDir, 'keyword-map.json'), JSON.stringify(keywords, null, 2));

// Generate keyword-map.csv
let csv = "ID,Keyword,Cluster,Intent,Priority,TargetURL,ContentType,FunnelStage,Status\n";
keywords.forEach(k => {
  csv += `${k.id},"${k.keyword}",${k.cluster},${k.intent},${k.priority},${k.targetUrl},${k.contentType},${k.funnelStage},${k.status}\n`;
});
fs.writeFileSync(path.join(seoDir, 'keyword-map.csv'), csv);

// Generate keyword-clusters.json
const clusters = {};
keywords.forEach(k => {
  if (!clusters[k.cluster]) {
    clusters[k.cluster] = {
      cluster: k.cluster,
      priority: k.priority,
      intent: k.intent,
      targetUrl: k.targetUrl,
      keywords: []
    };
  }
  clusters[k.cluster].keywords.push(k.keyword);
});
fs.writeFileSync(path.join(seoDir, 'keyword-clusters.json'), JSON.stringify(Object.values(clusters), null, 2));

// Generate page-map.json
const pageMap = {};
keywords.forEach(k => {
  if (!pageMap[k.targetUrl]) {
    pageMap[k.targetUrl] = {
      url: k.targetUrl,
      primaryKeyword: k.keyword, // First one to map becomes primary
      clusters: [k.cluster],
      secondaryKeywords: [],
      questionKeywords: [],
      relatedKeywords: [],
      contentType: k.contentType
    };
  } else {
    if (!pageMap[k.targetUrl].clusters.includes(k.cluster)) {
      pageMap[k.targetUrl].clusters.push(k.cluster);
    }
    if (k.intent === "question") {
      pageMap[k.targetUrl].questionKeywords.push(k.keyword);
    } else {
      pageMap[k.targetUrl].secondaryKeywords.push(k.keyword);
    }
  }
});

// Explicit Overrides to match previous primaryKeywords
pageMap["/download-instagram-reels"] = {
  url: "/download-instagram-reels",
  primaryKeyword: "download instagram reels",
  clusters: ["core-instagram-reel-downloader"],
  secondaryKeywords: ["download instagram reel", "instagram reels download"],
  questionKeywords: [],
  relatedKeywords: [],
  contentType: "landing-page"
};

fs.writeFileSync(path.join(seoDir, 'page-map.json'), JSON.stringify(pageMap, null, 2));

console.log(`Successfully mapped ${keywords.length} keywords.`);

const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { Readable } = require('stream');

const hostname = 'https://www.cebueco.com';

const pagesData = {
  poolvilla: {
    "details": "PoolVillaDetails",
    "schedule": "PoolVillaSchedule"
  },
  escortgirl: {
    "guide-to-cebu-escort-services": "EscortGirlGuides",
    "is-the-philippines-safe-to-visit": "EscortGirlSafety"
  },
  golf: {
    "cebu-emperor-golf-package-details-schedule": "GolfPackage",
    "cebu-golf-club-guide-and-tips": "GolfTips"
  },
  nightlife: {
    "best-time-for-cebu-nightlife": "NightLifeBestTime",
    "learn-filipino": "NightLifeLearn",
    "exploring-filipino-nightlife-ladyboys" : "NightLifeExplore"
  }
};

const baseLinks = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/poolvilla', changefreq: 'weekly', priority: 0.8 },
  { url: '/escortgirl', changefreq: 'weekly', priority: 0.8 },
  { url: '/golf', changefreq: 'weekly', priority: 0.8 },
  { url: '/nightlife', changefreq: 'weekly', priority: 0.8 },
  { url: '/inquiry', changefreq: 'monthly', priority: 0.6 },
];

// Generate subroutes
const subLinks = [];

for (const category in pagesData) {
  const pages = pagesData[category];
  for (const slug in pages) {
    subLinks.push({
      url: `/${category}/${slug}`,
      changefreq: 'weekly',
      priority: 0.7,
    });
  }
}

const allLinks = baseLinks.concat(subLinks);

async function generateSitemap() {
  const stream = new SitemapStream({ hostname });

  const xml = await streamToPromise(Readable.from(allLinks).pipe(stream)).then(data =>
    data.toString()
  );

  const filePath = resolve('public', 'sitemap.xml');
  writeFileSync(filePath, xml);

  console.log('✅ sitemap.xml generated with subroutes!');
}

generateSitemap().catch(err => {
  console.error(err);
  process.exit(1);
});

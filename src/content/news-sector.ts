import type { NewsPost } from "./news";

/**
 * Sector news from the last three months, summarised by PCPA staff from the published reports (every item links to its original source).
 * Facts and figures were checked against the original pages on 20 Nov 2026.
 */
export const sectorNews: NewsPost[] = [
  {
    slug: "seed-and-fertilizer-shortages-hit-wheat-sowing-in-punjab",
    path: "/news/seed-and-fertilizer-shortages-hit-wheat-sowing-in-punjab",
    title: "Seed and fertilizer shortages reported as wheat sowing gets under way in Punjab",
    shortTitle: "Seed and fertilizer shortages hit wheat sowing",
    author: "ProPakistani (summary)",
    published: "November 18, 2026",
    updated: "November 18, 2026",
    image: "/images/farm/farmer-spreading-fertiliser.jpg",
    paragraphs: [
      "Farmers in Vehari district are reporting difficulty obtaining certified seed and fertilizer for the 2026-27 Rabi wheat season, according to ProPakistani. Farmers also allege hoarding, inflated prices and weak market monitoring; these are their claims as reported, not findings by an authority.",
      "The district has a wheat target of 465,000 acres, of which Mailsi accounts for 159,000, Vehari 156,000 and Burewala 150,000. The target for the whole Multan division is 1.776 million acres, up 16,000 acres from last year.",
      "The report estimates that each acre needs at least one 50 kg bag of urea and 1.5 bags of DAP at the early growth stage, so Vehari alone would need about 23,250 tonnes of urea and 34,875 tonnes of DAP. The best sowing window runs from November 1 to 20, with a second window to December 10.",
      "Why it matters to PCPA members: timely access to farm inputs shapes the season ahead for crop protection demand in the Multan region.",
    ],
    source: {
      outlet: "ProPakistani",
      title: "Seed and Fertilizer Shortages Hit Wheat Sowing in Punjab",
      url: "https://propakistani.pk/2026/11/18/seed-and-fertilizer-shortages-hit-wheat-sowing-in-punjab/",
    },
  },
  {
    slug: "cabi-initiative-biopesticide-registration-pakistan",
    path: "/news/cabi-initiative-biopesticide-registration-pakistan",
    title: "CABI launches initiative on feed and biopesticide regulation in Pakistan",
    shortTitle: "CABI initiative on biopesticide registration",
    author: "CABI Blog (summary)",
    published: "October 29, 2026",
    updated: "October 29, 2026",
    image: "/images/farm/farmers-inspecting-crops.jpg",
    paragraphs: [
      "CABI has announced a new initiative, \"Strengthening Market and Regulatory Capacity for Feed Sector and Biopesticides in Pakistan\", carried out with Ag Aligned Global.",
      "The work has three strands: knowledge and regulation of feed ingredients, livestock nutrition and feed formulation, and putting Pakistan's biopesticide registration framework into practice. An inception meeting with USDA-FAS reviewed priorities and plans, and CABI's Executive Director for Asia, Dr Babar Bajwa, spoke of moving from inception to implementation.",
      "The post does not give a budget, a timeline or specific outputs.",
      "Why it matters to PCPA members: it concerns how new biological crop protection products will be registered and brought to market in Pakistan.",
    ],
    source: {
      outlet: "CABI Blog",
      title: "Helping Pakistan strengthen livestock production and access to safer crop protection solutions",
      url: "https://blog.cabi.org/2026/10/29/helping-pakistan-strengthen-livestock-production-and-access-to-safer-crop-protection-solutions/",
    },
  },
  {
    slug: "karachi-plant-quarantine-and-pesticide-testing-labs-upgraded",
    path: "/news/karachi-plant-quarantine-and-pesticide-testing-labs-upgraded",
    title: "Karachi plant quarantine and pesticide testing laboratories upgraded",
    shortTitle: "Karachi pesticide testing labs upgraded",
    author: "Profit by Pakistan Today (summary)",
    published: "October 24, 2026",
    updated: "October 24, 2026",
    image: "/images/news/spraying.jpg",
    paragraphs: [
      "Federal Minister for National Food Security and Research Rana Tanveer Hussain inaugurated two upgraded laboratories in Karachi, Profit reported: the Central Plant Quarantine Laboratory and the Federal Pesticides Testing and Reference Laboratory.",
      "The quarantine laboratory is meant to identify pests and diseases linked to imported commodities. The pesticides laboratory is meant to verify active ingredients and identify substandard agricultural chemicals. Representatives of the University of Karachi and two research institutes attended.",
      "The article gives no cost, capacity or opening-date figures.",
      "Why it matters to PCPA members: stronger testing of pesticide quality bears directly on the fight against substandard products.",
    ],
    source: {
      outlet: "Profit by Pakistan Today",
      title: "Pakistan upgrades plant quarantine, pesticide testing laboratories in Karachi to strengthen agricultural exports",
      url: "https://profit.pakistantoday.com.pk/2026/10/24/pakistan-upgrades-plant-quarantine-pesticide-testing-laboratories-in-karachi-to-strengthen-agricultural-exports",
    },
  },
  {
    slug: "insecticide-imports-rise-53-percent-early-fy2027",
    path: "/news/insecticide-imports-rise-53-percent-early-fy2027",
    title: "Insecticide imports up 53% in the first two months of FY2027",
    shortTitle: "Insecticide imports up 53% in early FY2027",
    author: "Global Agriculture (summary)",
    published: "September 28, 2026",
    updated: "September 28, 2026",
    image: "/images/news/agriculture-economy.png",
    paragraphs: [
      "Pakistan's insecticide imports rose 53.40% in value in July and August 2026, the first two months of fiscal year 2027, based on Pakistan Bureau of Statistics data reported by Global Agriculture.",
      "Volume rose to 6,931 tonnes worth $35.469 million, from 4,013 tonnes worth $23.122 million a year earlier. The wider agricultural and other chemicals group rose 9.03% to $1.910 billion.",
      "The Bureau did not break the figures down by active ingredient or by country of origin. The article's remarks on why imports rose are speculation, and it says so.",
      "Note: the same article describes average import prices as rising, but its own figures work out to a fall of about 11% per tonne.",
    ],
    source: {
      outlet: "Global Agriculture",
      title: "Pakistan's Insecticide Imports Jump 53 Percent in Early FY2027 Trade Data",
      url: "https://www.global-agriculture.com/crop-protection/pakistans-insecticide-imports-jump-53-percent-in-early-fy2027-trade-data/",
    },
  },
];

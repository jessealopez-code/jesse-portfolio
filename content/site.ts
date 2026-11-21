// ─────────────────────────────────────────────────────────────
//  All of the site's text, images and links live in this file.
//  To add a link: replace a "#" below with the full URL,
//  e.g. "https://squareup.com/us/en/invoices".
//  Links that start with "http" open in a new tab automatically.
// ─────────────────────────────────────────────────────────────

export const links = {
  linkedin: "#",
  sharebird: "#",
  twitter: "#",
  recommendations: "#", // e.g. your LinkedIn recommendations page
  email: "", // optional, e.g. "jesse@example.com" — leave empty to hide
};

export const site = {
  name: "Jesse Lopez",
  role: "Product marketing leader",
  title: "Jesse Lopez — Marketer, Strategist, Storyteller",
  description:
    "Product marketing leader who has doubled revenue at Square and tripled acquisition at Dandy through positioning, GTM and storytelling.",
  heroIntro:
    "I help tech companies say what makes them different — and grow because of it. 2× revenue at Square. 3× acquisition at Dandy.",
  footerLine: "If you can dream it, you can do it!",
};

export const bio = {
  heading: "A passionate storyteller and agent of change.",
  paragraphs: [
    "Jesse is a seasoned strategist and marketer with a proven track record of building, implementing, and executing business strategies and marketing plans that drive business growth in consumer & tech industries.",
    "Jesse is the first in his family to graduate from college. He holds a Bachelor of Science degree in Management Science with a concentration in Finance from the Massachusetts Institute of Technology.",
    "Commitment to family and community are as important to Jesse as his work. He is passionate about leveraging his career experiences and skills to “pay it forward” to future generations of minority professionals.",
  ],
};

export const logos = [
  { name: "PepsiCo", src: "/logos/pepsico.png", height: 34 },
  { name: "Mondelēz International", src: "/logos/mondelez.png", height: 38 },
  { name: "Heineken", src: "/logos/heineken.png", height: 34 },
  { name: "Intuit", src: "/logos/intuit.png", height: 30 },
  { name: "Square", src: "/logos/square.png", height: 32 },
  { name: "Brex", src: "/logos/brex.png", height: 32 },
  { name: "Klaviyo", src: "/logos/klaviyo.png", height: 30 },
  { name: "Dandy", src: "/logos/dandy.png", height: 36 },
  { name: "Gusto", src: "/logos/gusto.png", height: 40 },
];

export const principles = [
  {
    title: "Rooted in logic",
    text: "In a world flooded with messages, I guide companies in connecting with customers by aligning messaging with their existing mental frameworks, ensuring clarity and resonance.",
  },
  {
    title: "Driven by data",
    text: "Data isn’t just numbers to me; it’s the secret sauce of successful marketing. By diving deep into what the numbers say, I can unlock insights that fuel impactful campaigns.",
  },
  {
    title: "Inspired by customers",
    text: "Understanding my customers is my superpower. By listening to their needs and desires, I’m able to create marketing that truly resonates and builds strong connections.",
  },
  {
    title: "Takes a stand",
    text: "Standing out in a crowded marketplace isn’t just about delivering generic “all-in-one” lines—it’s about boldly defining what makes your company uniquely different and better.",
  },
];

export type Project = {
  title: string;
  text: string;
  image: string;
  linkLabel: string;
  href: string;
};

export type Chapter = {
  company: string;
  headline: string;
  note: string;
  projects: Project[];
};

export const chapters: Chapter[] = [
  {
    company: "Square",
    headline: "Doubled revenue of Square Invoices",
    note: "Positioning, pricing and launches across 6 markets.",
    projects: [
      {
        title: "Launched ACH payments",
        text: "Built and executed GTM plan—competitive analysis, positioning, messaging, and pricing—for ACH bank transfers.",
        image: "/images/square-ach.jpg",
        linkLabel: "Visit ACH payments page",
        href: "#",
      },
      {
        title: "Launched Square Invoices SaaS tier",
        text: "Led positioning, packaging, pricing, and messaging across 6 markets (US, CA, UK, AU, JP, IE).",
        image: "/images/square-saas-tier.jpg",
        linkLabel: "Visit pricing page",
        href: "#",
      },
      {
        title: "Led brand campaign for Square",
        text: "Partnered with Brand Marketing on the first-ever Professional Services campaign.",
        image: "/images/square-brand-campaign.jpg",
        linkLabel: "Visit campaign page",
        href: "#",
      },
    ],
  },
  {
    company: "Klaviyo",
    headline: "Repositioned for a rebrand and launched enterprise",
    note: "Product positioning across every surface.",
    projects: [
      {
        title: "Revamped Klaviyo positioning",
        text: "Developed and launched new product positioning to support the company’s rebranding across all surfaces.",
        image: "/images/klaviyo-positioning.jpg",
        linkLabel: "Read re-branding announcement",
        href: "#",
      },
      {
        title: "Launched Klaviyo One",
        text: "Built GTM strategy—positioning, messaging, marketing and sales strategy, and pricing—for the enterprise offering.",
        image: "/images/klaviyo-one.jpg",
        linkLabel: "Read Klaviyo One announcement",
        href: "#",
      },
    ],
  },
  {
    company: "Brex",
    headline: "Expanded Brex into Enterprise",
    note: "SaaS launch, Brex AI, first-ever pricing page.",
    projects: [
      {
        title: "Launched SaaS revenue layer",
        text: "Revamped positioning and messaging across organic and paid surfaces for the paid software business.",
        image: "/images/brex-saas.jpg",
        linkLabel: "Read Brex Empower announcement",
        href: "#",
      },
      {
        title: "Led launch of Brex AI",
        text: "Partnered with Product and Marketing to launch a suite of spend management automation capabilities.",
        image: "/images/brex-ai.jpg",
        linkLabel: "Visit Brex AI page",
        href: "#",
      },
      {
        title: "Introduced Brex pricing page",
        text: "Launched the first-ever SaaS pricing page to guide prospects’ decision-making.",
        image: "/images/brex-pricing.jpg",
        linkLabel: "Visit pricing page",
        href: "#",
      },
    ],
  },
  {
    company: "Dandy",
    headline: "3× acquisition through full-funnel marketing",
    note: "Category repositioning, video and social proof.",
    projects: [
      {
        title: "Repositioned Dandy to 3× growth",
        text: "Qual and quant research to reposition Dandy as a category-defining dental lab.",
        image: "/images/dandy-repositioning.jpg",
        linkLabel: "Review Q1’24 vs Q2’24",
        href: "#",
      },
      {
        title: "Championed video storytelling",
        text: "Partnered with Vidico on the first-ever digital dental workflows video.",
        image: "/images/dandy-video.jpg",
        linkLabel: "Watch workflow video",
        href: "#",
      },
      {
        title: "Expanded social proof program",
        text: "Built social proof assets with Customer Marketing for prospects evaluating Dandy.",
        image: "/images/dandy-social-proof.jpg",
        linkLabel: "Watch testimonials",
        href: "#",
      },
    ],
  },
];

export type Highlight = {
  stat: string;
  title: string;
  before: { image: string; label: string; alt: string };
  after: { image: string; label: string; alt: string };
  points: string[];
  link?: { label: string; href: string };
};

export const highlights: Highlight[] = [
  {
    stat: "2×",
    title: "Highlight: Doubled revenue of Square Invoices",
    before: { image: "/images/square-2019.jpg", label: "2019", alt: "Square Invoices page in 2019" },
    after: { image: "/images/square-2021.jpg", label: "2021", alt: "Square Invoices page in 2021" },
    points: [
      "Propelled a differentiated product to capture demand in a crowded marketplace through a revamped positioning and messaging strategy.",
      "Crafted a user-centric homepage that doubled website conversion rates.",
      "Optimized web copy for SEO, soaring from #15 to #1 for most trafficked keyword in product category.",
    ],
    link: { label: "Review 2019 vs 2021 Invoices evolution", href: "#" },
  },
  {
    stat: "3×",
    title: "Highlight: 3X acquisition through full-funnel marketing",
    before: { image: "/images/dandy-q1-24.jpg", label: "Q1’24", alt: "Dandy homepage in Q1 2024" },
    after: { image: "/images/dandy-q2-24.jpg", label: "Q2’24", alt: "Dandy homepage in Q2 2024" },
    points: [
      "Revamped positioning and messaging to differentiate in a fragmented dental lab space, and reframed features into a dentist-centric workflow narrative.",
      "Enriched prospect education and improved funnel performance through video storytelling.",
      "Upleveled market credibility through social proof, pricing & packaging, and targeted offers.",
    ],
  },
];

export const quotes = [
  { who: "Dandy direct report", text: "During his time at Dandy, he elevated the PMM function through his expertise, leadership, and ability to consistently execute major cross-functional initiatives." },
  { who: "Dandy direct report", text: "Jesse is a brilliant product marketer and leader. He brought a wealth of product marketing knowledge to Dandy and helped elevate the domain area at the company." },
  { who: "Brex direct report", text: "He brings so much creativity and knowledge to the overall product marketing strategy, but also isn’t afraid to get in and do the hard work needed to make his vision a reality." },
  { who: "Brex direct report", text: "Jesse continuously gave me opportunities to stretch and grow and helped the greater PMM team stay connected and motivated through multiple transitions." },
  { who: "Klaviyo direct report", text: "Jesse is that masterful combination of strategic, authentic, highly emotionally intelligent, empathetic, and a great communicator." },
  { who: "Square direct report", text: "Not only is Jesse strategic but he is also highly collaborative and invests in forming strong partnerships throughout the organization." },
  { who: "Square direct report", text: "Jesse’s most admirable trait is his relentless pursuit to do what is best for the customer—powered by his deep empathy for small business owners and entrepreneurs." },
  { who: "Intuit direct report", text: "From millions of miles away he was able to help me remove barriers, establish my position in multiple teams and multiple markets, and set me up for success." },
  { who: "Heineken direct report", text: "He’s a true strategic thinker, skilled at diagnosing issues, charting solutions and selling his ideas across the organization." },
];

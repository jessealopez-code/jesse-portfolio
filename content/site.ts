// ─────────────────────────────────────────────────────────────
//  All of the site's text, images and links live in this file.
//  To add a link: replace a "#" below with the full URL,
//  e.g. "https://squareup.com/us/en/invoices".
//  Links that start with "http" open in a new tab automatically.
// ─────────────────────────────────────────────────────────────

export const links = {
  linkedin: "https://www.linkedin.com/in/jessealopez/",
  sharebird: "https://sharebird.com/profile/jesse-lopez",
  twitter: "https://x.com/TheJessefromCA",
  recommendations: "https://www.linkedin.com/in/jessealopez/details/recommendations/",
  email: "jesse.a.lopez@gmail.com",
};

export const site = {
  name: "Jesse Lopez",
  role: "Product marketing leader",
  title: "Jesse Lopez — Marketer, Strategist, Storyteller",
  description:
    "Product marketing leader who helps tech companies say what makes them different — and grow because of it.",
  heroIntro:
    "I help tech companies say what makes them different — and grow because of it.",
  footerLine: "If you can dream it, you can do it!",
  contactEyebrow: "Say hello",
  contactTopics: [
    "A project (fixed scope)",
    "Ongoing support (fractional or retainer)",
    "Advisory or board role",
    "Speaking, panel or workshop",
    "Mentorship or coffee chat",
  ],
  contactTitle: "Let's build your story.",
  contactText:
    "Planning a launch, rethinking your positioning, or looking to grow the customers you have? Tell me what you're working on and I'll get back to you.",
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
  { name: "Vori", src: "/logos/vori.png", height: 34 },
];

export const principles = [
  {
    title: "Rooted in logic",
    icon: "brain",
    text: "In a world flooded with messages, I guide companies in connecting with customers by aligning messaging with their existing mental frameworks, ensuring clarity and resonance.",
  },
  {
    title: "Driven by data",
    icon: "chart-line-up",
    text: "Data isn’t just numbers to me; it’s the secret sauce of successful marketing. By diving deep into what the numbers say, I can unlock insights that fuel impactful campaigns.",
  },
  {
    title: "Inspired by customers",
    icon: "user-focus",
    text: "Understanding my customers is my superpower. By listening to their needs and desires, I’m able to create marketing that truly resonates and builds strong connections.",
  },
  {
    title: "Takes a stand",
    icon: "flag-banner",
    text: "Standing out in a crowded marketplace isn’t just about delivering generic “all-in-one” lines—it’s about boldly defining what makes your company uniquely different and better.",
  },
];

export type Project = {
  title: string;
  text: string;
  image: string;
  linkLabel: string;
  href: string;
  art?: "chip";
};

export type Chapter = {
  company: string;
  category: string;
  headline: string;
  note: string;
  projects: Project[];
};

export const chapters: Chapter[] = [
  {
    company: "Intuit",
    category: "SMB software",
    headline: "Led QuickBooks' first global brand strategy team",
    note: "Brand strategy and performance across the US, UK, Canada and Australia.",
    projects: [
      {
        title: "Ran QuickBooks' first global segmentation study",
        text: "Partnered with The Cambridge Group on research across 8 markets, then led the segmentation story that guided leadership's marketing and product priorities worldwide.",
        image: "/images/intuit-segmentation.jpg",
        linkLabel: "",
        href: "#",
      },
      {
        title: "Authored QuickBooks' first global media strategy",
        text: "Partnered with Hearts & Science to shape how QuickBooks invests in media across developed, developing and emerging markets.",
        image: "/images/intuit-media.jpg",
        linkLabel: "",
        href: "#",
      },
      {
        title: "Made brand performance a global discipline",
        text: "Revamped two senior marketing forums, for media performance and for brand health and competitive reviews, and rolled out brand dashboards and marketing mix modeling across the four largest markets.",
        image: "/images/intuit-performance.jpg",
        linkLabel: "",
        href: "#",
      },
    ],
  },
  {
    company: "Square",
    category: "Fintech · SMB payments",
    headline: "Doubled revenue of Square Invoices",
    note: "Positioning, pricing and launches across 6 markets.",
    projects: [
      {
        title: "Launched ACH payments",
        text: "Built and executed GTM plan—competitive analysis, positioning, messaging, and pricing—for ACH bank transfers.",
        image: "/images/square-ach.jpg",
        linkLabel: "Visit ACH payments page",
        href: "https://squareup.com/us/en/payments/ach-payments",
      },
      {
        title: "Launched Square Invoices SaaS tier",
        text: "Led positioning, packaging, pricing, and messaging across 6 markets (US, CA, UK, AU, JP, IE).",
        image: "/images/square-saas-tier.jpg",
        linkLabel: "Visit pricing page",
        href: "https://squareup.com/us/en/invoices/pricing",
      },
      {
        title: "Led brand campaign for Square",
        text: "Partnered with Brand Marketing on the first-ever Professional Services campaign.",
        image: "/images/square-brand-campaign.jpg",
        linkLabel: "Visit campaign page",
        href: "https://squareup.com/us/en/solutions/professional-services",
      },
    ],
  },
  {
    company: "Klaviyo",
    category: "E-commerce marketing SaaS",
    headline: "Repositioned for a rebrand and launched enterprise",
    note: "Product positioning across every surface.",
    projects: [
      {
        title: "Revamped Klaviyo positioning",
        text: "Developed and launched new product positioning to support the company’s rebranding across all surfaces.",
        image: "/images/klaviyo-positioning.jpg",
        linkLabel: "Read announcement",
        href: "https://www.klaviyo.com/newsroom/klaviyo-rebrand",
      },
      {
        title: "Launched Klaviyo One",
        text: "Built GTM strategy—positioning, messaging, marketing and sales strategy, and pricing—for the enterprise offering.",
        image: "/images/klaviyo-one.jpg",
        linkLabel: "Read announcement",
        href: "https://www.klaviyo.com/newsroom/klaviyo-introduces-klaviyo-one",
      },
      {
        title: "Revamped Klaviyo's web acquisition pages",
        text: "Led revamp of Klaviyo's performance-marketing landing pages and website consideration pages to improve the acquisition rate of new customers.",
        image: "/images/klaviyo-web.jpg",
        linkLabel: "",
        href: "#",
      },
    ],
  },
  {
    company: "Brex",
    category: "Corporate spend management",
    headline: "Expanded Brex into Enterprise SaaS",
    note: "SaaS launch, Brex AI, first-ever pricing page.",
    projects: [
      {
        title: "Launched SaaS revenue layer",
        text: "Revamped positioning and messaging across organic and paid surfaces for the paid software business.",
        image: "/images/brex-saas.jpg",
        linkLabel: "Read announcement",
        href: "https://www.brex.com/journal/press/brex-ga-empower",
      },
      {
        title: "Led launch of Brex AI",
        text: "Partnered with Product and Marketing to launch a suite of spend management automation capabilities.",
        image: "/images/brex-ai.jpg",
        linkLabel: "Visit Brex AI page",
        href: "https://www.brex.com/platform/brex-ai",
      },
      {
        title: "Introduced Brex pricing page",
        text: "Launched the first-ever SaaS pricing page to guide prospects’ decision-making.",
        image: "/images/brex-pricing.jpg",
        linkLabel: "Visit pricing page",
        href: "https://www.brex.com/pricing",
      },
    ],
  },
  {
    company: "Dandy",
    category: "Digital dental lab",
    headline: "3× acquisition through full-funnel marketing",
    note: "Category repositioning, video and social proof.",
    projects: [
      {
        title: "Repositioned Dandy to 3× growth",
        text: "Qual and quant research to reposition Dandy as a category-defining dental lab.",
        image: "/images/dandy-repositioning.jpg",
        linkLabel: "Review Q1’24 vs Q2’24",
        href: "https://web.archive.org/web/diff/20240226234009/20240929183556/meetdandy.com",
      },
      {
        title: "Championed video storytelling",
        text: "Partnered with Vidico on the first-ever digital dental workflows video.",
        image: "/images/dandy-video.jpg",
        linkLabel: "Watch workflow video",
        href: "https://youtu.be/QKPrFzTGJd0",
      },
      {
        title: "Expanded social proof program",
        text: "Built social proof assets with Customer Marketing for prospects evaluating Dandy.",
        image: "/images/dandy-social-proof.jpg",
        linkLabel: "Watch testimonials",
        href: "https://www.meetdandy.com/why-dentists-love-dandy/",
      },
    ],
  },
];

// ── Vori: the company block (added to the end of `chapters` below) ──
chapters.push({
  company: "Vori",
  category: "AI grocery operating system",
  headline: "Owned marketing end to end, from brand to pipeline",
  note: "Brand, demand gen, product marketing and marketing ops for independent grocers.",
  projects: [
    {
      title: "Launched Chip, Vori's AI employee",
      art: "chip",
      text: "Brought to market the first-ever grocery virtual employee — owners ask in plain language and Chip plans promotions, answers sales questions and prepares shelf tags, then waits for approval.",
      image: "/images/vori-chip.jpg",
      linkLabel: "Meet Chip",
      href: "https://www.vori.com/chip",
    },
    {
      title: "Built a full-funnel demand engine",
      text: "Partnered with a growth agency on Meta and Google campaigns that became Vori's largest source of new business.",
      image: "/images/vori-demand.jpg",
      linkLabel: "",
      href: "#",
    },
    {
      title: "Armed sales with a full deal toolkit",
      text: "Built pitch decks, one-pagers and sales collateral that support every stage of the deal.",
      image: "/images/vori-sales.jpg",
      linkLabel: "",
      href: "#",
    },
  ],
});

// ── Vori: the spotlight section below the company blocks ──
export const vori = {
  stat: "1",
  title: "marketer scaling Vori's full-funnel engine",
  subtitle: "",
  chip: {
    heading: "Launched Chip, the first-ever grocery virtual employee",
    image: "/images/vori-chip-section.jpg",
    alt: "Vori homepage section introducing Chip: The grocery employee who already knows your store",
    points: [
      {
        title: "Positioned as an employee, not a feature",
        text: "\u201cBig chains hire a department. You hire Chip.\u201d Framed AI in the language grocers already use: hiring help.",
      },
      {
        title: "Three promises that answer the AI objections",
        text: "Knows your numbers. Does the actual work. Changes nothing without you.",
      },
      {
        title: "Three roles, shown on the job",
        text: "A Pricing Coordinator, Inventory Controller and Marketing Manager, each with a product visual of the work Chip does.",
      },
    ],
    href: "https://www.vori.com/chip",
    linkLabel: "Meet Chip",
  },
  website: {
    heading: "Rebuilt Vori.com with depth for every stage of the funnel",
    pages: [
      {
        label: "Homepage",
        text: "The front door. Positions Vori as the AI-native grocery operating system and routes owners and chain leaders to the right next step.",
        image: "/images/vori-home.jpg",
        href: "https://www.vori.com/",
      },
      {
        label: "Overview",
        text: "The map of the platform. Shows how one connected system powers every part of the store, from the customer's phone to checkout, the aisles, the back room and reporting.",
        image: "/images/vori-overview.jpg",
        href: "https://www.vori.com/products",
      },
      {
        label: "Product pages",
        text: "Go deep on each capability — what it does, how it works in a real store, and the proof behind it.",
        image: "/images/vori-product.jpg",
        href: "https://www.vori.com/pos",
      },
      {
        label: "Solution pages",
        text: "Speak to the problems owners feel most, like protecting margins, and show how Vori solves them in their store.",
        image: "/images/vori-solution.jpg",
        href: "https://www.vori.com/protect-margin",
      },
      {
        label: "Competitive pages",
        text: "Clear side-by-sides against legacy grocery POS systems that give evaluators the confidence to switch.",
        image: "/images/vori-competitive.jpg",
        href: "https://www.vori.com/vori-vs-ncr",
      },
    ],
  },
  content: {
    heading: "Content that drives awareness and credibility",
    items: [
      {
        title: "The Modern Grocery Playbook",
        text: "A practical guide to the four habits of high-performing independent grocers.",
        image: "/images/vori-playbook.jpg",
        cover: "/images/playbook/p-01.jpg",
        pagesDir: "/images/playbook",
        pageCount: 18,
        href: "https://www.vori.com/blog/the-modern-grocery-playbook",
        linkLabel: "Read the playbook",
      },
      {
        title: "The 2026 Independent Grocery Operator Study",
        text: "Benchmark research with EnsembleIQ and Progressive Grocer, surveying 53 independent U.S. grocers on big-box competition, automation and loyalty.",
        image: "/images/vori-study.jpg",
        cover: "/images/study/p-01.jpg",
        pagesDir: "/images/study",
        pageCount: 26,
        href: "https://www.vori.com/blog/the-2026-independent-grocery-operator-study",
        linkLabel: "Read the study",
      },
    ],
  },
  caseStudies: {
    heading: "Customer stories that prove the value",
    intro: "Built a library of customer stories from stores like our prospects' — then put them to work at every stage of the funnel to drive consideration and conversion.",
    uses: [
      { title: "Embedded in the website", text: "Placed on product and solution pages so evaluators see proof from a store like theirs." },
      { title: "Nurture programs", text: "Woven into email nurtures to keep prospects engaged and move them toward a demo." },
      { title: "After sales meetings", text: "Shared as follow-ups after sales meetings to answer objections and keep deals moving." },
    ],
    items: [
      { image: "/images/vori-case-1.jpg", href: "https://www.vori.com/customer-stories/dat-moi-market-vori-grocery-pos", alt: "How Dat Moi Market serves 60 countries of food on one grocery system" },
      { image: "/images/vori-case-2.jpg", href: "https://www.vori.com/customer-stories/asian-family-market-vori-grocery-pos", alt: "How Asian Family Market built 30K+ loyalty members across 29 lanes" },
      { image: "/images/vori-case-3.jpg", href: "https://www.vori.com/customer-stories/valley-farm-market-vori-grocery-pos", alt: "How Valley Farm Market is saving 20+ hours per week across meat and produce" },
      { image: "/images/vori-case-4.jpg", href: "https://www.vori.com/customer-stories/big-t-iga-vori-grocery-pos", alt: "How Big T IGA drives loyalty with 53% higher order count in small-town Montana" },
      { image: "/images/vori-case-5.jpg", href: "https://www.vori.com/customer-stories/talin-market-vori-grocery-pos-copy", alt: "How Talin Market cut pricing time by 95% and reduced weekly ordering time by 67%" },
      { image: "/images/vori-case-6.jpg", href: "https://www.vori.com/customer-stories/the-willows-market-vori-grocery-pos", alt: "How The Willows Market bagged +9.7% more sales with Vori" },
    ],
  },
  videos: {
    heading: "Video storytelling to drive demand and education",
    items: [
      { id: "DgmH7mlubkE", title: "Meet Chip", caption: "Introducing Vori's AI virtual employee for grocery stores." },
      { id: "eaUk9O0YewQ", title: "Shelf tags", caption: "How grocers design shelf tags once and print them in minutes." },
      { id: "PpslvOr6kRM", title: "Quick Food Service", caption: "Launch video for Vori's new tools for prepared-food counters." },
    ],
  },
  launches: {
    heading: "Built AI workflows to deliver launches at scale",
    text: "Shipped one page covering all 35 of Vori's 2026 releases — a tour of a grocer's store from Chip to the checkout lanes, sales floor, back room and office. Last year that would have been a month-long team project; this time it came mostly out of one Claude project.",
    stats: [
      { value: "35", label: "releases on one page" },
      { value: "1", label: "marketer" },
      { value: "1", label: "Claude project" },
    ],
    steps: [
      { title: "Capture", text: "Every release announcement in Slack went into Claude, which logged each one as a structured record." },
      { title: "Write", text: "Co-wrote descriptions with a brand voice agent built on Vori's voice guide, proof points and banned words." },
      { title: "Design", text: "Claude made product visuals and motion loops from Vori's design system code on GitHub." },
      { title: "Lay out", text: "Figma turned existing web styles into the layout; Figma AI drew the store map." },
      { title: "Build", text: "Claude built the page in Webflow through MCP, in minutes." },
    ],
    image: "/images/vori-releases.jpg",
    href: "https://www.vori.com/releases-2026",
    linkLabel: "Explore the 2026 releases",
  },
};

export type Highlight = {
  company: string;
  stat: string;
  title: string;
  before: { image: string; label: string; alt: string };
  after: { image: string; label: string; alt: string };
  points: string[];
  headline?: string; // shown as a section headline, like the ones below it
  link?: { label: string; href: string };
  screens?: {
    heading: string;
    text: string;
    images: { src: string; alt: string }[];
  };
  extra?: {
    heading: string;
    items: { title: string; text: string; image: string; href: string; linkLabel: string }[];
  };
};

export const highlights: Highlight[] = [
  {
    company: "Square Invoices",
    stat: "2×",
    title: "revenue for Square Invoices",
    headline: "Revamped the website to capture demand in a crowded market",
    before: { image: "/images/square-2019.jpg", label: "2019", alt: "Square Invoices page in 2019" },
    after: { image: "/images/square-2021.jpg", label: "2021", alt: "Square Invoices page in 2021" },
    points: [
      "Propelled a differentiated product to capture demand in a crowded marketplace through a revamped positioning and messaging strategy.",
      "Crafted a user-centric homepage that doubled website conversion rates.",
      "Optimized web copy for SEO, soaring from #15 to #1 for most trafficked keyword in product category.",
    ],
    link: {
      label: "Review 2019 vs 2021 Invoices evolution",
      href: "https://web.archive.org/web/diff/20190830034015/20211101082459/https:/squareup.com/us/en/invoices",
    },
    screens: {
      heading: "Repositioned Square Invoices for service businesses",
      text: "Refreshed the imagery, messaging, and creative across the App Store to speak to service professionals, from contractors to designers, with real people on the job and benefit-led headlines for invoices, estimates, payments, and reporting.",
      images: [
        { src: "/images/square-app-1.jpg", alt: "Square Invoices: the invoice maker for small and large businesses" },
        { src: "/images/square-app-2.jpg", alt: "Customer review: a convenient, fast way to accept and record any kind of payment" },
        { src: "/images/square-app-3.jpg", alt: "Accept any type of payment" },
        { src: "/images/square-app-4.jpg", alt: "Invoices and estimates in seconds" },
        { src: "/images/square-app-5.jpg", alt: "Real-time reports" },
        { src: "/images/square-app-6.jpg", alt: "Track payments from anywhere" },
        { src: "/images/square-app-7.jpg", alt: "Multiple invoicing options: invoice, recurring invoice, estimate, project" },
      ],
    },
  },
  {
    company: "Dandy",
    stat: "3×",
    title: "Dandy acquisition through full-funnel marketing",
    before: { image: "/images/dandy-q1-24.jpg", label: "Q1’24", alt: "Dandy homepage in Q1 2024" },
    after: { image: "/images/dandy-q2-24.jpg", label: "Q2’24", alt: "Dandy homepage in Q2 2024" },
    headline:
      "Revamped positioning and messaging to differentiate in a fragmented dental lab space, and reframed features into a dentist-centric workflow narrative",
    points: [],
    extra: {
      heading: "Upleveled market credibility through social proof, pricing & packaging, and targeted offers",
      items: [
        {
          title: "Championed customer stories to strengthen credibility",
          text: "Amplified authentic clinical voices to validate product efficacy and deepen clinician trust in a crowded dental lab space.",
          image: "/images/dandy-stories.jpg",
          href: "https://www.meetdandy.com/case-studies/clinical-case-studies/",
          linkLabel: "Read case studies",
        },
        {
          title: "Evolved pricing & packaging to attract new audiences",
          text: "Launched Dandy's first-ever pricing page to empower dentists to easily understand our offerings and lab commitments.",
          image: "/images/dandy-pricing.jpg",
          href: "https://www.meetdandy.com/pricing/",
          linkLabel: "Visit pricing page",
        },
        {
          title: "Launched foundations for upmarket offering",
          text: "Enabled the acquisition of multi-location dental practices through targeted product and service offerings.",
          image: "/images/dandy-upmarket.jpg",
          href: "https://www.meetdandy.com/solutions/group-practice/",
          linkLabel: "Visit group practice page",
        },
      ],
    },
  },
];

export type ServiceCard = { name: string; icon: string; tag?: string; line: string; items: string[] };

export const services = {
  eyebrow: "Services",
  title: "Where I plug in.",
  sub: "From the first customer interview to the customers who stay and grow.",
  cta: "Let's talk →",
  groups: [
    {
      label: "Build the story",
      cards: [
        {
          name: "Understand",
          icon: "users-three",
          line: "Know your customer better than your competitors do.",
          items: ["Customer and prospect interviews", "Segmentation and ideal customer profiles", "Competitive and market analysis"],
        },
        {
          name: "Position",
          icon: "crosshair",
          line: "Say what makes you different, and make it stick.",
          items: ["Positioning and narrative", "Messaging frameworks and testing", "Pricing and packaging"],
        },
        {
          name: "Launch",
          icon: "rocket-launch",
          line: "Bring it to market with conviction.",
          items: [
            "GTM planning and launch tiers",
            "Launch assets: web, email, decks, video",
            "Cross-team launch management",
            "Launch readouts and results",
          ],
        },
        {
          name: "Enable",
          icon: "handshake",
          line: "Give sales the story and the tools to win.",
          items: ["Pitch decks and one-pagers", "Battlecards and competitive guides", "Sales training and talk tracks"],
        },
      ],
    },
    {
      label: "Grow the business",
      cards: [
        {
          name: "Convert",
          icon: "funnel",
          line: "Turn attention into pipeline.",
          items: ["Homepage, product and solution pages", "Competitive and comparison pages", "Full-funnel demand programs"],
        },
        {
          name: "Expand",
          icon: "trend-up",
          line: "Turn customers into your biggest growth engine.",
          items: ["Onboarding and adoption journeys", "Lifecycle and nurture programs", "Upsell, cross-sell and new-tier launches"],
        },
        {
          name: "Prove",
          icon: "quotes",
          line: "Let customers make the case.",
          items: ["Case studies and customer stories", "Video storytelling", "Advocacy and social proof programs"],
        },
        {
          name: "Scale",
          icon: "sparkle",
          tag: "AI-powered",
          line: "Do more with a lean team.",
          items: ["AI marketing workflows", "Launch and content systems", "Playbooks that keep the engine running"],
        },
      ],
    },
  ] as { label: string; cards: ServiceCard[] }[],
};

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

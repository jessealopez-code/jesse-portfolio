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
  more?: StoryBlock[]; // extra numbered blocks
  screensAfter?: number; // how many "more" blocks come before the screens block (default 0)
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

export type StoryBlock = {
  heading: string;
  text: string;
  layout: "single" | "cards" | "screens" | "verticals" | "benefits" | "proof" | "emails" | "pricing"; // cards, screens and verticals swipe on phones
  images: { src: string; alt: string; caption: string; subject?: string }[]; // subject: shown in the email header bar ("emails" layout)
  // "verticals": rebuilt Square segment cards. Wrap words in [[ ]] to show them as Square-blue links.
  verticals?: { image: string; title: string; subtitle: string; points: string[] }[];
  // "pricing": before/after toggle between the old and new pricing models
  pricing?: import("@/app/components/PricingToggle").PricingStory;
  // "proof": stats band, customer testimonials and G2 reviews, rebuilt as live text
  proof?: {
    statsTitle: string;
    stats: { value: string; label: string }[];
    testimonials: { image: string; quote: string; name: string; meta: string }[];
    reviews: { title: string; quote: string; name: string; role: string }[];
  };
  // "benefits": Square's benefit menu rebuilt as a tabbed explorer
  benefits?: { title: string; promise: string; image: string; plus?: boolean; features: { title: string; text: string }[] }[];
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
    screensAfter: 7, // App Store repositioning comes after the freemium (monetize) block
    more: [
      {
        heading: "Attracted the right audiences with segment messaging",
        text: "Brought audience-specific messaging onto the main page, so professional services, field services, and retail sellers each saw how Square Invoices fit their work.",
        layout: "verticals",
        images: [],
        verticals: [
          {
            image: "/images/sq/vert-pro.jpg",
            title: "Professional services",
            subtitle: "For professionals with client engagements in person or remotely.",
            points: [
              "Bill for services and long-term projects with digital invoices.",
              "Streamline projects with milestone-based payment schedules.",
              "Secure new projects with detailed estimates to clients.",
              "Protect your business with service agreement contracts with e-signature.",
              "Collect over-the-phone payments with free [[Virtual Terminal]].",
            ],
          },
          {
            image: "/images/sq/vert-field.jpg",
            title: "Field services",
            subtitle: "For any workers or teams working on the go, on site, or anywhere else.",
            points: [
              "Accept online payments with payment-enabled invoices.",
              "Automate billing with recurring invoices for ongoing services.",
              "Streamline projects with milestone-based payment schedules.",
              "Send digital invoices via SMS from the [[Square Invoices app]].",
              "Secure jobs with digital estimates and protect your business with contracts.",
              "Collect over-the-phone payments with free [[Virtual Terminal]].",
            ],
          },
          {
            image: "/images/sq/vert-retail.jpg",
            title: "Retail",
            subtitle: "For any retailer with a physical, online, or mobile store.",
            points: [
              "Accept online payments for any order with branded invoices.",
              "Send auto-reminders to collect payments when due.",
              "Request a shipping address on invoices for mail orders.",
              "Protect your business with a sale of goods contract for large orders.",
              "Include a return policy with a custom field.",
            ],
          },
        ],
      },
      {
        heading: "Built credibility with reviews, testimonials, and stats",
        text: "Brought customer voices and proof onto every page, from video testimonials and star reviews to stats that showed Square Invoices at scale.",
        layout: "proof",
        images: [],
        proof: {
          statsTitle: "Millions of businesses trust Square Invoices.",
          stats: [
            { value: "75%", label: "of Square Invoices get paid within a day" },
            { value: "240M", label: "invoices sent globally" },
            { value: "$60B", label: "invoices paid globally" },
          ],
          testimonials: [
            {
              image: "/images/sq/proof-matthew.jpg",
              quote: "Square is integrated into our accounting software, so we’re much better at keeping track of everything that’s going on with payments. As we grow we’re able to count on having funds available for us to invest in our growth.",
              name: "Matthew, Centrico Digital",
              meta: "New York, NY",
            },
            {
              image: "/images/sq/proof-greg.jpg",
              quote: "Square is scalable. They meet you wherever you’re at, at whatever business level you’re at. We started with them when we were small and continue to stay with them as we grow.",
              name: "Greg, Dream Home Images",
              meta: "Scotts Valley, CA",
            },
            {
              image: "/images/sq/proof-anna.jpg",
              quote: "Before we used Square Invoices, we used paper invoices for everything. With the Square Invoices technology, we are able to save 40 hours a week in billing that can be dedicated to serving our clients better.",
              name: "Anna, The Largo Group",
              meta: "Boston, MA",
            },
          ],
          reviews: [
            {
              title: "Quickest way to get paid.",
              quote: "It completely changes the way you look at receiving online payments. Once an invoice is sent, you receive a notification. And the second it is paid, you receive another notification, and you are instantly credited for the amount received.",
              name: "Sheena R.",
              role: "Business owner",
            },
            {
              title: "Great for my business!",
              quote: "Square Invoices have made billing for my business so easy! It’s a great way to track how much revenue was collected and track outstanding invoices. I also love having the ability to send reminders or set up payment plans.",
              name: "Sally L.",
              role: "Business owner",
            },
            {
              title: "Easy to use for personal small business.",
              quote: "I like the user interface of Square Invoices. It makes tracking all of my orders easy! I like the categorization of the invoice statuses so that you can easily see where everything currently stands.",
              name: "Rachel P.",
              role: "Marketing content manager",
            },
            {
              title: "Square makes invoicing easy.",
              quote: "With just a few clicks I can make and send an invoice from my desktop, laptop or phone. I’ve done this from airports and other places, on the go.",
              name: "Alan B.",
              role: "Sales and marketing expert",
            },
          ],
        },
      },
      {
        heading: "Turned features into benefit-based language",
        text: "Organized the product around what sellers want — get paid faster, win more work, save more time — instead of a list of features.",
        layout: "benefits",
        images: [],
        benefits: [
          {
            title: "Get paid faster",
            promise: "Accept payments 24/7 and let your customers pay in one click with smarter invoicing software.",
            image: "/images/sq/benefit-paid.png",
            features: [
              { title: "Accept payments instantly", text: "Send digital invoices via email, SMS, or a link. Customers can pay online with a credit card, Apple Pay, Google Pay, or ACH bank transfer." },
              { title: "Automatic payment reminders", text: "Easily set automatic payment reminders before, on, or after due dates, or send one-time reminders as needed." },
              { title: "Recurring invoices", text: "Set up recurring billing on a daily, weekly, monthly, or yearly schedule to charge customers on a recurring basis." },
            ],
          },
          {
            title: "Win more work",
            promise: "Make the right impression with new and existing customers as you secure new work.",
            image: "/images/sq/benefit-work.png",
            features: [
              { title: "Estimates", text: "Provide clients with an estimate they can approve from anywhere. Easily convert accepted estimates to invoices with one click." },
              { title: "Contracts with e-signature", text: "Create and customize digital contracts with e-signature capabilities, directly from your Square Dashboard." },
              { title: "Real-time tracking", text: "Stay up to date on whether an estimate has been viewed, declined, or accepted." },
            ],
          },
          {
            title: "Save more time",
            plus: true,
            promise: "Win more work faster, bill for work faster, and provide valuable information to your customers faster.",
            image: "/images/sq/benefit-time.png",
            features: [
              { title: "Multi-package estimates", text: "Offer multiple packages of items and services in a single estimate and spend less time on scoping and pricing projects." },
              { title: "Custom invoice templates", text: "Save and reuse invoice templates so you don’t need to start from scratch each time." },
              { title: "Milestone-based payment schedules", text: "Schedule multiple payments for any job or project based on specific milestones — all from one invoice." },
            ],
          },
          {
            title: "Build customer relationships",
            promise: "Deliver a seamless customer experience that keeps them coming back to your business.",
            image: "/images/sq/benefit-relationships.png",
            features: [
              { title: "All contacts, one location", text: "Square Customer Directory stores and manages key customer details in one place for free." },
              { title: "Instant profiles", text: "Automatically add customer details such as name, email, and phone number as you create invoices and collect payments." },
              { title: "Customer feedback", text: "Collect and view customer feedback in real time after every payment through digital receipts." },
            ],
          },
          {
            title: "Manage your finances",
            promise: "Manage cash flow easily and transfer money at the speed of your business.",
            image: "/images/sq/benefit-finances.png",
            features: [
              { title: "Same day, next day, and instant transfers", text: "Access your money the same day and instantly for a fee, or as soon as the next business day, free of charge." },
              { title: "Overview page", text: "See everything related to your estimates, invoices, and payments, including your overall cash flow." },
              { title: "Powerful reports", text: "Get detailed data on all your locations, employees, items, and services. Download CSV files to make bookkeeping easier." },
            ],
          },
        ],
      },
      {
        heading: "Drove feature adoption with lifecycle emails",
        text: "Kept Square Invoices users discovering what’s new, with lifecycle emails that tied every feature back to one promise: save time and get paid faster.",
        layout: "emails",
        images: [
          { src: "/images/sq/email-adopt-1.jpg", alt: "Email: Our new features all have the same goal", caption: "More flexibility in how you take payments", subject: "Discover new invoices features" },
          { src: "/images/sq/email-adopt-2.jpg", alt: "Email section: Manage your business in less time", caption: "Manage your business in less time", subject: "Discover new invoices features" },
          { src: "/images/sq/email-adopt-3.jpg", alt: "Email section: Another way to personalize your invoices", caption: "Another way to personalize your invoices", subject: "Discover new invoices features" },
        ],
      },
      {
        heading: "Cross-sold Square sellers by vertical",
        text: "Introduced Square Invoices to existing Square sellers with vertical emails for home and repair, retail, and professional services, each showing a business like theirs getting paid.",
        layout: "emails",
        images: [
          { src: "/images/sq/email-xsell-home.jpg", alt: "Email: Over 10 million field services invoices sent", caption: "Home & repair", subject: "Give a better client experience" },
          { src: "/images/sq/email-xsell-retail.jpg", alt: "Email: Over 10 million retail invoices sent", caption: "Retail", subject: "Give a better shopper experience" },
          { src: "/images/sq/email-xsell-pro.jpg", alt: "Email: Over 25 million professional services invoices sent", caption: "Professional services", subject: "Give a better client experience" },
        ],
      },
      {
        heading: "Launched Square Invoices Plus",
        text: "Scoped a multi-year roadmap with Product to win the services vertical, then launched Invoices Plus: a subscription of advanced features that save growing businesses time.",
        layout: "emails",
        images: [
          { src: "/images/sq/email-plus-hero.jpg", alt: "Email: Introducing Square Invoices Plus", caption: "Launch announcement", subject: "Welcome to Square Invoices Plus" },
          { src: "/images/sq/email-plus-features.jpg", alt: "Email section: Advanced features that save you time", caption: "Advanced features that save you time", subject: "Welcome to Square Invoices Plus" },
        ],
      },
      {
        heading: "Designed a freemium model to monetize premium features",
        text: "Free to start with no monthly fees, and a Plus plan that unlocks premium features for growing service businesses.",
        layout: "pricing",
        images: [],
        pricing: {
          "before": {
            "label": "Free only",
            "caption": "One free plan. Square Invoices only earned when sellers processed payments.",
            "title": "Always free to send and no monthly fees.",
            "sub": "Send unlimited invoices and estimates free. Only pay for processing when you accept card payments. There are no fees for checks or cash.",
            "stats": [
              {
                "value": "$0",
                "label": "Per month"
              },
              {
                "value": "2.9% + 30¢",
                "label": "Per invoice paid online"
              }
            ],
            "fine": "When customers authorize Square to keep their card on file, you pay 3.5% + 15¢ per saved card payment."
          },
          "after": {
            "label": "Free + Plus",
            "caption": "Free to start, with a paid Plus tier for growing service businesses, turning a payments product into software revenue.",
            "title": "Pick the best plan for your business.",
            "sub": "Start for free and upgrade any time you want. Only pay for processing when you accept debit and credit card payments and ACH bank transfer payments. There are no fees for checks or cash.",
            "plans": [
              {
                "name": "Free",
                "price": "$0",
                "unit": "No monthly fees",
                "text": "Everything you need to get paid faster. Send unlimited invoices, estimates, contracts, and more for free.",
                "cta": "Get started",
                "listTitle": "Includes:",
                "items": [
                  "Unlimited invoicing, estimates, and contracts",
                  "Unlimited users",
                  "Unlimited customers",
                  "Access from anywhere",
                  "Send via email, SMS, or by manually sharing a link",
                  "Accept payments 24/7"
                ]
              },
              {
                "name": "Plus",
                "isNew": true,
                "price": "$20",
                "unit": "Per month",
                "text": "For growing businesses that want to streamline work and billing needs with advanced, time-saving features.",
                "cta": "Start 30-day free trial",
                "listTitle": "Includes everything in Free, plus:",
                "items": [
                  "Offer options with multi-package estimates",
                  "Auto-convert accepted estimates to invoices",
                  "Create milestone-based payment schedules",
                  "Create and reuse custom invoice templates",
                  "Add custom fields to any invoices"
                ]
              }
            ],
            "rates": [
              "2.9% + 30¢ online card payment",
              "2.6% + 10¢ in-person card payment",
              "1% (min. $1) online ACH payment"
            ]
          }
        },
      },
      {
        heading: "Equipped sales to close deals",
        text: "Gave sales teams the story and the proof to win service businesses.",
        layout: "screens",
        images: [
          { src: "/images/sq/square-sales-1.jpg", alt: "Article: 8 important invoice management tips for small businesses", caption: "Content on invoicing best practices" },
          { src: "/images/sq/square-sales-2.jpg", alt: "Caruso Engineering case study", caption: "Case studies that show business impact" },
          { src: "/images/sq/square-sales-3.jpg", alt: "Square Invoices product sheet", caption: "Product sheets for sales conversations" },
        ],
      },
    ],
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

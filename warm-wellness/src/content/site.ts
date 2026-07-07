// Change-Well — shared content model.
// Polished copy derived from change-well.com; real photo URLs hotlinked from the live site.

const IMG = "https://www.change-well.com/wp-content/uploads/sites/1128";

export const site = {
  name: "Change-Well",
  legalName: "Dr. Diann Sanford, Psy.D., LPC, LP",
  tagline: "Therapy & Psychological Testing in Plano, Texas",
  intro:
    "Compassionate, evidence-based care for individuals, couples, and families — in person in Plano and through secure telehealth across Texas.",
  phone: "972-427-2050",
  phoneHref: "tel:9724272050",
  email: "liz@change-well.com",
  fax: "512-949-4920",
  portal: "https://change-well.clientsecure.me/home",
  payment: "https://change-well.clientsecure.me/",
  social: {
    linkedin: "https://www.linkedin.com/in/drdiannsanfordchange-well/",
    facebook: "https://www.facebook.com/Change-Well-Therapy-108278717464014/",
    psychologyToday: "https://www.psychologytoday.com/profile/266155",
  },
  offices: [
    {
      label: "Main Office",
      lines: ["5048 Tennyson Parkway, Suite 110", "Plano, Texas 75024"],
      image: `${IMG}/2026/01/Front-Exterior-Angled-e1769804715438-300x182.jpg`,
      maps: "https://g.page/Change-Well?gm",
    },
    {
      label: "Branch Office",
      lines: ["13785 Research Blvd, Suite 125", "Austin, Texas 78750"],
      image: `${IMG}/2024/01/image003-e1769804747283.jpg`,
      maps: "https://maps.google.com/?q=13785+Research+Blvd+Suite+125+Austin+TX+78750",
    },
  ],
  insurance: ["BCBS", "Ambetter", "Cigna", "Baylor Scott & White", "United Healthcare", "Optum"],
  images: {
    founderPortrait: `${IMG}/2023/02/067_Sanford_-Diann2-1-e1735333690542-272x300.jpg`,
    leaves: `${IMG}/2020/02/Green-Tree-Leaves-1024x683.jpg`,
    confidentiality: `${IMG}/2020/02/5e3e430d3349b.jpg`,
    gallery: [
      `${IMG}/2026/01/04-Sunrider-JPEG-Web-150x150.jpg`,
      `${IMG}/2026/01/IMG_5874-150x150.jpeg`,
      `${IMG}/2026/01/IMG_5882-150x150.jpeg`,
      `${IMG}/2026/01/IMG_5886-150x150.jpeg`,
      `${IMG}/2026/01/06-Sunrider-JPEG-Web-150x150.jpg`,
    ],
  },
};

export type NavChild = { label: string; href: string; children?: NavChild[] };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Welcome", href: "/", children: [{ label: "What to Expect", href: "/first-visit" }] },
  {
    label: "Clinicians",
    href: "/clinicians",
    children: [
      { label: "Dr. Diann Sanford, Psy.D., LPC, LP", href: "/clinicians/dr-diann-sanford" },
      { label: "Duni Porter, MS, LPC", href: "/clinicians/duni-porter" },
      { label: "Teresa Guillory Lyons, LCSW", href: "/clinicians/teresa-lyons" },
      { label: "Bridget Jaecks, LPC-S, LCDC", href: "/clinicians/bridget-jaecks" },
      { label: "Lori Wilkerson, LCSW", href: "/clinicians/lori-wilkerson" },
      { label: "Dr. Kandi Stull, Psy.D, LP", href: "/clinicians/kandi-stull" },
    ],
  },
  {
    label: "Office Staff",
    href: "/team",
    children: [
      { label: "Liz — Client Relations", href: "/team/liz" },
      { label: "Daisy — Practice Manager", href: "/team/daisy" },
      { label: "Saloni — Clinical Assistant", href: "/team/saloni" },
    ],
  },
  {
    label: "Rates & Services",
    href: "/services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Rates", href: "/rates" },
      {
        label: "Couples Therapy",
        href: "/couples",
        children: [
          { label: "Private Intensives", href: "/couples/private-intensives" },
          { label: "Semi-Private Retreats", href: "/couples/semi-private-retreats" },
          { label: "Gottman Workshops", href: "/couples/workshops" },
        ],
      },
      { label: "Coaching", href: "/coaching" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "All Resources", href: "/resources" },
      { label: "Happiness", href: "/resources/happiness" },
      { label: "Gratitude", href: "/resources/gratitude" },
      { label: "Depression", href: "/resources/depression" },
      { label: "Trauma & PTSD", href: "/resources/trauma-ptsd" },
      { label: "Relationships", href: "/resources/relationships" },
      { label: "ADHD", href: "/resources/adhd" },
      { label: "Anxiety & Fears", href: "/resources/anxiety" },
      { label: "Heart Rate Variability", href: "/resources/hrv" },
      { label: "High Conflict Families", href: "/resources/high-conflict" },
      { label: "Parental Alienation", href: "/resources/parental-alienation" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Send a Message", href: "/contact" },
      { label: "Office Locations", href: "/contact/locations" },
      { label: "Client Portal", href: "https://change-well.clientsecure.me/home" },
    ],
  },
];

export type Clinician = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  quote: string;
  specialties: string[];
  bio: string[];
  education?: string[];
};

export const clinicians: Clinician[] = [
  {
    slug: "dr-diann-sanford",
    name: "Dr. Diann Sanford",
    credentials: "Psy.D., LPC, LP",
    role: "Founder & Clinical Psychologist",
    image: `${IMG}/2023/01/Sanford_-Diann-240x300.jpg`,
    quote:
      "With kindness and enthusiasm, we will work with you to create the changes and the life you earnestly desire — building better balance, healthier relationships, and closer connections with those you love.",
    specialties: [
      "Integrative & holistic therapy",
      "Psychological evaluations",
      "Couples & conflict resolution",
      "Heart Rate Variability (HRV)",
    ],
    bio: [
      "Dr. Diann Sanford is the owner of Change-Well, PLLC and a licensed Texas psychologist in private practice. She has served as a therapist and psychologist in group practice treating a diverse population — including soldiers and their families — and is skilled at applying a wide range of psychotherapeutic approaches, with a special interest in integrative, strengths-based, and holistic care.",
      "Her clients have presented with concerns ranging from major depression, mood and adjustment disorders, and addictions to personality disorders, spanning ages seven through senior adulthood. She has conducted clinical evaluations for children, adolescents, and adults, and has worked in both inpatient and outpatient behavioral health settings performing intakes, crisis management, and individual and group counseling.",
      "Dr. Sanford presented Heart Rate Variability (HRV) research at the Texas Psychological Association in 2019, and completed her doctoral project on the use of HRV as an intervention in the treatment of depression, anxiety, and ADHD. A former adjunct university professor and public-school educator, she brings a rich background in teaching, talent development, and performance coaching to her work.",
    ],
    education: [
      "Psy.D. in Clinical Psychology, Magna Cum Laude",
      "M.A. in Professional Counseling, Summa Cum Laude",
      "B.S. in Special Education",
      "LP License #38403 · LPC License #74944 · Texas · Practicing since 2014",
    ],
  },
  {
    slug: "duni-porter",
    name: "Duni Porter",
    credentials: "MS, LPC",
    role: "Child & Family Therapist",
    image: `${IMG}/2025/08/Bio-Duni-Porter-MS-LPC-e1755189936558.jpg`,
    quote:
      "I love working with children and their families. I work hard to honor, hear, and value each client in my care, helping them navigate complex circumstances by offering real-time solutions.",
    specialties: ["Children & adolescents", "Play & narrative therapy", "CBT & mindfulness", "Family dynamics"],
    bio: [
      "Duni holds a Master of Science from Southern Methodist University in Dallas, Texas. She is a compassionate therapist dedicated to supporting the mental and emotional well-being of children, adolescents, and adults. With a client-centered approach, Duni helps individuals navigate anxiety, depression, behavioral concerns, life transitions, and family dynamics.",
      "Drawing from evidence-based practices such as Cognitive Behavioral Therapy (CBT), play therapy, narrative therapy, mindfulness, and solution-focused interventions, Duni tailors each session to the unique needs of her clients. With younger children she often uses creative, developmentally appropriate tools to encourage emotional expression, while with adolescents and adults she focuses on building insight, resilience, and healthy relationships.",
      "Duni is known for creating a warm, nonjudgmental space where clients of all ages and backgrounds feel heard, supported, and respected — walking alongside each client on their journey toward healing and growth.",
    ],
  },
  {
    slug: "teresa-lyons",
    name: "Teresa Guillory Lyons",
    credentials: "LCSW",
    role: "Licensed Clinical Social Worker",
    image: `${IMG}/2022/02/Enlarged-Very-Cropped-TL-Pic-300x274.png`,
    quote:
      "Therapy can not only improve your overall health, body, immune system, mood, mind, and spirit — it can also profoundly influence your relationships and future outcomes.",
    specialties: ["Life transitions", "Attachment & personality", "Depression", "Grief & end-of-life"],
    bio: [
      "Teresa is a Licensed Clinical Social Worker and skilled psychotherapist who has served individuals and couples from late adolescence through senior adulthood. She has worked across many capacities in mental health — supporting adults through major life transitions, helping men with their unique challenges, and providing a nurturing therapeutic relationship for those struggling with attachment issues or personality disorders.",
      "Her experience includes serving as a family program director in a chemical-dependency program, teaching anger management, managing the therapy of adolescents in residential treatment, and working as a hospice social worker providing counseling and comfort to those with terminal diagnoses and their families.",
      "A native Texan, Teresa attended Baylor University and completed graduate school at The University of Texas at Austin School of Social Work. She remains fascinated by people and the innumerable ways they endure, recover, and thrive — and counts photography, jewelry making, art museums, and live theater among her joys.",
    ],
  },
  {
    slug: "bridget-jaecks",
    name: "Bridget Jaecks",
    credentials: "LPC-S, LCDC",
    role: "Trauma & Addiction Specialist",
    image: `${IMG}/2024/12/Bridget-Jaecks-e1735333215146.jpg`,
    quote:
      "Upon completion of therapy, clients experience resolution from adverse experiences and traumas that previously had impeded their daily living.",
    specialties: ["EMDR (Level II)", "Trauma & grief", "Addiction recovery", "Eating disorders"],
    bio: [
      "Bridget has 27 years of experience across treatment centers, outpatient settings, and public and charter schools. She is committed to supporting adolescents and adults as they recover from addictions, eating disorders, trauma, grief, depression, and anxiety.",
      "She is a Level II trained EMDR specialist (Eye Movement Desensitization and Reprocessing), a psychotherapy technique that helps people heal from trauma and distressing experiences by changing how difficult memories are stored in the brain — reducing emotional turmoil and the vividness of the trauma.",
      "As a Licensed Chemical Dependency Counselor (LCDC), Bridget also treats individuals and families struggling with addiction. Her extensive education, training, and experience give her a deep understanding of how addiction affects a person physically, emotionally, and relationally.",
    ],
  },
  {
    slug: "lori-wilkerson",
    name: "Lori Wilkerson",
    credentials: "LCSW",
    role: "Licensed Clinical Social Worker",
    image: `${IMG}/2022/11/LW_pic1-e1673481869513-268x300.jpg`,
    quote:
      "Therapy can offer insights, problem-solving skills, support, and solutions as you face life's challenges — enabling you to see your circumstances as a personal-growth opportunity instead of a burden.",
    specialties: ["Individuals & couples", "Trauma & anxiety", "Parenting & adoption", "Self-esteem & boundaries"],
    bio: [
      "Lori is a Licensed Clinical Social Worker and skilled psychotherapist who has served individuals, couples, and families from adolescence through senior adulthood. With 25 years of counseling experience, she has worked across depression, trauma, anxiety, crisis resolution, and adjusting to major transitions across the lifespan.",
      "Her areas of focus include parenting, adoption, infertility, and crisis pregnancy; personal concerns around self-esteem, boundaries, identity, and self-care; relationship issues; and helping women with their unique challenges. She has used TBRI (Trust-Based Relational Intervention) methods with children and adolescents who have experienced trauma, and served as a hospice social worker.",
      "Born and raised in west Texas, Lori attended Baylor University and completed graduate school at The University of Texas at Arlington School of Social Work.",
    ],
  },
  {
    slug: "kandi-stull",
    name: "Dr. Kandi Stull",
    credentials: "Psy.D, LP",
    role: "Clinical Psychologist",
    image: `${IMG}/2024/01/KS-Headshot-300x300.png`,
    quote:
      "I see each client as an individual, with distinct value and unique gifts. I will meet you right where you are, face challenges with you, and help you break unhealthy patterns to achieve true change.",
    specialties: ["Psychological assessment", "ADHD & autism", "Life & career transitions", "Mood disorders"],
    bio: [
      "Dr. Kandi Stull has specific training and interests in supporting those living with Attention-Deficit/Hyperactivity Disorder (ADHD) and those in transition. She is a terrific fit for anyone navigating their life's path — determining or changing a career, adding a new role such as spouse, parent, or empty-nester, or experiencing another major life transition.",
      "She completed her Doctor of Psychology (Psy.D.) at California Southern University and her Master's in Clinical Mental Health Counseling at Texas A&M University-Commerce. Dr. Stull has conducted numerous psychological assessments for clients ranging from young children through older adults, addressing autism, ADHD, mood and depressive disorders, and trauma.",
      "Additionally, Dr. Stull teaches at the graduate level as an adjunct professor at Grand Canyon University.",
    ],
  },
];

export type Staff = { slug: string; name: string; role: string; email?: string; image: string; bio: string[] };

export const staff: Staff[] = [
  {
    slug: "liz",
    name: "Liz",
    role: "Client Relations Administrator",
    email: "liz@change-well.com",
    image: `${IMG}/2025/05/4.11-Liz-Rohly0050-Edit-scaled-e1746403824177-300x264.jpeg`,
    bio: [
      "We are delighted to have Liz serving as our Client Relations Administrator. Liz is often the first point of contact for our valued clients and happily serves as a trusted guide — helping clients navigate our services, onboarding and scheduling, and transitions between providers.",
      "Behind the scenes, she works diligently to keep things running smoothly for our providers and Change-Well overall. Outside of work she enjoys trips to the local library with her son, exploring charming small towns, films at the movie theatre, and perfecting her homemade bread.",
    ],
  },
  {
    slug: "daisy",
    name: "Daisy",
    role: "Practice Manager",
    email: "daisy@change-well.com",
    image: `${IMG}/2025/05/4.11-Liz-Rohly0017-Edit-scaled-e1746403603403-300x243.jpg`,
    bio: [
      "We are most fortunate to have Daisy as our Practice Manager. She has several years of experience working in mental-health clinics and a deep understanding of what it takes to oversee the many aspects of a successful private practice. Her strong leadership, compassionate nature, and commitment to excellence are vital to Change-Well.",
      "Raised in the heart of Central Texas, Daisy embodies the warm, welcoming spirit of the region. She and her husband share a love for their cherished dogs, and in her free time she enjoys exploring quaint coffee shops and personal growth and self-discovery.",
    ],
  },
  {
    slug: "saloni",
    name: "Saloni",
    role: "Clinical Assistant",
    email: "saloni@change-well.com",
    image: `${IMG}/2025/08/Cropped-Pic-of-Saloni-257x300.jpg`,
    bio: [
      "Saloni is a psychology student with a deep passion for understanding human behavior and mental processes. She plans to contribute to the field through both clinical practice and scholarly research, with the ultimate aim of making a meaningful difference in people's lives.",
      "We are happy to have her working as a Clinical Assistant.",
    ],
  },
];

export type Service = { title: string; body: string; icon: string; href?: string };

export const services: Service[] = [
  {
    title: "Individual Therapy",
    icon: "heart",
    body:
      "Evidence-based, trauma-informed support for anxiety, depression, trauma, life transitions, and personal growth — tailored to each client and available in person or by secure telehealth.",
    href: "/services",
  },
  {
    title: "Couples Counseling",
    icon: "users",
    body:
      "Help for communication challenges, recurring conflict, trust concerns, and life changes — strengthening connection and building healthier patterns together.",
    href: "/couples",
  },
  {
    title: "Psychological Evaluation",
    icon: "clipboard",
    body:
      "Comprehensive testing and diagnostic clarification for ADHD, autism, learning differences, mood and personality concerns — with clear, actionable feedback.",
    href: "/services",
  },
  {
    title: "Family Counseling",
    icon: "home",
    body:
      "Support for families navigating communication challenges, conflict, and transitions — strengthening understanding and healthier dynamics within the family system.",
    href: "/services",
  },
];

export type AgendaPart = { title: string; note?: string; points: string[] };
export type CouplesAgenda = {
  intro: string;
  inAdvance: string[];
  partsIntro: string;
  parts: AgendaPart[];
  lunchNote?: string;
  closing: string;
};

export type Couples = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  price: string;
  duration: string;
  summary: string;
  quote?: string;
  details: string[];
  agenda?: CouplesAgenda;
  guarantee?: string;
  register?: string;
  registerNote?: string;
};

export const couples: Couples[] = [
  {
    slug: "private-intensives",
    title: "Customized Couples Therapy Intensives",
    tagline: "Especially designed just for you",
    image: `${IMG}/2020/02/Couples-Field-Crop-300x193.jpg`,
    price: "From $1,600",
    duration: "6–8 hour private intensive",
    summary:
      "A personalized intensive tailored to your specific needs and focused on creating empowering, lasting transformation. Couples therapy intensives provide focused, extended sessions that allow partners to work more deeply than traditional weekly therapy. Ask about our money-back guarantee.",
    quote:
      "Individuals are asked to take a hard look inward, and not come to therapy to fix their partner. There are no losers in my couples therapy — I work hard to establish a win-win, where each individual has a clear voice and all goals are mutually agreed upon.",
    details: [
      "Crisis / Critical — for couples facing infidelity, addiction, or other complex challenges. After an initial assessment we build a plan that fits your situation, which may include a few individual sessions for added support.",
      "Moderate — for couples feeling stuck in one or two key areas. A single intensive is often a strong starting point, with a follow-up available if helpful.",
      "Enrichment — for couples in a good place who want to feel more connected and aligned, and to explore new ways of growing together.",
    ],
    agenda: {
      intro:
        "As part of the intensive experience, you and your partner will move through a structured process designed to support meaningful progress and lasting change.",
      inAdvance: [
        "Complete confidential assessments and intake paperwork",
        "Begin with a shared commitment to your relationship and the intensive process",
      ],
      partsIntro:
        "Therapeutic sessions consist of four parts, based on the Gottman Method and thoughtfully tailored to your unique needs:",
      parts: [
        {
          title: "Foundational Skills",
          points: [
            "Establish a strong foundation for individual and relationship health",
            "Build communication skills by working through real situations in real time",
            "Begin developing new, healthier ways of relating to one another",
          ],
        },
        {
          title: "Heavy Lifting",
          note: "More in-depth in private intensives than in semi-private retreats.",
          points: [
            "Address areas where you feel stuck",
            "Work through patterns and begin the process of repair, forgiveness, and letting go",
          ],
        },
        {
          title: "Action",
          points: [
            "Create a clear and mutually agreed-upon path forward",
            "Identify supports, obstacles, and resources needed",
            "Define specific behaviors and steps to continue progress",
          ],
        },
        {
          title: "Intentional Restoration",
          points: [
            "Strengthen commitment to one another and the relationship",
            "Build a shared vision with new behaviors and a deeper connection",
            "Make space for positive experiences, reflection, and growth",
          ],
        },
      ],
      lunchNote: "A one-hour lunch break is typically included (usually after the Heavy Lifting portion).",
      closing:
        "Before leaving, we will develop a plan together to help you maintain your progress, and you will be invited to complete a brief post-assessment.",
    },
    guarantee:
      "I stand behind our work; therefore at the end of our intensive or retreat, if you are not satisfied with the skills taught and acquired, I will either refund the total price of your services for that day, or only charge you what you consider the services performed that day are worth.",
    register: site.payment,
  },
  {
    slug: "semi-private-retreats",
    title: "Semi-Private Couples Retreats",
    tagline: "Working through stuck points, together",
    image: `${IMG}/2023/01/Lounge-1.jpg`,
    price: "$400–$600",
    duration: "6-hour retreat · 2–3 couples",
    summary:
      "A six-hour experience alongside a small number of other couples working to move beyond destructive patterns and develop healthier, more supportive ways of connecting. Structured therapeutic guidance and skill-building, with dedicated breakout time for you and your partner. Ask about our money-back guarantee.",
    quote:
      "Often much can be gained by working in small groups with another couple or two facing similar circumstances. A common synergy develops and all in attendance fly further and faster together.",
    details: [
      "For couples at the Moderate level — focused support to work through challenges and begin making meaningful progress.",
      "For couples at the Enrichment level — a supportive space to deepen connection and improve alignment in areas like communication and family life.",
      "Includes a confidential assessment in advance, structured group work, and private breakout time with guidance throughout.",
    ],
    agenda: {
      intro:
        "A semi-private retreat offers a different experience than a private intensive. Instead of working one-on-one the entire time, you'll be alongside a small group of couples, which allows for shared learning and perspective. The work remains structured and meaningful, with dedicated breakout time for you and your partner to focus privately while receiving guidance and support.",
      inAdvance: [
        "Complete confidential assessments and intake paperwork",
        "Begin with a shared commitment to your relationship and the retreat experience",
      ],
      partsIntro:
        "Therapeutic sessions are guided by the Gottman Method and structured to support meaningful progress in four parts:",
      parts: [
        {
          title: "Foundational Skills",
          points: [
            "Build a strong foundation for individual and relationship health",
            "Develop communication skills using real situations in real time",
            "Begin creating new, healthier ways of relating",
          ],
        },
        {
          title: "Heavy Lifting",
          note: "Shorter than in a private intensive.",
          points: [
            "Address areas where you feel stuck",
            "Begin working through patterns, repair, and letting go",
            "Breakout time to apply skills privately with your partner",
          ],
        },
        {
          title: "Action",
          points: [
            "Create a clear and mutually agreed-upon path forward",
            "Identify supports, obstacles, and helpful resources",
            "Breakout time to practice and apply next steps",
          ],
        },
        {
          title: "Intentional Restoration",
          points: [
            "Commit to new behaviors and patterns",
            "Build a shared sense of direction and connection",
            "Create space for reflection, growth, and positive experiences",
          ],
        },
      ],
      lunchNote: "A one-hour lunch break is typically included (usually after the Heavy Lifting portion).",
      closing:
        "Before leaving, you and your partner will develop a plan to help maintain your progress, and you will be invited to complete a brief post-assessment.",
    },
    guarantee:
      "I stand behind our work; therefore at the end of our intensive or retreat, if you are not satisfied with the skills taught and acquired, I will either refund the total price of your services for that day, or only charge you what you consider the services performed that day are worth.",
    register: site.payment,
    registerNote: "Pricing varies depending on whether two or three couples attend.",
  },
  {
    slug: "workshops",
    title: "Gottman Foundational Couples Workshops",
    tagline: "The research-backed Gottman Method",
    image: `${IMG}/2023/01/lobby-with-people-scaled-e1673482843577.jpg`,
    price: "$100–$300",
    duration: "3-hour workshops · varying topics",
    summary:
      "Three-hour workshops focused on foundational relationship skills grounded in the research-supported Gottman Method — practical tools to improve communication, manage conflict, and strengthen emotional connection.",
    quote:
      "These workshops focus on the development of strong foundational skills that are the basis of the heavily researched Gottman Method. These practices have proven highly effective for cultivating relationships that thrive.",
    details: [
      "The Gottman Method is a research-based approach developed through decades of studying real relationships.",
      "Rather than avoiding challenges, couples learn practical tools to navigate them — creating a stronger, more resilient relationship over time.",
      "Before leaving, a mutually agreed-upon plan to maintain your progress is developed, along with a short post-assessment of services.",
    ],
    register: site.payment,
    registerNote: "Pricing varies according to the workshop and topic.",
  },
];

export const coaching = {
  intro:
    "Change-Well offers specialized coaching designed to support personal growth, performance development, and conflict resolution — building practical skills that improve decision-making, communication, and resilience in personal and professional settings.",
  coaches: [
    {
      name: "Dr. Kyle Stull, MA, DHSc",
      role: "Performance Coach",
      image: `${IMG}/2025/10/Dr.-Kyle-Stull-Performance-Coach--300x300.jpeg`,
      price: "Introductory pricing from $90 / session",
      priceHref: "/coaching/pricing",
      bio:
        "Dr. Kyle Stull is a Doctor of Health Science with a concentration in behavior, bringing more than twenty years of experience in athletic performance, injury prevention, and rehabilitation. Recognizing that confidence — not physical ability — often decides performance and recovery, he expanded into the psychology of sport, earning a postgraduate certificate in sports psychology coaching. He partners with clients to strengthen focus, resilience, and overall well-being.",
    },
    {
      name: "Dr. Diann Sanford, Psy.D, LPC, LP",
      role: "Conflict Resolution Coach",
      image: `${IMG}/2023/01/Sanford_-Diann.jpg`,
      price: "$200 / hour · most cases 3–5 hours",
      priceHref: "/coaching",
      bio:
        "Dr. Sanford has served those seeking conflict resolution in complex personal, family, and business matters for many years — often referred, and sometimes ordered, by the court for difficult parental-alienation cases. She has assisted attorneys, medical professionals, business owners, pastors, and corporate leaders toward more effective outcomes. Her methods are direct, powerful, collaborative, and compassionate.",
    },
  ],
  pricing: {
    heading: "Special 2025 Introductory Pricing",
    intro:
      "Start your journey toward greater confidence, focus, and resilience with our limited-time introductory offers — for student athletes, adult competitors, and teams.",
    rows: [
      { type: "Students (13–19)", standard: "$150 / 50 min", intro: "$90 / 50 min", pkg: "Confidence Builder — 6 × 30 min", pkgRate: "$450 (save $90)" },
      { type: "Students (Hybrid)", standard: "$150 / 50 min", intro: "$100 / 50 min", pkg: "5 online + 1 in-person (30 min)", pkgRate: "$500 (save $100)" },
      { type: "Adults (20+)", standard: "$150 / 50 min", intro: "$120 / 50 min", pkg: "Performance Reset — 4 × 50 min", pkgRate: "$420 (save $180)" },
      { type: "Adults (Hybrid)", standard: "$150 / 50 min", intro: "$130 / 50 min", pkg: "Hybrid Performance Reset", pkgRate: "Contact for details" },
    ],
  },
};

export const rates = {
  intro: "In-person and online therapy and psychological testing for individuals and physicians.",
  inNetwork: site.insurance,
  note: "With integrative, solution-focused therapies, most clients see measurable improvement in 5 sessions and significant gains after 10.",
  items: [
    { label: "Psychological Reports — testing, evaluations & diagnosing", price: "$1,075" },
    { label: "Individual, Couple, or Family Therapy — Master's-level clinician", price: "$170" },
    { label: "Individual, Couple, or Family Therapy — Doctorate-level clinician", price: "$225" },
    { label: "Private Saturday Couples Intensive (8 hours, online or in person)", price: "$1,600" },
    { label: "Semi-Private Retreat (6 hours, 2–3 couples)", price: "$400–$600" },
    { label: "Couples Workshops (varying topics, price & time)", price: "$100–$300" },
    { label: "Performance Coaching — introductory", price: "From $90" },
    { label: "Conflict Resolution Coaching", price: "$200 / hr" },
  ],
  cancellation:
    "Please notify our office by phone or email at least 24 hours in advance if you are unable to keep your appointment, to avoid being charged the full session cost.",
};

export type ArticleLink = { label: string; href: string };
export type ArticleSection = { heading?: string; body: string[] };
export type Article = {
  slug: string;
  title: string;
  category: string;
  icon: string;
  excerpt: string;
  body: string[];
  sections?: ArticleSection[];
  quote?: string;
  video?: { title: string; youtube: string };
  links?: ArticleLink[];
  references?: string[];
};

export const articles: Article[] = [
  {
    slug: "happiness",
    title: "The Science of Happiness",
    category: "Well-Being",
    icon: "sun",
    excerpt:
      "Grateful people are happy people. Happiness is not the absence of negative feelings — it grows from appreciation for what we have now.",
    body: [
      "It doesn't take a whole new routine to add a dose of happiness to your day — just a little self-awareness. The first key is gratitude: research shows that grateful people are happy people, and happiness is not the absence of negative feelings but a focus on the present and an appreciation for what we have now. Take a moment each day to notice your world with gratitude, start a gratitude journal, or walk in nature paying attention to the gifts around you.",
      "The second key is creativity. Simply engaging in creative thinking — a hobby, a craft, or working with new and recycled materials — enhances cognitive flexibility and problem-solving. A New Zealand study published in The Journal of Positive Psychology found that everyday creative activity can trigger an “upward spiral” of well-being. Make space to create, even just for the sake of it.",
      "The third key is connection. Feeling that you belong and are close to others is a core psychological need — the pleasures of social life register in the brain much the way physical pleasure does. Nurture a friendship that matters to you, send a card, share a meal, smile at a stranger, or really listen when someone tells you how their day is going.",
    ],
    quote: "Practicing an art — no matter how well or badly — is a way to make your soul grow. So do it. — Kurt Vonnegut",
    video: { title: "Mysteries of the Heart — HeartMath Institute", youtube: "Kyfm5_LLxow" },
    links: [
      { label: "Take the Gratitude Quiz — Greater Good Science Center, UC Berkeley", href: "https://greatergood.berkeley.edu/quizzes/take_quiz/gratitude" },
      { label: "101 creative habits to explore", href: "http://www.blacksburgbelle.com/2014/01/101-creative-habits-to-explore-add-more-creativity-to-your-daily-life/" },
      { label: "TherapyTribe — a free online support community", href: "https://support.therapytribe.com/" },
    ],
  },
  {
    slug: "gratitude",
    title: "The Effects of Gratitude",
    category: "Well-Being",
    icon: "sparkles",
    excerpt:
      "A simple gratitude-writing practice produces measurable changes in gratefulness and in the brain's sensitivity to gratitude over weeks and months.",
    body: [
      "In this article Dr. Sanford comments on “The effects of gratitude expression on neural activity” (Kini, Wong, et al., 2016, NeuroImage). Gratitude correlates with activity in a specific set of brain regions, and a simple gratitude-writing intervention produces measurable changes in both gratefulness and the brain's neural sensitivity to gratitude over the course of weeks to months.",
      "In the study, participants in the gratitude interventions reported significantly better mental health than those in expressive-writing and therapy-as-usual groups, with improved outcomes lasting from roughly 4 to 12 weeks. Lower use of negative-emotion words in participants' writing was itself indicative of better mental health.",
      "This has strong implications for therapy. When working with anxiety and depression, a gratitude journal, modeling positive words and behaviors, and teaching gratitude exercises can result in significant, lasting positive outcomes — and even brief expressions of gratitude show profound and durable effects on neural activity, especially where the relationship of self to others is concerned.",
    ],
    quote: "Even brief expressions of gratitude show evidence of profound and lasting effects on neural activity and sensitivity, especially when considering the relationship of self to others. — Dr. Diann Sanford, Psy.D",
    links: [
      { label: "Take the Gratitude Quiz — Greater Good Science Center, UC Berkeley", href: "https://greatergood.berkeley.edu/quizzes/take_quiz/gratitude" },
    ],
    references: [
      "Kini, P., Wong, J., McInnis, S., Gabana, N., & Brown, J. W. (2016). The effects of gratitude expression on neural activity. NeuroImage, 128, 1–10.",
    ],
  },
  {
    slug: "depression",
    title: "Cognitive Behavioral Therapy for Depression",
    category: "Depression",
    icon: "brain",
    excerpt:
      "CBT is a psychoeducational, skills-based approach focused on thinking and behavior — identifying the faulty thinking that drives emotional and behavioral difficulty.",
    body: [
      "Cognitive Behavioral Therapy is primarily focused on cognition and behavior. Thinking, deciding, questioning, doing, and re-deciding are essential. This psychoeducational model emphasizes a learning process of gaining and practicing new skills, and much focus is given to the faulty thinking that leads to emotional and behavioral disturbance. It is concise, directive, collaborative, present-focused, and results-oriented.",
      "Much of this school of thought grew from the work of Aaron Beck, who practiced psychoanalysis in the 1960s while researching depression at the University of Pennsylvania. To his surprise, his findings did not support psychoanalytic concepts; instead he found that depressed individuals generated a continuous cascade of negative thoughts. He developed Cognitive Therapy (now often called CBT) and created widely used instruments including the Beck Depression Inventory, the Beck Hopelessness Scale, and the Beck Scale for Suicidal Ideation.",
      "Beck described a “cognitive triad” in depression: a negative view of oneself, a negative interpretation of the world, and gloomy expectations about the future. He also introduced the negative self-schema — a damaging set of beliefs about oneself, sometimes rooted in early loss, criticism, or trauma — that leads people to dwell on the negative and make predictable errors of logic such as over-generalization, magnification, and personalization.",
      "In practice, CBT identifies specific, measurable goals and moves directly into the areas causing the most difficulty through a collaborative client–therapist relationship. Techniques include Socratic dialogue, disputing irrational beliefs, imagery, relaxation and mindfulness exercises, homework, and cognitive restructuring. Rather than dwelling on the past, therapy focuses on what is presently fueling faulty thinking — helping clients reframe self-defeating cognitions and build confidence for the future.",
    ],
    sections: [
      {
        heading: "Introduction to Cognitive Behavioral Therapy",
        body: [
          "Cognitive Behavioral Therapy is primarily focused on cognition and behavior. Thinking, deciding, questioning, doing, and re-deciding are essential. This psychoeducational model emphasizes a learning process that involves gaining and practicing new skills, and much focus is given to the faulty thinking that leads to emotional and behavioral disturbance. The goal is to learn new ways of thinking, and therefore effective ways of reframing and adjusting to difficulties. Concise, directive, collaborative, present-focused, psychoeducational, and proven results are all vital components of CBT.",
          "Albert Ellis, Aaron Beck, Judith Beck, and Donald Meichenbaum are all major contributors to this approach (Corey, 2012). Although the past may contribute to a client's problems, the focus of CBT is to find what is presently fueling the faulty ways of thinking — that faulty belief system being the central cause of a client's issues. Therapy identifies specific, measurable goals and moves directly into the areas posing the largest problems through a cooperative client–therapist relationship, with exercises, homework, and readings assigned to prompt quicker results.",
        ],
      },
      {
        heading: "Interventions of CBT",
        body: [
          "CBT uses a variety of cognitive, emotive, and behavioral techniques, individualized for each client — role-playing, imagery (visualization), self-instruction, and relaxation (mindful) exercises, along with collaborative reflection and disputing irrational beliefs. Socratic conversations, homework, investigating assumptions, keeping records, making alternate interpretations, stress-inoculation training, and changing thinking patterns are other common techniques.",
          "One contribution is decatastrophizing (Clark & Beck, 2010): the therapist encourages the client to face the imagined catastrophe and its associated anxiety, asking, 'What is the worst thing that can happen? What is so bad about that?' Together they problem-solve, develop a best-case reframe, and settle on a more likely middle-of-the-road outcome — building an action plan the client can return to whenever catastrophizing begins, which strengthens self-efficacy and confidence for future problems.",
        ],
      },
      {
        heading: "Aaron Beck: personal & professional life",
        body: [
          "Aaron T. Beck was born on July 18, 1921, in Rhode Island, the youngest of five children. He graduated from Brown University in 1942 and earned his medical degree at Yale in 1946. In the 1960s, while practicing psychoanalysis and researching depression at the University of Pennsylvania, he was surprised to find his research did not support psychoanalytic concepts of depression; instead, he discovered that depressed individuals generated a continuous cascade of negative thoughts, and from this he developed Cognitive Therapy (also known as CBT).",
          "Beck developed the Beck Depression Inventory, the Beck Hopelessness Scale, and the Beck Scale for Suicidal Ideation, and founded the Beck Institute with his daughter, Judith Beck. The Beck Depression Inventory (now the BDI-II, aligned with the DSM) contains 21 items, takes only a few minutes to complete, and has high validity. He authored many books, and in 1997 proposed three factors that fuel depression: negative self-schemas, the cognitive triad, and errors in logic.",
        ],
      },
      {
        heading: "Beck's methodology",
        body: [
          "Beck believed individuals are not passive victims of their past but are actively moving toward goals important to them, and that distress arises when those goals are threatened. He identified four levels of thought: automatic thoughts, intermediate beliefs, core beliefs, and schemas. Automatic thoughts are the immediate self-talk that connects an emotion to a situation; core beliefs begin in childhood and reflect a person's view of themselves, others, and the future ('I am capable,' 'I am a failure,' 'I am not lovable').",
          "Schemas integrate these core beliefs within the mind and involve emotions, thoughts, and actions — the mental filters used to perceive the world and shape our expectations. Because information is processed to fit our existing schemas, cognitive distortions occur as we unconsciously protect them. In counseling, clients begin to question their core beliefs, consider changing them, and reject the idea that they are absolute truth.",
        ],
      },
      {
        heading: "The cognitive triad, self-schemas & errors of logic",
        body: [
          "Beck's cognitive triad describes a pattern in depression with three components: a negative view of the self (blaming troubles on personal inadequacy), a negative interpretation of the personal world (selective abstraction — focusing on facts that fit a gloomy worldview), and gloomy projections about the future (expecting present difficulties to last for life, so that even success is met with the expectation of failure next time).",
          "The negative self-schema is a damaging set of beliefs about oneself, sometimes rooted in early loss, criticism, over-protection, neglect, abuse, or bullying. Individuals with these schemas dwell on the negative and ignore relevant positive information, making logical errors such as arbitrary inference, selective abstraction, magnification, minimization, over-generalization, and personalization. Empirical research through the 1980s and 1990s has been consistent with Beck's models.",
        ],
      },
      {
        heading: "Supporting research",
        body: [
          "CBT has been extensively used to treat stress management, depression, anxiety, relationship issues, substance abuse, assertion training, eating disorders, panic attacks, performance anxiety, and social phobias (Corey, 2012). Several randomized controlled trials have shown it to be highly effective for major depressive disorder across individuals, adolescents, adults, and groups (Kress & Paylo, 2015), and it has helped school children facing academic concerns and trauma.",
          "Researchers increasingly connect cognition, the body, and health (Karren, Hafen, Smith, & Frandsen, 2006). Evidence suggests certain negative psychological states brought on by adversity can weaken the immune system, and the repression of emotions has been closely linked with cancer risk (Brigham, 1977). Many CBT interventions build a client's sense of personal control through meditative breathing, progressive muscle relaxation, mindfulness, imagery, quiet contemplation, forgiveness, and support during illness.",
        ],
      },
      {
        heading: "Applying CBT in practice",
        body: [
          "Research underscores the importance of the view of the self and the view of the future in depression: a thought such as 'I am not lovable' becomes 'no one will ever love me,' projected far into the future so that self and future are linked. These strict negative beliefs directly and indirectly impact mood, inner world, and outlook (Cervone & Pervin, 2013).",
          "True to CBT, Dr. Sanford does not dwell heavily on the past unless it directly threatens the present. Her approach holds that personality is not fixed — it is influenced by experience, environment, and others, and can therefore be systematically altered (Corey, 2012). Socratic dialogue, self-evaluative checklists, skill reinforcement, modeling, rehearsing, coaching, cognitive restructuring, problem-solving, social-skills and assertiveness training, stress management, and mindfulness are all hallmarks of her sessions, tailored holistically to each client's circumstances.",
        ],
      },
    ],
    quote: "Thoughts such as “I am not loveable,” “I am not good enough,” “I am a failure” are indicative of the depressed individual's dysfunctional thought patterns. Projected far into the future, they link the self and future together in gloom — directly and indirectly impacting daily mood, one's inner world, and future. — Dr. Diann Sanford, Psy.D",
    links: [
      { label: "Aaron Beck & Cognitive Therapy — Simply Psychology", href: "https://www.simplypsychology.org/cognitive-therapy.html" },
    ],
    references: [
      "Beck, J. S. (1995). Cognitive Therapy: Basics and Beyond. New York, NY: Guilford Press.",
      "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. New York, NY: The Guilford Press.",
      "Corey, G. (2012). The Theory and Practice of Counseling and Psychotherapy (9th ed.). Brooks/Cole, Cengage Learning.",
      "Henderson, D. A., & Thompson, C. L. (2011). Counseling Children (8th ed.). Belmont, CA: Cengage Learning.",
    ],
  },
  {
    slug: "trauma-ptsd",
    title: "PTSD & Complementary Treatments",
    category: "Trauma",
    icon: "shield",
    excerpt:
      "Traditional trauma treatment can miss the body. Mindfulness-based approaches help address how trauma is held in the body and restore present-moment awareness.",
    body: [
      "Research on PTSD (West, Liang, & Spinazzola, 2016) with adult women who suffered chronic child abuse shows that traditional trauma treatments are often unsuccessful at addressing somatic complaints and the loss of attentiveness to one's own physical and emotional being in the present moment. Themes of gratitude, compassion, relatedness, acceptance, centeredness, and empowerment were identified as helpful in reducing PTSD symptoms and improving the capacity to recognize, tolerate, and use one's internal states.",
      "Techniques that increase mindfulness and present-moment awareness — such as Trauma-Sensitive Yoga — have been found to help address the way trauma is held in the body. Hatha Yoga may be especially advantageous, developing a heightened awareness that builds recognition and tolerance of aroused physical states and lessens avoidance, offering a complementary path alongside talk therapy.",
      "Mindfulness could be immensely helpful integrated into the medical model. The very act of receiving medical care can raise anxiety, blood pressure, and cortisol, interfering with healing. Meditation with themes of gratitude and forgiveness lowers the body's stress response and triggers positive chemicals such as oxytocin, increasing serotonin function, one's sense of control, and self-esteem — a path toward feelings of safety and comfort for those living with PTSD.",
    ],
    quote: "Techniques that increase mindfulness intentional states help address the way trauma is held in the body. Hatha Yoga may be most advantageous, as it develops a heightened awareness with the capacity to build recognition and tolerance of aroused physical states, and lessen avoidance. — Dr. Diann Sanford, Psy.D",
    references: [
      "West, J., Liang, B., & Spinazzola, J. (2016). Trauma-Sensitive Yoga as a Complementary Treatment for Posttraumatic Stress Disorder: A Qualitative Descriptive Analysis. International Journal of Stress Management, 24, 173–195.",
      "Karren, K. J., Smith, N. L., & Gordon, K. J. (2014). Mind/Body Health (5th ed.). New York, NY: Pearson Education, Inc.",
    ],
  },
  {
    slug: "relationships",
    title: "Research on Love & Happy Couples",
    category: "Relationships",
    icon: "heart",
    excerpt:
      "Love is a dynamic, ongoing process — not a destination. Happier couples are more supportive, laugh more often, and hold back needlessly negative comments.",
    body: [
      "Research shows that love between couples is a dynamic, ongoing process (Compton & Hoffman, 2013) — not a destination one arrives at and no longer has to attend to. Stress, personal growth, and life events all influence love and satisfaction over time. Confidence, integrity, gentleness, and warmth are highly sought-after; happier couples are more supportive, laugh more often, and withhold comments that might land as negative.",
      "Both partners tend to name the same qualities as most important to a strong marriage: liking your spouse, believing in long-term commitment, treating your spouse as your best friend, agreeing on goals, wanting the relationship to succeed, holding it as sacred, and finding your partner more interesting over time. Positive “romantic illusions” — continuing to idealize a partner's good qualities — are central to lasting relationships.",
      "The Gottmans found that happy couples communicate ongoing admiration and interest, stay open to a partner's “bids” for attention, and build shared “love maps” of each other's inner world. They also identified patterns that corrode intimacy — criticism, contempt, defensiveness, and stonewalling — the “four horsemen.” It is often not our differences that reduce intimacy, but the way we view and handle them.",
      "There is a clear link between emotional well-being and physical health: positive emotions and good emotional control support the immune system and healthier heart rate variability, while chronic negative emotion predicts poorer health. Turning toward your partner and showing lasting appreciation isn't only good for the relationship — it's good for the body.",
    ],
    sections: [
      {
        heading: "Research on love",
        body: [
          "Love between couples is a dynamic, ongoing process (Compton & Hoffman, 2013) — not a destination reached and then ignored. Confidence, integrity, gentleness, warmth, and the ability to love are highly sought-after traits in a partner, while nervous habits, worry, and self-absorption are the opposite. Happier couples are more supportive, laugh more often, and hold back needlessly negative comments.",
          "Both partners tend to name the same qualities as most important to a successful marriage: liking one's spouse, believing in long-term commitment, treating the spouse as a best friend, agreeing on goals, wanting the relationship to succeed, holding marriage as sacred, and finding the spouse more interesting over time. Positive 'romantic illusions' — continuing to idealize a partner's good qualities — are central to lasting relationships. Sternberg found love to be multidimensional, consisting of passion, intimacy, and commitment; over time commitment typically grows while passion softens, yet loving relationships can thrive across the entire lifespan.",
        ],
      },
      {
        heading: "Vital factors to sustain romantic intimacy",
        body: [
          "Drawing on the Gottman Institute's research, the most important factor in a love relationship is to be loving in manner, tone, and attitude. The Gottmans teach couples to stay open to each other's 'bids' for attention, to spend time each day in appreciation, and to truly know the desires of a partner's heart ('love maps') — intimate acts built through honesty and authenticity.",
          "Acting in the opposite way — criticizing, correcting harshly, disregarding, minimizing, or devaluing — has disastrous effects that reduce or eliminate positive intimacy. Care taken in how we greet one another and handle daily stresses keeps most events from 'spilling over' onto a partner, and when a loving tone can't be maintained, partners agree to pause and table the discussion. Meditation, mindfulness, spiritual interests, exercise, nutrition, and balance all help couples sustain these loving practices.",
        ],
      },
      {
        heading: "The impact of culture & differences",
        body: [
          "Through their research, the Gottmans identified communication patterns that harm relationships: a 'harsh start-up' leads to negative reciprocity, and demand–withdraw patterns of criticism, contempt, defensiveness, and withdrawal are so damaging they were labeled the 'four horsemen.' Differences in culture, race, religion, politics, economics, personality, and the decision to have children are all significant — but they can be negotiated and overcome.",
          "These differences can even make a partner more interesting, offering a chance to keep learning about one another and deepen emotional intimacy. Strong commitments to loyalty, courage, justice, and generosity help couples meet these challenges, and prioritizing personal growth lets each partner examine their own expectations, needs, and unconscious issues (Bradberry & Greaves, 2009). It is not the differences themselves that reduce intimacy — it is how they are viewed and handled.",
        ],
      },
      {
        heading: "Emotional well-being & injurious emotions",
        body: [
          "Research clearly shows a link between psychological factors and well-being: psychological states affect the immune system in measurable ways (Compton & Hoffman, 2013). Individuals who report more positive feelings tend to be healthier, show more energy, exhibit healthier behaviors, and cope better.",
          "Meditation, yoga, positive self-talk, and feedback create higher psychophysiological coherence and better self-regulation of emotions, which translates into better heart rate variability (HRV) and, in turn, more positive emotions and connectedness. Poor emotional control has the opposite effect, and the presence of negative emotions such as depression and anxiety predicts poorer overall health (Karren et al., 2014).",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The psychological research on love is encouraging: true romantic connectedness is obtainable and can be sustained across the entire lifespan despite cultural and other challenges. It is not money or status that achieves emotional intimacy — it is our openness, our ability to 'turn toward' our partner, and our capacity to show lasting appreciation and interest over the years. By decreasing negative emotions and increasing positive interactions, we improve not only our relationships but our overall well-being, physical health, and immune system.",
        ],
      },
    ],
    quote: "It is our openness, our ability to “turn towards our partner,” and our capacity to show lasting appreciation and interest over the years that prove to be the defining element in love and happy couples. — Dr. Diann Sanford, Psy.D, LPC",
    references: [
      "Compton, W. C., & Hoffman, E. (2013). Positive Psychology (2nd ed.). Belmont, CA: Wadsworth, Cengage Learning.",
      "Karren, K. J., Smith, N. L., & Gordon, K. J. (2014). Mind/Body Health (5th ed.). New York, NY: Pearson Education, Inc.",
      "Sue, D. W., & Sue, D. (2013). Counseling the Culturally Diverse: Theory and Practice (6th ed.). Hoboken, NJ: John Wiley & Sons.",
    ],
  },
  {
    slug: "adhd",
    title: "ADHD & HRV: Non-Medication Management",
    category: "ADHD",
    icon: "activity",
    excerpt:
      "Heart Rate Variability reveals the link between mental processes and autonomic regulation — and offers a non-medication pathway for managing ADHD symptoms.",
    body: [
      "Clinical improvement in ADHD is associated with shifts in autonomic balance that show up in HRV analysis (Dogra et al., 2018) — evidence of the linkage between mental processes and autonomic regulation. Children with ADHD have been shown to have a sympathetic under-arousal and parasympathetic over-arousal, and increased “chaotic” activity that is visible in their HRV.",
      "Slow, deep, lower-abdominal breathing has been central to Asian cultural practices for centuries as a tool for transformation and healing. More recently, mindfulness meditation has been shown to improve self-control, self-regulation, and attention, and to help with the core ADHD symptoms of inattention, hyperactivity, and impulsivity (Tang & Tang, 2015).",
      "HRV biofeedback and training is a non-medication approach that uses the heart–brain connection to help manage ADHD symptoms — improving coherent heart rhythm and supporting focus, self-regulation, and resilience through practiced control of the body's stress response.",
    ],
    quote: "Mindfulness meditation has been shown to improve self-control, self-regulation, and attention, as well as help with the core ADHD symptoms of inattention, hyperactivity, and impulsivity. — Dr. Diann Sanford, Psy.D, LPC",
    references: [
      "Dogra, P., Mondal, S., Bandhu, R., Kataria, D., & Ramesh, V. O. S. (2018). Correlation between Conner's parent rating score and HRV in ADHD children treated with methylphenidate. IJDMSR, 2(6), 44–49.",
      "Tang, Y., & Tang, R. (2015). Mindfulness Meditation — A new preventive intervention for ADHD. INTECH, 294–300.",
      "Beauchaine, T. P., et al. (2013). Sympathetic and parasympathetic linked cardiac function and prediction of externalizing behavior, emotion regulation, and prosocial behavior among preschoolers treated for ADHD. Journal of Consulting and Clinical Psychology, 81(3), 481–493.",
    ],
  },
  {
    slug: "anxiety",
    title: "Managing Anxiety & Fears Without Medication",
    category: "Anxiety",
    icon: "wind",
    excerpt:
      "Mindfulness and meditation, integrated into care, offer practical, non-medication tools for addressing anxiety and fear.",
    body: [
      "This article comments on the work of Dr. Shauna Shapiro — a clinical psychologist and internationally recognized expert on mindfulness — who blends current neuroscience with ancient wisdom. After years of studying how people transform, she found mindfulness to be one of the primary ways people change. Our minds wander roughly 47% of the time, so nearly half of life is spent somewhere other than the present moment.",
      "Feeling the breath, noticing your feet on the ground, softening your gaze, and releasing judgment lets us return to the present. As a monk once told Shapiro, “what you practice grows stronger” — and neuroscience backs this up: repeated behaviors build neural pathways and, through cortical thickening, physically strengthen the brain. Mindfulness is a 24/7 practice of paying attention to ourselves with kindness; meditation, by contrast, is the intentional quieting and renewing of the mind at planned intervals.",
      "Integrated into the medical model, these practices could ease enormous suffering. Free-floating hostility, anger, cynicism, worry, and fear provoke exaggerated stress responses that, over time, damage the cardiovascular system. Practicing gratitude, cultivating “flow,” forgiveness, and mindful positive social connection lowers the stress response and releases oxytocin — increasing serotonin, personal control, and self-esteem while reducing blood pressure.",
      "Used regularly and systematically, these holistic, non-medication approaches can have long-lasting efficacy in the treatment of anxiety, worry, and fear — often alongside, and sometimes in place of, medication.",
    ],
    sections: [
      {
        heading: "Mindfulness",
        body: [
          "Dr. Shauna Shapiro — a professor at Santa Clara University and an internationally recognized expert on mindfulness — draws on both current neuroscience and ancient wisdom. She makes clear that perfection is not possible, though many of us spend our time chasing it and living in a state of self-judgment, and that each of us has great capacity to change: transformation is within reach no matter the circumstances.",
          "Shapiro learned mindfulness from monks in Thailand while searching for a way to cope with pain after a spinal fusion; at first she struggled to stay present as her mind wandered. Our minds wander roughly 47% of the time — nearly half of life spent somewhere other than the present. Feeling the breath, noticing our feet on the ground, and softening our gaze lets us return to now.",
          "A monk told her, 'what you practice grows stronger,' and neuroscience agrees: repeated behaviors create more neural pathways, and repeated practice visibly increases synaptic connections and cortical thickness (Carlson & Birkett, 2016). Mindfulness is paying attention to ourselves and filling our thoughts with kindness — a 24/7 practice, not just something done while meditating. The real question becomes: what do you want to grow and strengthen?",
        ],
      },
      {
        heading: "Meditation defined",
        body: [
          "The words mindfulness and meditation are often used interchangeably, but they differ (Shapiro & Shapiro, 2017). Meditation is usually practiced for a set amount of time and can take many forms — yoga, meditative exercise, prayer, meditative music, or chanting — often organized around themes such as loving-kindness, forgiveness, compassion, or a clear mind. It is the intentional stilling and renewing of the mind at planned intervals, transcending our current state and returning us to a kinder way of thinking.",
        ],
      },
      {
        heading: "Integrating mindfulness into the medical model",
        body: [
          "Mindfulness could be immensely helpful if integrated into the medical model. The mere act of receiving medical services often increases anxiety, blood pressure, and fear; breathing becomes shallow, and constant worry and cortisol release interfere with healing (Karren, Smith, & Gordon, 2014). In heart disease, for example, free-floating hostility, anger, cynicism, worry, and fear produce exaggerated stress responses that flood the body with hormones, cause microvascular damage, promote plaque, and raise blood pressure — all increasing the risk of a heart attack.",
          "Reducing these states through positive-psychology exercises, meditation, and mindfulness — practicing gratitude, cultivating 'flow,' reflecting on positive experiences, practicing forgiveness, and mindfully increasing positive social interaction — lowers the body's stress response and triggers oxytocin. Creating a high level of positive emotion through the day increases serotonin, improves personal control and self-esteem, and reduces blood pressure, lightening the heart's workload.",
        ],
      },
      {
        heading: "Summary",
        body: [
          "The significance of mind-and-body practices working alongside medicine cannot be understated. Mindfulness is an intentional, 24/7 awareness; meditation is a set of planned, life-affirming exercises usually built around a positive theme (which can include spiritual thoughts and prayer). Used regularly and systematically, these holistic, non-medication approaches can have long-lasting efficacy in the treatment of anxiety, worry, and fear.",
        ],
      },
    ],
    quote: "Creating a high level of positive emotion throughout the day has a significant impact on all the psychological processes in the body — increasing serotonin, improving personal control and self-esteem, and reducing blood pressure, which in turn reduces or eliminates anxiety, fears, and worry. — Dr. Diann Sanford, Psy.D, LPC",
    links: [
      { label: "Dr. Shauna Shapiro — articles & videos", href: "http://www.drshaunashapiro.com/articles-videos/" },
      { label: "Mindfulness & Meditation: What's the Difference? (Shapiro & Shapiro)", href: "https://medium.com/thrive-global/the-power-of-mindfulness-and-meditation-70fceeffa221" },
    ],
    references: [
      "Shapiro, S. (n.d.). The Power of Mindfulness: What You Practice Grows Stronger.",
      "Karren, K. J., Smith, N. L., & Gordon, K. J. (2014). Mind/Body Health (5th ed.). New York, NY: Pearson Education, Inc.",
      "Carlson, N. R., & Birkett, M. A. (2016). Physiology of Behavior (12th ed.). New York, NY: Pearson Education, Inc.",
    ],
  },
  {
    slug: "hrv",
    title: "Heart Rate Variability: A Non-Invasive Treatment",
    category: "HRV",
    icon: "activity",
    excerpt:
      "HRV characterizes a person's state in real time, non-invasively — a window into autonomic health used across clinical practice.",
    body: [
      "Heart Rate Variability (HRV) is the beat-to-beat variation in the timing of the heart, governed dynamically by the autonomic nervous system. It can be used in clinical practice to characterize a patient's state in real time, non-invasively (Francesco et al., 2012). First used clinically in 1965 to detect fetal distress, HRV is now widely used as a marker of the autonomic nervous system's status — and of psychological and physical well-being.",
      "HRV is affected by aging, gender, and circadian rhythm; it rises at night and dips in the early morning. Regular physical activity improves HRV and vagal tone, effectively slowing aspects of aging, while patients with cardiovascular disease show altered HRV. A decrease in HRV is associated with greater risk across a host of illnesses, whereas an increase marks improved health and functioning.",
      "HRV has been extensively studied as a way to explore mental disorders and responses to stress — analyses have distinguished people under stress from those who are not with around 90% accuracy. Individuals living with anxiety disorders, panic attacks, PTSD, and depression tend to show lower HRV, which is why HRV is increasingly used as a biomarker alongside heart-rate-variability biofeedback (HRVB).",
      "HRVB is a non-invasive treatment in which patients learn to self-regulate a dysregulated vagal nerve. Daily biofeedback practice increases the amplitude of heart-rate oscillations, enhancing connectivity in the brain networks tied to emotion regulation — the prefrontal regulatory regions are especially responsive. With proper holistic intervention, HRV can be improved, and with it the symptoms of depression, anxiety, and ADHD reduced.",
    ],
    sections: [
      {
        heading: "What HRV is",
        body: [
          "Heart Rate Variability is the beat-to-beat variation in the timing of the heart, governed dynamically by the autonomic nervous system via vagal and sympathetic nerve impulses. These fluctuations have predictive importance and can be used to assess pathological states or affirm wellness (Kleiger, 2005), characterizing a patient's state in a real-time, non-invasive manner (Francesco et al., 2012). HRV was first used clinically in 1965, when Hon and Lee noticed that fetal distress was recognizable by changes in beat-to-beat variation before any noticeable change in heart rate.",
          "HRV is widely used as a measure of the autonomic nervous system's status and is considered a marker of psychological and physical well-being and a predictor of both morbidity and mortality (Viljoen & Claassen, 2017). It is affected by aging, gender, and circadian rhythm — rising at night and dropping in the early morning — while regular physical activity improves HRV and vagal tone, effectively slowing aspects of aging. A decrease in HRV accompanies many diseases, whereas an increase marks improved health and functioning.",
        ],
      },
      {
        heading: "Measurement",
        body: [
          "Short-term HRV measurements were used in the 1970s as a marker of diabetic autonomic neuropathy, and HRV has since been explored as a reliable tool to predict the risk of sudden cardiac death (Tayel & AlSaba, 2015). Technically, HRV is the measurement and analysis of the beat-to-beat (R-R) intervals — the gaps between two normal peaks (Sammito & Bockelmann, 2016).",
          "It can be measured under controlled laboratory conditions or from 24-hour ECG recordings taken during normal activity. In short laboratory studies, researchers often examine standard five-minute segments, yielding a high-frequency (HF) peak between 0.15 and 0.40 Hz and a low-frequency (LF) peak between 0.04 and 0.15 Hz (Kleiger, 2005).",
        ],
      },
      {
        heading: "Clinical implications",
        body: [
          "Studies have used HRV to explore mental disorders and responses to stress. Classifying high- and low-stress groups after a stress-provoking stimulus discriminated stressed from non-stressed subjects with about 90% accuracy (Muaremi et al., 2013), and the low-frequency power seems to implicate the presence of depression, anxiety, and ADHD.",
          "HRV is increasingly used as a biomarker because it reflects the complex interaction of the heart with many body systems, especially the brain (Blase et al., 2016). Individuals with anxiety disorders, panic attacks, PTSD, depression, epilepsy, anorexia, and borderline personality disorder have all been shown to have lower HRV. HRV training is often used together with heart-rate-variability biofeedback (HRVB).",
        ],
      },
      {
        heading: "Application: HRV biofeedback",
        body: [
          "Chronic stress increases the risk of neuropsychiatric, cardiovascular, and endocrine disorders, and the practice of HRVB is an antidote (Pereira, Campos, & Sousa, 2017). The autonomic nervous system is a determinant of stress resilience, and influencing it through biofeedback promotes resilience. Daily biofeedback practice increases the amplitude of heart-rate oscillations that improve emotional well-being (Mather & Thayer, 2018).",
          "HRVB is a non-invasive treatment in which patients learn to self-regulate a dysregulated vagal nerve (Blase et al., 2016). Enhanced blood-flow timing strengthens connectivity in the brain networks associated with emotional regulation, and the prefrontal regulatory regions are particularly responsive. With proper holistic intervention, the biomarker of heart rate variability can be improved — and with it, the symptoms of depression, anxiety, and ADHD reduced (Young & Benton, 2018).",
        ],
      },
    ],
    quote: "Psychological, biological, immunological, and physiological responses are reflected in our body's biomarkers, such as heart rate variability. With proper holistic interventions, HRV can be improved — and in turn, the symptoms of depression, anxiety, and ADHD reduced. — Dr. Diann Sanford, Psy.D, LPC",
    video: { title: "Understanding HRV and its health benefits", youtube: "zUyuUoU7lAQ" },
    references: [
      "Francesco, B., et al. (2012). Linear and nonlinear heart rate variability indexes in clinical practice. Computational and Mathematical Methods in Medicine.",
      "Kleiger, R. E. (2005). Heart Rate Variability: Measurement and Clinical Utility. A.N.E., 10(1), 88–101.",
      "Sammito, S., & Bockelmann, I. (2016). Factors Influencing Heart Rate Variability. International Cardiovascular Forum, 6, 18–22.",
      "Blase, K., Van, D. A., Cluitmans, P., & Vermetten, E. (2016). Efficacy of HRV-biofeedback as an additional treatment of depression and PTSD. Tijdschr Psychiatr, 58(4), 292–300.",
      "Mather, M., & Thayer, J. F. (2018). How heart rate variability affects emotion regulation brain networks. Current Opinion in Behavioral Sciences, 19, 98–104.",
    ],
  },
  {
    slug: "high-conflict",
    title: "Hope for High-Conflict Couples & Families",
    category: "Family",
    icon: "users",
    excerpt:
      "The New Ways for Families approach teaches emotional intelligence and self-control — helping people stay calm and productive in very difficult circumstances.",
    body: [
      "Many relationships end in high-conflict separations or divorces that can be deeply damaging to the children involved. Dr. Sanford is a trained New Ways for Families provider — an approach designed by Bill Eddy of the High Conflict Institute to teach both sets of parents and their children how to navigate these complex situations. Courts often order families into this therapy to reduce the stress, anxiety, and negative impact that high conflict has on children.",
      "The typical program consists of individual parent counseling followed by parent-child counseling: each parent first learns the healthy skills, then models them for their children in front of the therapist. During New Ways for Families therapy, emotional intelligence and self-control are emphasized, and participants are taught how to remain calm and productive in the midst of very difficult circumstances.",
      "One key component is helping clients recognize extreme, harmful behaviors of the past and learn new ways of managing these emotions and situations. Flexible thinking, managed emotions, moderate behaviors, and checking yourself are highlighted — skills both parents are expected to model for their children. Failures and hurdles are discussed openly, alongside new ways of handling them.",
      "It is a highly effective, solutions-focused intervention, and the same principles work for couples alone, couples and children, or families with adult children experiencing conflict. As Dr. Sanford puts it, “Flexible thinking, managed emotions, moderate behaviors, and checking yourself are keys to calm, healthy, and productive communication — and can be applied to any situation in which one is experiencing high conflict.”",
    ],
    links: [
      { label: "High Conflict Institute — Bill Eddy", href: "https://www.highconflictinstitute.com/" },
      { label: "New Ways for Families", href: "https://www.highconflictinstitute.com/new-ways-for-families" },
    ],
  },
  {
    slug: "parental-alienation",
    title: "Recovering from Parental Alienation",
    category: "Family",
    icon: "users",
    excerpt:
      "Programs like Family Bridges are designed to preserve and rebuild the bond between parents and children affected by alienation.",
    body: [
      "Unjustified parental alienation is a form of child abuse. It occurs when a child becomes estranged from one parent due to the psychological manipulation of the other, favored parent. The child's estrangement may show up as fear, hostility, or disrespect toward the targeted parent — sometimes extending to other relatives — and it carries long-term health consequences for both the children and the targeted parents.",
      "Dr. Sanford is trained in the Family Bridges educational program, which many judges now order for children who have been unjustly alienated from a parent. Family Bridges is designed to preserve the bond between parents and children and to reunify the alienated child with his or her parent, giving every family member the tools to re-form healthy, loving, respectful relationships — while helping both parents stay involved in their children's lives without denigrating one another.",
      "Dr. Amy Baker's research has established that both targeted parents and their children suffer the long-term effects of parental alienation; she has written works such as Adult Children of Parental Alienation Syndrome: Breaking the Ties That Bind and co-authored Surviving Parental Alienation. Dr. Richard Warshak, a clinical professor of psychiatry at UT Southwestern Medical Center and author of Divorce Poison, has also written extensively on the subject.",
      "The results can be striking: in Warshak's study of 83 severely alienated children and adolescents enrolled in the four-day Family Bridges workshop, contact refusal with the rejected parent dropped from a pre-workshop rate of 85% to just 6% afterward. Change-Well offers customized workshops and support for families and individuals recovering from parental alienation.",
    ],
    quote: "Unjustified parental alienation — a campaign by one parent to denigrate the other and psychologically manipulate the targeted parent — is child abuse. It has long-lasting negative effects for the children and the targeted parents. — Dr. Diann Sanford, Psy.D",
    video: { title: "Understanding parental alienation", youtube: "cYV8GBrJv9k" },
    links: [
      { label: "What Is Parental Alienation? — Dr. Richard Warshak", href: "https://www.warshak.com/publications/what-is-parental-alienation.html" },
      { label: "Parental Alienation Syndrome — Psychology Today", href: "https://www.psychologytoday.com/us/blog/resolution-not-conflict/201802/parental-alienation-syndrome-what-is-it-and-who-does-it" },
      { label: "An expert explains parental alienation — CBS News (48 Hours)", href: "https://www.cbsnews.com/video/psychological-manipulation-an-expert-explains-parental-alienation-to-48-hours/" },
    ],
  },
  {
    slug: "happiness-in-daily-life",
    title: "3 Keys to Happiness in Daily Life",
    category: "Well-Being",
    icon: "sun",
    excerpt:
      "Gratitude, presence, and appreciation are practical, daily habits that quietly reshape how we experience our lives.",
    body: [
      "It doesn't take a whole new routine to instill a dose of happiness into your day — but it does take a little self-awareness. First, be grateful for the good and the bad: grateful people are happy people, and happiness is not the absence of negative feelings. Take a moment daily to view your world with gratitude, start a gratitude journal, or think of someone who helps you regularly — a partner, parent, friend, teacher, or neighbor.",
      "Second, flex your creativity muscles. You don't need a formal activity — simply engaging in creative thinking enhances cognitive flexibility and problem-solving. A study out of New Zealand published in The Journal of Positive Psychology found that creative activity can trigger an “upward spiral” of well-being. Make some space in your day to create, even if it's just for the sake of it.",
      "Third, get connected and stay connected. Belonging to something larger than yourself brings perspective and a sense of belonging — a core psychological need that registers in the brain much like physical pleasure. Nurture a friendship that matters, send a card, plan a lunch, or simply smile and say hello to a stranger and notice how it feels.",
    ],
    quote: "Practicing an art — no matter how well or badly — is a way to make your soul grow. So do it. — Kurt Vonnegut",
    video: { title: "Mysteries of the Heart — HeartMath Institute", youtube: "Kyfm5_LLxow" },
    links: [
      { label: "Take the Gratitude Quiz — Greater Good Science Center, UC Berkeley", href: "https://greatergood.berkeley.edu/quizzes/take_quiz/gratitude" },
      { label: "101 creative habits to explore", href: "http://www.blacksburgbelle.com/2014/01/101-creative-habits-to-explore-add-more-creativity-to-your-daily-life/" },
      { label: "TherapyTribe — a free online support community", href: "https://support.therapytribe.com/" },
    ],
  },
];

// Curated outside resources, grouped by area — restored from the original
// change-well.com "Resources" page (change-well.com/resources-2/).
export type ResourceLink = { label: string; href: string };
export type ResourceGroup = { heading: string; links: ResourceLink[] };

export const resourceLinks: ResourceGroup[] = [
  {
    heading: "Depression & ADHD",
    links: [
      { label: "Dr. Amen — the brain & a non-medication approach to depression, addictions & ADHD", href: "https://www.youtube.com/watch?v=KAcsII424L4" },
      { label: "Dr. Dan Siegel — mental health, total wellness & integration", href: "https://www.drdansiegel.com/" },
      { label: "Mayo Clinic — depression & anxiety eased by exercise", href: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression-and-exercise/art-20046495" },
      { label: "Wendy Suzuki (TED) — the brain-changing benefits of exercise", href: "https://www.ted.com/talks/wendy_suzuki_the_brain_changing_benefits_of_exercise/transcript?language=en" },
    ],
  },
  {
    heading: "Relationships, Couples & Marriage",
    links: [
      { label: "Brené Brown (TED) — the power of vulnerability", href: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability/transcript?language=en" },
      { label: "John Gottman — on better relationships & what makes marriage work", href: "https://www.youtube.com/watch?v=AKTyPgwfPgg" },
    ],
  },
  {
    heading: "Trauma, PTSD & Anxiety",
    links: [
      { label: "ADHD and trauma (ADDitude / somatic therapy)", href: "https://www.additudemag.com/adhd-trauma-somatic-therapy/" },
      { label: "Trauma & PTSD — from surviving to thriving (clinical presentation)", href: "https://www.youtube.com/watch?v=6sbYIKC7-Tw" },
      { label: "HeartMath — simple tools to manage stress & anxiety", href: "https://www.heartmath.org/resources/videos/scientific-foundation-of-the-heartmath-system/" },
    ],
  },
  {
    heading: "Heart Rate Variability",
    links: [
      { label: "Video — explaining HRV and the health benefits of higher HRV", href: "https://www.youtube.com/watch?v=zUyuUoU7lAQ" },
    ],
  },
  {
    heading: "High Conflict & Parental Alienation",
    links: [
      { label: "What is parental alienation? (Dr. Richard Warshak)", href: "https://www.warshak.com/publications/what-is-parental-alienation.html" },
    ],
  },
  {
    heading: "Healthy Living",
    links: [
      { label: "Duke Integrative Medicine — what is integrative medicine?", href: "https://dukeintegrativemedicine.org/" },
      { label: "Forks Over Knives — a plant-based primer", href: "https://www.forksoverknives.com/plant-based-primer-beginners-guide-starting-plant-based-diet/" },
      { label: "Australian 60 Minutes — the island where people live longest", href: "https://www.youtube.com/watch?v=BIWibXSOfNg" },
    ],
  },
  {
    heading: "Senior Resources & Care",
    links: [
      { label: "Senior living in Texas", href: "https://www.seniorhousingnet.com/seniors/senior-living-us/texas" },
      { label: "Assisted living", href: "https://www.seniorhousingnet.com/care-types/assisted-living" },
      { label: "Home care", href: "https://www.seniorhousingnet.com/care-types/home-care" },
      { label: "Independent living", href: "https://www.seniorhousingnet.com/care-types/independent-living" },
      { label: "Alzheimer's care", href: "https://www.seniorhousingnet.com/care-types/alzheimers" },
      { label: "Nursing care", href: "https://www.seniorhousingnet.com/care-types/nursing" },
    ],
  },
];

export const faqs = [
  {
    q: "What happens during the first therapy session?",
    a: "Your first session focuses on understanding your current concerns, background, and goals for therapy. Your therapist will ask questions to better understand your situation and determine the best approach moving forward.",
  },
  {
    q: "How long are therapy sessions?",
    a: "Most therapy sessions are approximately 50 minutes. Your therapist may recommend a session frequency based on your needs and treatment goals.",
  },
  {
    q: "Do you offer virtual sessions?",
    a: "Yes. Change-Well offers both in-person sessions in Plano and secure telehealth sessions for clients who prefer meeting remotely.",
  },
  {
    q: "Do you accept insurance?",
    a: "Change-Well accepts many insurance plans. Our office can help verify your coverage and explain any out-of-pocket costs before your first appointment.",
  },
  {
    q: "Do you offer self-pay options?",
    a: "Yes. We offer self-pay options for clients who prefer not to use insurance or do not have coverage, with clear pricing to help you choose the best option for your care.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "You will complete intake paperwork and any required forms beforehand. Bringing relevant medical or psychological history can also help your therapist better understand your needs.",
  },
  {
    q: "How many therapy sessions will I need?",
    a: "The number varies for each individual. Some clients attend for a short period to address a specific concern, while others continue longer to support ongoing growth.",
  },
];

export const firstVisit = {
  goals: [
    {
      title: "To understand your circumstances",
      body:
        "We use the first meeting to understand your current situation and the reasons you are seeking therapy, and to explore whether our areas of expertise align with your needs. Together we identify which type of therapy may be most helpful and discuss what the process may look like based on your goals.",
    },
    {
      title: "To build a relationship",
      body:
        "A strong therapist-client relationship is central to our approach, so your first session feels like a two-way conversation. We take time to get to know you — your primary concerns, your history, and the experiences that matter most — while also helping you get a sense of who we are.",
    },
  ],
  expect: [
    "Compassion, empathy, and respect",
    "A therapist who listens carefully and values your perspective",
    "Evidence-based techniques and information",
    "A safe and confidential environment",
    "Practical strategies you can apply in daily life",
    "A personalized plan for treatment",
  ],
  confidentiality:
    "Therapy sessions are confidential, and what you share remains private unless you provide written consent. There are a few legal exceptions where a therapist is required to share information to ensure safety — suspected abuse of a child, dependent adult, or elderly person; a serious threat of harm to another person; or a risk of self-harm that cannot be safely managed within therapy.",
};

export const helplines = [
  { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988 · available 24/7", href: "tel:988" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741", href: "sms:741741" },
  { name: "SAMHSA National Helpline", detail: "1-800-662-4357 · treatment referral, 24/7", href: "tel:18006624357" },
  { name: "National Domestic Violence Hotline", detail: "1-800-799-7233", href: "tel:18007997233" },
  { name: "Veterans Crisis Line", detail: "Dial 988, then press 1", href: "tel:988" },
  { name: "Emergency", detail: "If you or someone else is in immediate danger, call 911.", href: "tel:911" },
];

export const homeHero = {
  eyebrow: "Therapy & Psychological Testing · Plano, Texas",
  title: "It takes courage to ask for help.",
  subtitle:
    "If you are looking for guidance with transitions, anxiety, trauma, fears, depression, or relationships, our team of licensed clinicians is ready to help. Asking for assistance gets easier with a little practice.",
  founderQuote:
    "With kindness and enthusiasm, we will work with you to create the changes and the life you earnestly desire — developing agreed-upon goals and working toward better balance, improved health, and total wellness.",
};

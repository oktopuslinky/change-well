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

export type NavChild = { label: string; href: string };
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
      { label: "Couples Therapy", href: "/couples" },
      { label: "Private Intensives", href: "/couples/private-intensives" },
      { label: "Semi-Private Retreats", href: "/couples/semi-private-retreats" },
      { label: "Gottman Workshops", href: "/couples/workshops" },
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

export type Article = {
  slug: string;
  title: string;
  category: string;
  icon: string;
  excerpt: string;
  body: string[];
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
      "Research shows that grateful people are happy people. It is important to understand that happiness is not the absence of negative feelings. Gratitude is a focus on the present and an appreciation for what we have now, rather than always wanting more.",
      "Embracing gratitude as a state of mind can positively affect all aspects of life, including our happiness and our health. Small, consistent practices — noticing what is good, savoring ordinary moments, and expressing appreciation — measurably shift both mood and outlook over time.",
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
      "Gratitude correlates with activity in a specific set of brain regions, and a simple gratitude-writing intervention results in measurable changes in both gratefulness and neural sensitivity to gratitude over the course of weeks to months.",
      "Participants in gratitude interventions have reported significantly better mental health compared with those who did not practice gratitude — evidence that where we place our attention shapes our well-being.",
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
      "Cognitive Behavioral Therapy is primarily focused on cognition and behavior. Thinking, deciding, questioning, doing, and re-deciding are essential. This psychoeducational model emphasizes a learning process that involves gaining and practicing new skills.",
      "Much focus is given to faulty thinking that leads to emotional and behavioral disturbance. Schemas — the mental filters we use to perceive the world — integrate core beliefs and involve emotions, thoughts, and actions. The goal is to recognize and reshape these patterns so that healthier feeling and functioning can follow.",
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
      "Research on PTSD (West, Liang, & Spinazzola, 2016) with adult women who suffered chronic child abuse shows that traditional trauma treatments are often unsuccessful at addressing somatic complaints and the loss of attentiveness to one's own physical and emotional being in the present moment.",
      "Techniques that increase mindfulness and present-moment awareness — such as Trauma-Sensitive Yoga — have been found to help address the way trauma is held in the body, offering a complementary path alongside talk therapy.",
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
      "Research shows that love between couples is a dynamic, ongoing process (Compton & Hoffman, 2013). It is not a simple destination that one arrives at and no longer has to attend to. Stress, personal growth, and life events all influence love and satisfaction, which continue to vary over time.",
      "Confidence, integrity, gentleness, and warmth matter. Studies show that happier couples are more supportive, laugh more often, and withhold comments that might be perceived as negative — small choices that compound into lasting connection.",
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
      "Clinical improvement in ADHD is associated with shifts in autonomic balance that show up in HRV analysis (Dogra et al., 2018). HRV reveals the linkage between mental processes and autonomic regulation.",
      "HRV biofeedback and training is a non-medication approach that uses this connection to help manage ADHD symptoms — supporting focus, self-regulation, and resilience through practiced control of the body's stress response.",
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
      "This article comments on the work of researchers exploring meditation and mindfulness in the treatment of anxiety and fear. It defines meditation and contrasts it with mindfulness, then elaborates on incorporating mindfulness into the present medical model.",
      "The conclusion challenges both individuals and practitioners to tackle anxiety and fear with approaches that build present-moment awareness and self-regulation — often alongside, and sometimes in place of, medication.",
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
      "Heart Rate Variability can be used in clinical practice to help characterize a patient's state in a real-time, non-invasive manner (Francesco et al., 2012). Patients with cardiovascular issues experience alterations in HRV, and HRV is also affected by age, gender, and circadian rhythm.",
      "Because HRV reflects the balance of the autonomic nervous system, HRV biofeedback training can support the treatment of depression, anxiety, and ADHD — helping clients strengthen their capacity to self-regulate.",
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
      "During New Ways for Families therapy, emotional intelligence and self-control are emphasized. Therapists practicing these methods teach participants how to remain calm and productive in the midst of very difficult circumstances.",
      "One key component is helping clients recognize extreme, harmful behaviors of the past and learn new ways of managing these emotions and situations — building skills that both sets of parents and their children can use to navigate complex family dynamics.",
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
      "Many judges now order that children who have been unjustly alienated from a parent participate in reunification programs such as Family Bridges, designed to help preserve the bond between parents and children and to reunify the alienated child with his or her parent.",
      "The mission of these programs is to give all family members the tools to re-establish healthy relationships. Change-Well offers customized workshops and support for families and individuals recovering from parental alienation.",
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
      "Research shows that grateful people are happy people, and that happiness is not the absence of negative feelings. Gratitude is a focus on the present and an appreciation for what we have now rather than wanting more.",
      "Embracing gratitude as a state of mind can have a positive effect on all aspects of life — including happiness and health. Practiced daily, small habits of noticing, savoring, and expressing appreciation become a durable foundation for well-being.",
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

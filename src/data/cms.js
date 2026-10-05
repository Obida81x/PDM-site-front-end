/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CMS CONTENT  (mock data for the pages that the backend will manage later)
 * ─────────────────────────────────────────────────────────────────────────────
 *  - Every editable text is { ar, en }  →  the backend can store/return the same shape.
 *  - The site never imports this file directly: it goes through `src/services/api.js`.
 *    When the backend is ready, set VITE_API_URL and the same data is fetched from the API
 *    (see README → "Connecting the backend").
 */
const t = (ar, en) => ({ ar, en });

/* ───────────────────────────── Our Story page ───────────────────────────── */
export const STORY = {
  hero: {
    eyebrow: t('قصتنا', 'OUR STORY'),
    title: [t('بدأت بفكرة،', 'It started with an idea,'), t('وكبرت بشغف فريق.', 'and grew with a team’s passion.')],
    lead: t(
      'نحن PDM، شركة رقمية ناشئة وُلدت في رام الله من إيمان بسيط: أن الفرق المحلية قادرة على صناعة منتجات وتجارب رقمية بمستوى عالمي.',
      'We are PDM, a young digital company born in Ramallah from one simple belief: local teams can build world-class digital products and experiences.'
    ),
  },
  origin: {
    label: t('كيف بدأنا', 'HOW IT STARTED'),
    title: t('من طاولة صغيرة إلى فريق كامل', 'From a small table to a full team'),
    paragraphs: [
      t(
        'في عام 2022 اجتمع ثلاثة أصدقاء — مصمم ومطوّر ومسوّق — حول طاولة صغيرة في رام الله. كان لكلٍّ منهم تجربة مختلفة، لكن الإحباط كان واحداً: الشركات الصغيرة والناشئة حولهم تملك أفكاراً رائعة، لكنها لا تجد شريكاً رقمياً يفهمها ويقدّم لها جودة عالية بسعر عادل.',
        'In 2022, three friends — a designer, a developer and a marketer — sat around a small table in Ramallah. Each had a different background, but the same frustration: the small businesses and startups around them had brilliant ideas, yet couldn’t find a digital partner that understood them and delivered high quality at a fair price.'
      ),
      t(
        'قررنا أن نكون هذا الشريك. بدأنا بجهاز لابتوب واحد وبضعة مشاريع صغيرة، وكنا نعمل ليلاً لنُتقن كل تفصيلة، لأننا كنا نعرف أن سمعتنا هي رأس مالنا الحقيقي.',
        'We decided to become that partner. We started with a single laptop and a few small projects, working late into the night to perfect every detail, because we knew our reputation was our real capital.'
      ),
      t(
        'ومع كل مشروع ناجح، كبر الفريق وكبرت معه خبرتنا. اليوم نجمع المصممين والمطورين والمسوّقين تحت سقف واحد، ونعمل مع عملاء من فلسطين والمنطقة، لكن روح البداية ما زالت كما هي: نصغي أولاً، ثم نبني.',
        'With every successful project the team grew, and so did our experience. Today we bring designers, developers and marketers under one roof and work with clients from Palestine and across the region, but the spirit of the beginning is the same: we listen first, then we build.'
      ),
    ],
  },
  quote: {
    text: t(
      '«لم نبدأ بمكتب كبير ولا برأس مال ضخم. بدأنا بفكرة وإصرار، وقرار ألا نقبل بأقل من الأفضل.»',
      '“We didn’t start with a big office or big capital. We started with an idea, persistence, and a decision to never settle for less than our best.”'
    ),
    author: t('— الفريق المؤسس لـ PDM', '— The PDM founding team'),
  },
  timeline: {
    label: t('رحلتنا', 'OUR JOURNEY'),
    title: [t('محطات صنعت', 'The milestones that'), t('من نحن اليوم', 'made us who we are')],
    items: [
      { year: '2022', title: t('الفكرة الأولى', 'The first idea'), text: t('اجتمع المؤسسون الثلاثة وقرروا بناء شركة رقمية تضع جودة التفاصيل في المقام الأول.', 'The three founders came together and decided to build a digital company that puts quality of detail first.') },
      { year: '2023', title: t('أول العملاء', 'Our first clients'), text: t('أطلقنا أول مواقعنا وهويات علاماتنا لعملاء محليين، وبنينا الثقة مشروعاً بعد مشروع.', 'We launched our first websites and brand identities for local clients, building trust one project at a time.') },
      { year: '2024', title: t('كبر الفريق', 'The team grows'), text: t('انضم إلينا مصممو واجهات ومطورون ومختصو تسويق، وصارت خدماتنا الأربع تحت سقف واحد.', 'UI designers, developers and marketing specialists joined us, bringing all four of our services under one roof.') },
      { year: '2025', title: t('خارج الحدود', 'Beyond borders'), text: t('بدأنا العمل مع عملاء من المنطقة، وأطلقنا منتجات رقمية أكبر وأكثر تعقيداً.', 'We began working with clients across the region and launched bigger, more complex digital products.') },
      { year: '2026', title: t('اليوم وما بعده', 'Today and beyond'), text: t('أكثر من 50 مشروعاً منجزاً، وما زلنا نرى أن أفضل ما لدينا لم يأتِ بعد.', 'More than 50 completed projects, and we still believe our best work is yet to come.') },
    ],
  },
  values: {
    label: t('ما نؤمن به', 'WHAT WE BELIEVE'),
    title: [t('قيم تقود', 'Values that guide'), t('كل قرار نتخذه', 'every decision we make')],
    items: [
      { icon: 'pen', title: t('الإبداع', 'Creativity'), text: t('نبحث عن الفكرة الأذكى وليس الأسهل، ونصمّم بما يميّز علامتك فعلاً.', 'We look for the smartest idea, not the easiest, and design what truly sets your brand apart.') },
      { icon: 'target', title: t('الشراكة', 'Partnership'), text: t('نعمل كجزء من فريقك: نصغي، نشارك، ونتحمّل مسؤولية النتيجة معك.', 'We work as part of your team: we listen, collaborate and share responsibility for the result.') },
      { icon: 'diamond', title: t('الجودة', 'Quality'), text: t('التفاصيل الصغيرة هي ما يصنع الفرق، ولا نسلّم عملاً لا نفخر به.', 'Small details make the difference, and we never deliver work we’re not proud of.') },
      { icon: 'trend', title: t('النمو المستمر', 'Continuous growth'), text: t('نتعلم كل يوم، ونقيس أثر عملنا، ونحسّنه لننمو معك.', 'We learn every day, measure the impact of our work and improve it so we grow with you.') },
    ],
  },
  numbers: {
    label: t('PDM بالأرقام', 'PDM IN NUMBERS'),
    items: [
      { to: 50, prefix: '+', suffix: '', label: t('مشروع منجز', 'Projects completed') },
      { to: 30, prefix: '+', suffix: '', label: t('عميل سعيد', 'Happy clients') },
      { to: 4, prefix: '+', suffix: '', label: t('سنوات من الخبرة', 'Years of experience') },
      { to: 100, prefix: '', suffix: '%', label: t('التزام بنجاحك', 'Commitment to your success') },
    ],
  },
  vision: {
    label: t('نظرتنا للمستقبل', 'LOOKING AHEAD'),
    title: t('ما زالت القصة في بدايتها', 'The story is only beginning'),
    text: t(
      'نطمح أن نكون الشريك الرقمي الأول للعلامات التي تريد بناء مستقبل أذكى وأقوى، وأن نثبت أن الإبداع الفلسطيني قادر على المنافسة في أي سوق. وأنت — إن شاركتنا فكرتك — ستكون جزءاً من الفصل القادم.',
      'We aspire to be the first digital partner for brands that want to build a smarter, stronger future, and to prove that Palestinian creativity can compete in any market. And you — if you share your idea with us — will be part of the next chapter.'
    ),
  },
};

/* ─────────────────────────────── Projects ─────────────────────────────── */
export const PROJECTS = [
  {
    slug: 'travelvista',
    title: 'TravelVista',
    category: 'web',
    art: 'laptop',
    gallery: ['laptop', 'phones', 'dash'],
    year: '2025',
    client: t('شركة سفر ناشئة', 'A travel startup'),
    duration: t('٤ أشهر', '4 months'),
    services: [t('تطوير مواقع', 'Web development'), t('تصميم UI/UX', 'UI/UX design')],
    summary: t('منصة سفر حديثة بتجربة حجز سلسة وصور ساحرة.', 'A modern travel platform with a seamless booking experience and stunning visuals.'),
    overview: [
      t('TravelVista منصة تتيح للمسافرين استكشاف الوجهات ومقارنة العروض وحجز رحلاتهم بخطوات قليلة من أي جهاز.', 'TravelVista lets travelers explore destinations, compare offers and book trips in a few steps from any device.'),
      t('تولّينا المشروع من الفكرة حتى الإطلاق: تصميم الواجهات، بناء الموقع، وتهيئته لمحركات البحث.', 'We took the project from idea to launch: interface design, building the site and optimizing it for search engines.'),
    ],
    challenge: t('كان الحجز يتطلب عدة صفحات ويُفقد الشركة نسبة كبيرة من الزوار قبل إتمام الدفع، كما كان الموقع القديم بطيئاً على الجوال.', 'Booking required many pages and lost a large share of visitors before checkout, and the old site was slow on mobile.'),
    solution: t('أعدنا بناء رحلة الحجز في ثلاث خطوات واضحة، وبنينا الموقع بتقنيات حديثة وصور محسّنة لسرعة تحميل عالية على الجوال.', 'We rebuilt the booking journey into three clear steps and used modern technology with optimized images for fast mobile loading.'),
    features: [t('بحث ذكي مع فلاتر متقدمة', 'Smart search with advanced filters'), t('حجز في ثلاث خطوات', 'Three-step booking'), t('دعم كامل للعربية والإنجليزية', 'Full Arabic & English support'), t('لوحة تحكم لإدارة العروض', 'Dashboard to manage offers')],
    results: [
      { to: 64, prefix: '+', suffix: '%', label: t('زيادة في الحجوزات', 'Increase in bookings') },
      { to: 2, prefix: '', suffix: 's', label: t('زمن التحميل', 'Load time') },
      { to: 40, prefix: '-', suffix: '%', label: t('انخفاض معدل الارتداد', 'Lower bounce rate') },
    ],
    tools: ['React', 'Node.js', 'PostgreSQL', 'Figma'],
    liveUrl: '',
  },
  {
    slug: 'fitlife',
    title: 'FitLife',
    category: 'uiux',
    art: 'phones',
    gallery: ['phones', 'app', 'dash'],
    year: '2025',
    client: t('تطبيق صحة ولياقة', 'A health & fitness app'),
    duration: t('٣ أشهر', '3 months'),
    services: [t('تصميم UI/UX', 'UI/UX design'), t('أبحاث المستخدمين', 'User research')],
    summary: t('تطبيق صحة ولياقة صُمّم ليحفّزك ويتابع تقدّمك.', 'A health and fitness app designed to motivate and track your progress.'),
    overview: [
      t('FitLife تطبيق يساعد المستخدمين على بناء عادات صحية مستدامة عبر تمارين وخطط وتتبّع للتقدم.', 'FitLife helps users build sustainable healthy habits through workouts, plans and progress tracking.'),
      t('كان دورنا تصميم تجربة المستخدم والواجهات كاملة، من الأبحاث الأولى حتى النماذج التفاعلية.', 'Our role was designing the complete user experience and interface, from first research to interactive prototypes.'),
    ],
    challenge: t('كان معظم المستخدمين يتوقفون عن استخدام التطبيق بعد الأسبوع الأول بسبب تعقيد الواجهة وغياب التحفيز.', 'Most users stopped using the app after the first week due to a complex interface and lack of motivation.'),
    solution: t('بسّطنا الرحلة إلى أهداف يومية واضحة، وأضفنا عناصر تحفيز وإنجازات بصرية، واختبرنا النماذج مع مستخدمين حقيقيين.', 'We simplified the journey into clear daily goals, added motivational elements and visual achievements, and tested prototypes with real users.'),
    features: [t('أهداف يومية مبسّطة', 'Simple daily goals'), t('شارات وإنجازات تحفيزية', 'Motivating badges and achievements'), t('رسوم بيانية للتقدم', 'Progress charts'), t('وضع داكن كامل', 'Full dark mode')],
    results: [
      { to: 48, prefix: '+', suffix: '%', label: t('زيادة في الاحتفاظ بالمستخدمين', 'Increase in user retention') },
      { to: 4, prefix: '', suffix: '.8', label: t('تقييم المتجر', 'Store rating') },
      { to: 30, prefix: '-', suffix: '%', label: t('وقت إتمام التمرين الأول', 'Time to first workout') },
    ],
    tools: ['Figma', 'Maze', 'FigJam', 'Lottie'],
    liveUrl: '',
  },
  {
    slug: 'growthgen',
    title: 'GrowthGen',
    category: 'marketing',
    art: 'dash',
    gallery: ['dash', 'finance', 'laptop'],
    year: '2024',
    client: t('متجر إلكتروني', 'An e-commerce brand'),
    duration: t('٦ أشهر (مستمر)', '6 months (ongoing)'),
    services: [t('تسويق رقمي', 'Digital marketing'), t('تحسين محركات البحث', 'SEO')],
    summary: t('استراتيجية وحملات تسويق رقمي لتنمية متجر إلكتروني.', 'A digital marketing strategy and campaigns to grow an e-commerce brand.'),
    overview: [
      t('عملنا مع GrowthGen على بناء استراتيجية تسويق متكاملة تجمع بين المحتوى والإعلانات المدفوعة وتحسين محركات البحث.', 'We worked with GrowthGen to build an integrated marketing strategy combining content, paid ads and SEO.'),
      t('اعتمدنا على البيانات في كل قرار، وكنا نراجع الأداء أسبوعياً لتحسين النتائج باستمرار.', 'We relied on data for every decision and reviewed performance weekly to keep improving results.'),
    ],
    challenge: t('كان المتجر يحقق مبيعات محدودة، وإنفاقه الإعلاني موزّع بلا استراتيجية واضحة ولا قياس دقيق للعائد.', 'The store had limited sales, with ad spend scattered without a clear strategy or accurate return tracking.'),
    solution: t('أعدنا هيكلة الحملات حسب مراحل رحلة العميل، وأطلقنا استراتيجية محتوى، وبنينا لوحة تقارير تعرض العائد لحظة بلحظة.', 'We restructured campaigns around the customer journey, launched a content strategy and built a reporting dashboard showing returns in real time.'),
    features: [t('حملات إعلانية على Google وMeta', 'Google & Meta ad campaigns'), t('استراتيجية محتوى وSEO', 'Content & SEO strategy'), t('لوحة تقارير مباشرة', 'Live reporting dashboard'), t('اختبارات A/B مستمرة', 'Continuous A/B testing')],
    results: [
      { to: 210, prefix: '+', suffix: '%', label: t('نمو في المبيعات', 'Sales growth') },
      { to: 3, prefix: '', suffix: 'x', label: t('عائد الإنفاق الإعلاني', 'Return on ad spend') },
      { to: 85, prefix: '+', suffix: '%', label: t('زيادة الزيارات العضوية', 'Organic traffic increase') },
    ],
    tools: ['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio'],
    liveUrl: '',
  },
  {
    slug: 'nexora',
    title: 'Nexora',
    category: 'branding',
    art: 'brand',
    gallery: ['brand', 'app', 'laptop'],
    year: '2025',
    client: t('شركة تقنية حديثة', 'A modern tech company'),
    duration: t('٥ أشهر', '5 months'),
    services: [t('هوية العلامة التجارية', 'Brand identity'), t('تطوير مواقع', 'Web development')],
    summary: t('هوية بصرية متكاملة لشركة تقنية حديثة.', 'A complete brand identity and visual system for a modern tech company.'),
    caseStudy: {
      sub: t('هوية العلامة وتجربة رقمية', 'Brand Identity & Digital Experience'),
      desc: t('عملنا مع Nexora لبناء هوية علامة متكاملة وحضور رقمي لشركة تقنية حديثة، لتتميّز في سوق تنافسي وتتواصل بشكل أفضل مع جمهورها.', 'We worked with Nexora to build a complete brand identity and digital presence for a modern tech company, helping them stand out in a competitive market and connect better with their audience.'),
      stat: { to: 120, prefix: '+', suffix: '%', label: t('زيادة في الوعي بالعلامة', 'Increase in brand awareness') },
    },
    overview: [
      t('Nexora شركة تقنية ناشئة أرادت هوية تعكس الابتكار والثقة في آنٍ واحد، وتصلح للاستخدام على الويب والتطبيقات والمطبوعات.', 'Nexora is a tech startup that wanted an identity that reflects innovation and trust at once, working across web, apps and print.'),
      t('قدّمنا لهم رحلة كاملة: من ورشة العمل الاستراتيجية إلى الشعار والدليل الإرشادي والموقع الإلكتروني.', 'We delivered the full journey: from a strategy workshop to the logo, brand guidelines and website.'),
    ],
    challenge: t('كانت الشركة تظهر كأي شركة تقنية أخرى، بلا هوية بصرية موحّدة ولا رسالة واضحة تميّزها عن منافسيها.', 'The company looked like any other tech firm, with no unified visual identity and no clear message to set it apart.'),
    solution: t('صغنا قصة علامة واضحة، وصمّمنا شعاراً مرناً ونظاماً بصرياً متكاملاً، وطبّقناه على الموقع والتطبيق والمطبوعات.', 'We shaped a clear brand story, designed a flexible logo and complete visual system, and applied it across the website, app and print.'),
    features: [t('شعار مرن وعائلة ألوان', 'Flexible logo and colour family'), t('دليل هوية كامل', 'Complete brand guidelines'), t('تصاميم سوشيال ميديا جاهزة', 'Ready social media templates'), t('موقع إلكتروني بهوية موحّدة', 'Website with unified identity')],
    results: [
      { to: 120, prefix: '+', suffix: '%', label: t('زيادة في الوعي بالعلامة', 'Increase in brand awareness') },
      { to: 3, prefix: '', suffix: 'x', label: t('تفاعل أعلى على السوشيال', 'Higher social engagement') },
      { to: 25, prefix: '+', suffix: '', label: t('عميل جديد خلال ٣ أشهر', 'New clients in 3 months') },
    ],
    tools: ['Illustrator', 'Figma', 'After Effects', 'React'],
    liveUrl: '',
  },
  {
    slug: 'financehub',
    title: 'FinanceHub',
    category: 'web',
    art: 'finance',
    gallery: ['finance', 'dash', 'laptop'],
    year: '2024',
    client: t('شركة خدمات مالية', 'A financial services firm'),
    duration: t('٥ أشهر', '5 months'),
    services: [t('تطوير مواقع', 'Web development'), t('تصميم لوحات بيانات', 'Dashboard design')],
    summary: t('لوحة بيانات مالية بتحليلات قوية وواجهة سهلة الاستخدام.', 'A financial dashboard with powerful analytics and an easy-to-use interface.'),
    overview: [
      t('FinanceHub لوحة تحكم تجمع بيانات الحسابات والمصروفات والاستثمارات في مكان واحد، لتمنح الفرق المالية رؤية واضحة وفورية.', 'FinanceHub is a dashboard that gathers accounts, expenses and investments in one place, giving finance teams a clear, instant view.'),
      t('صمّمنا وطوّرنا المنصة بالكامل مع التركيز على الأمان وسهولة قراءة الأرقام.', 'We designed and developed the whole platform with a focus on security and easy-to-read numbers.'),
    ],
    challenge: t('كانت الفرق تعتمد على جداول متفرقة تستغرق ساعات لتجميعها، وكانت التقارير عرضة للأخطاء وتأتي متأخرة.', 'Teams relied on scattered spreadsheets that took hours to compile, and reports were error-prone and late.'),
    solution: t('بنينا لوحة موحّدة تسحب البيانات تلقائياً وتعرضها برسوم واضحة، مع صلاحيات دقيقة وتقارير جاهزة للتصدير.', 'We built a unified dashboard that pulls data automatically and shows it in clear charts, with granular permissions and export-ready reports.'),
    features: [t('رسوم بيانية تفاعلية', 'Interactive charts'), t('صلاحيات حسب الدور', 'Role-based permissions'), t('تقارير قابلة للتصدير', 'Exportable reports'), t('تنبيهات ذكية', 'Smart alerts')],
    results: [
      { to: 70, prefix: '-', suffix: '%', label: t('وقت إعداد التقارير', 'Reporting time') },
      { to: 99, prefix: '', suffix: '%', label: t('دقة البيانات', 'Data accuracy') },
      { to: 5, prefix: '+', suffix: '', label: t('فرق تستخدم المنصة', 'Teams using the platform') },
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    liveUrl: '',
  },
  {
    slug: 'appcraft',
    title: 'AppCraft',
    category: 'uiux',
    art: 'app',
    gallery: ['app', 'phones', 'brand'],
    year: '2026',
    client: t('وكالة إبداعية', 'A creative agency'),
    duration: t('٤ أشهر', '4 months'),
    services: [t('تصميم UI/UX', 'UI/UX design'), t('تطوير تطبيقات', 'App development')],
    summary: t('تطبيق مخصص لوكالة إبداعية يركّز على تجربة مستخدم استثنائية.', 'A custom app for a creative agency with a focus on exceptional user experience.'),
    overview: [
      t('AppCraft تطبيق داخلي يساعد فريق الوكالة على إدارة المشاريع والملفات والتغذية الراجعة من العملاء في مكان واحد.', 'AppCraft is an internal app that helps the agency team manage projects, files and client feedback in one place.'),
      t('ركّزنا على بساطة التصميم وسرعة الاستخدام، فالفريق يقضي فيه ساعات كل يوم.', 'We focused on simple design and speed, since the team spends hours in it every day.'),
    ],
    challenge: t('كان الفريق يتنقل بين عدة أدوات منفصلة لإدارة العمل، مما يسبب ضياع الملفات وتكرار الجهد وتأخر التسليم.', 'The team juggled several separate tools to manage work, causing lost files, duplicated effort and late deliveries.'),
    solution: t('دمجنا إدارة المهام والملفات والمراجعات في تطبيق واحد بواجهة بسيطة، مع إشعارات ذكية وسير عمل قابل للتخصيص.', 'We combined task, file and review management into one app with a simple interface, smart notifications and customizable workflows.'),
    features: [t('لوحات مهام مرنة', 'Flexible task boards'), t('مراجعة الملفات والتعليق عليها', 'File review and comments'), t('إشعارات ذكية', 'Smart notifications'), t('تطبيق للجوال والويب', 'Mobile and web apps')],
    results: [
      { to: 35, prefix: '-', suffix: '%', label: t('وقت التسليم', 'Delivery time') },
      { to: 5, prefix: '', suffix: '→1', label: t('أدوات في أداة واحدة', 'Tools merged into one') },
      { to: 92, prefix: '', suffix: '%', label: t('رضا الفريق', 'Team satisfaction') },
    ],
    tools: ['React Native', 'Figma', 'Firebase', 'Lottie'],
    liveUrl: '',
  },
];

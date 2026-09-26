/* =============================================================================
   RCAI — Research Committee (AI & DS)  ·  VENUE DATA
   =============================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE.

   To ADD a conference or journal:
     1. Copy an existing { ... } block (including the comma at the end).
     2. Paste it into the CONFERENCES or JOURNALS list below.
     3. Change the values. Save the file. Commit on GitHub. Done.

   FIELD NOTES
     - id:        a short unique code, lowercase, no spaces (e.g. "neurips27").
     - categories: one or more IDs from the CATEGORIES list at the top.
                   These control which sub-field pages the venue appears on.
     - scope:     "international" or "national".
     - deadline:  submission / paper CLOSE date in "YYYY-MM-DD" format.
                  The website automatically shows a live countdown and marks
                  entries as "Closing soon" or "Closed" based on this date.
     - link:      full URL to the official call-for-papers / venue page.

   Dates below are indicative of each venue's typical cycle and should be
   verified against the official website before circulating to students.
   ============================================================================= */

/* ---- AI & Data Science sub-fields (used for categorisation & filtering) ----
   'icon' is a keyword that maps to a line-art icon drawn by the site. Available
   keywords: chip, layers, chat, eye, spark, database, bars, trend, shield, atom,
   target, mic, health, robot, book (book is the default fallback). */
const CATEGORIES = [
  { id: "ml",       name: "Machine Learning",              icon: "chip",     blurb: "Learning theory, optimisation, general ML methods." },
  { id: "dl",       name: "Deep Learning",                 icon: "layers",   blurb: "Neural architectures, representation learning." },
  { id: "nlp",      name: "Natural Language Processing",   icon: "chat",     blurb: "Language models, text, dialogue, translation." },
  { id: "cv",       name: "Computer Vision",               icon: "eye",      blurb: "Image & video understanding, recognition." },
  { id: "genai",    name: "Generative AI & LLMs",          icon: "spark",    blurb: "Foundation models, diffusion, generation." },
  { id: "dm",       name: "Data Mining & Big Data",        icon: "database", blurb: "Knowledge discovery, mining, large-scale data." },
  { id: "ds",       name: "Data Science & Analytics",      icon: "bars",     blurb: "Analytics, statistics, applied data science." },
  { id: "ts",       name: "Time Series & Forecasting",     icon: "trend",    blurb: "Sequential data, financial forecasting." },
  { id: "xai",      name: "Trustworthy & Explainable AI",  icon: "shield",   blurb: "Interpretability, fairness, robustness, safety." },
  { id: "qml",      name: "Quantum Machine Learning",      icon: "atom",     blurb: "Quantum & hybrid quantum-classical learning." },
  { id: "rl",       name: "Reinforcement Learning",        icon: "target",   blurb: "Agents, control, decision making." },
  { id: "speech",   name: "Speech & Signal Processing",    icon: "mic",      blurb: "Audio, speech, signal analysis." },
  { id: "health",   name: "AI in Healthcare & Bio",        icon: "health",   blurb: "Medical imaging, bioinformatics, health AI." },
  { id: "robotics", name: "Robotics & Autonomous Systems", icon: "robot",    blurb: "Perception, planning, autonomy." }
];

/* ============================== CONFERENCES ================================ */
const CONFERENCES = [
  {
    id: "neurips27",
    name: "Conference on Neural Information Processing Systems",
    acronym: "NeurIPS 2027",
    scope: "international",
    categories: ["ml", "dl", "genai", "rl"],
    country: "United States",
    city: "San Diego, CA",
    host: "NeurIPS Foundation",
    venue: "Proceedings of NeurIPS (curran / OpenReview)",
    rank: "CORE A*",
    dates: "Dec 2027",
    deadline: "2027-05-13",
    abstractDeadline: "2027-05-06",
    link: "https://neurips.cc/",
    notes: "Flagship venue for machine learning and computational neuroscience."
  },
  {
    id: "icml27",
    name: "International Conference on Machine Learning",
    acronym: "ICML 2027",
    scope: "international",
    categories: ["ml", "dl", "genai"],
    country: "Rotating (TBA)",
    city: "TBA",
    host: "International Machine Learning Society (IMLS)",
    venue: "Proceedings of Machine Learning Research (PMLR)",
    rank: "CORE A*",
    dates: "Jul 2027",
    deadline: "2027-01-28",
    abstractDeadline: "2027-01-21",
    link: "https://icml.cc/",
    notes: "Premier ML conference; PMLR-indexed proceedings."
  },
  {
    id: "iclr27",
    name: "International Conference on Learning Representations",
    acronym: "ICLR 2027",
    scope: "international",
    categories: ["dl", "ml", "genai"],
    country: "Rotating (TBA)",
    city: "TBA",
    host: "ICLR",
    venue: "OpenReview Proceedings",
    rank: "CORE A*",
    dates: "Apr 2027",
    deadline: "2026-09-24",
    abstractDeadline: "2026-09-17",
    link: "https://iclr.cc/",
    notes: "Open-review deep learning venue; strong on representation learning."
  },
  {
    id: "acl27",
    name: "Annual Meeting of the Association for Computational Linguistics",
    acronym: "ACL 2027",
    scope: "international",
    categories: ["nlp", "genai"],
    country: "TBA",
    city: "TBA",
    host: "Association for Computational Linguistics",
    venue: "ACL Anthology",
    rank: "CORE A*",
    dates: "Jul 2027",
    deadline: "2027-02-15",
    link: "https://www.aclweb.org/",
    notes: "Top NLP venue; uses ARR (ACL Rolling Review) for submissions."
  },
  {
    id: "emnlp26",
    name: "Conference on Empirical Methods in Natural Language Processing",
    acronym: "EMNLP 2026",
    scope: "international",
    categories: ["nlp", "genai"],
    country: "TBA",
    city: "TBA",
    host: "Association for Computational Linguistics (SIGDAT)",
    venue: "ACL Anthology",
    rank: "CORE A*",
    dates: "Nov 2026",
    deadline: "2026-10-15",
    link: "https://2026.emnlp.org/",
    notes: "Empirical NLP methods; submissions via ACL Rolling Review."
  },
  {
    id: "cvpr27",
    name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    acronym: "CVPR 2027",
    scope: "international",
    categories: ["cv", "dl", "genai"],
    country: "United States",
    city: "TBA",
    host: "IEEE / CVF",
    venue: "IEEE Xplore / CVF Open Access",
    rank: "CORE A*",
    dates: "Jun 2027",
    deadline: "2026-11-14",
    link: "https://cvpr.thecvf.com/",
    notes: "Leading computer vision conference."
  },
  {
    id: "iccv27",
    name: "IEEE/CVF International Conference on Computer Vision",
    acronym: "ICCV 2027",
    scope: "international",
    categories: ["cv", "dl"],
    country: "TBA",
    city: "TBA",
    host: "IEEE / CVF",
    venue: "IEEE Xplore / CVF Open Access",
    rank: "CORE A*",
    dates: "Oct 2027",
    deadline: "2027-03-08",
    link: "https://iccv.thecvf.com/",
    notes: "Biennial flagship vision venue."
  },
  {
    id: "aaai27",
    name: "AAAI Conference on Artificial Intelligence",
    acronym: "AAAI 2027",
    scope: "international",
    categories: ["ml", "nlp", "cv", "rl", "xai"],
    country: "United States",
    city: "TBA",
    host: "Association for the Advancement of AI",
    venue: "AAAI Press / Proceedings",
    rank: "CORE A*",
    dates: "Feb 2027",
    deadline: "2026-08-15",
    abstractDeadline: "2026-08-08",
    link: "https://aaai.org/conference/aaai/",
    notes: "Broad AI conference spanning many sub-fields."
  },
  {
    id: "ijcai27",
    name: "International Joint Conference on Artificial Intelligence",
    acronym: "IJCAI 2027",
    scope: "international",
    categories: ["ml", "rl", "xai", "robotics"],
    country: "TBA",
    city: "TBA",
    host: "IJCAI Organization",
    venue: "IJCAI Proceedings",
    rank: "CORE A*",
    dates: "Aug 2027",
    deadline: "2027-01-20",
    link: "https://www.ijcai.org/",
    notes: "Long-running general AI conference."
  },
  {
    id: "kdd27",
    name: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    acronym: "KDD 2027",
    scope: "international",
    categories: ["dm", "ds", "ml"],
    country: "TBA",
    city: "TBA",
    host: "ACM SIGKDD",
    venue: "ACM Digital Library",
    rank: "CORE A*",
    dates: "Aug 2027",
    deadline: "2027-02-08",
    link: "https://www.kdd.org/",
    notes: "Premier data mining & knowledge discovery venue."
  },
  {
    id: "icdm26",
    name: "IEEE International Conference on Data Mining",
    acronym: "ICDM 2026",
    scope: "international",
    categories: ["dm", "ds"],
    country: "TBA",
    city: "TBA",
    host: "IEEE",
    venue: "IEEE Xplore",
    rank: "CORE A*",
    dates: "Dec 2026",
    deadline: "2026-09-15",
    link: "https://www.data-mining.org/",
    notes: "Well-regarded IEEE data mining conference."
  },
  {
    id: "aistats27",
    name: "International Conference on Artificial Intelligence and Statistics",
    acronym: "AISTATS 2027",
    scope: "international",
    categories: ["ml", "ds", "ts"],
    country: "TBA",
    city: "TBA",
    host: "AISTATS",
    venue: "Proceedings of Machine Learning Research (PMLR)",
    rank: "CORE A",
    dates: "Apr 2027",
    deadline: "2026-10-08",
    link: "https://aistats.org/",
    notes: "Intersection of AI, machine learning and statistics."
  },
  {
    id: "icassp27",
    name: "IEEE International Conference on Acoustics, Speech and Signal Processing",
    acronym: "ICASSP 2027",
    scope: "international",
    categories: ["speech", "dl"],
    country: "TBA",
    city: "TBA",
    host: "IEEE Signal Processing Society",
    venue: "IEEE Xplore",
    rank: "CORE B",
    dates: "May 2027",
    deadline: "2026-09-17",
    link: "https://2027.ieeeicassp.org/",
    notes: "Flagship signal & speech processing conference."
  },
  {
    id: "qce27",
    name: "IEEE International Conference on Quantum Computing and Engineering",
    acronym: "IEEE QCE 2027",
    scope: "international",
    categories: ["qml", "ml"],
    country: "United States",
    city: "TBA",
    host: "IEEE Quantum",
    venue: "IEEE Xplore",
    rank: "Emerging",
    dates: "Sep 2027",
    deadline: "2027-04-01",
    link: "https://qce.quantum.ieee.org/",
    notes: "Quantum computing & quantum machine learning venue."
  },

  /* ------------------------ NATIONAL (Pakistan) --------------------------- */
  {
    id: "fit26",
    name: "Frontiers of Information Technology",
    acronym: "FIT 2026",
    scope: "national",
    categories: ["ml", "dm", "cv", "nlp"],
    country: "Pakistan",
    city: "Islamabad",
    host: "COMSATS University Islamabad (rotating hosts)",
    venue: "IEEE Xplore",
    rank: "HEC Recognised · IEEE",
    dates: "Dec 2026",
    deadline: "2026-09-30",
    link: "http://fit.edu.pk/",
    notes: "Long-running Pakistani IEEE-indexed CS/IT conference."
  },
  {
    id: "inmic26",
    name: "IEEE International Multi-topic Conference",
    acronym: "INMIC 2026",
    scope: "national",
    categories: ["ml", "ds", "cv"],
    country: "Pakistan",
    city: "Lahore",
    host: "IEEE Pakistan Chapters (rotating)",
    venue: "IEEE Xplore",
    rank: "HEC Recognised · IEEE",
    dates: "Nov 2026",
    deadline: "2026-09-20",
    link: "https://www.ieep.org.pk/",
    notes: "Multi-topic engineering & computing conference."
  },
  {
    id: "icodt2-27",
    name: "International Conference on Digital Futures and Transformative Technologies",
    acronym: "ICoDT² 2027",
    scope: "national",
    categories: ["ds", "ml", "genai"],
    country: "Pakistan",
    city: "Islamabad",
    host: "Air University / partner institutions",
    venue: "IEEE Xplore",
    rank: "HEC Recognised · IEEE",
    dates: "Mar 2027",
    deadline: "2026-12-15",
    link: "https://www.au.edu.pk/",
    notes: "Digital transformation, data science and emerging tech."
  },
  {
    id: "icai27",
    name: "International Conference on Artificial Intelligence",
    acronym: "ICAI 2027",
    scope: "national",
    categories: ["ml", "dl", "xai"],
    country: "Pakistan",
    city: "Islamabad",
    host: "MAJU / partner institutions",
    venue: "IEEE Xplore",
    rank: "HEC Recognised · IEEE",
    dates: "Feb 2027",
    deadline: "2026-11-01",
    link: "https://icai.org.pk/",
    notes: "Applied AI conference hosted in Pakistan."
  }
];

/* ================================ JOURNALS ================================= */
/* Journals accept submissions on a rolling basis unless a Special Issue (SI)
   deadline is listed. Where a 'deadline' is given it refers to an open Special
   Issue call; otherwise 'deadline' is null and the venue shows as "Rolling". */
const JOURNALS = [
  {
    id: "tpami",
    name: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    acronym: "IEEE TPAMI",
    scope: "international",
    categories: ["cv", "ml", "dl"],
    country: "United States",
    publisher: "IEEE",
    venue: "IEEE Xplore",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.computer.org/csdl/journal/tp",
    notes: "Top-tier journal for computer vision and pattern analysis.",
    aims: "Publishes articles on all traditional areas of computer vision and image understanding, pattern analysis and recognition, and selected areas of machine intelligence, with emphasis on machine learning for pattern analysis. Also covers visual search, document and handwriting analysis, medical image analysis, video and image sequence analysis, content-based retrieval of image and video, face and gesture recognition, and specialized hardware/software architectures."
  },
  {
    id: "tnnls",
    name: "IEEE Transactions on Neural Networks and Learning Systems",
    acronym: "IEEE TNNLS",
    scope: "international",
    categories: ["dl", "ml", "xai"],
    country: "United States",
    publisher: "IEEE",
    venue: "IEEE Xplore",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://cis.ieee.org/publications/t-neural-networks-and-learning-systems",
    notes: "Leading journal for neural networks and learning systems."
  },
  {
    id: "jmlr",
    name: "Journal of Machine Learning Research",
    acronym: "JMLR",
    scope: "international",
    categories: ["ml", "dl"],
    country: "United States",
    publisher: "JMLR / MIT",
    venue: "JMLR (Open Access)",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.jmlr.org/",
    notes: "Open-access flagship ML journal, no publication charges.",
    aims: "An international forum for high-quality scholarly articles in all areas of machine learning: new principled algorithms with empirical validation, theoretical and experimental studies of learning in intelligent systems, applications that illuminate strengths and weaknesses of methods, formalization of new learning tasks and evaluation methods, new analytical frameworks, computational models of natural learning, and surveys. Open access."
  },
  {
    id: "pr",
    name: "Pattern Recognition",
    acronym: "Pattern Recognition",
    scope: "international",
    categories: ["cv", "ml", "dl"],
    country: "United Kingdom",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/pattern-recognition",
    notes: "Established venue for pattern recognition & vision.",
    aims: "Original contributions to the theory, methodology and application of pattern recognition, which underpins computer vision, image processing, text and document analysis and neural networks; closely akin to machine learning, with applications in biometrics, bioinformatics, multimedia data analysis and data science."
  },
  {
    id: "nn",
    name: "Neural Networks",
    acronym: "Neural Networks",
    scope: "international",
    categories: ["dl", "ml"],
    country: "United Kingdom",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/neural-networks",
    notes: "Official journal of INNS, ENNS and JNNS.",
    aims: "All aspects of neural networks and related approaches to computational intelligence: behavioral and brain modeling, learning algorithms, mathematical and computational analyses, and engineering and technological applications. Sections include Cognitive Science, Neuroscience, Learning Systems, Mathematical and Computational Analysis, and Engineering and Applications."
  },
  {
    id: "eswa",
    name: "Expert Systems with Applications",
    acronym: "ESWA",
    scope: "international",
    categories: ["ml", "ds", "ts", "xai", "nlp", "cv"],
    country: "United Kingdom",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
    notes: "Applied AI; strong fit for financial forecasting & applied ML."
  },
  {
    id: "kbs",
    name: "Knowledge-Based Systems",
    acronym: "KBS",
    scope: "international",
    categories: ["ml", "dm", "xai", "nlp"],
    country: "Netherlands",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/knowledge-based-systems",
    notes: "Knowledge-based and intelligent systems."
  },
  {
    id: "insci",
    name: "Information Sciences",
    acronym: "Information Sciences",
    scope: "international",
    categories: ["ml", "dm", "ds", "nlp", "cv"],
    country: "Netherlands",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/information-sciences",
    notes: "Broad-scope informatics and intelligent systems.",
    aims: "Original, innovative research results in information, knowledge engineering and intelligent systems, with balanced coverage of theory and practice across the discipline of information sciences; readers span engineering, mathematics, statistics, computer science and cognitive science."
  },
  {
    id: "asoc",
    name: "Applied Soft Computing",
    acronym: "ASOC",
    scope: "international",
    categories: ["ml", "ts", "ds"],
    country: "Netherlands",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/applied-soft-computing",
    notes: "Soft computing, optimisation and applied intelligence."
  },
  {
    id: "neucom",
    name: "Neurocomputing",
    acronym: "Neurocomputing",
    scope: "international",
    categories: ["dl", "ml", "cv", "nlp", "speech", "health"],
    country: "Netherlands",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/neurocomputing",
    notes: "Neural computing theory and applications.",
    aims: "Theoretical contributions on neural networks and learning systems — architectures, learning methods, network dynamics, self-organization and biological neural modelling — and interdisciplinary topics with artificial intelligence, machine learning, fuzzy logic, genetic algorithms and pattern recognition; hardware and software for neurocomputing; and applications in signal, speech and image processing, computer vision, control, robotics, optimization, scheduling and financial forecasting."
  },
  {
    id: "csur",
    name: "ACM Computing Surveys",
    acronym: "ACM CSUR",
    scope: "international",
    categories: ["ml", "ds", "xai", "nlp", "cv", "genai"],
    country: "United States",
    publisher: "ACM",
    venue: "ACM Digital Library",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://dl.acm.org/journal/csur",
    notes: "High-impact survey journal across computing.",
    aims: "Comprehensive, readable surveys and tutorial papers that give guided tours through the literature, help researchers and professionals develop perspectives and identify trends in complex technologies, and bridge existing and emerging technologies (such as machine learning) with a variety of science and engineering domains."
  },
  {
    id: "access",
    name: "IEEE Access",
    acronym: "IEEE Access",
    scope: "international",
    categories: ["ml", "ds", "cv", "health", "nlp", "speech", "robotics"],
    country: "United States",
    publisher: "IEEE",
    venue: "IEEE Xplore (Open Access)",
    indexing: "JCR Q1/Q2 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://ieeeaccess.ieee.org/",
    notes: "Multidisciplinary open-access; fast review, article charges apply."
  },
  {
    id: "ijf",
    name: "International Journal of Forecasting",
    acronym: "IJF",
    scope: "international",
    categories: ["ts", "ds", "ml"],
    country: "Netherlands",
    publisher: "Elsevier",
    venue: "ScienceDirect",
    indexing: "JCR Q1 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.sciencedirect.com/journal/international-journal-of-forecasting",
    notes: "Premier venue for forecasting, incl. financial time series."
  },
  {
    id: "qmi",
    name: "Quantum Machine Intelligence",
    acronym: "Quantum Machine Intelligence",
    scope: "international",
    categories: ["qml", "ml"],
    country: "Germany",
    publisher: "Springer",
    venue: "SpringerLink",
    indexing: "Scopus · ESCI",
    rank: "Q1/Q2",
    deadline: null,
    link: "https://www.springer.com/journal/42484",
    notes: "Quantum-enhanced and hybrid quantum-classical learning."
  },
  {
    id: "mlj",
    name: "Machine Learning (Springer)",
    acronym: "Machine Learning",
    scope: "international",
    categories: ["ml", "dl", "rl", "nlp"],
    country: "Netherlands",
    publisher: "Springer",
    venue: "SpringerLink",
    indexing: "JCR Q1/Q2 · Scopus · HEC W",
    rank: "Q1",
    deadline: null,
    link: "https://www.springer.com/journal/10994",
    notes: "Long-established core ML journal.",
    aims: "Computational approaches to learning: classification, regression, recognition and prediction, problem solving and planning, reasoning and inference, data mining, information retrieval, natural language processing, vision and speech, robotics and control, and optimization; supervised and unsupervised methods, reinforcement learning, evolutionary methods, ensembles, clustering and multi-agent learning."
  },

  /* ---- Additional Q1 CS / AI / DS journals (SJR quartile + impact factor
     sourced from journalseeker.com, which re-aggregates SciMago/Scopus data).
     'impact' is the reported Journal Impact Factor; links go to SciMago. ---- */
  { id:"nmi", name:"Nature Machine Intelligence", acronym:"Nat. Mach. Intell.", scope:"international",
    categories:["ml","dl","genai"], country:"United Kingdom", publisher:"Springer Nature", venue:"SpringerLink",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"29.8", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=25225839&tip=issn", notes:"Top venue for machine intelligence research." },
  { id:"infofusion", name:"Information Fusion", acronym:"Inf. Fusion", scope:"international",
    categories:["ml","dl","ds"], country:"Netherlands", publisher:"Elsevier", venue:"ScienceDirect",
    indexing:"SJR Q1 · Scopus · HEC W", rank:"Q1", impact:"17.4", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=15662535&tip=issn", notes:"Multi-source information & data fusion." },
  { id:"natcompsci", name:"Nature Computational Science", acronym:"Nat. Comput. Sci.", scope:"international",
    categories:["ds","ml"], country:"United Kingdom", publisher:"Springer Nature", venue:"SpringerLink",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"20.3", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=26628457&tip=issn", notes:"Computational science across disciplines." },
  { id:"jsac", name:"IEEE Journal on Selected Areas in Communications", acronym:"IEEE JSAC", scope:"international",
    categories:["ds"], country:"United States", publisher:"IEEE", venue:"IEEE Xplore",
    indexing:"SJR Q1 · Scopus · HEC W", rank:"Q1", impact:"16.8", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=07338716&tip=issn", notes:"Leading communications & networking journal." },
  { id:"procieee", name:"Proceedings of the IEEE", acronym:"Proc. IEEE", scope:"international",
    categories:["ds","ml"], country:"United States", publisher:"IEEE", venue:"IEEE Xplore",
    indexing:"SJR Q1 · Scopus · HEC W", rank:"Q1", impact:"30.9", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=00189219&tip=issn", notes:"Broad, high-impact reviews across engineering & CS." },
  { id:"scirobotics", name:"Science Robotics", acronym:"Sci. Robotics", scope:"international",
    categories:["robotics","ml"], country:"United States", publisher:"AAAS", venue:"Science",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"25.5", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=24709476&tip=issn", notes:"Flagship robotics research journal." },
  { id:"prxquantum", name:"PRX Quantum", acronym:"PRX Quantum", scope:"international",
    categories:["qml"], country:"United States", publisher:"American Physical Society", venue:"APS",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"12.3", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=26913399&tip=issn", notes:"Quantum information science & engineering." },
  { id:"caeai2", name:"Computers and Education: Artificial Intelligence", acronym:"Comput. Educ.: AI", scope:"international",
    categories:["ml","ds"], country:"Netherlands", publisher:"Elsevier", venue:"ScienceDirect",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"23.4", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=2666920X&tip=issn", notes:"AI applications in education." },
  { id:"ijim", name:"International Journal of Information Management", acronym:"IJIM", scope:"international",
    categories:["dm","ds"], country:"United Kingdom", publisher:"Elsevier", venue:"ScienceDirect",
    indexing:"SJR Q1 · Scopus · HEC W", rank:"Q1", impact:"31.0", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=02684012&tip=issn", notes:"Information & data management." },
  { id:"isr", name:"Information Systems Research", acronym:"ISR", scope:"international",
    categories:["ds","dm"], country:"United States", publisher:"INFORMS", venue:"INFORMS",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"7.8", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=10477047&tip=issn", notes:"Premier information systems journal." },
  { id:"tog", name:"ACM Transactions on Graphics", acronym:"ACM TOG", scope:"international",
    categories:["cv"], country:"United States", publisher:"ACM", venue:"ACM Digital Library",
    indexing:"SJR Q1 · Scopus · HEC W", rank:"Q1", impact:"13.0", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=07300301&tip=issn", notes:"Computer graphics (SIGGRAPH) venue." },
  { id:"radai", name:"Radiology: Artificial Intelligence", acronym:"Radiol. AI", scope:"international",
    categories:["health","ml","cv"], country:"United States", publisher:"RSNA", venue:"RSNA",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"20.1", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=26386100&tip=issn", notes:"AI in medical imaging." },
  { id:"advintsys", name:"Advanced Intelligent Systems", acronym:"Adv. Intell. Syst.", scope:"international",
    categories:["robotics","ml"], country:"Germany", publisher:"Wiley", venue:"Wiley Online Library",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"6.7", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=26404567&tip=issn", notes:"Intelligent systems & robotics." },
  { id:"grsm", name:"IEEE Geoscience and Remote Sensing Magazine", acronym:"IEEE GRSM", scope:"international",
    categories:["cv","ds"], country:"United States", publisher:"IEEE", venue:"IEEE Xplore",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"13.7", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=21686831&tip=issn", notes:"Remote sensing & image analysis." },
  { id:"call", name:"Computer Assisted Language Learning", acronym:"CALL", scope:"international",
    categories:["nlp"], country:"United Kingdom", publisher:"Taylor & Francis", venue:"Taylor & Francis Online",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"8.7", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=09588221&tip=issn", notes:"Language technology & learning." },
  { id:"sle", name:"Smart Learning Environments", acronym:"Smart Learn. Environ.", scope:"international",
    categories:["ds","ml"], country:"Germany", publisher:"SpringerOpen", venue:"SpringerLink",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"17.9", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=21967091&tip=issn", notes:"Data-driven learning environments." },
  { id:"ecoinf", name:"Ecological Informatics", acronym:"Ecol. Inform.", scope:"international",
    categories:["ds","ml"], country:"Netherlands", publisher:"Elsevier", venue:"ScienceDirect",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"8.5", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=15749541&tip=issn", notes:"Computational methods in ecology." },
  { id:"ploscb", name:"PLOS Computational Biology", acronym:"PLOS Comput. Biol.", scope:"international",
    categories:["health","ds"], country:"United States", publisher:"PLOS", venue:"PLOS",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"3.7", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=1553734X&tip=issn", notes:"Computational biology & bioinformatics." },
  { id:"jksucis", name:"Journal of King Saud University – Computer and Information Sciences", acronym:"JKSU-CIS", scope:"international",
    categories:["ds","ml"], country:"Saudi Arabia", publisher:"Springer", venue:"SpringerLink",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"6.4", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=Journal%20of%20King%20Saud%20University%20Computer%20and%20Information%20Sciences", notes:"Broad computer & information sciences." },
  { id:"aimdpi", name:"AI (MDPI)", acronym:"AI", scope:"international",
    categories:["ml","genai"], country:"Switzerland", publisher:"MDPI", venue:"MDPI",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"6.5", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=AI%20MDPI", notes:"Open-access AI research." },
  { id:"hdsr", name:"Harvard Data Science Review", acronym:"HDSR", scope:"international",
    categories:["ds"], country:"United States", publisher:"MIT Press", venue:"MIT Press",
    indexing:"SJR Q1 · Scopus", rank:"Q1", impact:"4.8", deadline:null,
    link:"https://www.scimagojr.com/journalsearch.php?q=Harvard%20Data%20Science%20Review", notes:"Data science methods & practice." }
];

/* ==================== SPECIAL-ISSUE / EXTRA CALLS (CFP) ==================== */
/* Optional: stand-alone open calls (journal special issues, workshops) that
   are not tied to a full conference or a rolling journal above. These appear
   on the Call for Papers page. Add/remove freely. */
const SPECIAL_CALLS = [
  {
    id: "si-ijf-finml",
    name: "Special Issue: Machine Learning for Financial Forecasting",
    acronym: "ESWA · Special Issue",
    kind: "Journal Special Issue",
    scope: "international",
    categories: ["ts", "ml", "ds"],
    country: "United Kingdom",
    host: "Expert Systems with Applications (Elsevier)",
    venue: "ScienceDirect",
    deadline: "2026-12-01",
    link: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
    notes: "Example special-issue call — replace with a live SI when available."
  },
  {
    id: "si-tnnls-trust",
    name: "Special Issue: Trustworthy and Explainable Deep Learning",
    acronym: "IEEE TNNLS · Special Issue",
    kind: "Journal Special Issue",
    scope: "international",
    categories: ["xai", "dl"],
    country: "United States",
    host: "IEEE TNNLS",
    venue: "IEEE Xplore",
    deadline: "2027-01-31",
    link: "https://cis.ieee.org/publications/t-neural-networks-and-learning-systems",
    notes: "Example special-issue call — replace with a live SI when available."
  },

  /* ---- Elsevier (ScienceDirect) — Computer Science journal calls for papers ----
     Each links to the journal's live call-for-papers page, which lists its open
     special issues and their submission deadlines. */
  { id:"cfp-neurocomputing", name:"Neurocomputing — Open Calls for Papers", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["dl","ml","cv"],
    country:"Netherlands", host:"Neurocomputing", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/neurocomputing/about/call-for-papers",
    notes:"Open special issues for Neurocomputing — see the page for topics and submission deadlines." },
  { id:"cfp-eaai", name:"Engineering Applications of Artificial Intelligence — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","xai","robotics"],
    country:"United Kingdom", host:"Eng. Applications of Artificial Intelligence", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-patrec", name:"Pattern Recognition — Open Calls for Papers", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["cv","ml","dl"],
    country:"United Kingdom", host:"Pattern Recognition", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/pattern-recognition/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-insci", name:"Information Sciences — Open Calls for Papers", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","dm","ds"],
    country:"Netherlands", host:"Information Sciences", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/information-sciences/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-jocs", name:"Journal of Computational Science — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds","ml"],
    country:"Netherlands", host:"Journal of Computational Science", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/journal-of-computational-science/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-caie", name:"Computers & Industrial Engineering — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds","ts"],
    country:"United Kingdom", host:"Computers & Industrial Engineering", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/computers-and-industrial-engineering/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-ist", name:"Information and Software Technology — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds"],
    country:"Netherlands", host:"Information and Software Technology", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/information-and-software-technology/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-cag", name:"Computers & Graphics — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["cv"],
    country:"United Kingdom", host:"Computers & Graphics", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/computers-and-graphics/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-comcom", name:"Computer Communications — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds"],
    country:"Netherlands", host:"Computer Communications", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/computer-communications/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-caeai", name:"Computers and Education: Artificial Intelligence — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","ds"],
    country:"Netherlands", host:"Computers and Education: AI", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/computers-and-education-artificial-intelligence/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-energyai", name:"Energy and AI — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","ds"],
    country:"Netherlands", host:"Energy and AI", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/energy-and-ai/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-geodataai", name:"Geodata and AI — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","cv","ds"],
    country:"Netherlands", host:"Geodata and AI", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/geodata-and-ai/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },
  { id:"cfp-jcss", name:"Journal of Computer and System Sciences — Open Calls", acronym:"Elsevier · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds"],
    country:"United States", host:"J. of Computer and System Sciences", venue:"Elsevier · ScienceDirect", deadline:null,
    link:"https://www.sciencedirect.com/journal/journal-of-computer-and-system-sciences/about/call-for-papers",
    notes:"Open special issues — see the page for topics and submission deadlines." },

  /* ---- Springer (SpringerLink) — Computer Science journal calls for papers ---- */
  { id:"cfp-sncs", name:"SN Computer Science — Collections & Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds","ml"],
    country:"Germany", host:"SN Computer Science", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/42979/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-ijdsa", name:"Int. Journal of Data Science and Analytics — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds","dm","ml"],
    country:"Germany", host:"IJ of Data Science and Analytics", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/41060/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-ijcv", name:"International Journal of Computer Vision — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["cv","dl"],
    country:"United States", host:"Int. Journal of Computer Vision", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/11263/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-jivp", name:"EURASIP J. on Image and Video Processing — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["cv","speech"],
    country:"Germany", host:"EURASIP J. Image and Video Processing", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/13640/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-discai", name:"Discover Artificial Intelligence — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","genai"],
    country:"Germany", host:"Discover Artificial Intelligence", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/44163/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-disccv", name:"Discover Computer Vision — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["cv"],
    country:"Germany", host:"Discover Computer Vision", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/44584/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-appliedintel", name:"Applied Intelligence — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ml","dl"],
    country:"United States", host:"Applied Intelligence", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/10489/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-computing", name:"Computing (Springer) — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds"],
    country:"Austria", host:"Computing", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/607/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." },
  { id:"cfp-p2p", name:"Peer-to-Peer Networking and Applications — Calls", acronym:"Springer · CFP",
    kind:"Journal Call for Papers", scope:"international", categories:["ds"],
    country:"United States", host:"Peer-to-Peer Networking and Applications", venue:"Springer · SpringerLink", deadline:null,
    link:"https://link.springer.com/journal/12083/collections",
    notes:"Open collections & calls for papers — see the page for topics and deadlines." }
];

/* ============================== PUBLICATIONS ==============================
   Latest publications by RCAI students & faculty. Shown on the Publications page,
   newest first. To add one, copy a block and edit the values.

   FIELDS
     - title:    paper title.
     - authors:  author list as one string (optional — remove the line to hide).
     - type:     "conference" or "journal".
     - venue:    where it appeared, e.g. "IEEE Access" or "FIT 2025".
     - date:     publication date, "YYYY-MM-DD".
     - abstract: short summary (a few sentences).
     - link:     URL to the paper on the publisher's site (DOI / IEEE / etc.).

   Currently populated with the publications of Dr. Ahmad Din (HoD, AI & Data
   Science, FAST-NUCES) from his official faculty profile and Google Scholar.
   'date' may be a full "YYYY-MM-DD" or just a "YYYY" year.

   PAPER OF THE MONTH: add  potm: true  to exactly ONE publication to feature it
   in the highlight box on the home page. If none is flagged, the newest is used. */
const PUBLICATIONS = [
  {
    id: "din-drl-agriculture",
    potm: true,   // ← featured as "Paper of the Month" on the home page
    title: "A Deep Reinforcement Learning based Multi-agent Area Coverage Control for Smart Agriculture",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Computers and Electrical Engineering",
    date: "2022",
    abstract: "Published in Computers and Electrical Engineering (2022), vol. 101. A deep reinforcement learning approach to multi-agent area-coverage control for smart-agriculture applications.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-iot-bfo-offloading",
    title: "A Smart Computation Offloading for IoT Applications in Edge Computing using Bacterial Foraging Optimization",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Computers and Electrical Engineering",
    date: "2022",
    abstract: "Published in Computers and Electrical Engineering (2022), vol. 102, art. 108123. Computation-offloading strategy for IoT applications in edge computing using bacterial foraging optimization.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-iot-abc-offloading",
    title: "Intelligent Computation Offloading for IoT Applications in Scalable Edge Computing using Artificial Bee Colony Optimization",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Complexity",
    date: "2021",
    abstract: "Published in Complexity (2021), vol. 2021. Intelligent computation offloading for IoT applications in scalable edge computing using artificial bee colony optimization.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-weight-init-segmentation",
    title: "A Novel Weight Initialization with Adaptive Hyper-parameters for Deep Semantic Segmentation",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Multimedia Tools and Applications",
    date: "2021",
    abstract: "Published in Multimedia Tools and Applications (2021). A novel weight-initialization scheme with adaptive hyper-parameters for deep semantic segmentation networks.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-brain-tumor-aco",
    title: "A Unified Design of ACO and Skewness based Brain Tumor Segmentation and Classification from MRI Scans",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Journal of Control Engineering and Applied Informatics",
    date: "2020",
    abstract: "Published in Journal of Control Engineering and Applied Informatics (2020), vol. 22(2), pp. 43-55. A unified ACO- and skewness-based method for brain-tumor segmentation and classification from MRI.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-diabetic-retinopathy",
    title: "Deep Learning Techniques for Diabetic Retinopathy Detection",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Current Medical Imaging",
    date: "2020",
    abstract: "Published in Current Medical Imaging (2020). A study of deep-learning techniques for automated detection of diabetic retinopathy.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-data-smoothing-segmentation",
    title: "Impact of Data Smoothing on Semantic Segmentation",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Neural Computing and Applications",
    date: "2020",
    abstract: "Published in Neural Computing and Applications (2020). An analysis of the impact of data smoothing on deep semantic segmentation performance.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-powerline-multipath",
    title: "Deterministic Multipath Model for the Power-Line Communication Channel",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "National Academy Science Letters",
    date: "2020",
    abstract: "Published in National Academy Science Letters (2020). A deterministic multipath model for characterising the power-line communication channel.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-smart-grid-ga",
    title: "Energy Optimization in a Smart Community Grid System Using Genetic Algorithm",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "International Journal of Communication Systems",
    date: "2019",
    abstract: "Published in the International Journal of Communication Systems (2019). Genetic-algorithm-based energy optimization for a smart community grid system.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-swarm-robotics-comm",
    title: "Investigation on Communication Aspects of Multiple Swarm Networked Robotics",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Turkish Journal of Electrical Engineering & Computer Sciences",
    date: "2019",
    abstract: "Published in the Turkish Journal of Electrical Engineering & Computer Sciences (2019), vol. 27(3), pp. 2010-2020. An investigation into the communication aspects of multiple swarm networked robots.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-hypsometric-hunza",
    title: "Hypsometric Properties of the Mountain Landscape of the Hunza River Basin of the Karakoram Himalaya",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Journal of Mountain Science",
    date: "2018",
    abstract: "Published in the Journal of Mountain Science (2018), vol. 15(9), pp. 1881-1891. A geospatial analysis of hypsometric properties of the Hunza River Basin landscape.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-multirobot-coverage-city",
    title: "A Cognitive Agent-based Model for Multi-Robot Coverage at a City Scale",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Complex Adaptive Systems Modeling",
    date: "2017",
    abstract: "Published in Complex Adaptive Systems Modeling (2017), vol. 5(1), pp. 1-13. A cognitive agent-based model for coordinating multi-robot coverage at city scale.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-ict-urban-mobility",
    title: "Impact of ICT-Mediated Collective Awareness on Urban Mobility",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "journal",
    venue: "Complex Adaptive Systems Modeling",
    date: "2016",
    abstract: "Published in Complex Adaptive Systems Modeling (2016), vol. 4(10), pp. 1-23. A study of how ICT-mediated collective awareness affects urban mobility.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  },
  {
    id: "din-uav-landing-nn",
    title: "Embedded Low Power Controller for Autonomous Landing of Small UAVs using Neural Network",
    authors: "Ahmad Din et al. (FAST-NUCES)",
    type: "conference",
    venue: "10th International Conference on Frontiers of Information Technology (FIT)",
    date: "2012",
    abstract: "Presented at the 10th International Conference on Frontiers of Information Technology (FIT, 2012). An embedded low-power neural-network controller for autonomous landing of small UAVs.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en"
  }
];

/* ================================= BLOG ===================================
   Blog articles. The Blog page lists these; clicking one opens a full article
   page. To add a post, copy a block and edit the values.

   FIELDS
     - id:       short unique slug (used in the article's link), e.g. "my-post".
     - title:    article headline.
     - author:   byline (optional).
     - date:     "YYYY-MM-DD".
     - category: a short label shown as a tag, e.g. "Publishing Guide".
     - icon:     line-art icon keyword for the cover (see the CATEGORIES note
                 above; extra blog icons: pen).
     - image:    OPTIONAL cover image URL. If omitted, a coloured cover is drawn.
     - excerpt:  one- or two-sentence summary shown in the list.
     - body:     the article text as a list of lines. A line starting with
                 "## " becomes a heading; a line starting with "- " becomes a
                 bullet; every other line is a paragraph. Reading time is
                 calculated automatically. */
const BLOG_POSTS = [
  {
    id: "choose-the-right-conference",
    title: "How to Choose the Right Conference for Your Research Paper",
    author: "RCAI Editorial",
    date: "2026-09-02",
    category: "Publishing Guide",
    icon: "target",
    excerpt: "Not every conference is the right home for your work. A quick, practical framework for matching your paper to the right venue — by scope, ranking, deadline and cost.",
    body: [
      "Choosing where to submit is one of the most consequential decisions in the publication process. The right venue puts your work in front of the audience that will value it most; the wrong one wastes months and a submission slot. Here is a practical way to decide.",
      "## 1. Match the scope, not just the topic",
      "Read the conference's Call for Papers carefully and look at the last two years of accepted papers. A venue can list your topic in scope yet, in practice, publish work of a very different flavour — more theoretical, more applied, or focused on a particular application domain. Your paper should feel at home next to what was accepted last year.",
      "## 2. Be realistic about ranking",
      "Top-tier venues (CORE A*/A) are prestigious but highly competitive, with acceptance rates often below 25%. For early-stage work or a first paper, a strong specialised venue or a well-regarded regional conference can be a better fit and a faster path to feedback.",
      "- Aim high when the contribution is novel and thoroughly evaluated.",
      "- Choose a focused venue when the contribution is solid but incremental.",
      "- Consider a workshop to get early feedback before a full submission.",
      "## 3. Work backwards from the deadline",
      "A great venue you cannot realistically make is not a great venue for this paper. Count the weeks you genuinely have, leave time for internal review and proofreading, and be honest about whether the work will be ready.",
      "## 4. Check the practicalities",
      "Look at the publication venue (IEEE, ACM, Springer, PMLR), whether proceedings are indexed, the registration and travel cost, and whether the conference is in-person, virtual or hybrid. For students, cost and travel logistics can matter as much as prestige.",
      "Use the RCAI Conferences page to filter by region, sub-field and deadline status — it is built precisely to make this comparison quick."
    ]
  },
  {
    id: "understanding-journal-quartiles",
    title: "Understanding Journal Quartiles: Q1, Q2, Q3 and Q4 Explained",
    author: "RCAI Editorial",
    date: "2026-08-24",
    category: "Research Skills",
    icon: "bars",
    excerpt: "What do Q1 and Q2 actually mean, how are quartiles calculated, and why do they matter for your CV and your university's requirements?",
    body: [
      "If you have spent any time around research, you have heard journals described as \"Q1\" or \"Q2\". Quartiles are a simple way to rank journals within their subject category, and understanding them helps you target the right venue.",
      "## How quartiles work",
      "Within each subject category, journals are ranked by an impact metric (such as the Journal Impact Factor or CiteScore) and split into four equal groups:",
      "- Q1: the top 25% of journals in the category.",
      "- Q2: the 25–50% band.",
      "- Q3: the 50–75% band.",
      "- Q4: the bottom 25%.",
      "Because the ranking is relative to a category, the same journal can sit in different quartiles under different categories. Always check the quartile for the category most relevant to your work.",
      "## Why quartiles matter",
      "Many universities — including in Pakistan, through HEC criteria — tie graduation, promotion and funding to publishing in higher-quartile journals. A Q1 publication carries more weight on a CV and in evaluation committees than a Q3 or Q4 one.",
      "## A word of caution",
      "Quartiles are useful but blunt. A specialised Q2 journal read by exactly the right community can serve your work better than a broad Q1 outside your field. Look at scope, audience and turnaround time alongside the quartile, and always confirm a journal is genuinely indexed (Web of Science / Scopus) before submitting."
    ]
  },
  {
    id: "writing-an-abstract-that-gets-accepted",
    title: "Writing an Abstract That Gets Your Paper Noticed",
    author: "RCAI Editorial",
    date: "2026-08-11",
    category: "Writing Tips",
    icon: "pen",
    excerpt: "The abstract is the most-read and least-revised part of most papers. A reliable structure that reviewers and readers respond to.",
    body: [
      "Reviewers read your abstract first, and many readers read nothing else. Yet abstracts are often written last and in a hurry. A clear, structured abstract dramatically improves both your acceptance odds and your citation count.",
      "## A structure that works",
      "Most strong abstracts move through five moves in roughly 150–250 words:",
      "- Context: one or two sentences on the problem and why it matters.",
      "- Gap: what is missing or unsolved in existing work.",
      "- Contribution: what you did — your method or idea, stated plainly.",
      "- Evidence: the key result, with a concrete number where possible.",
      "- Impact: what this enables or changes.",
      "## Make the result concrete",
      "\"Our method performs better\" is forgettable. \"Our method improves F1 by 6.3 points over the strongest baseline on three datasets\" is not. Specific numbers signal rigour and confidence.",
      "## Common mistakes to avoid",
      "- Starting too broad (\"Since the dawn of computing…\").",
      "- Listing what the paper contains instead of what it found.",
      "- Using undefined acronyms or citations — the abstract should stand alone.",
      "- Overclaiming beyond what the evidence supports.",
      "Write the abstract last, then read it aloud. If a colleague can understand your contribution from the abstract alone, it is doing its job."
    ]
  },
  {
    id: "conference-vs-journal",
    title: "Conference or Journal: Where Should You Publish First?",
    author: "RCAI Editorial",
    date: "2026-07-28",
    category: "Publishing Guide",
    icon: "layers",
    excerpt: "In fast-moving fields like AI, the conference-vs-journal choice is not obvious. The trade-offs in speed, prestige, length and permanence.",
    body: [
      "In many disciplines journals are the primary venue, but in computer science — and especially AI — top conferences are often as prestigious as, or more prestigious than, journals. So which should you target?",
      "## Conferences: speed and community",
      "Conferences offer fast, fixed review cycles, a hard deadline that forces the work to completion, and the chance to present and network. In AI, venues like NeurIPS, ICML and CVPR are career-defining. The trade-off is strict page limits and a single, time-boxed review round.",
      "## Journals: depth and permanence",
      "Journals allow longer papers, multiple revision rounds, and a more thorough treatment. They have no fixed deadline, so you submit when ready, but review can take many months. Journal quartiles are also what many university and HEC criteria are built around.",
      "## A practical path",
      "- Publish a focused, novel result at a strong conference to establish it quickly.",
      "- Extend it — more experiments, deeper analysis — into a journal version later.",
      "- Check each venue's policy on extended versions to avoid self-plagiarism.",
      "For most students in AI and data science, a good conference paper first, extended to a journal, is a sound and common strategy."
    ]
  },
  {
    id: "peer-review-explained",
    title: "A Beginner's Guide to the Peer Review Process",
    author: "RCAI Editorial",
    date: "2026-07-15",
    category: "Research Skills",
    icon: "shield",
    excerpt: "What actually happens to your paper after you hit submit — from desk check to decision — and how to respond to reviews without losing heart.",
    body: [
      "The first time you submit a paper, peer review can feel like a black box. Understanding the steps demystifies it and helps you respond well.",
      "## The typical journey",
      "- Desk check: an editor screens for scope and basic quality; some papers are rejected here without full review.",
      "- Assignment: the paper goes to two or more expert reviewers.",
      "- Review: reviewers assess novelty, correctness, clarity and significance, then recommend a decision.",
      "- Decision: accept, minor revision, major revision, or reject.",
      "## Reading reviews constructively",
      "Harsh reviews sting, but they are feedback on the paper, not on you. Read them once, set them aside for a day, then read again looking for the underlying concern behind each comment.",
      "## Writing a response",
      "For a revision, prepare a point-by-point response letter. Quote each comment, explain what you changed, and point to the exact section. Be polite and specific even when you disagree — and when you do disagree, argue with evidence, not indignation.",
      "Rejection is normal, even for experienced researchers. Use the feedback, improve the paper, and resubmit elsewhere."
    ]
  },
  {
    id: "avoid-predatory-venues",
    title: "How to Spot and Avoid Predatory Journals and Conferences",
    author: "RCAI Editorial",
    date: "2026-06-30",
    category: "Research Ethics",
    icon: "eye",
    excerpt: "Predatory venues take your fee and publish almost anything, damaging your record. The warning signs, and a simple checklist to stay safe.",
    body: [
      "Predatory journals and conferences exist to collect fees while providing little or no genuine peer review. Publishing in one can harm your reputation and may not count toward degree or promotion requirements. Learning to spot them is an essential research skill.",
      "## Warning signs",
      "- Unsolicited emails with flattery and urgent deadlines.",
      "- Promises of very fast publication and guaranteed acceptance.",
      "- Fees that are hidden until after acceptance.",
      "- A scope so broad it covers unrelated fields in one journal.",
      "- Fake or exaggerated impact factors, or an editorial board that cannot be verified.",
      "- Poor-quality website, spelling errors, and no clear indexing information.",
      "## A quick checklist",
      "- Is the journal indexed in Web of Science or Scopus? Verify on their sites, not the journal's.",
      "- Do you recognise the publisher (IEEE, ACM, Springer, Elsevier, etc.)?",
      "- Can you confirm the editorial board members are real and affiliated?",
      "- Does \"Think. Check. Submit.\" (thinkchecksubmit.org) clear the venue?",
      "When in doubt, ask your supervisor or the RCAI committee before submitting. A little caution protects years of hard work."
    ]
  },
  {
    id: "first-conference-presentation",
    title: "How to Prepare for Your First Conference Presentation",
    author: "RCAI Editorial",
    date: "2026-06-12",
    category: "Career",
    icon: "mic",
    excerpt: "Your paper is accepted — congratulations. Now you have to present it. A calm, practical guide to slides, timing and questions.",
    body: [
      "Presenting at a conference for the first time is exciting and a little terrifying. Good preparation turns nerves into confidence.",
      "## Build the talk around one message",
      "You cannot fit the whole paper into a short talk, and you should not try. Decide the single thing the audience should remember, and let every slide serve it. Motivation, one clear idea, one convincing result, and the takeaway.",
      "## Slide tips",
      "- One idea per slide; large fonts; minimal text.",
      "- Show, don't read — figures and diagrams beat paragraphs.",
      "- Number your slides so questioners can refer back.",
      "## Rehearse for the clock",
      "Practise out loud, timed, at least three times — ideally once in front of a lab mate. Sessions run on a strict schedule and going over time is both stressful and discourteous.",
      "## Handling questions",
      "If you do not know an answer, say so honestly and offer to follow up. Repeat each question before answering so the whole room hears it, and thank the questioner. Most audiences are supportive — they want to learn from your work, not trip you up."
    ]
  }
];

/* ---- expose to the app (do not edit below) ---- */
/* ============================ PAPER TEMPLATES =============================
   LaTeX / Overleaf templates for journals and conferences, shown on the
   Downloads page. To add one, copy a block and edit the values.
     - name:      template name.
     - publisher: IEEE / ACM / Springer / Elsevier / AAAI / ACL / CVF …
     - kind:      "Conference", "Journal", or "Book / Chapter".
     - cats:      optional RCAI sub-field ids (for filtering).
     - desc:      one-line description.
     - link:      official Overleaf template URL. */
const TEMPLATES = [
  /* ---- Conferences: general (IEEE / ACM / Springer) ---- */
  { id:"t-ieee-conf", name:"IEEE Conference Template", publisher:"IEEE", kind:"Conference", cats:[],
    desc:"Official IEEE two-column conference paper template (IEEEtran).",
    link:"https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" },
  { id:"t-ieee-baredemo", name:"IEEE Bare Demo Template (Conferences)", publisher:"IEEE", kind:"Conference", cats:[],
    desc:"Minimal IEEEtran bare-bones demo for conference submissions.",
    link:"https://www.overleaf.com/latex/templates/ieee-bare-demo-template-for-conferences/ypypvwjmvtdf" },
  { id:"t-acm-conf", name:"ACM Conference Proceedings (acmart)", publisher:"ACM", kind:"Conference", cats:[],
    desc:"Official ACM primary article template (acmart) for SIG proceedings.",
    link:"https://www.overleaf.com/latex/templates/acm-conference-proceedings-primary-article-template/wbvnghjbzwpc" },
  { id:"t-springer-lncs", name:"Springer LNCS", publisher:"Springer", kind:"Conference", cats:[],
    desc:"Lecture Notes in Computer Science — the standard for many CS conferences.",
    link:"https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj" },
  { id:"t-springer-confproc", name:"Springer Conference Proceedings", publisher:"Springer", kind:"Conference", cats:[],
    desc:"Springer conference proceedings template (updated).",
    link:"https://www.overleaf.com/latex/templates/springer-conference-proceedings-template-updated-2022-01-12/wcvbtmwtykqj" },

  /* ---- Conferences: AI / ML ---- */
  { id:"t-neurips", name:"NeurIPS 2026", publisher:"NeurIPS", kind:"Conference", cats:["ml","dl","genai"],
    desc:"Official NeurIPS formatting instructions & style files.",
    link:"https://www.overleaf.com/latex/templates/formatting-instructions-for-neurips-2026/bjdwqfdkyftc" },
  { id:"t-icml", name:"ICML 2025", publisher:"ICML / PMLR", kind:"Conference", cats:["ml","dl"],
    desc:"Official ICML two-column template (PMLR proceedings).",
    link:"https://www.overleaf.com/latex/templates/icml2025-template/dhxrkcgkvnkt" },
  { id:"t-iclr", name:"ICLR 2025", publisher:"ICLR", kind:"Conference", cats:["dl","ml"],
    desc:"Official ICLR conference submission template.",
    link:"https://www.overleaf.com/latex/templates/template-for-iclr-2025-conference-submission/gqzkdyycxtvt" },
  { id:"t-aaai", name:"AAAI Press Template", publisher:"AAAI", kind:"Conference", cats:["ml","xai"],
    desc:"Official AAAI Press LaTeX template for AAAI conferences.",
    link:"https://www.overleaf.com/latex/templates/aaai-press-latex-template/jymjdgdpdmxp" },
  { id:"t-ijcai", name:"IJCAI Submission Template", publisher:"IJCAI", kind:"Conference", cats:["ml","rl"],
    desc:"Template for submissions to IJCAI.",
    link:"https://www.overleaf.com/latex/templates/template-for-submission-to-ijcai-19/rxdjgnqnfwvz" },
  { id:"t-colm", name:"COLM 2026", publisher:"COLM", kind:"Conference", cats:["nlp","genai"],
    desc:"Conference on Language Modeling submission template.",
    link:"https://www.overleaf.com/latex/templates/colm-2026-template/wbwzrwczsqvg" },

  /* ---- Conferences: Computer Vision ---- */
  { id:"t-cvpr", name:"CVPR 2026", publisher:"IEEE / CVF", kind:"Conference", cats:["cv","dl"],
    desc:"Official CVPR submission template.",
    link:"https://www.overleaf.com/latex/templates/cvpr-2026-submission-template/rdtrwgypxxzb" },
  { id:"t-iccv", name:"ICCV 2025 Author Kit", publisher:"IEEE / CVF", kind:"Conference", cats:["cv","dl"],
    desc:"Official ICCV author kit / template.",
    link:"https://www.overleaf.com/latex/templates/iccv2025-author-kit/nwnvrwcqwcsh" },
  { id:"t-eccv", name:"ECCV Submission Template", publisher:"Springer / CVF", kind:"Conference", cats:["cv"],
    desc:"Template & author guidelines for ECCV submissions.",
    link:"https://www.overleaf.com/latex/templates/template-and-author-guidelines-for-eccv-submission/gycdswmdkkyv" },
  { id:"t-wacv", name:"WACV 2025 Author Kit", publisher:"IEEE / CVF", kind:"Conference", cats:["cv"],
    desc:"Winter Conference on Applications of Computer Vision author kit.",
    link:"https://www.overleaf.com/latex/templates/wacv-2025-author-kit-template/zfydvwqrjmsb" },

  /* ---- Conferences: NLP ---- */
  { id:"t-acl", name:"ACL Conference Template", publisher:"ACL", kind:"Conference", cats:["nlp","genai"],
    desc:"Official ACL template — also used for the ACL Rolling Review.",
    link:"https://www.overleaf.com/latex/templates/association-for-computational-linguistics-acl-conference/jvxskxpnznfj" },
  { id:"t-emnlp", name:"EMNLP 2023 Proceedings", publisher:"ACL", kind:"Conference", cats:["nlp"],
    desc:"Instructions & style for EMNLP proceedings.",
    link:"https://www.overleaf.com/latex/templates/instructions-for-emnlp-2023-proceedings/scyjxmtnrskr" },

  /* ---- Journals ---- */
  { id:"t-ieee-journal", name:"IEEE Journal / Transactions (IEEEtran)", publisher:"IEEE", kind:"Journal", cats:[],
    desc:"Official IEEEtran template for IEEE journals & transactions.",
    link:"https://www.overleaf.com/latex/templates/ieee-journal-paper-template/jbbbdkztwxrd" },
  { id:"t-springer-nature", name:"Springer Nature LaTeX Template (sn-article)", publisher:"Springer Nature", kind:"Journal", cats:[],
    desc:"Unified Springer Nature journal article template (sn-jnl).",
    link:"https://www.overleaf.com/latex/templates/springer-nature-latex-template/myxmhdsbzkyd" },
  { id:"t-elsevier", name:"Elsevier Article (elsarticle)", publisher:"Elsevier", kind:"Journal", cats:[],
    desc:"Official elsarticle template for Elsevier / ScienceDirect journals.",
    link:"https://www.overleaf.com/latex/templates/elsevier-article-elsarticle-template/vdzfjgjbckgz" },
  { id:"t-acm-journal", name:"ACM Article (acmart — journals)", publisher:"ACM", kind:"Journal", cats:[],
    desc:"The acmart class also covers ACM journals (CSUR, TOG, TIST, …).",
    link:"https://www.overleaf.com/latex/templates/acm-conference-proceedings-primary-article-template/wbvnghjbzwpc" },

  /* ---- Book / Chapter ---- */
  { id:"t-springer-chapter", name:"Springer Book Chapter", publisher:"Springer", kind:"Book / Chapter", cats:[],
    desc:"Template for contributed Springer book chapters.",
    link:"https://www.overleaf.com/latex/templates/springer-book-chapter/hrdcrfynnzjn" }
];

/* =============================== FACULTY =================================
   Faculty research directory — helps students find supervisors by area.
   To add a member, copy a block and edit the values.
     - name, position, affiliation
     - cats:    RCAI sub-field ids (used for the sub-field filter & chips)
     - areas:   free-text research areas
     - link:    optional profile / Google Scholar URL
     - publications: 4-5 recent publication TITLES (strings)

   Dr. Ahmad Din's entry is real (from his FAST-NUCES profile). The remaining
   entries are EXAMPLES marked "(example)" — replace them with real faculty. */
const FACULTY = [
  {
    id: "fac-ahmad-din",
    name: "Dr. Ahmad Din",
    position: "Professor & Head of Department (AI & Data Science)",
    affiliation: "FAST-NUCES, Islamabad",
    cats: ["rl", "robotics", "dl", "cv", "ds", "health"],
    areas: "Swarm & multi-robot systems, reinforcement learning, IoT & edge computing, deep learning & semantic segmentation, medical image analysis.",
    link: "https://scholar.google.com/citations?user=1COfLigAAAAJ&hl=en",
    publications: [
      "A Deep Reinforcement Learning based Multi-agent Area Coverage Control for Smart Agriculture",
      "A Smart Computation Offloading for IoT Applications in Edge Computing using Bacterial Foraging Optimization",
      "Intelligent Computation Offloading for IoT Applications in Scalable Edge Computing using Artificial Bee Colony Optimization",
      "A Novel Weight Initialization with Adaptive Hyper-parameters for Deep Semantic Segmentation",
      "Deep Learning Techniques for Diabetic Retinopathy Detection"
    ]
  },
  {
    id: "fac-example-nlp",
    name: "Dr. Sara Ahmed (example)",
    position: "Assistant Professor",
    affiliation: "FAST-NUCES, Islamabad",
    cats: ["nlp", "genai", "ml"],
    areas: "Natural language processing, large language models, low-resource languages, text mining.",
    link: "",
    publications: [
      "Transformer Models for Low-Resource Urdu Text Classification",
      "Prompt-based Fine-tuning for Domain-specific Question Answering",
      "A Survey of Evaluation Methods for Large Language Models",
      "Cross-lingual Transfer Learning for Sentiment Analysis"
    ]
  },
  {
    id: "fac-example-cv",
    name: "Dr. Bilal Khan (example)",
    position: "Associate Professor",
    affiliation: "FAST-NUCES, Islamabad",
    cats: ["cv", "dl", "health"],
    areas: "Computer vision, deep learning, medical image analysis, object detection.",
    link: "",
    publications: [
      "Attention-Guided Segmentation of Tumors in MRI Scans",
      "Lightweight Convolutional Networks for Real-time Object Detection",
      "Self-supervised Pretraining for Medical Image Classification",
      "A Benchmark for Chest X-ray Abnormality Detection"
    ]
  },
  {
    id: "fac-example-ds",
    name: "Dr. Ayesha Malik (example)",
    position: "Assistant Professor",
    affiliation: "FAST-NUCES, Islamabad",
    cats: ["ds", "ts", "ml"],
    areas: "Data science, financial machine learning, time-series forecasting, explainable AI.",
    link: "",
    publications: [
      "Attention-based Deep Learning for Short-term Stock Volatility Prediction",
      "Explainable Credit-Risk Assessment using Gradient Boosting and SHAP",
      "Hybrid Models for Electricity Load Forecasting",
      "Graph Neural Networks for Fraud Detection in Financial Transactions"
    ]
  },
  {
    id: "fac-example-dm",
    name: "Dr. Usman Tariq (example)",
    position: "Lecturer",
    affiliation: "FAST-NUCES, Islamabad",
    cats: ["dm", "ds", "rl"],
    areas: "Data mining, big data analytics, IoT systems, optimization.",
    link: "",
    publications: [
      "Time-series Anomaly Detection in IoT Sensor Networks with Autoencoders",
      "Scalable Frequent-pattern Mining over Streaming Data",
      "Energy-aware Task Scheduling in Edge Computing",
      "A Comparative Study of Clustering Algorithms for Customer Segmentation"
    ]
  }
];

window.RCAI_DATA = { CATEGORIES, CONFERENCES, JOURNALS, SPECIAL_CALLS, PUBLICATIONS, BLOG_POSTS, TEMPLATES, FACULTY };

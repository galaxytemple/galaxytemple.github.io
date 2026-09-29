import { ProfileInfo, ExperienceItem, CaseStudyItem, EducationItem, AwardItem } from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: "Sanghoon Kim",
  title: "Senior Software Engineer / Distributed Systems & AI Platforms",
  tagline: "Software engineer with 10+ years of experience across enterprise R&D and early-stage startups, specializing in platform architecture, distributed systems, and AI/LLM integration.",
  email: "galaxytemple@gmail.com",
  github: "https://github.com/galaxytemple",
  linkedin: "https://linkedin.com/in/galaxytemple",
  medium: "https://medium.com/@galaxytemple",
  pdfUrl: "./res/resume_s.pdf",
};

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-giboo-hoe",
    company: "Giboo",
    role: "Head of Engineering",
    location: "Sunnyvale, CA (Remote / HQ: New York, NY)",
    period: "Jan 2025 - Jul 2026",
    summary: "Direct hands-on technical leadership across Applied ML, full-stack, and frontend engineering teams, driving 0-to-1 platform architecture, AI recommendation systems, and MCP infrastructure.",
    achievements: [
      "Directly led architecture and full-stack implementation across Applied ML and engineering teams, establishing core technical roadmaps, architectural design standards, and team-wide code reviews.",
      "Engineered an asynchronous grant discovery and recommendation pipeline over a 200,000+ active US grant corpus, combining query expansion with multi-criteria rubric scoring to rank opportunities across eligibility and fit while minimizing scoring variance.",
      "Designed and implemented custom Model Context Protocol (MCP) servers enabling LLM applications to securely access internal databases and APIs through standardized tools, establishing reliable tool-use infrastructure for AI workflows."
    ],
    tags: ["Python", "FastAPI", "AI/LLM", "Model Context Protocol (MCP)", "Recommendation Engine", "0-to-1 Architecture", "PostgreSQL"],
    isDefaultOpen: true,
  },
  {
    id: "exp-giboo-swe",
    company: "Giboo",
    role: "Senior Software Engineer",
    location: "Dublin, Ireland (Remote / HQ: New York, NY)",
    period: "Jan 2023 - Dec 2024",
    summary: "Architected distributed PySpark data pipelines, hybrid cloud API infrastructure on AWS, and high-resilience multi-tenant SaaS backend services.",
    achievements: [
      "Architected an offline PySpark pipeline transforming nested IRS Form 990 XML datasets into relational schemas; engineered a Python entity resolution system combining TF-IDF and KNN candidate retrieval with fuzzy name matching and nonprofit address matching to reconcile 20M+ historical grant records for search and recommendations.",
      "Designed a pragmatic hybrid architecture combining a core monolithic API (FastAPI, PostgreSQL) with dedicated containerized services for compute-heavy AI workloads, background processing, and scheduled jobs; provisioned AWS infrastructure (ECS, VPC, SQS, Lambda) with automated CI/CD pipelines and idempotency keys.",
      "Architected multi-tenant backend services with organization-level data isolation; migrated legacy session-based authentication to stateless JWT authorization across backend services and implemented OAuth 2.1 for AI client integration; built Stripe subscription billing workflows and engineered an ACID-compliant transactional credit ledger to prevent race conditions and duplicate credit allocations.",
      "Introduced CloudFront edge caching for resource-intensive read endpoints to significantly reduce database load and p95 API latencies; engineered an adaptive API Gateway load-shedding mechanism to dynamically drop non-essential read traffic during traffic spikes to protect mission-critical authentication and core business APIs.",
      "Optimized the grant discovery experience by strategically separating Next.js server-side rendered (SSR) catalog pages for initial load and SEO from client-side rendered (CSR) interactive comparison widgets, achieving Core Web Vitals of LCP 1.9s, INP 170ms, and CLS 0.1."
    ],
    tags: ["PySpark", "FastAPI", "PostgreSQL", "AWS ECS", "SQS & Lambda", "API Gateway", "Next.js", "Redis", "CloudFront"],
    isDefaultOpen: true,
  },
  {
    id: "exp-growdle",
    company: "Growdle Corporation",
    role: "Software Engineer - Founding Member",
    location: "Seoul, South Korea",
    period: "Nov 2021 - Dec 2022",
    summary: "Founding engineer responsible for initial AWS cloud infrastructure and real-time collaborative Markdown editing systems from 0 to 1.",
    achievements: [
      "Built a Notion-style real-time collaborative Markdown editor prototype using React, WebSockets, and CRDT libraries to achieve conflict-free, concurrent multi-user editing with low latency.",
      "Architected the initial AWS cloud infrastructure and deployment environment as a founding engineer; developed custom Markdown parsing interfaces and conducted rapid feasibility spikes to evaluate collaborative document workflows."
    ],
    tags: ["React", "WebSockets", "CRDT", "AWS", "Markdown Parser", "Distributed State", "0-to-1"],
    isDefaultOpen: false,
  },
  {
    id: "exp-samsung",
    company: "Samsung Electronics",
    role: "Software Engineer - Expert Programmer",
    location: "Suwon, South Korea",
    period: "Mar 2015 - Aug 2021",
    summary: "Engineered high-throughput NLU training data pipelines for Bixby voice assistant, optimized on-device inference runtimes, and built division-wide enterprise desktop productivity software.",
    achievements: [
      "Engineered a high-throughput synthetic NLU training data pipeline in Python using multiprocessing, token substitution, and grammar rule transformations; utilized file-based aggregation to eliminate shared-memory lock contention during large-scale dataset generation.",
      "Optimized on-device TensorFlow Lite NLU inference across Samsung Galaxy smartphones; engineered proactive runtime pre-warming upon voice activity detection (VAD) to eliminate initialization cold starts, delivering low-latency intent classification at speech completion.",
      "Architected an AIDL-based service interface abstracting underlying stepper motor controls into standardized high-level APIs for Android app developers; built a 3D robot simulator compatible with production IPC commands, unblocking application development without physical prototype hardware.",
      "Engineered a Windows desktop productivity tool (C#/WPF) organically adopted by 10,000+ employees (~70% of the division), automating data extraction from the internal HR portal using an embedded browser and JavaScript automation to provide instant access to daily and monthly working-hour data."
    ],
    tags: ["Python", "Multiprocessing", "TensorFlow Lite", "On-Device AI", "Android AIDL", "C# / WPF", "Algorithms"],
    isDefaultOpen: false,
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "case-aws-load-shedding",
    title: "Surviving Traffic Spikes Without Envoy: Serverless Tiered Load Shedding on AWS",
    year: "2026",
    category: "Production System",
    publication: "Towards AWS",
    articleUrl: "https://medium.com/towards-aws/surviving-traffic-spikes-without-envoy-serverless-tiered-load-shedding-on-aws-b6fd8a74dbe0",
    tagline: "Protecting core APIs from sudden traffic spikes with AWS API Gateway, AIMD-based load shedding, and in-app circuit breakers.",
    overview: "Designed a serverless, tiered load-shedding mechanism to protect upstream database connection pools during sudden traffic spikes, using managed API Gateway throttling, AIMD-based dynamic shedding, and autonomous in-app circuit breakers.",
    challenge: "Sudden traffic spikes can exhaust backend database connection pools before centralized telemetry and autoscaling mechanisms react. Self-managed Envoy or Kong clusters also introduce additional infrastructure and operational overhead for lean teams.",
    solution: "Implemented a multi-tiered shedding strategy: AWS API Gateway handles outer-tier throttling with DynamoDB-backed rate tracking and short-lived in-memory worker caches, while an AIMD-based drop-rate algorithm regulates non-critical requests with a capacity dead band to reduce oscillation.",
    architecture: "When database latency crosses defined thresholds, the AIMD controller incrementally sheds lower-priority traffic. If a worker observes repeated database checkout timeouts within a rolling window, an in-app circuit breaker locally sheds resource-intensive endpoints with HTTP 503 responses, without terminating the container.",
    results: [
      "Avoided the need for dedicated Envoy/Redis infrastructure in the proposed architecture, reducing operational complexity.",
      "Provided a fast local protection layer for database connection pools during sudden traffic spikes.",
      "Reduced the risk of drop-rate oscillation by combining AIMD control with a capacity dead band and local circuit breakers."
    ],
    learnings: "In distributed resilience, relying solely on centralized telemetry creates dangerous control-loop lags. Combining AIMD shedding with autonomous in-app local circuit breakers acts orders of magnitude faster than centralized orchestrators when protecting shared downstream bottlenecks."
  },
  {
    id: "case-ollama-jev",
    title: "Emulating JEV Locally With Ollama: 3 Structural Traps and Architectural Pitfalls",
    year: "2026",
    category: "AI Systems Research",
    publication: "Towards AI",
    articleUrl: "https://medium.com/towards-artificial-intelligence/i-tried-emulating-jev-locally-with-ollama-here-are-the-3-structural-traps-i-hit-bde20823caf7",
    tagline: "Diagnosing order bias, dual rejection, and KV-cache prefill overhead in local JEV-style verification pipelines.",
    overview: "An empirical investigation into emulating Joint Entity Verification (JEV)-style workflows locally with Ollama, identifying three structural issues that affected consistency and latency in the tested setup.",
    challenge: "Porting a multi-agent verification workflow from hosted inference to local Ollama produced inconsistent decisions, false-negative amplification, and increased latency. The behavior exposed differences in model bias and local inference-runtime execution.",
    solution: "Benchmarked the verification workflow under controlled test cases and identified three recurring issues: Order Bias, Dual Rejection, and redundant KV-cache prefill across independent Ollama HTTP requests.",
    architecture: "Demonstrated how candidate ordering can influence model verdicts and how chaining independent validators compounds false negatives. Profiling the local inference path also showed redundant prefill computation when identical prompt prefixes could not be reused across the tested Ollama requests.",
    results: [
      "Published the findings in Towards AI as architectural guidance for adapting JEV-style workflows to local open-weight models.",
      "Proposed bidirectional permutation prompting and cache-aligned prompt construction as practical mitigations.",
      "Characterized the latency impact of repeated prefill work and the resulting throughput trade-offs for local verification."
    ],
    learnings: "Agentic architectures designed for hosted cloud APIs cannot be naively ported to local runtimes. Without shared KV-cache reuse across evaluation passes, repeated prompt prefill creates substantial overhead for local multi-agent verification."
  },
  {
    id: "case-tag-overflow-canvas",
    title: "Handling Tag Overflow Without DOM Thrashing: Applying Pretext's Off-DOM Layout Idea",
    year: "2026",
    category: "UI Performance Lab",
    publication: "Medium",
    articleUrl: "https://medium.com/@galaxytemple/handling-tag-overflow-without-dom-thrashing-applying-pretexts-off-dom-layout-idea-e2c049ae6c19",
    tagline: "Eliminating forced synchronous reflows in dynamic chip containers by measuring text off-DOM with Canvas 2D.",
    overview: "Applied an off-DOM layout calculation approach inspired by Pretext to solve the classic web UI problem of dynamic tag truncation ('+N more') without triggering layout thrashing, open-sourced as tag-list-overflow.",
    challenge: "Traditional tag overflow components mount all items to the DOM, query getBoundingClientRect() or offsetWidth to determine line-breaks, and update state to truncate. This causes forced synchronous layout thrashing—interleaving DOM writes and reads—which spikes frame times and stutters scrolling on dense list views.",
    solution: "Moved measurement off the live DOM tree by utilizing an off-screen HTML5 Canvas 2D context (ctx.measureText()) to calculate tag widths and predict line-break boundaries before committing layout changes to the DOM.",
    architecture: "Initialized a reusable Canvas instance matching the container's font metrics. Executed a linear pass over tag strings, accumulating width and gap thresholds to determine the visible tag slice and '+N' badge in pure JavaScript before updating DOM state.",
    results: [
      "Avoided forced synchronous layout during dynamic tag measurement and resize operations.",
      "Reduced measured tag-layout calculation time from ~12ms to <0.2ms in the benchmark workload.",
      "Open-sourced the solution as the lightweight tag-list-overflow package, providing a zero-reflow alternative for data-dense tables and chip lists."
    ],
    learnings: "The fastest DOM operation is the one that avoids touching the DOM. When dynamic UI layout depends on text geometry, off-DOM Canvas measurement provides a predictable, low-overhead way to compute layout boundaries before rendering."
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-yonsei",
    institution: "Yonsei University",
    degree: "B.S. in Computer Science",
    period: "Mar 2008 – Feb 2015",
    location: "Seoul, South Korea",
  },
];

export const awardsData: AwardItem[] = [
  {
    id: "award-expert-programmer",
    title: "Expert Programmer",
    organization: "Samsung Electronics",
    year: "2015",
    description: "Awarded top-level coding certification",
    details: "Top 1% of software engineers company-wide",
  },
  {
    id: "award-associated-architect",
    title: "Associated Architect",
    organization: "Samsung Electronics",
    year: "2017",
    description: "Completed Associated Architect Program",
    details: "Curriculum included system architecture design aligned with project requirements",
  },
  {
    id: "award-mobis-algo",
    title: "Algorithm Competition Award",
    organization: "Hyundai Mobis",
    year: "2021 & 2022",
    description: "Awarded 5th Prize at Hyundai Mobis Algorithm Competition",
  },
];

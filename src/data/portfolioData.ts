import {
  AwardItem,
  CaseStudyItem,
  EducationItem,
  ExperienceItem,
  ProfileInfo,
} from "../types/portfolio";

export const profileData: ProfileInfo = {
  name: "Sanghoon Kim",
  title: "Senior Software Engineer / Backend Systems & Cloud Architecture",
  tagline:
    "Software engineer with 10+ years of experience across enterprise R&D and startups, building scalable platform architecture, AI-powered applications, distributed systems, and cloud infrastructure. Hands-on experience across the full development lifecycle, from system design and implementation to production deployment and operation.",
  email: "galaxytemple@gmail.com",
  github: "https://github.com/galaxytemple",
  linkedin: "https://linkedin.com/in/galaxytemple",
  medium: "https://medium.com/@galaxytemple",
};

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-giboo-hoe",
    company: "Giboo",
    role: "Head of Engineering",
    location: "Remote (Based in Sunnyvale, CA / HQ: New York, NY)",
    period: "Jan 2025 - Jul 2026",
    summary:
      "Engineering leadership across full-stack, AI, and data pipelines, driving 0-to-1 platform architecture, grant intelligence scoring, and MCP server infrastructure.",
    achievements: [
      "Led engineering strategy and technical direction across frontend, backend, AI services, and data pipelines while staying hands-on with architecture and implementation. Made key technical decisions, designed and built critical systems, partnered with product and business teams on roadmap priorities, and raised engineering standards through code reviews and architecture practices.",
      "Architected and built Giboo from 0 to 1, an AI-powered grant discovery and recommendation platform for non-profits. Directly owned the end-to-end implementation across Next.js frontend, FastAPI backend, PostgreSQL, LLM engines, and AWS infrastructure to take the product from concept to production launch.",
      "Built an AI-powered grant analysis and recommendation pipeline over 150,000+ active grants, applying prompt optimization and rubric-based scoring to accurately rank opportunities across program similarity, eligibility, and application complexity.",
      "Designed and implemented custom MCP servers enabling LLM applications to securely access internal databases and backend APIs.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "AI/LLM",
      "MCP Server",
      "Recommendation Engine",
      "Platform Architecture",
      "PostgreSQL",
    ],
    isDefaultOpen: true,
  },
  {
    id: "exp-giboo-swe",
    company: "Giboo",
    role: "Senior Software Engineer",
    location: "Remote (Based in Dublin, Ireland / HQ: New York, NY)",
    period: "Jan 2023 - Dec 2024",
    summary:
      "Architected distributed PySpark data pipelines, hybrid cloud API infrastructure on AWS, and high-resilience multi-tenant SaaS backend services.",
    achievements: [
      "Built pipelines to extract and normalize IRS Form 990 XML data, and implemented PySpark-based distributed processing to process and match 20M+ historical grant records using entity resolution for search and recommendation systems.",
      "Designed a hybrid architecture combining a core monolithic API with dedicated ECS services for compute-heavy AI workloads, background processing, and scheduled jobs. Decoupled resource-intensive tasks using SQS and Lambda with idempotency keys to improve API responsiveness and prevent duplicate processing.",
      "Architected a multi-tenant backend with organization-level data isolation using FastAPI and PostgreSQL. Built Stripe billing workflows and a transactional credit system using database transactions and idempotency keys to ensure duplicate-safe credit allocation.",
      "Migrated session-based authentication to stateless JWT authorization to remove per-request database session overhead, implemented OAuth 2.1 for third-party AI clients, and protected public endpoints against malicious bots using AWS WAF (Firewall) and honeypots.",
      "Designed AIMD-based API Gateway load shedding to protect critical authentication and payment flows during database bottlenecks, and introduced CloudFront caching to reduce database load and p95 latency for expensive read endpoints.",
      "Optimized the Next.js application by strategically choosing between SSR and CSR based on content requirements, improving performance metrics by over 50% and achieving LCP 1.9s, INP 170ms, and CLS 0.1.",
    ],
    tags: [
      "PySpark",
      "FastAPI",
      "PostgreSQL",
      "AWS ECS",
      "Step Functions",
      "SQS & Lambda",
      "API Gateway",
      "Next.js",
      "Redis",
      "CloudFront",
    ],
    isDefaultOpen: true,
  },
  {
    id: "exp-growdle",
    company: "Growdle Corporation",
    role: "Software Engineer - Founding Member",
    location: "Seoul, South Korea",
    period: "Nov 2021 - Dec 2022",
    summary:
      "Founding engineer architecting a Notion-style real-time collaborative Markdown editor POC with low-latency document synchronization.",
    achievements: [
      "Architected and built a Notion-style collaborative editor POC using React, WebSockets, and NoSQL, implementing document synchronization for low-latency, concurrent multi-user editing.",
    ],
    tags: [
      "React",
      "WebSockets",
      "NoSQL",
      "AWS",
      "Collaborative Editor",
      "Real-Time Sync",
      "Prototyping",
    ],
    isDefaultOpen: false,
  },
  {
    id: "exp-samsung",
    company: "Samsung Electronics",
    role: "Software Engineer - Expert Programmer",
    location: "Suwon, South Korea",
    period: "Mar 2015 - Aug 2021",
    summary:
      "Engineered high-throughput NLU training data pipelines for Bixby voice assistant, optimized on-device inference runtimes, and built division-wide enterprise desktop productivity software.",
    achievements: [
      "Built a synthetic NLU training data pipeline for Bixby (voice assistant) supporting token substitution, rule transformations, parallel processing, and file-based aggregation, enabling efficient generation and deduplication of deep learning–ready datasets without shared-memory synchronization bottlenecks.",
      "Developed and deployed TensorFlow Lite–based NLU inference on Samsung Galaxy devices (Android), optimizing cold-start latency and runtime performance. Built scalable backend services for server-side NLU model inference and benchmarking.",
      "Designed an AIDL-based interface that abstracted hardware-specific APIs into standardized movement commands (move, rotate, stop) for robot applications. Developed a 3D robot simulator compatible with the production interface, enabling developers to test robot behaviors without physical hardware and removing prototype availability as a bottleneck.",
      "Built a Windows desktop productivity tool (C#/WPF) adopted by 10,000+ employees (~70% of the workforce), providing instant access to daily and monthly working-hour data through automated background fetching from the HR portal.",
    ],
    tags: [
      "Python",
      "Multiprocessing",
      "TensorFlow Lite",
      "On-Device AI",
      "Android AIDL",
      "C# / WPF",
      "Algorithms",
    ],
    isDefaultOpen: false,
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "case-postgres-zero-downtime",
    title:
      "Zero-Downtime Updates on a 20M-Row PostgreSQL Table: When to Swap, When to Hash Diff",
    year: "2026",
    category: "Production System",
    publication: "Level Up Coding",
    articleUrl:
      "https://levelup.gitconnected.com/zero-downtime-updates-on-a-20m-row-postgresql-table-when-to-swap-when-to-hash-diff-1849810450d7",
    isDefaultOpen: true,
    tagline:
      "Updating 20M PostgreSQL rows without lock contention or disk IOPS spikes.",
    overview:
      "Handled batch updates on a 20M-row production table using table swaps for full refreshes and worker-side hash diffing for monthly deltas.",
    challenge:
      "Updating 100k+ rows on a live 20M-row table queued write locks behind reads, triggering timeouts. Heavy write volume caused WAL spikes that maxed out cloud disk IOPS, and routine updates were too small to trigger Postgres autovacuum.",
    solution:
      "Separated full reloads from routine deltas. For schema changes and full refreshes, we used shadow table swaps. For monthly updates under 1%, worker processes hashed rows in memory and wrote only changed rows through an unlogged staging table.",
    architecture:
      "Workers paginate primary keys and hashes to find diffs before writing to Postgres, cutting payload size from gigabytes to ~800MB. Table swaps backfill shadow tables in chunks, swap names with a 5-second lock timeout, and run an explicit VACUUM right after.",
    results: [
      "Eliminated timeouts during batch updates.",
      "Cut write payload by >90% by sending only changed rows.",
      "Kept sub-second query latency without adding a read replica.",
      "Cleared dead tuples immediately using post-batch vacuums.",
    ],
  },
  {
    id: "case-aws-load-shedding",
    title:
      "Handling Traffic Spikes Without Envoy: Serverless Tiered Load Shedding on AWS",
    year: "2026",
    category: "Production System",
    publication: "Towards AWS",
    articleUrl:
      "https://medium.com/towards-aws/surviving-traffic-spikes-without-envoy-serverless-tiered-load-shedding-on-aws-b6fd8a74dbe0",
    tagline:
      "Protecting database connection pools during traffic spikes using API Gateway, AIMD rate limiting, and in-process circuit breakers.",
    overview:
      "Protected database pools from traffic surges using native AWS services and app-level controls instead of running dedicated Envoy proxies.",
    challenge:
      "Sudden traffic spikes exhausted database connection pools before autoscaling kicked in. Running and maintaining dedicated Envoy or Kong clusters was too heavy for our small team.",
    solution:
      "Used a tiered approach: API Gateway handles coarse throttling at the edge, while workers use an AIMD controller and an in-memory circuit breaker to drop low-priority requests when database wait times spike.",
    architecture:
      "API Gateway sets outer rate limits. Inside each worker, an AIMD loop monitors database checkout latency and throttles non-critical endpoints. If checkout times out repeatedly during a surge, a local circuit breaker immediately returns 503 on heavy endpoints to protect the pool.",
    results: [
      "Prevented database connection exhaustion during sudden traffic spikes.",
      "Avoided running and maintaining separate proxy fleets (Envoy/Kong).",
      "Kept critical login and payment endpoints responsive under load.",
    ],
  },
  {
    id: "case-distributed-job-throttler",
    title:
      "Building a Distributed Job Throttler: Combining SQS Delayed Queues and Redis Atomic Locks",
    year: "2026",
    category: "Distributed Systems",
    publication: "Level Up Coding",
    articleUrl:
      "https://levelup.gitconnected.com/building-a-distributed-job-throttler-combining-sqs-delayed-queues-and-redis-atomic-locks-8c23c16cac07",
    tagline:
      "Cutting LLM costs and duplicate API calls using SQS delayed queues and Redis atomic locks without modifying downstream workers.",
    overview:
      "Throttled and deduplicated LLM jobs using SQS and Redis to protect external API rate limits and avoid duplicate calls.",
    challenge:
      "Concurrent user actions triggered duplicate, expensive LLM calls, running up API bills and hitting rate limits. Adding deduplication and retry logic directly into each consumer service would require refactoring multiple workers.",
    solution:
      "Placed an intermediary queue and lock layer between producers and consumers. Redis atomic locks drop duplicate in-flight jobs, while SQS delayed queues hold throttled jobs until rate-limit windows reset—requiring zero code changes to downstream workers.",
    architecture:
      "Jobs are pushed to SQS with a payload hash. Workers run a Redis Lua script to skip identical jobs that are already running or cached. If provider quotas are full, the worker requeues the message with an SQS delay instead of thread sleeping, freeing the worker immediately.",
    results: [
      "Cut LLM API costs by dropping redundant calls before invoking external APIs.",
      "Replaced thread sleeping during rate limits with non-blocking SQS delays.",
      "Added distributed deduplication with zero code changes to consumer services.",
    ],
  },
  {
    id: "case-ollama-jev",
    title:
      "Emulating JEV Locally With Ollama: 3 Structural Traps and Architectural Pitfalls",
    year: "2026",
    category: "AI Systems Research",
    publication: "Towards AI",
    articleUrl:
      "https://medium.com/towards-artificial-intelligence/i-tried-emulating-jev-locally-with-ollama-here-are-the-3-structural-traps-i-hit-bde20823caf7",
    tagline:
      "Debugging accuracy drops and latency bottlenecks when moving multi-agent verification from cloud APIs to local Ollama.",
    overview:
      "Diagnosed order bias, compounding rejections, and KV-cache prefill overhead when running entity verification on local open-weight models.",
    challenge:
      "Moving an entity verification pipeline from cloud LLM APIs to local Ollama caused high false negative rates and unexpectedly slow throughput.",
    solution:
      "Profiled inference calls and identified three root causes: candidate order bias in prompts, compounding errors from chained validators, and repeated KV-cache prefill on separate HTTP requests.",
    architecture:
      "Inconsistent entity ordering flipped model verdicts, while chained strict validators amplified rejections. In Ollama, varying prompt prefixes prevented KV-cache reuse, forcing the engine to recompute full prompt prefills on every request.",
    results: [
      "Fixed order bias using bidirectional permutation prompting.",
      "Aligned prompt prefixes to enable Ollama KV-cache reuse and cut prefill latency.",
      "Documented root causes and workarounds for running multi-agent verification on local hardware.",
    ],
  },
  {
    id: "case-tag-overflow-canvas",
    title:
      "Handling Tag Overflow Without DOM Thrashing: Applying Pretext's Off-DOM Layout Idea",
    year: "2026",
    category: "UI Performance",
    publication: "Medium",
    articleUrl:
      "https://medium.com/@galaxytemple/handling-tag-overflow-without-dom-thrashing-applying-pretexts-off-dom-layout-idea-e2c049ae6c19",
    tagline:
      "Preventing layout reflows in dynamic tag lists by calculating text widths off-DOM with Canvas 2D.",
    overview:
      "Replaced DOM-based chip measurement with an off-screen Canvas context to avoid browser layout reflows in data tables.",
    challenge:
      "Standard tag truncation mounts all chips, measures element widths in the DOM, and re-renders with a truncated slice. In dense tables and long lists, these interleaved DOM reads and writes cause layout thrashing and scroll lag.",
    solution:
      "Moved text measurement off the DOM using a shared Canvas 2D context to calculate fitting tags before rendering.",
    architecture:
      "A Canvas instance measures string widths using container font styles, adding padding and gap values in a single JS loop. Once the visible tags and overflow count are determined, the component renders once with the final slice.",
    results: [
      "Eliminated forced layout reflows during table scrolling and resizing.",
      "Cut tag calculation time from ~12ms to under 0.2ms in benchmarks.",
      "Published as the open-source tag-list-overflow package.",
    ],
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
    details:
      "Curriculum included system architecture design aligned with project requirements",
  },
  {
    id: "award-mobis-algo",
    title: "Algorithm Competition Award",
    organization: "Hyundai Mobis",
    year: "2021 & 2022",
    description: "Awarded 5th Prize at Hyundai Mobis Algorithm Competition",
  },
];

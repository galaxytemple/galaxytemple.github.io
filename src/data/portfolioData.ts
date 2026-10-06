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
    "Software engineer with 10+ years of experience across enterprise R&D and early-stage startups, specializing in resilient backend architecture, cloud infrastructure, and data pipelines.",
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
    location: "Sunnyvale, CA (Remote / HQ: New York, NY)",
    period: "Jan 2025 - Jul 2026",
    summary:
      "Direct hands-on technical leadership across Applied ML, full-stack, and frontend engineering teams, driving 0-to-1 platform architecture, AI recommendation systems, and MCP infrastructure.",
    achievements: [
      "Directly led architecture and full-stack implementation across Applied ML and engineering teams, establishing core technical roadmaps, architectural design standards, and team-wide code reviews.",
      "Engineered an asynchronous grant discovery and recommendation pipeline over a 200,000+ active US grant corpus, combining query expansion with multi-criteria rubric scoring to rank opportunities across eligibility and fit while minimizing scoring variance.",
      "Designed and implemented custom Model Context Protocol (MCP) servers enabling LLM applications to securely access internal databases and APIs through standardized tools, establishing reliable tool-use infrastructure for AI workflows.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "AI/LLM",
      "Model Context Protocol (MCP)",
      "Recommendation Engine",
      "0-to-1 Architecture",
      "PostgreSQL",
    ],
    isDefaultOpen: true,
  },
  {
    id: "exp-giboo-swe",
    company: "Giboo",
    role: "Senior Software Engineer",
    location: "Dublin, Ireland (Remote / HQ: New York, NY)",
    period: "Jan 2023 - Dec 2024",
    summary:
      "Architected distributed PySpark data pipelines, hybrid cloud API infrastructure on AWS, and high-resilience multi-tenant SaaS backend services.",
    achievements: [
      "Architected an offline PySpark pipeline transforming nested IRS Form 990 XML datasets into relational schemas; engineered a Python entity resolution system combining TF-IDF and KNN candidate retrieval with fuzzy name matching and nonprofit address matching to reconcile 20M+ historical grant records for search and recommendations.",
      "Designed a pragmatic hybrid architecture combining a core monolithic API (FastAPI, PostgreSQL) with dedicated containerized services for compute-heavy AI workloads, background processing, and scheduled jobs; provisioned AWS infrastructure (ECS, VPC, SQS, Lambda) with automated CI/CD pipelines and idempotency keys.",
      "Architected multi-tenant backend services with organization-level data isolation; migrated legacy session-based authentication to stateless JWT authorization across backend services and implemented OAuth 2.1 for AI client integration; built Stripe subscription billing workflows and engineered an ACID-compliant transactional credit ledger to prevent race conditions and duplicate credit allocations.",
      "Introduced CloudFront edge caching for resource-intensive read endpoints to significantly reduce database load and p95 API latencies; engineered an adaptive API Gateway load-shedding mechanism to dynamically drop non-essential read traffic during traffic spikes to protect mission-critical authentication and core business APIs.",
      "Optimized the grant discovery experience by strategically separating Next.js server-side rendered (SSR) catalog pages for initial load and SEO from client-side rendered (CSR) interactive comparison widgets, achieving Core Web Vitals of LCP 1.9s, INP 170ms, and CLS 0.1.",
    ],
    tags: [
      "PySpark",
      "FastAPI",
      "PostgreSQL",
      "AWS ECS",
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
      "Founding engineer responsible for initial AWS cloud infrastructure and real-time collaborative Markdown editing systems from 0 to 1.",
    achievements: [
      "Built a Notion-style real-time collaborative Markdown editor prototype using React, WebSockets, and CRDT libraries to achieve conflict-free, concurrent multi-user editing with low latency.",
      "Architected the initial AWS cloud infrastructure and deployment environment as a founding engineer; developed custom Markdown parsing interfaces and conducted rapid feasibility spikes to evaluate collaborative document workflows.",
    ],
    tags: [
      "React",
      "WebSockets",
      "CRDT",
      "AWS",
      "Markdown Parser",
      "Real-Time Sync",
      "0-to-1",
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
      "Engineered a high-throughput synthetic NLU training data pipeline in Python using multiprocessing, token substitution, and grammar rule transformations; utilized file-based aggregation to eliminate shared-memory lock contention during large-scale dataset generation.",
      "Optimized on-device TensorFlow Lite NLU inference across Samsung Galaxy smartphones; engineered proactive runtime pre-warming upon voice activity detection (VAD) to eliminate initialization cold starts, delivering low-latency intent classification at speech completion.",
      "Architected an AIDL-based service interface abstracting underlying stepper motor controls into standardized high-level APIs for Android app developers; built a 3D robot simulator compatible with production IPC commands, unblocking application development without physical prototype hardware.",
      "Engineered a Windows desktop productivity tool (C#/WPF) organically adopted by 10,000+ employees (~70% of the division), automating data extraction from the internal HR portal using an embedded browser and JavaScript automation to provide instant access to daily and monthly working-hour data.",
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
    tagline:
      "Evaluating table swaps versus off-heap hash diffing to update 20M PostgreSQL rows without lock contention or MVCC bloat.",
    overview:
      "Architected a zero-downtime batch update framework for a 20-million-row production PostgreSQL table, contrasting atomic Staging & Swap against off-heap Keyset Hash-Diff Upsert to prevent lock-queue starvation, WAL saturation, and MVCC bloat while preserving a monolithic table design.",
    challenge:
      "Retroactively updating hundreds of thousands of historical records in a 20M-row table posed three operational risks: lock-queue starvation where waiting DML transactions blocked subsequent read queries and exhausted connection pools; Write-Ahead Log (WAL) saturation exceeding cloud disk IOPS limits; and unmanaged MVCC table bloat because PostgreSQL's default autovacuum threshold (20% = 4M dead tuples) never triggered on routine ~0.5% incremental deltas.",
    solution:
      "Established a two-tier operational framework: an atomic Staging & Swap pattern for schema DDL changes and full baseline reconciliations, versus an off-heap Keyset Hash-Diff Upsert pattern for routine monthly updates (~100k records). Pushed diff computation into the application worker using 32-character hashes, ingesting delta payloads through UNLOGGED staging tables and idempotent ON CONFLICT DO UPDATE operations.",
    architecture:
      "Maintained a single monolithic table over partitioning to eliminate cross-partition query planner overhead and preserve index efficiency for live reads. For routine deltas, a Python worker streams primary keys and hashes via keyset cursor pagination, isolating changed rows in a linear pass with near-zero memory footprint and reducing network payload by >90% (~800MB vs. multi-gigabyte transfers). For structural migrations, shadow tables backfill in batches before executing an atomic swap guarded by SET LOCAL lock_timeout = '5s'. Every batch pipeline concludes with an explicit VACUUM ANALYZE to immediately prune dead tuples and update planner statistics.",
    results: [
      "Prevented lock-queue starvation and eliminated 504 Gateway Timeouts on live read traffic during production batch ingestions.",
      "Reduced network transfer payload by over 90% (~800MB vs. multi-gigabyte transfers) by streaming compact 32-character hashes off-heap.",
      "Maintained sub-second query latency on a single monolithic table, deferring dedicated OLAP infrastructure until reaching defined 50M–100M+ row milestones.",
      "Prevented dead tuple accumulation on sub-1% updates through deterministic post-ingest VACUUM ANALYZE execution.",
    ],
    learnings:
      "In large-scale batch operations, lock contention is a greater operational risk than write throughput. Because a queued write lock in PostgreSQL blocks subsequent read queries behind it, long-running batch transactions can exhaust application connection pools and trigger gateway timeouts for live traffic. Zero-downtime batch systems cannot rely on a single uniform pattern.\n\nThe operational pattern must be selected based on the mutation profile: Table swaps are appropriate for structural schema changes (DDL) and baseline reconciliations, where high write volume and lock-timed cutovers are justified to eliminate MVCC bloat and produce clean storage. Conversely, hash-diff upserts are suited for routine, low-percentage updates (<1% delta), where shifting row comparison to the application tier minimizes WAL saturation and avoids read locks at the cost of requiring deterministic post-batch vacuuming. Reliable database engineering requires matching the mutation strategy to workload characteristics rather than relying on engine defaults.",
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
      "Protecting core APIs from sudden traffic spikes with AWS API Gateway, AIMD-based load shedding, and in-app circuit breakers.",
    overview:
      "Designed a serverless, tiered load-shedding mechanism to protect upstream database connection pools during sudden traffic spikes, using managed API Gateway throttling, AIMD-based dynamic shedding, and autonomous in-app circuit breakers.",
    challenge:
      "Sudden traffic spikes can exhaust backend database connection pools before centralized telemetry and autoscaling mechanisms react. Self-managed Envoy or Kong clusters also introduce additional infrastructure and operational overhead for lean teams.",
    solution:
      "Implemented a multi-tiered shedding strategy: AWS API Gateway handles outer-tier throttling with DynamoDB-backed rate tracking and short-lived in-memory worker caches, while an AIMD-based drop-rate algorithm regulates non-critical requests with a capacity dead band to reduce oscillation.",
    architecture:
      "When database latency crosses defined thresholds, the AIMD controller incrementally sheds lower-priority traffic. If a worker observes repeated database checkout timeouts within a rolling window, an in-app circuit breaker locally sheds resource-intensive endpoints with HTTP 503 responses, without terminating the container.",
    results: [
      "Replaced the need for dedicated Envoy/Redis infrastructure in the proposed design, reducing operational complexity for a lean team.",
      "Provided a fast local protection layer for database connection pools during sudden traffic spikes.",
      "Reduced the risk of drop-rate oscillation by combining AIMD control with a capacity dead band and local circuit breakers.",
    ],
    learnings:
      "The standard approach to high-traffic resilience can become over-engineered for a small team when the operational cost of running infrastructure such as Envoy or Kong outweighs its benefits. Managed AWS services and serverless components can provide a simpler alternative without taking on that operational burden.\n\nHowever, centralized telemetry and control loops introduce a different trade-off: aggregating metrics and coordinating fleet-wide decisions can create tens of seconds to minutes of delay before the system reacts to a degrading downstream dependency. An autonomous in-process circuit breaker provides a fast local safety layer that can react immediately, protecting shared database connections while the centralized control loop catches up.",
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
      "Diagnosing order bias, dual rejection, and KV-cache prefill overhead in local JEV-style verification pipelines.",
    overview:
      "An empirical investigation into emulating Joint Entity Verification (JEV)-style workflows locally with Ollama, identifying three structural issues that affected consistency and latency in the tested setup.",
    challenge:
      "Porting a multi-agent verification workflow from hosted inference to local Ollama produced inconsistent decisions, false-negative amplification, and increased latency. The behavior exposed differences in model bias and local inference-runtime execution.",
    solution:
      "Benchmarked the verification workflow under controlled test cases and identified three recurring issues: Order Bias, Dual Rejection, and redundant KV-cache prefill across independent Ollama HTTP requests.",
    architecture:
      "Demonstrated how candidate ordering can influence model verdicts and how chaining independent validators compounds false negatives. Profiling the local inference path also showed redundant prefill computation when identical prompt prefixes could not be reused across the tested Ollama requests.",
    results: [
      "Published the findings in Towards AI as architectural guidance for adapting JEV-style workflows to local open-weight models.",
      "Proposed bidirectional permutation prompting and cache-aligned prompt construction as practical mitigations.",
      "Characterized the latency impact of repeated prefill work and the resulting throughput trade-offs for local verification.",
    ],
    learnings:
      "The experiment challenged the assumption that JEV is simply a wrapper around repeated LLM calls. Reproducing the workflow locally showed that reliable verification depends on the interaction between model behavior, prompting strategy, and inference-system architecture.\n\nOrder bias and dual rejection exposed failure modes in the model-and-prompting setup, while redundant KV-cache prefill exposed a runtime-level bottleneck. The key takeaway was that reproducing an agentic LLM system locally requires understanding and designing for both the model and the inference stack—not just recreating the API-level workflow.",
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
      "Eliminating forced synchronous reflows in dynamic chip containers by measuring text off-DOM with Canvas 2D.",
    overview:
      "Applied an off-DOM layout calculation approach inspired by Pretext to solve the classic web UI problem of dynamic tag truncation ('+N more') without triggering layout thrashing, open-sourced as tag-list-overflow.",
    challenge:
      "Traditional tag overflow components mount all items to the DOM, query getBoundingClientRect() or offsetWidth to determine line-breaks, and update state to truncate. This causes forced synchronous layout thrashing—interleaving DOM writes and reads—which spikes frame times and stutters scrolling on dense list views.",
    solution:
      "Moved measurement off the live DOM tree by utilizing an off-screen HTML5 Canvas 2D context (ctx.measureText()) to calculate tag widths and predict line-break boundaries before committing layout changes to the DOM.",
    architecture:
      "Initialized a reusable Canvas instance matching the container's font metrics. Executed a linear pass over tag strings, accumulating width and gap thresholds to determine the visible tag slice and '+N' badge in pure JavaScript before updating DOM state.",
    results: [
      "Avoided forced synchronous layout during dynamic tag measurement and resize operations.",
      "Reduced measured tag-layout calculation time from ~12ms to <0.2ms in the benchmark workload.",
      "Open-sourced the solution as the lightweight tag-list-overflow package, providing a zero-reflow alternative for data-dense tables and chip lists.",
    ],
    learnings:
      "Dynamic UI layout problems do not always need to be solved through DOM measurement. When the required geometry can be derived from text metrics, moving the calculation off the live DOM can eliminate an entire class of forced-layout costs while keeping the rendering path simple.",
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

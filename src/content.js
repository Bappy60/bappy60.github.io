// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit this file to update what appears on the site — no HTML/CSS knowledge
// needed. Sections that read from these arrays are rendered by src/main.js.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Kawsar Ahemmed Bappy',
  shortName: 'Bappy',
  role: 'Geospatial & Distributed Systems Engineer',
  email: 'kawsar.swe.sust@gmail.com',
  phone: '+880 1864356300',
  location: 'Dhaka, Bangladesh',
  // TODO: replace with your real profile URLs
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    resume: '/resume.pdf',
  },
  currentStatus: 'Software Engineer @ Technonext — Core Map Services',
  coreInterests: ['Geospatial Systems', 'Distributed Systems', 'Low-Resource NLP'],
}

export const hero = {
  eyebrow: 'Software Engineer, Core Map Services',
  headline: ['Building the ', { text: 'infrastructure', accent: true }, ' beneath the map.'],
  subtext:
    'I build open-source geospatial services — geocoding, routing, and map-data pipelines — as an alternative to closed map APIs. Alongside that, I research whether speech models built for standard Bengali actually work for the Sylheti and Chittagonian people speak at home.',
}

// Reverse-chronological. `highlights` renders as a short bullet list.
export const experience = [
  {
    company: 'Technonext Software Limited',
    role: 'Software Engineer (Mid)',
    period: 'July 2025 — Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Delivered geospatial APIs (geocode, reverse-geocode, radius search, autocomplete) for MapNest, integrating Elasticsearch with OSM/OSRM/Nominatim at sub-100ms p99 latency across 1.3M+ records.',
      'Cut Autocomplete query latency 87% and index size 30% through Elasticsearch field filtering and usage analysis.',
      'Built Geo-Syncer, an async CDC pipeline (PostgreSQL triggers + RabbitMQ) that replaced a 1-hour manual sync workflow with 99.9%-consistent automated syncing.',
      'Architected a centralized User Management & RBAC service in Go (gRPC, OIDC/OAuth2, JWT reuse detection, Redis bitmap authorization), cutting permission-check latency 60% across 5+ platforms.',
      'Led internal knowledge-sharing sessions on Redis, Go design, and PostgreSQL internals; mentored new engineers on clean architecture and production debugging.',
    ],
  },
  {
    company: 'Vivasoft Limited',
    role: 'Software Engineer (L-1)',
    period: 'March 2024 — July 2025',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built an AI-powered job crawler (Python/FastAPI, Go/Gin) for WeSelect using a hybrid GPT-3.5/GPT-4o pipeline — 1,000+ listings/day at 40% lower cost than third-party tools.',
      'Refactored the Pi-Inventory codebase onto clean architecture, cutting code volume 30–40% and onboarding time along with it.',
      'Improved response times 20–30% across services via Redis caching, N+1 fixes, and GORM query tuning.',
      'Cut deployment time from 45 to 8 minutes by containerizing services and streamlining CI/CD.',
      'Led the Financfy Flutter migration (3.10 → 3.24.5), fixing 50+ breaking changes and implementing type-safe RBAC with BLoC.',
    ],
  },
  {
    company: 'Vivasoft Limited',
    role: 'Associate Software Engineer',
    period: 'February 2023 — March 2024',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built RESTful inventory management APIs in Go/Gin; resolved 30+ production bugs, improving system stability.',
      'Contributed to an open-source Golang Bootcamp in Bangla, writing beginner-friendly docs to lower the learning curve for new Go developers.',
    ],
  },
]

export const projects = [
  {
    name: 'MapNest Geospatial Platform',
    stack: ['Go', 'Elasticsearch', 'OSM', 'OSRM', 'Nominatim', 'gRPC'],
    description:
      'Production mapping platform serving geocoding and location search to internal applications org-wide. Custom Elasticsearch spatial indexing with relevance scoring, Haversine-based radius search, and a circuit-breaker fallback across OSM and Google Places for 99.9% availability.',
    link: null,
  },
  {
    name: 'Geo-Syncer',
    stack: ['Go', 'PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'CDC'],
    description:
      'Event-driven sync pipeline keeping Elasticsearch consistent with PostgreSQL as source of truth. Trigger-based change data capture avoids polling; idempotent, versioned handlers keep out-of-order messages from corrupting state.',
    link: null,
  },
  {
    name: 'Foodi Mart',
    stack: ['Go', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    description:
      'Distributed microservices for inventory and order fulfillment. Saga pattern across Order/Inventory/Payment for eventual consistency, dead-letter queues for fault tolerance, and optimistic-locked inventory reservations to prevent overselling under load.',
    link: null,
  },
  {
    name: 'WeSelect AI Job Crawler',
    stack: ['Python', 'FastAPI', 'Go', 'Gin', 'OpenAI'],
    description:
      'Career-intelligence crawler extracting structured job data at scale. Concurrent Go crawler with rate limiting and anti-bot handling, hybrid GPT-3.5/GPT-4o extraction, structured prompting pulling 15+ attributes at 92% accuracy.',
    link: null,
  },
  {
    name: 'Financfy SaaS Suite',
    stack: ['Go', 'Flutter', 'BLoC', 'Redis', 'Firebase'],
    description:
      'Multi-tenant financial management platform for SMEs. Hierarchical RBAC with permission inheritance, clean-architecture backend modules, and a Flutter/BLoC mobile client with permission-based route guards.',
    link: null,
  },
]

// Research: real academic work — no placeholders here on purpose.
export const research = [
  {
    tag: 'B.Sc. THESIS — SUST',
    title: 'Does Whisper Generalize to Dialectal Bengali?',
    description:
      'Evaluated whether state-of-the-art speech-to-text models, specifically Whisper, hold up on Sylheti and Chittagonian — Bengali varieties spoken daily by tens of millions but nearly absent from training data for mainstream ASR systems.',
      linkLabel: null,
      link: null,
  },
  {
    tag: 'IN PROGRESS',
    title: 'Automated Divergence Triage for Map Routing',
    description:
      'At RouteIQ, building classifiers that triage routing divergences against Google Maps into stale PBF data, missing geometry, tagging errors, and routing-profile mismatches — reducing reliance on slow manual review.',
    linkLabel: null,
    link: null,
  },
]

// Journal / Blog — placeholders. Swap these out as you actually write posts;
// remove the `draft: true` flag once a post is real and linked.
export const journal = [
  {
    date: 'Draft',
    title: 'What Whisper Gets Wrong About Sylheti',
    excerpt:
      'Notes from a thesis: where a state-of-the-art ASR model quietly fails on a dialect it was never shown.',
    draft: true,
  },
  {
    date: 'Draft',
    title: 'Diagnosing a Map, Automatically',
    excerpt:
      'Turning slow manual QA into a classifier: stale data vs. missing geometry vs. a bad routing profile.',
    draft: true,
  },
  {
    date: 'Draft',
    title: 'CPU Contention on a Shared ASG, and How We Found It',
    excerpt:
      'A production incident on RouteIQ, an osrm-bicycle container, and what Grafana/Loki showed once we knew where to look.',
    draft: true,
  },
]

export const currentlyFocused = [
  'Automated triage for RouteIQ map-divergence QA — classifying root causes instead of reviewing by hand.',
  'Elastic APM observability across RouteIQ services (Go): centralized instrumentation, slog trace correlation, Redis/RabbitMQ hooks.',
  'Reframing dialectal Bengali STT thesis work for workshop submission and international scholarship applications (SI Sweden, DAAD EPOS, RTP Australia).',
]

export const skills = {
  Languages: ['Go', 'Python', 'Dart'],
  Frameworks: ['Gin', 'Echo', 'gRPC', 'Flutter'],
  Data: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
  Geospatial: ['OSM', 'OSRM', 'Nominatim', 'mod_tile'],
  Infra: ['Docker', 'AWS', 'Grafana', 'Elastic APM', 'Prometheus'],
  Concepts: ['Clean Architecture', 'Microservices', 'Event-Driven Design', 'CDC', 'Saga Pattern', 'RBAC'],
}

export const education = {
  degree: 'B.Sc. in Software Engineering',
  school: 'Shahjalal University of Science and Technology (SUST)',
  period: 'February 2019 — February 2024',
  location: 'Sylhet, Bangladesh',
}

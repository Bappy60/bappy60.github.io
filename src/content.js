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
  links: {
    github: 'https://github.com/Bappy60',
    linkedin: 'https://www.linkedin.com/in/kawsar-ahemmmed-bappy/',
    resume: '/resume.pdf',
  },
  currentStatus: 'Software Engineer — Core Map Services',
  photo: '/profile.jpg',
  photoAlt: 'Profile photo',
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
    company: 'Core Map Services',
    role: 'Software Engineer',
    period: 'July 2025 — Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Delivered geospatial APIs for search, reverse geocoding, autocomplete, and radius queries with sub-100ms p99 latency across millions of records.',
      'Reduced query latency by optimizing Elasticsearch indexing, field filtering, and relevance scoring.',
      'Built an asynchronous CDC pipeline with PostgreSQL triggers and RabbitMQ to replace an hourly manual sync workflow with automated consistency.',
      'Designed a centralized authorization service in Go using gRPC, OIDC/OAuth2, JWT handling, and Redis-backed RBAC for low-latency access checks.',
      'Ran knowledge-sharing sessions on distributed systems, database internals, and clean architecture for engineering teammates.',
    ],
  },
  {
    company: 'Engineering Platform Team',
    role: 'Software Engineer',
    period: 'March 2024 — July 2025',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built an AI-powered data extraction service using Python/FastAPI and Go/Gin, processing thousands of listings daily with lower operating cost than external alternatives.',
      'Refactored a legacy codebase onto clean architecture, reducing complexity and speeding new engineer onboarding.',
      'Improved service response times through Redis caching, query tuning, and N+1 issue resolution.',
      'Shrank deployment time by containerizing services and streamlining CI/CD pipelines.',
      'Led a cross-platform migration of a Flutter app, resolving breaking changes while preserving type-safe authorization workflows.',
    ],
  },
  {
    company: 'Platform Engineering',
    role: 'Associate Software Engineer',
    period: 'February 2023 — March 2024',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built RESTful inventory management APIs in Go/Gin and resolved production issues to improve stability.',
      'Contributed to an open-source educational initiative by writing beginner-friendly Go documentation in Bangla.',
    ],
  },
]

export const projects = [
  {
    name: 'Geospatial Search Platform',
    stack: ['Go', 'Elasticsearch', 'OSM', 'OSRM', 'Nominatim', 'gRPC'],
    description:
      'A mapping service supporting geocoding and location search for internal products. It uses spatial indexing, relevance scoring, radius search, and a circuit-breaker fallback across multiple data sources.',
    link: null,
  },
  {
    name: 'Async Data Sync Pipeline',
    stack: ['Go', 'PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'CDC'],
    description:
      'An event-driven pipeline maintaining search index consistency with source-of-truth data. Trigger-based change capture avoids polling, while idempotent handlers prevent out-of-order updates.',
    link: null,
  },
  {
    name: 'Distributed Fulfillment Services',
    stack: ['Go', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    description:
      'Microservices supporting inventory and order fulfillment. The design uses saga-like coordination, dead-letter queues, and optimistic locking to preserve consistency under load.',
    link: null,
  },
  {
    name: 'AI Data Extraction Service',
    stack: ['Python', 'FastAPI', 'Go', 'Gin', 'OpenAI'],
    description:
      'A structured crawler for large-scale data extraction. It combines rate limiting, anti-bot handling, and hybrid model prompting to produce accurate data from noisy sources.',
    link: null,
  },
  {
    name: 'SaaS Backend and Mobile Client',
    stack: ['Go', 'Flutter', 'BLoC', 'Redis', 'Firebase'],
    description:
      'A multi-tenant SaaS suite for small business operations, featuring hierarchical access control, clean backend architecture, and a Flutter/BLoC mobile interface.',
    link: null,
  },
]

// Research: real academic work — no placeholders here on purpose.
export const research = [
  {
    tag: 'B.Sc. THESIS — SUST',
    title: 'Bridging the Gap: Evaluating State-of-the-Art Speech-to-Text Models for Sylheti Dialect and Introducing a Bengali Speech-to-Text API',
    description:
      'Sylheti is one of the prominent languages of Bangladesh and is spoken in the Sylhet region and parts of India. We collected over 29 hours of Sylheti audio via a face-to-face field survey and present dataset insights and linguistic/geographical challenges. The work includes deploying a state-of-the-art Bengali speech recognition model on Hugging Face Spaces that outperforms Google\'s STT API on Bengali benchmarks, illustrating the need for dialect-specific datasets for robust ASR performance.',
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

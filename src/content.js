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
  coreInterests: [
    'Geospatial Systems',
    'Distributed Systems',
    'Cloud Infrastructure',
    'LLMs & ML Ops',
    'Observability',
  ],
}

export const hero = {
  eyebrow: 'Software Engineer & Researcher',
  headline: [
    'Building things that ',
    { text: 'work', accent: true },
    ' — and ',
    { text: 'understanding why.', accent: true },
  ],
  subtext:
    'A software engineer who cares as much about how a system works as whether it works — scalable, cost-aware, built to last.',
}

export const about = {
  short:
    'A software engineer who cares as much about how a system works as whether it works — scalable, cost-aware, built to last.',
  long:
    "I'm drawn to understanding how things work under the hood rather than just wiring APIs together — that curiosity is usually what leads to the more interesting engineering problems. I like finding solutions that are efficient, not just functional: shaving unnecessary cost and complexity out of a system rather than throwing more resources at it. I try to think in terms of overall system design — scalability, cloud infrastructure, and where open-source tools fit — rather than any one service in isolation. And I care about the parts of software that don't show up in a demo: clean interfaces, readable code, and documentation that actually helps the next person, because that's usually what decides whether a system holds up over time.",
}

// Reverse-chronological. `highlights` renders as a short bullet list.
export const experience = [
  {
    company: 'Technonext Software Limited',
    role: 'Software Engineer (Mid)',
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
    company: 'Vivasoft Limited',
    role: 'Software Engineer (L-1)',
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
    company: 'Vivasoft Limited',
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

export const research = [
  {
    tag: 'B.Sc. THESIS — SUST',
    title: 'Bridging the Gap: Evaluating State-of-the-Art Speech-to-Text Models for Sylheti Dialect and Introducing a Bengali Speech-to-Text API',
    description:
      'Sylheti is one of the prominent languages of Bangladesh and is spoken in the Sylhet region and parts of India. We collected over 29 hours of Sylheti audio via a face-to-face field survey and present dataset insights and linguistic/geographical challenges. The work includes deploying a state-of-the-art Bengali speech recognition model on Hugging Face Spaces that outperforms Google\'s STT API on Bengali benchmarks, illustrating the need for dialect-specific datasets for robust ASR performance.',
    status: 'Not published',
    linkLabel: 'View thesis',
    link: 'https://drive.google.com/file/d/1OrFJ4eS3JBmK20FSE7RUTGYUeCW_qJfq/view?usp=sharing',
  },
]

export const blogPosts = [
  {
    date: 'Published',
    title: 'Understanding Lucene — the engine behind Elasticsearch\'s magic',
    excerpt: 'Technical article on how Lucene powers Elasticsearch and indexing/search fundamentals.',
    link: 'https://dev.to/heisenberg60/understanding-lucene-the-engine-behind-elasticsearchs-magic-4ke8',
  },
]

export const currentlyFocused = [
  'Learning Kubernetes and local distributed systems tooling to understand production orchestration better.',
  'Exploring local LLM workflows and inference trade-offs for private model experimentation.',
  'Working with distributed tracing to make service behavior and failure modes more visible.',
  'Looking for a research direction that combines systems design, observability, and practical impact.',
  'Seeking open source contributions that improve tooling, reliability, or developer experience.',
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

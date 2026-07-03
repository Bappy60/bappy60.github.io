import './style.css'
import {
  profile,
  hero,
  experience,
  projects,
  research,
  journal,
  currentlyFocused,
  skills,
  education,
} from './content.js'

// ---------------------------------------------------------------------------
// Small helper: build a DOM node without relying on innerHTML for user text,
// so nothing here is at risk of injecting markup.
// ---------------------------------------------------------------------------
function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

// ------------------------------- Hero ---------------------------------------
function renderHero() {
  document.getElementById('hero-eyebrow').textContent = hero.eyebrow

  const headline = document.getElementById('hero-headline')
  hero.headline.forEach((part) => {
    if (typeof part === 'string') {
      headline.append(document.createTextNode(part))
    } else {
      const span = el('span', part.accent ? 'text-primary italic' : '', part.text)
      headline.append(span)
    }
  })

  document.getElementById('hero-subtext').textContent = hero.subtext
  document.getElementById('profile-status').textContent = profile.currentStatus

  const photo = document.getElementById('profile-photo')
  if (photo) {
    photo.src = profile.photo || photo.src
    photo.alt = profile.photoAlt || `${profile.name} profile photo`
  }

  const downloadButton = document.getElementById('download-cv-button')
  if (downloadButton) {
    downloadButton.href = profile.links.resume
  }

  const interestsWrap = document.getElementById('profile-interests')
  profile.coreInterests.forEach((interest) => {
    interestsWrap.append(el('span', 'border border-primary/60 text-primary px-2 py-1 font-mono text-[12px]', interest))
  })

  document.getElementById('resume-link').href = profile.links.resume
  document.getElementById('footer-linkedin').href = profile.links.linkedin
  document.getElementById('footer-github').href = profile.links.github
}

// ----------------------------- Experience ------------------------------------
function renderExperience() {
  const list = document.getElementById('experience-list')
  experience.forEach((job) => {
    const item = el('li', 'reveal border-l-2 border-surface-variant hover:border-primary pl-8 transition-colors')

    const header = el('div', 'flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3')
    const titleWrap = el('div', 'flex flex-col')
    titleWrap.append(el('h3', 'font-mono text-xl font-semibold text-on-background', job.company))
    titleWrap.append(el('p', 'font-mono text-sm text-on-surface-variant', job.role))
    header.append(titleWrap)
    header.append(el('span', 'font-mono text-xs text-outline whitespace-nowrap', job.period))
    item.append(header)

    item.append(el('p', 'font-mono text-xs text-on-surface-variant mb-4', job.location))

    const ul = el('ul', 'space-y-2')
    job.highlights.forEach((line) => {
      const li = el('li', 'flex gap-3 text-on-surface-variant leading-relaxed')
      li.append(el('span', 'text-primary shrink-0', '▸'))
      li.append(el('span', '', line))
      ul.append(li)
    })
    item.append(ul)
    list.append(item)
  })
}

// ------------------------------- Projects ------------------------------------
function renderProjects() {
  const grid = document.getElementById('projects-grid')
  projects.forEach((project) => {
    const card = el('article', 'reveal border border-surface-variant bg-surface-container-low p-8 flex flex-col gap-4 hover:border-primary/60 transition-colors')
    card.append(el('h3', 'font-mono text-lg font-semibold text-on-background', project.name))
    card.append(el('p', 'text-on-surface-variant leading-relaxed text-sm', project.description))

    const tags = el('div', 'flex flex-wrap gap-2 mt-auto pt-2')
    project.stack.forEach((tech) => {
      tags.append(el('span', 'font-mono text-[11px] text-secondary border border-secondary/40 px-2 py-1', tech))
    })
    card.append(tags)
    grid.append(card)
  })
}

// ------------------------------- Research ------------------------------------
function renderResearch() {
  const list = document.getElementById('research-list')
  research.forEach((item) => {
    const wrap = el('div', 'reveal border-l-2 border-surface-variant hover:border-primary pl-8 transition-all py-2')
    wrap.append(el('span', 'font-mono text-xs text-primary mb-2 block', item.tag))
    wrap.append(el('h3', 'font-mono text-lg text-on-background mb-3', item.title))
    wrap.append(el('p', 'text-on-surface-variant', item.description))
    list.append(wrap)
  })
}

function renderJournal() {
  const list = document.getElementById('journal-list')
  journal.forEach((post) => {
    const wrap = el('div', 'reveal')
    const dateRow = el('div', 'flex items-center gap-2 mb-2')
    dateRow.append(el('span', 'font-mono text-xs text-outline', post.date))
    if (post.draft) {
      dateRow.append(el('span', 'font-mono text-[10px] text-primary border border-primary/40 px-1.5 py-0.5', 'DRAFT'))
    }
    wrap.append(dateRow)
    wrap.append(el('h4', 'font-semibold text-on-background mb-1', post.title))
    wrap.append(el('p', 'text-sm text-on-surface-variant', post.excerpt))
    list.append(wrap)
  })
}

// ------------------------------- Currently ------------------------------------
function renderCurrently() {
  const list = document.getElementById('currently-list')
  currentlyFocused.forEach((line) => {
    const li = el('li', 'reveal flex items-start gap-4 text-on-surface')
    li.append(el('span', 'text-primary shrink-0', '›'))
    li.append(el('span', '', line))
    list.append(li)
  })
}

// -------------------------------- Skills ---------------------------------------
function renderSkills() {
  const grid = document.getElementById('skills-grid')
  Object.entries(skills).forEach(([category, items]) => {
    const block = el('div', 'reveal')
    block.append(el('h3', 'font-mono text-xs uppercase tracking-widest text-primary mb-4', category))
    const tags = el('div', 'flex flex-wrap gap-2')
    items.forEach((skill) => {
      tags.append(el('span', 'font-mono text-xs text-on-surface-variant border border-surface-variant px-2 py-1', skill))
    })
    block.append(tags)
    grid.append(block)
  })
}

// ------------------------------- Education --------------------------------------
function renderEducation() {
  const card = document.getElementById('education-card')
  card.append(el('h3', 'font-mono text-xl text-on-background mb-2', education.degree))
  card.append(el('p', 'text-on-surface-variant', education.school))
  const meta = el('p', 'font-mono text-xs text-outline mt-2', `${education.period} · ${education.location}`)
  card.append(meta)
}

// ------------------------------ Theme toggle -------------------------------------
function initTheme() {
  const root = document.documentElement
  const darkIcon = document.getElementById('icon-dark')
  const lightIcon = document.getElementById('icon-light')
  const toggleBtn = document.getElementById('theme-toggle')

  function apply(theme) {
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    darkIcon.classList.toggle('hidden', theme !== 'dark')
    lightIcon.classList.toggle('hidden', theme === 'dark')
  }

  const stored = localStorage.getItem('theme')
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  apply(stored || (prefersLight ? 'light' : 'dark'))

  toggleBtn.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark'
    apply(next)
    localStorage.setItem('theme', next)
  })
}

// ---------------------------- Mobile menu -----------------------------------------
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('mobile-menu')

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden', isOpen)
    menu.classList.toggle('flex', !isOpen)
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })

  menu.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
      menu.classList.remove('flex')
      toggle.setAttribute('aria-expanded', 'false')
    })
  )
}

// --------------------------- Scroll reveal -----------------------------------------
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'))
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  targets.forEach((t) => observer.observe(t))
}

// --------------------------------- Init ---------------------------------------------
function init() {
  renderHero()
  renderExperience()
  renderProjects()
  renderResearch()
  renderJournal()
  renderCurrently()
  renderSkills()
  renderEducation()
  initTheme()
  initMobileMenu()
  initScrollReveal()
}

document.addEventListener('DOMContentLoaded', init)

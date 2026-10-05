/**
 * Data service — the ONLY place pages get their dynamic content from.
 *
 * Today:  returns the mock content in src/data/cms.js
 * Later:  set  VITE_API_URL=https://your-backend.com/api  in `.env`
 *         and the very same calls hit the backend instead. No page code changes needed.
 *
 * Expected endpoints (JSON, every editable text as { "ar": "...", "en": "..." }):
 *   GET  /story             →  object  (same shape as STORY in src/data/cms.js)
 *   GET  /projects          →  array   (same shape as PROJECTS in src/data/cms.js)
 *   GET  /projects/:slug    →  object  (one project; respond 404 if it doesn't exist)
 */
import { PROJECTS, STORY } from '../data/cms';

const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export class NotFoundError extends Error {
  constructor(message = 'Not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

async function request(path) {
  const res = await fetch(`${BASE}${path}`, { headers: { Accept: 'application/json' } });
  if (res.status === 404) throw new NotFoundError();
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

const mock = (value) => Promise.resolve(structuredClone(value));

export const getStory = () => (BASE ? request('/story') : mock(STORY));

export const getProjects = () => (BASE ? request('/projects') : mock(PROJECTS));

export async function getProject(slug) {
  if (BASE) return request(`/projects/${encodeURIComponent(slug)}`);
  const found = PROJECTS.find((p) => p.slug === slug);
  if (!found) throw new NotFoundError();
  return structuredClone(found);
}

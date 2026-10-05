# PDM — موقع صفحة واحدة (React + Vite + JavaScript)

واجهة أمامية فقط (بدون Backend / API / قاعدة بيانات). كل البيانات محلية.

## التشغيل
```bash
npm install
npm run dev
```

## الميزات
- صفحة واحدة: الرئيسية / الخدمات / الأعمال / من نحن / تواصل معنا + CTA + Footer
- Navbar ثابت مع تمرير سلس وتمييز القسم النشط وقائمة جوال
- عربي (RTL) افتراضي + إنجليزي (LTR) — النصوص في src/data/translations.js
- وضع فاتح (افتراضي) + داكن، يُحفظان في localStorage
- فلترة الأعمال، نموذج تواصل محلي مع تحقق وإشعار نجاح (بدون إرسال حقيقي)
- لمسات: ظهور تدريجي عند التمرير، عدّادات متحركة، شريط تقدّم التمرير، عناصر عائمة، لمعان على الأزرار، حركات hover

---

## الصفحات الجديدة وربط الباك إند / Pages & backend hookup

| Route | Page | Source file |
|-------|------|-------------|
| `/` | Home (all the original sections) | `src/pages/Home.jsx` |
| `/story` | قصتنا / Our Story | `src/pages/Story.jsx` |
| `/projects/:slug` | Project details (opened from "View Project" / "View Case Study") | `src/pages/Project.jsx` |
| `*` | 404 | `src/pages/NotFound.jsx` |

### Where the editable content lives
All content for the Story page and the Projects (cards in the portfolio section **and** the detail pages)
comes from **one place**: `src/data/cms.js`, always through `src/services/api.js`
(`getStory()`, `getProjects()`, `getProject(slug)`).
Every editable text is `{ "ar": "...", "en": "..." }` and the site picks the current language automatically.

To change a story paragraph or add a project today: edit `src/data/cms.js` (a new project = a new object in `PROJECTS`;
it appears automatically in the portfolio grid and gets its own page at `/projects/<slug>`).

### Connecting the backend (no page code changes)
1. Create `.env` with `VITE_API_URL=https://your-backend.com/api`
2. Expose these JSON endpoints (same shapes as `STORY` / `PROJECTS` in `src/data/cms.js`):
   - `GET /story`
   - `GET /projects`
   - `GET /projects/:slug`  (respond **404** if not found → the site shows the 404 page)
3. Images: any project can have `cover` (image URL) and `gallery: [url, url, …]`.
   When omitted, the built-in illustrations (`art`) are used.

### Hosting note
The site now uses real URLs (`/story`, `/projects/nexora`). The host must serve `index.html` for unknown paths:
`public/_redirects` (Netlify) and `vercel.json` (Vercel) are already included.

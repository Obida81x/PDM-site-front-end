/**
 * Content coming from the CMS / backend stores every editable text as { ar, en }.
 * `localize` walks any value (object / array / string) and picks the current language,
 * so pages always receive plain strings.
 */
export const isLocalized = (v) => v && typeof v === 'object' && !Array.isArray(v) && ('ar' in v || 'en' in v) && Object.keys(v).every((k) => k === 'ar' || k === 'en');

export function localize(value, lang) {
  if (Array.isArray(value)) return value.map((v) => localize(v, lang));
  if (isLocalized(value)) return value[lang] ?? value.en ?? value.ar ?? '';
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, lang)]));
  }
  return value;
}

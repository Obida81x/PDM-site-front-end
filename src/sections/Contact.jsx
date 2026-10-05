import { useCallback, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { CONTACT } from '../data/content';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Toast from '../components/Toast';
import { SectionLabel, Title } from '../components/Typography';
import { MapArt } from '../components/Illustrations';

const empty = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const { t } = useSettings();
  const c = t.contact;
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState('');
  const closeToast = useCallback(() => setToast(''), []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: '' }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = c.required;
    if (!form.email.trim()) er.email = c.required;
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = c.invalidMail;
    if (!form.subject) er.subject = c.required;
    if (!form.message.trim()) er.message = c.required;
    setErrors(er);
    if (Object.keys(er).length) return;
    // Frontend only: simulate sending, no network.
    setToast(c.success);
    setForm(empty);
  };

  const info = [
    { icon: 'mail', label: c.email.label, value: CONTACT.email, note: c.email.note, ltr: true },
    { icon: 'phone', label: c.phone.label, value: CONTACT.phone, note: c.phone.note, ltr: true },
    { icon: 'pin', label: c.office.label, value: c.office.value, note: c.office.note },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal dir="start"><SectionLabel>{c.eyebrow}</SectionLabel></Reveal>
            <Reveal delay={60}><Title lines={c.title} hl={[1]} className="big-title" /></Reveal>
            <Reveal delay={120}><p className="body">{c.desc}</p></Reveal>
            <div className="info-list">
              {info.map((it, i) => (
                <Reveal key={it.label} delay={160 + i * 80} className="info-card">
                  <span className="info-ico"><Icon name={it.icon} size={20} /></span>
                  <div>
                    <small>{it.label}</small>
                    <strong dir={it.ltr ? 'ltr' : undefined} className={it.ltr ? 'ltr-text' : ''}>{it.value}</strong>
                    <em>{it.note}</em>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400} className="socials round">
              {['linkedin', 'x', 'instagram', 'youtube'].map((s) => (
                <a key={s} href="#contact" aria-label={s} onClick={(e) => e.preventDefault()}><Icon name={s} size={17} /></a>
              ))}
            </Reveal>
          </div>

          <Reveal dir="end" delay={100} className="form-card">
            <SectionLabel>{c.formLabel}</SectionLabel>
            <Title lines={c.formTitle} hl={[1]} className="form-title" />
            <p className="body">{c.formDesc}</p>
            <form onSubmit={submit} noValidate>
              <div className="f-row">
                <label className={errors.name ? 'err' : ''}>
                  <span>{c.name} *</span>
                  <input value={form.name} onChange={set('name')} placeholder={c.namePh} autoComplete="name" />
                  {errors.name && <em>{errors.name}</em>}
                </label>
                <label className={errors.email ? 'err' : ''}>
                  <span>{c.mail} *</span>
                  <input type="email" dir="ltr" className="ltr-input" value={form.email} onChange={set('email')} placeholder={c.mailPh} autoComplete="email" />
                  {errors.email && <em>{errors.email}</em>}
                </label>
              </div>
              <label className={`select ${errors.subject ? 'err' : ''}`}>
                <span>{c.subject} *</span>
                <div className="select-wrap">
                  <select value={form.subject} onChange={set('subject')} className={form.subject ? '' : 'placeholder'}>
                    <option value="">{c.subjectPh}</option>
                    {c.subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                  </select>
                  <Icon name="chevron" size={16} />
                </div>
                {errors.subject && <em>{errors.subject}</em>}
              </label>
              <label className={errors.message ? 'err' : ''}>
                <span>{c.message} *</span>
                <textarea rows="5" value={form.message} onChange={set('message')} placeholder={c.messagePh} />
                {errors.message && <em>{errors.message}</em>}
              </label>
              <Button type="submit" className="send-btn">{c.send}</Button>
            </form>
          </Reveal>
        </div>

        <Reveal className="location">
          <div className="loc-text">
            <SectionLabel>{c.locLabel}</SectionLabel>
            <h3 className="loc-title">{c.locTitle}</h3>
            <p className="body">{c.locDesc}</p>
            <div className="loc-addr"><Icon name="pin" size={18} /><span>{c.office.value}</span></div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Ramallah+Palestine', '_blank', 'noopener')}
            >
              {c.directions}
            </Button>
          </div>
          <div className="loc-map"><MapArt /></div>
        </Reveal>
      </div>
      <Toast message={toast} onClose={closeToast} />
    </section>
  );
}

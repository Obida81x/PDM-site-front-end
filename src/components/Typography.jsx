export function SectionLabel({ children, className = '' }) {
  return (
    <span className={`label ${className}`}>
      <span className="label-text">{children}</span>
      <span className="label-line" />
    </span>
  );
}

/** Two-tone title: plain lines + highlighted (blue) lines. `hl` = index of highlighted line(s). */
export function Title({ lines, hl = [1], as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`title ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className={hl.includes(i) ? 'hl' : ''}>
          {l}{' '}
        </span>
      ))}
    </Tag>
  );
}

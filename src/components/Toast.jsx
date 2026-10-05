import { useEffect } from 'react';
import Icon from './Icon';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const id = setTimeout(onClose, 4200);
    return () => clearTimeout(id);
  }, [message, onClose]);

  return (
    <div className={`toast ${message ? 'show' : ''}`} role="status" aria-live="polite">
      <Icon name="checkCircle" size={20} />
      <span>{message}</span>
    </div>
  );
}

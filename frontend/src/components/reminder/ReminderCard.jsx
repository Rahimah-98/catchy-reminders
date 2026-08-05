import {
  Copy,
  Trash2,
  Check,
  CopyCheck,
  PencilLine,
  CalendarClock,
  EllipsisVertical,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';

import { TONE_STYLES, TONES } from '../../data/tones';
import { useReminders } from '../../hooks/useReminders';

export default function ReminderCard({ reminder }) {
  const { toggleReminder, deleteReminder, getUrgency } = useReminders();
  const urgency = getUrgency(reminder.dueAt);
  const [copied, setCopied] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(reminder.message);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Failed to copy reminder:', error);
    }
  }

  const tone = TONES.find((t) => t.id === reminder.tone) ?? {
    label: reminder.tone,
    icon: PencilLine,
    style: 'custom',
  };
  const style = TONE_STYLES[tone.style];
  const Icon = tone.icon;

  let formattedDue = null;

  if (reminder.dueAt) {
    const date = new Date(reminder.dueAt);

    if (isToday(date)) {
      formattedDue = `Today - ${format(date, 'h:mm a')}`;
    } else if (isTomorrow(date)) {
      formattedDue = `Tomorrow -  ${format(date, 'h:mm a')}`;
    } else {
      formattedDue = format(date, 'EEE, MMM d, y - h:mm a');
    }
  }

  return (
    <article
      className={`card outline-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        reminder.done ? 'opacity-60' : ''
      }`}>
      <div className='flex flex-col gap-5'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex items-start gap-3 flex-1'>
            <button
              onClick={() => toggleReminder(reminder.id)}
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                reminder.done
                  ? 'bg-success border-success'
                  : 'border-border hover:border-primary'
              }`}>
              {reminder.done && (
                <Check size={12} strokeWidth={3} className='text-white' />
              )}
            </button>

            <div className='min-w-0 flex-1'>
              <h3
                className={`font-heading text-lg font-bold break-words ${
                  reminder.done && 'line-through'
                }`}>
                {reminder.task}
              </h3>

              <div className='mt-3 flex flex-wrap gap-2 sm:gap-3 '>
                {formattedDue && (
                  <span className='inline-flex items-center gap-2 rounded-full bg-bg-secondary px-3 py-1 text-xs text-text-secondary'>
                    <CalendarClock size={14} />
                    {formattedDue}
                  </span>
                )}

                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                  <Icon size={14} />
                  {tone.label}
                </span>
                <span
                  className={`px-2 py-1 ${urgency.color} rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-text-white`}>
                  {urgency.label}
                </span>
              </div>
            </div>
          </div>

          <div
            className='relative shrink-0 bg-surface-hover rounded-full'
            ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`flex size-10 items-center justify-center rounded-xl transition
                ${
                  menuOpen
                    ? 'bg-primary-light border border-primary'
                    : 'hover:bg-primary-light'
                }`}>
              <EllipsisVertical size={18} />
            </button>

            {menuOpen && (
              <div className='absolute right-0 top-10 z-50 w-30 overflow-hidden rounded-2xl border bg-surface shadow-xl'>
                <button
                  onClick={handleCopy}
                  className='flex w-full items-center gap-2 px-4 py-3 text-sm font-medium transition hover:bg-primary-light'>
                  {copied ? (
                    <CopyCheck size={16} className='text-success' />
                  ) : (
                    <Copy size={16} />
                  )}

                  {copied ? 'Copied!' : 'Copy'}
                </button>

                <div className='mx-6 border-t border-border-light' />

                <button
                  onClick={() => {
                    deleteReminder(reminder.id);
                    setMenuOpen(false);
                  }}
                  className='flex w-full items-center gap-2 px-4 py-3 text-sm font-medium text-danger transition hover:bg-danger/10'>
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${style.card} border-l-4 rounded-2xl ${style.accent} px-4 py-3 font-semibold`}>
          {reminder.message}
        </div>
      </div>
    </article>
  );
}

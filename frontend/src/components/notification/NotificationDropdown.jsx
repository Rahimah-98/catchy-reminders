import { formatDistanceToNow } from 'date-fns';
import { useNotifications } from '../../hooks/useNotifications';

import { Bell } from 'lucide-react';

export default function NotificationDropdown({ mobile = false }) {
  const { notifications, markAsRead, clearNotifications } = useNotifications();

  return (
    <div
      className={
        mobile
          ? 'w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg'
          : 'absolute right-0 top-14 z-50 w-96 overflow-hidden rounded-3xl border border-border bg-surface shadow-xl'
      }>
      {/* Header */}
      <div className='flex items-center justify-between border-b border-border px-5 py-4'>
        <h3 className='font-heading text-lg'>Notifications</h3>

        {notifications.length > 0 && (
          <button
            onClick={clearNotifications}
            className='text-sm font-medium text-primary transition hover:underline'>
            Clear all
          </button>
        )}
      </div>

      {/* Empty */}
      {notifications.length === 0 ? (
        <div className='flex flex-col items-center gap-2 px-6 py-10 text-center'>
          <div className='flex size-14 items-center justify-center rounded-2xl bg-primary-light'>
            <Bell className="size-7 fill-yellow/50 text-yellow" />
          </div>

          <h4 className='font-semibold'>You're all caught up!</h4>

          <p className='text-sm text-text-secondary'>
            We'll notify you when one of your reminders is due.
          </p>
        </div>
      ) : (
        <div className='max-h-[420px] overflow-y-auto'>
          {notifications.map((item) => (
            <button
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`w-full border-b border-border p-4 text-left transition-all duration-200 hover:bg-surface-hover ${
                !item.read ? 'bg-primary-light/10' : ''
              }`}>
              {/* Title */}
              <div className='flex items-start justify-between gap-3'>
                <h4 className='font-semibold text-text-primary'>
                  {item.title}
                </h4>

                {!item.read && (
                  <span className='mt-2 size-2 rounded-full bg-primary' />
                )}
              </div>

              {/* Message */}
              <p className='mt-2 line-clamp-2 text-sm leading-6 text-text-secondary'>
                {item.message}
              </p>

              {/* Time */}
              <p className='mt-3 text-xs text-danger'>
                {formatDistanceToNow(new Date(item.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

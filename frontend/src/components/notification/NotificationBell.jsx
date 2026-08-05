import { Bell } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';

export default function NotificationBell({ onClick, className = '' }) {
  const { unreadCount } = useNotifications();

  return (
    <button
      onClick={onClick}
      aria-label='Notifications'
      className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary hover:scale-[1.1] trinsition-all duaration-300 ${className}`}>
      <Bell className='size-5 text-primary' strokeWidth={2} />

      {unreadCount > 0 && (
        <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-white'>
          {unreadCount }
        </span>
      )}
    </button>
  );
}

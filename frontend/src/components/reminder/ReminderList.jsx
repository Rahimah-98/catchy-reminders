import EmptyState from '../ui/EmptyState';
import ReminderCard from './ReminderCard';

export default function ReminderList({ reminders, emptyMessage }) {
  return (
    <div className='h-110 overflow-hidden'>
      <div className='h-full overflow-y-auto p-4 space-y-3'>
        {reminders.length === 0 ? (
          <EmptyState message={emptyMessage} />
        ) : (
          reminders.map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))
        )}
      </div>
    </div>
  );
}

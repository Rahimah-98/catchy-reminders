import { ListTodo, PartyPopper, Hourglass } from 'lucide-react';
import StatCard from './StatCard';
import { useReminders } from '../../hooks/useReminders';

export default function Stats() {
  const { stats } = useReminders();

  return (
    <section className='grid gap-4 sm:gap-8 md:grid-cols-3'>
      <StatCard
        title='Total Tasks'
        value={stats.total}
        subtitle='Keep going!'
        icon={
          <ListTodo
            className='size-7 fill-purple/40 text-purple wand'
            strokeWidth={1.6}
          />
        }
        color='purple'
      />

      <StatCard
        title='Completed'
        value={stats.completed}
        subtitle='Great job!'
        icon={
          <PartyPopper
            className='size-7 fill-green/40 text-green wand'
            strokeWidth={1.6}
          />
        }
        color='green'
      />

      <StatCard
        title='Remaining'
        value={stats.remaining}
        subtitle='You got this!'
        icon={
          <Hourglass
            className='size-7 fill-orange/40 text-orange wand'
            strokeWidth={1.6}
          />
        }
        color='orange'
      />
    </section>
  );
}

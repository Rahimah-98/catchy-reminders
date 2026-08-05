import { useState } from 'react';
import Quote from './Quote';
import ReminderFilters from './ReminderFilters';
import ReminderList from './ReminderList';
import { useReminders } from '../../hooks/useReminders';

export default function ReminderSection() {
  const { reminders} = useReminders();

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');

  let filtered = reminders;

  if (filter === 'active') filtered = reminders.filter((r) => !r.done);
  if (filter === 'completed') filtered = reminders.filter((r) => r.done);
  if (sort === 'oldest') filtered = [...filtered].reverse();

  return (
    <section className='card outline-card p-2 sm:p-8'>
      <ReminderFilters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className='my-4 flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr]'>
        <ReminderList
          reminders={filtered}
           emptyMessage="No reminders yet. Add your first boring chore and let AI make it exciting!"
        />

        <Quote />
      </div>
    </section>
  );
}
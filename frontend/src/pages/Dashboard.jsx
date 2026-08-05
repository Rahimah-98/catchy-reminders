import NavBar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';
import Stats from '../components/stats/Stats';
import Footer from '../components/layout/Footer';
import Quote from '../components/reminder/Quote';
import ReminderList from '../components/reminder/ReminderList';

import { useReminders } from '../hooks/useReminders';
import { Link } from 'react-router-dom';
import { ListTodo, Plus } from 'lucide-react';

export default function Dashboard() {
  const { todaysReminders } = useReminders();

  return (
    <main className='min-h-screen max-w-6xl mx-auto text-text-primary transition-colors duration-300'>
      <div className='px-4 sm:px-6 py-2 sm:py-4 space-y-6'>
        <NavBar />

        {/* <Sidebar /> */}

        {/* Hero */}
        <Hero />

        {/* Stats */}
        <Stats />

        {/* Today's Reminders */}
        <div className='card outline-card p-2 sm:p-8'>
          <div className='mb-6 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex size-8 sm:size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/60'>
                <ListTodo
                  className='size-4 sm:size-5 text-text-primary'
                  strokeWidth={2.5}
                />
              </div>

              <h2 className='text-lg sm:text-3xl font-bold'>
                Today's Reminders
              </h2>
            </div>

            <Link
              to='/reminders'
              className='group card outline-card btn-primary flex items-center justify-center'
              aria-label='Add Reminder'
              title='Add Reminder'>
              <Plus strokeWidth={2.4} className='wand size-5 sm:size-6' />
            </Link>
          </div>
          <div className='my-4 flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr]'>
            <ReminderList
              reminders={todaysReminders}
              emptyMessage='No reminders for today!'
            />
            <Quote />
          </div>
        </div>

        {/* Foote */}
        <Footer />
      </div>
    </main>
  );
}

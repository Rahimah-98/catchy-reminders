import { ListTodo } from 'lucide-react';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import ReminderForm from '../components/reminder/ReminderForm';
import ReminderSection from '../components/reminder/RemindersSection';

export default function Reminders() {
  return (
    <main className='min-h-screen max-w-6xl mx-auto text-text-primary transition-colors duration-300'>
      <div className='px-4 sm:px-6 py-2 sm:py-4 space-y-6 '>
        <NavBar />

        <div className='flex items-center gap-3 pl-5 mt-14 mb-8'>
          <ListTodo className='size-8' strokeWidth={2.2} />
          <h1 className='font-heading text-3xl sm:text-4xl font-bold'>Reminders Page</h1>
        </div>

        {/* Reminder */}
        <ReminderForm />

        <ReminderSection />

        {/* Foote */}
        <Footer />
      </div>
    </main>
  );
}

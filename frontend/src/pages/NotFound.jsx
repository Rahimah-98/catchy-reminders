import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-background flex items-center justify-center px-4'>
      <section className='card outline-card flex items-center flex-col py-14 px-6 w-full max-w-6xl text-center'>
        <div className='absolute left-1/2 top-1/4 md:top-1/3 h-50 md:h-70 w-50 md:w-70 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/25 blur-3xl' />

        <img
          src='/404.png'
          alt='404'
          className='w-60 md:w-76 lg:w-92 mx-auto lg:mx-0'
        />

        <h1 className='mt-10 text-2xl md:text-5xl font-black '>
          Oops! This page went on an adventure.
        </h1>

        <p className='mt-8 text-text-secondary text-xs md:text-lg leading-6 md:leading-7 max-w-lg'>
          The page you're looking for couldn't be found.
          <br />
          Fortunately, your reminders are exactly where you left them. Let's get
          you back on track.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <Link
            to='/dashboard'
            className='btn-primary card outline-card flex items-center justify-center gap-2'>
            <Home size={18} />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

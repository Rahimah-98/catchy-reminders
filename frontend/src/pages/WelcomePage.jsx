import { Sparkles, ArrowRight, PartyPopper, Wand } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import ThemeToggle from '../components/ui/ThemeToggle';

export default function WelcomePage({ onStart }) {
  return (
    <main className='min-h-screen bg-background px-3 py-3 flex items-center'>
      <div className='card outline-card w-full max-w-6xl mx-auto p-4 lg:p-12'>
        <div className='w-ful flex itmes-center justify-between mb-12'>
          <Logo />
          <ThemeToggle />
        </div>

        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 my-4 md:my-0 lg:gap-16'>
          <section>
            <div className='inline-flex items-center gap-2 rounded-full bg-yellow/20 px-3 py-2 mb-6 text-xs'>
              <Sparkles size={16} className='text-yellow' />
              <span className='font-medium'>AI-powered to-do list</span>
            </div>

            <h1 className='font-heading text-6xl leading-tighter font-extrabold'>
              Welcome to
              <br />
              <span className='bg-gradient-to-r from-yellow via-primary to-primary-light bg-clip-text text-transparent '>
                CatchyReminders
              </span>
            </h1>

            <p className='mt-6 text-sm lg:text-lg leading-6 md:leading-7'>
              Transform boring tasks into fun, memorable reminders with
              different personalities. Finish more, smile more, procrastinate
              slightly less.
            </p>

            <div className='flex items-center text-center flex-wrap gap-4 mt-8'>
              <Link
                to='/dashboard'
                onClick={onStart}
                className='
                btn-primary flex items-center gap-2 text-sm justify-center w-full md:w-auto card outline-card
              '>
                Let's Get Started <Sparkles size={18} />
              </Link>

              <Link
                to='/about'
                className='flex items-center justify-center gap-2 w-full md:w-auto h-14 text-sm px-10 border-2 border-border rounded-sm hover:bg-primary hover:-translate-y-1 transition duration-300 font-bold
              '>
                About us <ArrowRight size={18} className='mt-1' />
              </Link>
            </div>
          </section>

          <section className='relative flex-1 flex justify-center'>
            <div className='absolute w-56 h-56 lg:w-[350px] rounded-full bg-yellow/40 blur-3xl' />

            <img
              src='./welcome.png'
              alt='Welcome illustration'
              width={1536}
              height={1024}
              className='relative z-10 w-64 sm:w-130 h-auto animate-float drop-shadow-2xl '
            />

            <div className='absolute flex items-center gap-1 -top-3 md:top-2 left-5 rounded-full bg-yellow/30 px-3 py-2 text-[10px] card'>
              <Wand size={14} className='text-yellow' />
              Turn chores into adventures
            </div>

            <div className='absolute flex items-center gap-1 -bottom-10 md:bottom-9 right-5 rounded-full  px-3 py-2 text-[10px] card'>
              <PartyPopper size={14} className='text-yellow' />
              Finish more tasks
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

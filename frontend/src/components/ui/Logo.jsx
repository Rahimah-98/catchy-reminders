import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/dashboard'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <div className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm sm:rounded-2xl border-2 border-border bg-primary'>
          <Sparkles className='size-5 sm:size-6 text-text-primary' strokeWidth={2} />
        </div>

        <div>
          <h1 className='font-heading text-xl sm:text-3xl font-extrabold tracking-tighter'>
            CatchyReminders
          </h1>

          <p className='text-sm sm:text-xs text-text-secondary'>
            AI-powered to-do list
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

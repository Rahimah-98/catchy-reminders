import { LucideWandSparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className='card outline-card'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_55%,var(--color-yellow-soft),transparent_45%)]' />
      
      <div className='relative sm:flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12'>
        <div className='max-w-2xl'>
          <p className='mb-4 font-semibold text-text-secondary'>
            Hey there! 👋
          </p>

          <h1 className='font-heading text-5xl font-extrabold tracking-tighter leading-[1.2] text-text sm:text-6xl'>
            Let's turn boring
            <br />
            chores into{' '}
            <span className='relative inline-block text-primary'>
              epic
              <svg
                width='190'
                height='60'
                viewBox='-15 -33 170 5'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute -bottom-3 left-0 w-full'>
                <path
                  d='M8 12C30 8 61 5 80 5C118 5 120 10 152 12'
                  stroke='var(--color-yellow)'
                  strokeWidth='5'
                  strokeLinecap='round'
                />
                <path
                  d='M22 26C46 20 73 18 102 18C121 18 139 19 151 20'
                  stroke='var(--color-yellow)'
                  strokeWidth='5'
                  strokeLinecap='round'
                />
              </svg>
            </span>
            <br />
            reminders.
          </h1>

          <p className='mt-6 max-w-sm text-sm leading-relaxed text-text-secondary'>
            Add a task, pick a vibe,
            <br />
            <span className='flex items-center gap-1'>
              <span>and let AI do the magic</span>
              <LucideWandSparkles className='size-5 text-yellow ' />
            </span>
          </p>
        </div>

        <div className='hidden relative sm:flex items-center justify-center'>
          <div className='absolute h-52 w-52 rounded-full bg-yellow-soft blur-2xl opacity-80' />

          <img
            src='./notebook.png'
            alt='Reminder illustration'
            className='relative w-54 md:w-62 float'
          />
        </div>
      </div>
    </section>
  );
}

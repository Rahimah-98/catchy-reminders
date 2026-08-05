import {
  Sparkles,
  Bot,
  PencilLine,
  Drama,
  ArrowRight,
  Star,
  Cloud,
  MonitorSmartphone,
  Zap,
  Target,
  Database,
  Cpu
} from 'lucide-react';

import {
  SiReact,
  SiTailwindcss,
  SiCloudflare,
  SiOpenrouter,
} from 'react-icons/si';
import { PiOpenAiLogoLight } from "react-icons/pi";



import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

import { Link } from 'react-router-dom';

const steps = [
  {
    icon: PencilLine,
    title: 'Add Task',
    text: 'Start with any everyday chore you want to complete.',
    background: 'bg-primary-light/10',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary-dark',
  },
  {
    icon: Drama,
    title: 'Pick a tone',
    text: 'Choose Funny, Pirate, Movie Trailer, Drill Sergeant, and more.',
    background: 'bg-green-soft/10',
    iconBg: 'bg-green-soft',
    iconColor: 'text-green',
  },
  {
    icon: Bot,
    title: 'Generate Reminder',
    text: 'AI instantly rewrites your task into a memorable reminder.',
    background: 'bg-orange-soft/10',
    iconBg: 'bg-orange-soft',
    iconColor: 'text-orange',
  },
];

const benefits = [
  {
    icon: Bot,
    title: 'AI-Powered Creativity',
    description: 'Transforms ordinary tasks into engaging reminders with AI.',
    iconBg: 'bg-purple-soft',
    iconColor: 'text-purple',
  },
  {
    icon: Drama,
    title: 'Multiple Personalities',
    description:
      'Choose from Funny, Pirate, Drill Sergeant, Movie Trailer and more.',
    iconBg: 'bg-green-soft',
    iconColor: 'text-green',
  },
  {
    icon: Cloud,
    title: 'Saved Automatically',
    description: 'Your reminders stay safely stored in LocalStorage.',
    iconBg: 'bg-orange-soft',
    iconColor: 'text-orange',
  },
  {
    icon: MonitorSmartphone,
    title: 'Works Everywhere',
    description: 'Responsive design for desktop, tablet and mobile.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary-dark',
  },
  {
    icon: Zap,
    title: 'Save Time',
    description: 'Generate memorable reminders in just a few seconds.',
    iconBg: 'bg-yellow-soft',
    iconColor: 'text-yellow',
  },
  {
    icon: Target,
    title: 'Stay Motivated',
    description: 'Fun reminders make it easier to stay consistent.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary-dark',
  },
];

const technologies = [
  {
    icon: SiReact,
    color: 'text-sky-500',
    name: 'React',
  },
  {
    icon: SiTailwindcss,
    color: 'text-cyan-500',
    name: 'Tailwind CSS',
  },
  {
    icon: SiOpenrouter,
    color: 'text-text',
    name: 'OpenRouter API',
  },
  {
    icon: PiOpenAiLogoLight,
    color: 'text-text',
    name: 'OpenAI SDK',
  },
  {
    icon: Database,
    color: 'text-yellow-500',
    name: 'LocalStorage',
  },
  {
    icon: SiCloudflare,
    color: 'text-orange-500',
    name: 'Cloudflare',
  },
];

export default function About() {
  return (
    <main className='min-h-screen max-w-6xl mx-auto text-text-primary transition-colors duration-300'>
      <div className='px-4 sm:px-6 py-2 sm:py-4 space-y-6'>
        <NavBar />

        <section className='card outline-card p-8 lg:p-10'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_40%,var(--color-yellow-soft),transparent_45%)]' />

          <div className='relative grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full bg-yellow-soft px-3 py-2 mb-6 text-xs font-medium'>
                <Sparkles size={16} className='text-yellow' />
                About CatchyReminders
              </div>

              <h1 className='font-heading text-5xl tracking-tighter leading-[1.2] sm:text-6xl font-semibold'>
                Make Boring Tasks Impossible
                <span className='bg-gradient-to-r from-yellow via-primary to-primary-light bg-clip-text text-transparent '>
                  {' '}
                  to Ignore.
                </span>
              </h1>

              <p className=' mt-6 text-text-secondary text-base lg:text-lg leading-8 max-w-xl'>
                CatchyReminders transforms ordinary tasks into memorable,
                AI-generated reminders using fun personalities like Pirate,
                Motivational, Movie Trailer and more.
              </p>

              <p className='mt-4 text-text-secondary text-base lg:text-lg leading-8'>
                Instead of ignoring another boring checklist, you'll receive
                reminders that make productivity surprisingly enjoyable.
              </p>
            </div>

            <div className='relative float'>
              <div className='card p-4 rotate-2'>
                <div className='flex items-center gap-3'>
                  <div className='size-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0'>
                    <Bot className='text-primary-dark' />
                  </div>

                  <div>
                    <h3 className='font-heading font-bold mb-2'>
                      AI Reminder Preview
                    </h3>

                    <p className='text-sm text-orange inline-flex items-center gap-2 rounded-full px-3 py-1 font-semibold bg-orange-soft'>
                      Movie Trailer
                    </p>
                  </div>
                </div>

                <div className='mt-6 rounded-2xl bg-orange-soft border-l-4 border-orange p-3 leading-7 font-semibold'>
                  In a world where dirty dishes threaten humanity... only one
                  hero can save the kitchen.
                </div>
              </div>

              <div className='absolute -top-3 -right-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold shadow-sm'>
                5+ AI Tones & Personalities
              </div>
            </div>
          </div>
        </section>

        <section className='card outline-card p-6 lg:p-8'>
          <div className='grid lg:grid-cols-[260px_1fr] gap-10 items-center'>
            <div>
              <span className='inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark'>
                How It Works
              </span>

              <h2 className='mt-5 font-heading text-4xl leading-tight'>
                From Task to Catchy
              </h2>

              <p className='mt-5'>
                Add a task, choose a personality, and let AI create a reminder
                you'll actually remember.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 items-stretch'>
              {steps.map(
                (
                  { icon: Icon, title, text, background, iconBg, iconColor },
                  index,
                ) => (
                  <div key={title} className='relative flex'>
                    {index !== steps.length - 1 && (
                      <div className='hidden md:flex absolute top-8 -right-7 items-center justify-center'>
                        <ArrowRight className='size-5 text-primary-dark' />
                      </div>
                    )}

                    <div
                      className={`relative flex flex-col w-full h-full overflow-hidden rounded-3xl border border-card ${background} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl ${iconBg}`}>
                        <Icon size={22} className={iconColor} />
                      </div>

                      <div className='mt-6 flex-1'>
                        <h3 className='font-heading text-2xl'>{title}</h3>

                        <p className='mt-3 leading-7 text-text-secondary'>
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className='card outline-card p-6 lg:p-8'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-sm text-primary-dark'>
              <Sparkles size={15} />
              Why CatchyReminders?
            </span>

            <h2 className='mt-5 font-heading text-5xl leading-tight max-w-3xl'>
              Benefits that
              <span className='text-primary'> make </span>a difference.
            </h2>

            <p className='mt-6 max-w-2xl text-lg leading-8 text-text-secondary'>
              CatchyReminders combines AI and creativity to help you stay
              organized, motivated, and actually enjoy getting things done.
            </p>
          </div>

          <div className='mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {benefits.map(
              ({ icon: Icon, title, description, iconBg, iconColor }) => (
                <div
                  key={title}
                  className='group relative rounded-3xl border border-card bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${iconBg}`}>
                    <Icon size={22} className={iconColor} />
                  </div>

                  <h3 className='mt-6 text-xl font-heading'>{title}</h3>

                  <p className='mt-3 leading-7 text-text-secondary'>
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className='mt-10 rounded-3xl bg-primary-light p-6 flex flex-col sm:flex-row items-center justify-between gap-5'>
            <div className='flex items-center gap-4'>
              <div className='flex size-14 items-center justify-center rounded-2xl bg-white'>
                <Star className='text-primary-dark' />
              </div>

              <div>
                <h3 className='font-heading text-xl'>
                  Productivity should feel good.
                </h3>

                <p className='text-text-secondary'>
                  CatchyReminders makes it happen.
                </p>
              </div>
            </div>
            <Link to='/reminders'>
              <Button className='btn btn-primary'>Try CatchyReminders</Button>
            </Link>
          </div>
        </section>

        <section className='card outline-card p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='flex size-10 items-center justify-center rounded-xl bg-primary-light'>
              <Cpu className='text-primary-dark' size={20} />
            </div>

            <h2 className='font-heading text-2xl'>Built with</h2>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
            {technologies.map(({ icon: Icon, color, name }) => (
              <div
                key={name}
                className='rounded-2xl border border-card bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
                <Icon className={`mx-auto ${color}`} size={34} />

                <p className='mt-4 text-sm font-medium text-text-secondary'>
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

import {
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  BarChart3,
  Sparkles,
  Info,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';

const links = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    to: '/home',
  },
  {
    name: 'Reminders',
    icon: ListTodo,
    to: '/reminders',
  },
  {
    name: 'Calendar',
    icon: CalendarDays,
    to: '/calendar',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    to: '/analytics',
  },
  {
    name: 'AI Planner',
    icon: Sparkles,
    to: '/planner',
  },
  {
    name: 'About',
    icon: Info,
    to: '/about',
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`card outline-card sticky top-5 hidden h-[calc(100vh-40px)] flex-col justify-between overflow-hidden p-5 transition-all duration-300 lg:flex ${
        collapsed ? 'w-24' : 'w-72'
      }`}>
      <div>
        <div className='mb-8 flex items-center justify-between'>
          {!collapsed && <Logo />}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className='flex size-10 items-center justify-center rounded-xl border border-border hover:bg-primary-light transition'>
            {collapsed ? (
              <ChevronRight className='size-5' />
            ) : (
              <ChevronLeft className='size-5' />
            )}
          </button>
        </div>

        <nav className='space-y-2'>
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-4 py-3 font-semibold transition ${
                    isActive
                      ? 'bg-primary-light text-primary border border-primary/30'
                      : 'hover:bg-surface-hover'
                  }`
                }>
                <Icon className='size-5 shrink-0' />

                {!collapsed && <span className='text-sm'>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className='space-y-4'>
        {!collapsed && (
          <div className='rounded-2xl bg-primary-light p-4'>
            <p className='text-xs font-semibold text-text-secondary'>
              AI Productivity
            </p>

            <h3 className='mt-2 text-lg font-bold'>Finish more tasks 🚀</h3>

            <p className='mt-2 text-sm text-text-secondary'>
              Let AI rewrite boring chores into reminders you'll actually want
              to read.
            </p>
          </div>
        )}

        <div
          className={`flex ${
            collapsed ? 'justify-center' : 'justify-between'
          } items-center`}>
          {!collapsed && (
            <div>
              <p className='text-sm font-semibold'>Appearance</p>

              <p className='text-xs text-text-muted'>
                Switch light / dark mode
              </p>
            </div>
          )}

          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

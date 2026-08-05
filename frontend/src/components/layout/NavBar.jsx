import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, LayoutDashboard, ListTodo, Info } from 'lucide-react';

import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import NotificationBell from '../notification/NotificationBell';
import NotificationDropdown from '../notification/NotificationDropdown';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navLink =
    'flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition';

  const active = 'bg-primary/20 text-primary border border-primary/30';

  const inactive =
    'text-text-secondary hover:bg-surface-hover hover:text-text-primary';

  // Notification
  const dropdownRef =  useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='sticky top-4 z-30'>
      <div className='card outline-card hidden md:grid grid-cols-[1fr_auto_0.7fr] items-center px-5 sm:px-7 py-4'>
        <div className='justify-self-start'>
          <Logo />
        </div>

        {/* Center Navigation */}
        <div className='flex items-center gap-3 justify-self-center'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : inactive}`
            }>
            <LayoutDashboard className='size-4' />
            Dashborad
          </NavLink>

          <NavLink
            to='/reminders'
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : inactive}`
            }>
            <ListTodo className='size-4' />
            Reminders
          </NavLink>

          <NavLink
            to='/about'
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : inactive}`
            }>
            <Info className='size-4' />
            About Us
          </NavLink>
        </div>

        {/* Right Controls */}
        <div className='flex items-center justify-self-end gap-6'>
          <div className='relative' ref={dropdownRef}>
            <NotificationBell
              onClick={() => setShowNotifications((prev) => !prev)}
            />

            {showNotifications && <NotificationDropdown />}
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Controls */}
      <div className='card outline-card flex md:hidden items-center justify-between px-5 py-4'>
        <Logo />

        <button
          onClick={() => setOpen(!open)}
          className='flex h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-hover transition'>
          {open ? <X className='size-6' /> : <Menu className='size-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='card outline-card mt-3 md:hidden p-3'>
          <div className='flex flex-col gap-2'>
            <NavLink
              to='/dashboard'
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLink} ${isActive ? active : inactive}`
              }>
              <LayoutDashboard className='size-5' />
              Home
            </NavLink>

            <NavLink
              to='/reminders'
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLink} ${isActive ? active : inactive}`
              }>
              <ListTodo className='size-5' />
              Reminders
            </NavLink>

            <NavLink
              to='/about'
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLink} ${isActive ? active : inactive}`
              }>
              <Info className='size-5' />
              About Us
            </NavLink>

            <div className='border-t border-border pt-3 mt-2 space-y-3'>
              {/* Notifications */}
              <div className='relative'>
                <button
                  onClick={() => setShowNotifications((prev) => !prev)}
                  className='w-full flex items-center justify-between rounded-2xl border border-border bg-surface-hover px-4 py-3 transition hover:border-primary hover:bg-primary-light/10'>
                  <div className='flex items-center gap-3'>
                    <NotificationBell  className='shrink-0' />

                    <div className='text-left'>
                      <p className='text-sm font-semibold'>Notifications</p>
                      <p className='text-xs text-text-secondary'>
                        View reminder alerts
                      </p>
                    </div>
                  </div>
                </button>

                {showNotifications && (
                  <div className='mt-3'>
                    <NotificationDropdown mobile={true} />
                  </div>
                )}
              </div>

              {/* Theme */}
              <div className='flex items-center justify-between rounded-2xl border border-border bg-surface-hover px-4 py-3'>
                <div>
                  <p className='text-sm font-semibold'>Theme</p>
                  <p className='text-xs text-text-secondary'>
                    Light / Dark mode
                  </p>
                </div>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

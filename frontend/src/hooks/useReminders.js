import { useContext } from 'react';
import { RemindersContext } from '../context/reminder/RemindersContext';

export function useReminders() {
  const ctx = useContext(RemindersContext);

  if (!ctx) {
    throw new Error('useReminders must be used within a RemindersProvider');
  }

  return ctx;
}

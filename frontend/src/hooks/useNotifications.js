import { useContext } from 'react';
import { NotificationsContext } from '../context/notification/NotificationContext';

export function useNotifications() {
  const ctx = useContext(NotificationsContext);

  if (!ctx) {
    throw new Error('useReminders must be used within a RemindersProvider');
  }

  return ctx;
}

import { useEffect } from 'react';

import { useReminders } from './useReminders';
import { useNotifications } from './useNotifications';

import { showReminderNotification } from '../services/notifications';

function getNotificationTitle(reminder) {
  const maxLength = 30;

  return reminder.task.length > maxLength
    ? `${reminder.task.slice(0, maxLength)}...`
    : reminder.task;
}

export function useReminderNotifications() {
  const { reminders, updateReminder } = useReminders();
  const { addNotification } = useNotifications();

  useEffect(() => {
    function checkReminders() {
      const now = Date.now();

      reminders.forEach((reminder) => {
        if (reminder.done || reminder.notified || !reminder.dueAt) {
          return;
        }
        const REMINDER_MINUTES = 5;
        const REMINDER_OFFSET = REMINDER_MINUTES * 60 * 1000;
        
        const dueTime = new Date(reminder.dueAt).getTime();
        const notifyTime = dueTime - REMINDER_OFFSET;

        if (now >= notifyTime) {
          showReminderNotification(reminder);

          addNotification({
            id: crypto.randomUUID(),
            reminderId: reminder.id,
            title: getNotificationTitle(reminder),
            message: reminder.message,
            type: 'due',
            read: false,
            createdAt: new Date().toISOString(),
          });

          updateReminder(reminder.id, {
            notified: true,
          });
        }
      });
    }

    checkReminders();

    const interval = setInterval(checkReminders, 60000);

    return () => clearInterval(interval);
  }, [reminders, updateReminder, addNotification]);
}

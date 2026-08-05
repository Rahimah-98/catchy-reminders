import { useEffect, useMemo, useReducer } from 'react';

import { remindersReducer } from './remindersReducer';
import { RemindersContext } from './RemindersContext';

import { isToday, isPast } from 'date-fns';

function getUrgency(dueAt) {
  if (!dueAt) {
    return {
      label: 'No Due Date',
      color: 'bg-text-muted',
    };
  }

  const due = new Date(dueAt);

  if (isPast(due) && !isToday(due)) {
    return {
      label: 'Overdue',
      color: 'bg-danger',
    };
  }

  if (isToday(due)) {
    return {
      label: 'Today',
      color: 'bg-warning',
    };
  }

  return {
    label: 'Upcoming',
    color: 'bg-success',
  };
}

export function RemindersProvider({ children }) {
  const [reminders, dispatch] = useReducer(remindersReducer, [], () => {
    const saved = localStorage.getItem('reminders');

    return saved ? JSON.parse(saved) : [];
  });

  const stats = useMemo(() => {
    const total = reminders.length;
    const completed = reminders.filter((r) => r.done).length;
    const remaining = total - completed;

    return {
      total,
      completed,
      remaining,
    };
  }, [reminders]);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  function addReminder(reminder) {
    dispatch({
      type: 'add',
      payload: reminder,
    });
  }

  function toggleReminder(id) {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  }

  function deleteReminder(id) {
    dispatch({
      type: 'delete',
      payload: id,
    });
  }

  function updateReminder(id, updates) {
    dispatch({
      type: 'update',
      payload: {
        id,
        updates,
      },
    });
  }

  const todaysReminders = useMemo(() => {
    const today = new Date();

    return reminders.filter((reminder) => {
      if (reminder.done) return false;

      const due = new Date(reminder.dueAt);

      return (
        due.getFullYear() === today.getFullYear() &&
        due.getMonth() === today.getMonth() &&
        due.getDate() === today.getDate()
      );
    });
  }, [reminders]);

  const value = useMemo(
    () => ({
      reminders,
      todaysReminders,
      getUrgency,
      stats,
      addReminder,
      toggleReminder,
      deleteReminder,
      updateReminder,
    }),
    [reminders, stats, todaysReminders],
  );

  return (
    <RemindersContext.Provider value={value}>
      {children}
    </RemindersContext.Provider>
  );
}

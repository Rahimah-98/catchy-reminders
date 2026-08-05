import { useEffect, useMemo, useReducer } from 'react';

import { NotificationsContext } from './NotificationContext';
import { notificationsReducer } from './notificationsReducer';

export function NotificationsProvider({ children }) {
  const [notifications, dispatch] = useReducer(notificationsReducer, [], () => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  function addNotification(notification) {
    dispatch({
      type: 'add',
      payload: notification,
    });
  }

  function markAsRead(id) {
    dispatch({
      type: 'read',
      payload: id,
    });
  }

  function markAllAsRead() {
    dispatch({
      type: 'readAll',
    });
  }

  function removeNotification(id) {
    dispatch({
      type: 'delete',
      payload: id,
    });
  }

  function clearNotifications() {
    dispatch({
      type: 'clear',
    });
  }

  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  const value = useMemo(
    () => ({
      notifications,
      unreadCount,

      addNotification,
      markAsRead,
      markAllAsRead,

      removeNotification,
      clearNotifications,
    }),
    [notifications, unreadCount],
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

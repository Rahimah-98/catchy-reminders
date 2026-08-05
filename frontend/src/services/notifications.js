export async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;

  const permission = await Notification.requestPermission();

  return permission === 'granted';
}

export function showReminderNotification(reminder) {
  if (Notification.permission !== 'granted') return;

  new Notification('CatchyReminders', {
    body: reminder.message,
    icon: '/logo.png',
  });
}

const WORKER_URL = import.meta.env.VITE_WORKER_URL;

export async function generateReminder(task, tone, dueAt) {
  let response;

  const formattedDue = new Intl.DateTimeFormat('en-AF', {
    timeZone: 'Asia/Kabul',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(dueAt);

  try {
    response = await fetch(`${WORKER_URL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, tone, dueAt: formattedDue }),
    });
  } catch {
    const err = new Error('NETWORK_ERROR');
    throw err;
  }

  let data = null;

  try {
    data = await response.json();
  } catch (error) {
    console.error('Failed to parse JSON response:', error);
  }

  if (!response.ok) {
    const err = new Error(data?.error || 'Something went wrong');
    err.status = response.status;
    throw err;
  }

  if (!data?.reminder) {
    throw new Error('EMPTY_RESPONSE');
  }
  console.log({
    task,
    tone,
    dueAt,
  });
  return data.reminder;
}

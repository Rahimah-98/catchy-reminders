import { useState } from 'react';

import { generateReminder } from '../services/reminderApi';
import { getTone, TONES } from '../data/tones';
import { useReminders } from './useReminders';

export function useGenerateReminder() {
  const { addReminder } = useReminders();

  const [dueAt, setDueAt] = useState(null);
  const [task, setTask] = useState('');
  const [tone, setTone] = useState('funny');
  const [customTone, setCustomTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCustomTone, setShowCustomTone] = useState(false);

  async function handleGenerate() {
    if (!task.trim()) return;

    const isCustom = !TONES.some((item) => item.id === tone);

    const selectedTone = isCustom ? tone : getTone(tone).label;

    try {
      setLoading(true);

      const message = await generateReminder(task, selectedTone, dueAt);

      addReminder({
        id: crypto.randomUUID(),
        task,
        tone,
        isCustom,
        message,
        dueAt: dueAt ? dueAt.toISOString() : null,
        done: false,
        notified: false,
      });

      setTask('');
      setDueAt('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleToneChange(value) {
    if (value === 'custom') {
      setShowCustomTone(true);
      return;
    }

    setTone(value);
    setCustomTone('');
  }

  function handleSaveCustomTone(value) {
    setCustomTone(value);
    setTone(value);
    setShowCustomTone(false);
  }

  return {
    task,
    setTask,

    tone,
    customTone,

    dueAt,
    setDueAt,

    loading,

    showCustomTone,
    setShowCustomTone,

    handleGenerate,
    handleToneChange,
    handleSaveCustomTone,
  };
}

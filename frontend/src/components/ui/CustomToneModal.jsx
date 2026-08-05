import { X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

const EXAMPLES = [
  'Strict Teacher',
  'Batman',
  'Gordon Ramsay',
  'Shakespeare',
  'Supportive Friend',
];

export default function CustomToneDialog({ open, onClose, onSave }) {
  const [customTone, setCustomTone] = useState('');

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const tone = customTone.trim();
    if (!tone) return;

    onSave(tone);
    setCustomTone('');
    onClose();
  }

  function handleClose() {
    setCustomTone('');
    onClose();
  }

  return (
    <div
      className='
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        p-4
      '>
      <form
        onSubmit={handleSubmit}
        className='
          card outline-card
          w-full max-w-lg
          p-6
          space-y-6
        '>
        {/* Header */}
        <div className='flex items-start justify-between'>
          <h2 className='mt-4 text-2xl font-display font-bold'>
            Create Your Own Tone
          </h2>

          <button
            type='button'
            onClick={handleClose}
            className='
              rounded-lg border p-2
              hover:bg-surface-hover
              transition
            '>
            <X className='size-5' />
          </button>
        </div>

        {/* Examples */}
        <div>
          <p className='mb-3 text-sm font-medium'>Quick examples</p>

          <div className='flex flex-wrap gap-2'>
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type='button'
                onClick={() => setCustomTone(example)}
                className='
                  rounded-full
                  border
                  px-2 py-1
                  text-xs
                  hover:bg-primary-light
                  transition
                '>
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <textarea
          rows={5}
          value={customTone}
          onChange={(e) => setCustomTone(e.target.value)}
          placeholder='e.g. Write it like a strict teacher, Batman, or Shakespeare'
          className='
              input
              resize-none
            '
        />

        {/* Footer */}
          <Button
            disabled={!customTone.trim()}
            className='
              btn-primary
              disabled:opacity-50
              w-full
            '>
            Save Tone
          </Button>
      </form>
    </div>
  );
}

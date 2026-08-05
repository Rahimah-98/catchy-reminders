import {
  CalendarPlus,
  ClipboardPen,
  Loader2,
  PencilSparkles,
  WandSparklesIcon,
} from 'lucide-react';

import Button from '../ui/Button';
import ToneSelect from '../ui/ToneSelect';
import Loading from '../ui/Loading';
import CustomToneModal from '../ui/CustomToneModal';

import { useGenerateReminder } from '../../hooks/useGenerateReminder';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/datepicker.css';

export default function ReminderForm() {
  const {
    task,
    setTask,

    tone,
    customTone,

    dueAt,
    setDueAt,

    loading,
    showCustomTone,

    handleGenerate,
    handleToneChange,
    handleSaveCustomTone,

    setShowCustomTone,
  } = useGenerateReminder();

  return (
    <section className='card outline-card p-4 sm:p-6 md:p-8 space-y-3'>
      <div className='flex items-center gap-2 mb-6'>
        <div className='flex size-8 sm:size-12 shrink-0 items-center justify-center rounded-full bg-primary/60 border-2 border-primary'>
          <PencilSparkles
            className='size-4 sm:size-5 text-text-primary'
            strokeWidth={2.5}
          />
        </div>

        <h2 className='font-heading tracking-tight text-lg sm:text-3xl font-bold'>
          Create a Catchy Reminder
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_240px_240px] gap-4'>
        <div>
          <label className='block text-sm font-semibold mb-2'>
            What's the task?
          </label>

          <div className='flex items-center input'>
            <ClipboardPen
              className='size-6 text-text-muted shrink-0'
              strokeWidth={1.9}
            />

            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type='text'
              placeholder='e.g. Take out the trash'
              className='ml-2 flex-1 bg-transparent outline-none text-lg placeholder:text-text-muted'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-semibold mb-2'>
            Choose a tone
          </label>

          <ToneSelect value={tone} onChange={handleToneChange} />
        </div>
        <div>
          <label className='block text-sm font-semibold mb-2'>
            Due Date & Time
          </label>
          <div className='flex items-center input'>
            <CalendarPlus
              className='size-6 text-text-muted shrink-0'
              strokeWidth={1.9}
            />
            <DatePicker
              selected={dueAt}
              onChange={(date) => setDueAt(date)}
              showTimeSelect
              portalId='root'
              timeIntervals={5}
              dateFormat='dd MMM yyyy - hh:mm aa'
              placeholderText='e.g. 20 Aug 2020 - 08:15 AM'
              className='ml-2 flex-1 bg-transparent outline-none text-sm placeholder:text-text-muted'
              popperPlacement='bottom-start'
            />
          </div>
        </div>
      </div>
      <div className='col-span-full flex justify-end mt-4 sm:mt-8'>
        <Button
          onClick={handleGenerate}
          disabled={loading || (tone === 'custom' && !customTone)}
          className='min-w-full sm:min-w-64'>
          {loading ? (
            <Loader2 className='w-4 h-4 animate-spin' />
          ) : (
            <span className='wand'>
              <WandSparklesIcon className='w-4 h-4' />
            </span>
          )}

          {loading ? 'Generating' : 'Generate Reminder'}
        </Button>
      </div>
      {loading && <Loading />}
      <CustomToneModal
        open={showCustomTone}
        onClose={() => setShowCustomTone(false)}
        onSave={handleSaveCustomTone}
      />
    </section>
  );
}

import { PartyPopper } from 'lucide-react';

export default function EmptyState({message}) {
  return (
    <div className='card outline-card min-h-full flex flex-col items-center justify-center text-center gap-6'>
      <div className='w-26 h-26 rounded-full bg-yellow/50 dark:bg-yellow/20 flex items-center justify-center border border-yellow'>
        <PartyPopper
          className='size-12 fill-yellow/40 text-yellow'
          strokeWidth={1.6}
        />
      </div>
      <p className='text-center text-text-muted px-2'>{message}</p>
    </div>
  );
}

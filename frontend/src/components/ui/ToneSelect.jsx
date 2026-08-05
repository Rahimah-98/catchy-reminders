import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, PencilLine } from 'lucide-react';

import { TONES,CUSTOM_TONE, TONE_STYLES } from '../../data/tones';

export default function ToneSelect({ value, onChange }) {
  
  const selectedTone = TONES.find((tone) => tone.id === value) ?? {
    id: 'custom',
    label: value,
    icon: PencilLine,
    style: 'custom',
  };

  const SelectedIcon = selectedTone.icon;

  const availableTones = [...TONES, CUSTOM_TONE];

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        aria-label='Tone'
        className='input flex items-center justify-between gap-3 data-[state=open]:border-primary-dark
        '>
        <div className='flex items-center gap-3'>
          <span
            className={`
              flex size-7 items-center justify-center rounded-md
              ${TONE_STYLES[selectedTone.style]}
            `}>
            <SelectedIcon className='size-5' />
          </span>

          <span className='font-medium'>{selectedTone.label}</span>
        </div>

        <Select.Icon>
          <ChevronDown
            className='size-5 transition-transform duration-200
            '
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side='bottom'
          sideOffset={10}
          align='start'
          position='popper'
          avoidCollisions
          className='card outline-card z-50 min-w-(--radix-select-trigger-width) overflow-hidden rounded animate-dropdown
          '>
          <Select.Viewport className='space-y-1 p-2'>
            {availableTones.map((tone) => {
              const Icon = tone.icon;

              return (
                <Select.Item
                  key={tone.id}
                  value={tone.id}
                  className='relative flex cursor-pointer items-center justify-between rounded-sm px-4 py-2 outline-none transition-all duration-200 hover:bg-primary-light focus:bg-primary-light data-[state=checked]:bg-primary-light
                  '>
                  <Select.ItemText>
                    <span className='flex items-center gap-3'>
                      <span
                        className={`
                          flex size-7 items-center justify-center rounded-md
                          ${TONE_STYLES[tone.style].iconBox}
                        `}>
                        <Icon className='size-4' />
                      </span>

                      <span className='text-sm'>{tone.label}</span>
                    </span>
                  </Select.ItemText>

                  <Select.ItemIndicator>
                    <Check className='size-5 text-primary-dark' />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

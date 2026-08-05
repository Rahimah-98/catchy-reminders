import {
  Laugh,
  Flame,
  Skull,
  Clapperboard,
  ShieldAlert,
  PencilLine,
} from 'lucide-react';

export const TONES = [
  {
    id: 'funny',
    label: 'Funny',
    icon: Laugh,
    style: 'funny',
  },
  {
    id: 'motivational',
    label: 'Motivational',
    icon: Flame,
    style: 'motivational',
  },
  {
    id: 'pirate',
    label: 'Pirate',
    icon: Skull,
    style: 'pirate',
  },
  {
    id: 'movie',
    label: 'Movie Trailer',
    icon: Clapperboard,
    style: 'movie',
  },
  {
    id: 'drill',
    label: 'Drill Sergeant',
    icon: ShieldAlert,
    style: 'drill',
  },
];

export const CUSTOM_TONE = {
  id: 'custom',
  label: 'Create your own',
  icon: PencilLine,
  style: 'custom',
};

export const getTone = (id) => TONES.find((tone) => tone.id === id);

export const TONE_STYLES = {
  funny: {
    badge: 'bg-funny/25 text-funny',
    card: 'bg-funny/25',
    accent: 'border-l-funny',
    iconBox: 'bg-funny/25 text-funny dark:bg-funny/15',
  },

  motivational: {
    badge: 'bg-motivational/25 text-motivational',
    card: 'bg-motivational/25',
    accent: 'border-l-motivational',
    iconBox: 'bg-motivational/25 text-motivational dark:bg-motivational/15',
  },

  pirate: {
    badge: 'bg-pirate/25 text-pirate',
    card: 'bg-pirate/25',
    accent: 'border-l-pirate',
    iconBox: 'bg-pirate/25 text-pirate dark:bg-pirate/15',
  },

  movie: {
    badge: 'bg-movie/25 text-movie',
    card: 'bg-movie/25',
    accent: 'border-l-movie',
    iconBox: 'bg-movie/25 text-movie dark:bg-movie/15',
  },

  drill: {
    badge: 'bg-drill/25 text-drill',
    card: 'bg-drill/25',
    accent: 'border-l-drill',
    iconBox: 'bg-drill/25 text-drill dark:bg-drill/15',
  },

  custom: {
    badge: 'bg-primary/25 text-primary-dark',
    card: 'bg-primary/25',
    accent: 'border-l-primary',
    iconBox: 'bg-primary/25 text-primary-dark dark:bg-primary/15',
  },
};

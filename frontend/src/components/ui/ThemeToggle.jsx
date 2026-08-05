import { Moon, Sun } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/themeContext';


const ThemeToggle = () => {
const { darkMode, setDarkMode } = useContext(ThemeContext);


  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className='flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-sm sm:rounded-2xl border-2 border-border bg-surface transition hover:scale-[1.05] shadow-sm'>
        {darkMode ? (
          <Sun size={22} strokeWidth={2.2} />
        ) : (
          <Moon size={22} strokeWidth={2.2} />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle
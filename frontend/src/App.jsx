import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import Reminders from './pages/Reminders';
import About from './pages/About';
import NotFound from './pages/NotFound';

import { useReminderNotifications } from './hooks/useReminderNotifications';

const Shell = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/reminders' element={<Reminders />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default function App() {
  useReminderNotifications();

  return (
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
  );
}

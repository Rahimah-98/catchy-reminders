import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { ThemeProvider } from './context/theme/ThemeProvider';
import { RemindersProvider } from './context/reminder/RemindersProvider';
import { NotificationsProvider } from './context/notification/NotificationProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ThemeProvider>
    <RemindersProvider>
      <NotificationsProvider>
      <App />
      </NotificationsProvider>
    </RemindersProvider>
  </ThemeProvider>,
  </React.StrictMode>
);

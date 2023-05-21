import React from 'react';
import { createRoot } from 'react-dom/client'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { App } from './App'

TimeAgo.addDefaultLocale(en)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/no-cycle
import { App } from './App';n

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

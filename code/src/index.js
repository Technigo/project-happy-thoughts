import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './inputbox.css';
import './thoughtboxes.css';
import './footer.css'
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

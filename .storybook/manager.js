import { addons } from 'storybook/manager-api';

const DARK_KEY = 'hearth-dark';

// Global D key handler in the manager frame, same mechanism as CIVIC's
// Storybook. Story iframes have their own handler via preview.jsx; the
// manager frame needs one so pressing D anywhere in Storybook works.
addons.register('hearth/dark-mode', () => {
  window.addEventListener('keydown', (e) => {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key.toLowerCase() !== 'd') return;
    const next = localStorage.getItem(DARK_KEY) !== '1';
    localStorage.setItem(DARK_KEY, next ? '1' : '0');
  });
});

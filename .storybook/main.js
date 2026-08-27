import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: [
    '../components/**/*.stories.@(js|jsx)',
    '../foundations/**/*.stories.@(js|jsx)',
    // Templates render through _ds_bundle.js in their .dc.html form, so a story
    // that imports the source is the only way to review them pre-recompile.
    '../templates/**/*.stories.@(js|jsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  // Hearth components are plain JSX, so docgen can only ever infer "unknown"
  // types; turning it off keeps the props table to exactly what each story
  // declares (controls and args), nothing else.
  typescript: {
    reactDocgen: false,
  },
};

export default config;

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

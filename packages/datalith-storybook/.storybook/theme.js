import { create } from '@storybook/theming'
import Logo from './logo-white.svg'

export default create({
  // Is this a 'light' or 'dark' theme?
  base: 'light',

  // Color palette
  colorPrimary: '#FFFFFF', // primary color
  colorSecondary: '#181818', // secondary color

  // UI
  appBg: '#181818',
  appContentBg: '#F2F2F2',
  appBorderColor: '#181818',
  appBorderRadius: 2,

  // Fonts
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontCode: 'Menlo, monospace',

  // Text colors
  textColor: '#7f7f7f',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#181818',
  barSelectedColor: '#181818',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  // Brand logo/text
  brandImage: Logo,
  brandTitle: 'datalith',
})

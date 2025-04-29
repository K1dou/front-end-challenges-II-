export interface BrowsersItem {
  browser: string;
  minVersion: string | null;
  text: string | null;
}

export const dataBrowsers: BrowsersItem[] = [
  {
    browser: '/logo-chrome.svg',
    minVersion: 'Minimum version 62',
    text: 'Add to Chrome',
  },
  {
    browser: '/logo-firefox.svg',
    minVersion: 'Minimum version 55',
    text: 'Add to Firefox',
  },
  {
    browser: '/logo-opera.svg',
    minVersion: 'Minimum version 46',
    text: 'Add to Opera',
  },
];

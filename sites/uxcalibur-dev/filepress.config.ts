import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/uxcalibur';

export default defineFilepressConfig({
  title: 'UXcalibur',
  description: 'An expert UX method for your coding agent. Elevate your app through broad strokes, thoughtful refinements, and precision polish.',
  url: 'https://uxcalibur.dev',
  author: 'Catalyst Forge LLC',
  tagline: "Draw out your app’s potential.",
  lede: 'The UX design skill for your coding agent',
  homePage: 'home',
  logo: '/blade.svg',
  ogImage: '/social.png',
  nav: [
    { label: 'Install & use', href: '/install' },
    { label: 'Example', href: '/example' },
    { label: 'Method', href: '/method' },
    { label: 'GitHub', href: github, icon: 'github' }
  ],
  redirects: [
    { from: '/home', to: '/', status: 301 },
    { from: '/posts', to: '/method', status: 301 },
    { from: '/topics', to: '/method', status: 301 },
    { from: '/tags', to: '/method', status: 301 }
  ],
  footerLinks: [
    { label: 'Detailed specs', href: '/spec' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'MIT license', href: `${github}/blob/main/LICENSE` },
    { label: 'npm', href: 'https://www.npmjs.com/package/uxcalibur' },
    { label: 'Catalyst Forge', href: 'https://catalystforge.com/tools/' }
  ]
});

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
    { label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNptU11r20AQ_CvLPbVEkWNDH2q9pLiEujjF0ARSSglnaSVdfbo77k5yhPF_764ku2nJk8_7MbMzuzqKTizniTCyQbEUj0-51GrXepGI2DsOyQpNhLBXWsMMVps1KBOi1Bq5iF6xDVyWR9UhRbTK0QTuvF8_jBX5XiyPQktTtYTGGen3hT2YBH58ut8k8EBU33OvXEzgq-zk-KZm35qohsm-2QLT3wEWN-n84xW8uwzxPoOGchqkKSBaqwOE1jmtsIBdD7FGGCXUNjBkUJHx7pTGrccQgADTDzcZsBSVQ4EdauvQA1eCNbDSti1KLT3ClqACe0M8ylSE44xrMrhMt0jniysorT_jNEQtToko0JFNP4_CUFOFsSR-x_yE5ij0-V_aXat0QeS6z0DuAs9fetsMcojx1Q5OyYjJ6wpn3xhxfS6B3DZOaVJHYtgl51UnicR5a0uopTfsA5Nd0G6dlv3Bq6qOs4jhjLmdOkv1Elvyg9GGeTv0qlT5yDEi_SKvu_yi-Q0XPYW_0FbCIOtN_zMwFvgfsRbw-AQeO4UHCOg7OrSBZfCKL8zRpRH0cyMN_fhpO0Q0GoBTAKa65dhI22SB_-XyGulsL-cy5Pg9JWijtW3Qjfdcx-jCcjZrX6bPJyUVLBCdpSbr-1dFlYp1u0tpptlK0ob6EK_vrK_werNZ_YUQpz_ipj3m' },
    { label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl178sXvNrYQsLE17yS4sLEuQ7Yk9RJaMNHY2hPz3PjlttoU2tCdJTzOjpzdvTnrSi_tMO9OTXujnl9pYrsagM93QRNYPFIAvjRh7jKIefGhJrddLBEwUInuH67vivrjLkQA0ipExAhwCTUwHQJZrcjHV__r4hPOeXYODaclJzOOerQU6jGHwc9TK0mSElHGK3jkKu1aZYfgU1RgpAAMpJleTki74se0ukKjnF3V5NFMNRW6dajhQLWCZoVqjzLw3lSXF_WCpBwOTINWO3BiULBKT4Cdy6aQXJx39GNJOdyJDXJRly9KNVVH7vvypSz7rkkOXcnz_IWEpgajsDbty_mL8uJp_W1mO3d_UPWeaXZQwzoTjNpCpu5lNR1BroRN9pgaVHMnBhz0wqACpWQDu2FJESeqBI7nJD4GFUl3x3qaCOwpJQ3Ti9S3T1egaS83WBOEdZEIHX096MIJX9ebL43pd9M1H77wk6ufsGnJpZgm_OMPF0fT2RvD6cbn6tlndiLjSiyW6gSXefv73-Aay5RU8svvnrDhQndfeScDnb2fNamwfPi-fNn8KhJjUBjBO7RJKJpNwxL3zjua5So6eXZdEfkNLOt_TAAV_MdnVK8VlrAJhOFj8XOk_nYh0OMnVmCnwxJbO3wHHD1_X' },
    { label: 'Detailed specs', href: '/spec' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'MIT license', href: `${github}/blob/main/LICENSE` },
    { label: 'npm', href: 'https://www.npmjs.com/package/uxcalibur' },
    { label: 'Catalyst Forge', href: 'https://catalystforge.com/tools/' }
  ]
});

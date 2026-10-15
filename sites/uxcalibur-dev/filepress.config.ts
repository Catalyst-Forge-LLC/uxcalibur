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
    { label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780VxzKyELoWkv2YWFZQmyPbGHyJKRxsmGkP_eJ6fNttAN7UnS08zo6c2bsz7o-SzTzvSk5_rpuTaWqzHoTDd0IOsHCsAXRow9RVEPPrSk1usFAg4UInuH68_FrJgBiWJkjACGQAemIyDLNbmYan9bPeK8Z9fgYFpyEvO4Z2uBDmMY_BS1tHQwQso4RW8chV2rzDB8imqMFICBEJOrSUkX_Nh2V0jU07O6PpqphiK3TjUcqBYwzFCtUWbam8qS4n6w1IOBSZBqR24MShaJSfAHcumk52cd_RjSTnciQ5yXZcvSjVVR-778pUk-aZJDk3J8-ylfKYGo7A27cvpifL-afltZjt1Hyl4yzS5KGCfCcRvI1N3EpiOoNdeJPlODSo7k6MMeGFSA1CwAd2wpoiT1wJHc5MfAQqmueG9TwR2FpCE68fKa6Wp0jaVma4LwDjKhgy9nPRjBq3rzdbVeF33z3jsvifolu4Vcm1nCK85wcTK9vRO8Xi2W3zfLOxE3erFEN7DE-8__Gd9AtryCR3b_nBUHqvPaOwn4_P2sSY3tw5fF4-ZvgRCT2gDGqV1CyWQSTrh33tE0U8nRk-uSyK9oSed7GqDgbya7eaXADCIrEIaDxU-V_tOJSIeTXI2ZAk9s6fIDNO5ebA' },
    { label: 'Detailed specs', href: '/spec' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'MIT license', href: `${github}/blob/main/LICENSE` },
    { label: 'npm', href: 'https://www.npmjs.com/package/uxcalibur' },
    { label: 'Catalyst Forge', href: 'https://catalystforge.com/tools/' }
  ]
});

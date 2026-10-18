import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/uxcalibur';

export default defineFilepressConfig({
  title: 'UXcalibur',
  description: "Give your coding agent a method for reviewing the experience, choosing a coherent design direction, and carrying it into the product. Start with the whole app, one journey, or a focused polish pass.",
  url: 'https://uxcalibur.dev',
  author: 'Catalyst Forge LLC',
  tagline: "Draw out your app’s potential.",
  lede: "UX design skill for your coding agent",
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
    { label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780e0xtxKyEJr2kl1YWJYg2xN7iCwZaexsCPnvfXLa3Rba0J4kPc2Mnt68OetJL-4y7UxPeqEfn2pjuRqDznRDE1k_UAC-NGLsKYq696EltdksETBRiOwdrj8Wd8UnIFGMjBHAEGhiOgKyXJOLqfbX9QPOB3YNDqYlJzGPB7YW6DCGwc9RK0uTEVLGKXrlKOxaZYbhQ1RjpAAMhJhcTUq64Me2u0KiHp_U9dFMNRS5darhQLWAYYZqjTLz3lSWFPeDpR4MTIJUO3JjULJITIKfyKWTXpx19GNIO92JDHFRli1LN1ZF7fvypyb5rEkOTcrx9Yd8pQSisjfsyvmL8f1q_m1lOXZ_U_aSaXZRwjgTjrtApu5mNh1BrYVO9JkaVHIkRx8OwKACpGYBuGdLESWpB47kJj8GFkp1xXubCu4pJA3RieeXTFejayw1OxOE95AJHXw-68EIXtXbL-vNpuib9955SdQv2VvItZklvOIMFyfT2xvBm_Vy9W27uhHxRi-W6AaWePv53-MbyJZX8Mj-n7PiQHVeeycBn7-dNauxu_-8fNj-KRBiUhvAOLVLKJlMwgn3zjuaZyo5enZdEvkFLel8TwMU_MVkb14pMIPICoThYPFzpf90ItLhJFdjpsATW7p8BziYXm0' },
    { label: 'Detailed specs', href: '/spec' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'MIT license', href: `${github}/blob/main/LICENSE` },
    { label: 'npm', href: 'https://www.npmjs.com/package/uxcalibur' },
    { label: 'Catalyst Forge', href: 'https://catalystforge.com/tools/' }
  ]
});

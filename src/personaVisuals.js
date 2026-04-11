const PERSONA_VISUALS = {
  default: {
    image: '/personas/default-avatar.svg',
    alt: '人格角色插画占位',
  },
  SEXY: {
    image: '/personas/sexy-topview.png',
    alt: 'SEXY 尤物角色插画',
  },
  CTRL: {
    image: '/personas/ctrl-topview-2.jpg',
    alt: 'CTRL 拿捏者角色插画',
  },
  'ATM-er': {
    image: '/personas/atm-er-topview.jpg',
    alt: 'ATM-er 送钱者角色插画',
  },
  BOSS: {
    image: '/personas/boss-topview.jpg',
    alt: 'BOSS 领导者角色插画',
  },
  DEAD: {
    image: '/personas/dead-topview.jpg',
    alt: 'DEAD 死者角色插画',
  },
  'Dior-s': {
    image: '/personas/dior-s-topview.jpg',
    alt: 'Dior-s 雕丝角色插画',
  },
  FAKE: {
    image: '/personas/fake-topview.jpg',
    alt: 'FAKE 伪人角色插画',
  },
  'FU?K': {
    image: '/personas/fuk-topview.jpg',
    alt: 'FU?K 草者角色插画',
  },
  GOGO: {
    image: '/personas/gogo-topview.jpeg',
    alt: 'GOGO 行人角色插画',
  },
  'JOKE-R': {
    image: '/personas/joke-r-topview.jpg',
    alt: 'JOKE-R 小丑角色插画',
  },
  MUM: {
    image: '/personas/mum-topview.jpeg',
    alt: 'MUM 妈妈角色插画',
  },
  MALO: {
    image: '/personas/malo-topview.jpg',
    alt: 'MALO 吗喽角色插画',
  },
  'LOVE-R': {
    image: '/personas/love-r-topview.png',
    alt: 'LOVE-R 多情者角色插画',
  },
  IMSB: {
    image: '/personas/imsb-topview.jpg',
    alt: 'IMSB 傻者角色插画',
  },
  IMFW: {
    image: '/personas/imfw-topview.jpg',
    alt: 'IMFW 废物角色插画',
  },
  MONK: {
    image: '/personas/monk-topview-2.png',
    alt: 'MONK 僧人角色插画',
  },
  OG8K: {
    image: '/personas/og8k-topview.jpg',
    alt: 'OG8K 无所谓人角色插画',
  },
  'OH-NO': {
    image: '/personas/oh-no-topview.jpg',
    alt: 'OH-NO 哦不人角色插画',
  },
  POOR: {
    image: '/personas/poor-topview.jpg',
    alt: 'POOR 贫困者角色插画',
  },
  HHHH: {
    image: '/personas/hhhh-topview.jpg',
    alt: 'HHHH 傻乐者角色插画',
  },
  SHIT: {
    image: '/personas/shit-topview.jpg',
    alt: 'SHIT 愤世者角色插画',
  },
  SOLO: {
    image: '/personas/solo-topview.jpg',
    alt: 'SOLO 孤儿角色插画',
  },
  'THIN-K': {
    image: '/personas/thin-k-topview.png',
    alt: 'THIN-K 思考者角色插画',
  },
  'THAN-K': {
    image: '/personas/than-k-topview.jpg',
    alt: 'THAN-K 感恩者角色插画',
  },
  'WOC!': {
    image: '/personas/woc-topview.jpg',
    alt: 'WOC! 握草人角色插画',
  },
  ZZZZ: {
    image: '/personas/zzzz-topview.jpg',
    alt: 'ZZZZ 装死者角色插画',
  },
  DRUNK: {
    image: '/personas/drunk-topview.jpeg',
    alt: 'DRUNK 酒鬼角色插画',
  },
}

export function getPersonaVisual(code) {
  return PERSONA_VISUALS[code] || PERSONA_VISUALS.default
}

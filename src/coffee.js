const COFFEE_RECOMMENDATIONS = {
  CTRL: {
    name: '加薪美式',
    reason: '你做事有主心骨，也有推进力，适合来一杯干脆利落的。',
  },
  'ATM-er': {
    name: '升职拿铁',
    reason: '你总在照顾别人，也该给自己一杯像奖励一样的。',
  },
  'Dior-s': {
    name: '黄油美式',
    reason: '你有自己的节奏，不爱热闹，简单但很有味道。',
  },
  BOSS: {
    name: '搬砖美式600ml',
    reason: '你天生像在赶路，也适合一杯火力更足的。',
  },
  'THAN-K': {
    name: '生椰拿铁',
    reason: '你温和又舒服，适合一杯顺口又讨喜的。',
  },
  'OH-NO': {
    name: '桂花拿铁',
    reason: '你细腻又敏感，适合一点温柔一点香气。',
  },
  GOGO: {
    name: '橙C美式',
    reason: '你轻快直接，说走就走，适合清爽有劲的感觉。',
  },
  SEXY: {
    name: '红丝绒拿铁',
    reason: '你自带存在感，适合一杯一眼就记住的。',
  },
  'LOVE-R': {
    name: '玫瑰拿铁',
    reason: '你情绪丰沛，也适合更有氛围感的一杯。',
  },
  MUM: {
    name: '燕麦拿铁',
    reason: '你让人安心，也适合一杯柔和又稳定的。',
  },
  FAKE: {
    name: '西班牙拿铁',
    reason: '你有很多层，不是一口就能看懂的人。',
  },
  OG8K: {
    name: '桂花美式',
    reason: '你松弛又自然，适合耐喝、不抢戏的类型。',
  },
  MALO: {
    name: '白桃气泡美式',
    reason: '你活泼好玩，适合带点跳感的。',
  },
  'JOKE-R': {
    name: '香草拿铁',
    reason: '你总把轻松留给别人，也值得一杯温柔一点的。',
  },
  'WOC!': {
    name: '海盐焦糖拿铁',
    reason: '你表面一惊一乍，心里其实很有层次。',
  },
  'THIN-K': {
    name: '桂花拿铁',
    reason: '你适合慢一点、静一点、越喝越顺的一杯。',
  },
  SHIT: {
    name: '摩卡拿铁',
    reason: '你嘴上很硬，心里其实更适合浓一点的安慰。',
  },
  ZZZZ: {
    name: '吨吨拿铁600ml',
    reason: '你需要的是一杯能慢慢续上的。',
  },
  POOR: {
    name: '加薪美式',
    reason: '你把劲都用在重点上，适合直接、专注的口味。',
  },
  MONK: {
    name: '茉莉花香美式',
    reason: '你适合清一点、静一点、留白更多一点的。',
  },
  IMSB: {
    name: '黄油拿铁',
    reason: '你有点拧巴，也有点可爱，适合软一点的。',
  },
  SOLO: {
    name: '燕麦拿铁',
    reason: '你需要的不是刺激，是一杯更温和的陪伴。',
  },
  'FU?K': {
    name: '气泡美式',
    reason: '你不爱按套路来，适合轻松、直接、带点野劲的。',
  },
  DEAD: {
    name: '香草拿铁',
    reason: '先别想太多，来一杯好入口的，慢慢缓一缓。',
  },
  IMFW: {
    name: '海盐焦糖拿铁',
    reason: '你需要一点甜，也需要一点稳稳的安慰。',
  },
  HHHH: {
    name: '白桃气泡美式',
    reason: '你的路数很特别，适合一杯开心就好的。',
  },
  DRUNK: {
    name: '橙C气泡美式',
    reason: '你适合更放松、更有劲、也更有玩心的一杯。',
  },
}

const FALLBACK_RECOMMENDATION = {
  name: '生椰拿铁',
  reason: '先来一杯顺口的，再慢慢挑更适合你的。',
}

export function getCoffeeRecommendation(code) {
  return COFFEE_RECOMMENDATIONS[code] || FALLBACK_RECOMMENDATION
}

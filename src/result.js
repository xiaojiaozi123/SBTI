import { drawRadar } from './chart.js'
import { generateShareImage } from './share.js'
import { getCoffeeRecommendation } from './coffee.js'
import { getPersonaVisual } from './personaVisuals.js'

const LEVEL_LABEL = { L: '低', M: '中', H: '高' }
const LEVEL_CLASS = { L: 'level-low', M: 'level-mid', H: 'level-high' }

/**
 * 渲染测试结果
 */
export function renderResult(result, userLevels, dimOrder, dimDefs, config) {
  const { primary, secondary, rankings, mode } = result
  const coffee = getCoffeeRecommendation(primary.code)

  // Kicker
  const kicker = document.getElementById('result-kicker')
  if (mode === 'drunk') kicker.textContent = '隐藏人格已激活'
  else if (mode === 'fallback') kicker.textContent = '系统强制兜底'
  else kicker.textContent = '你的主类型'

  // 主类型
  document.getElementById('result-code').textContent = primary.code
  document.getElementById('result-name').textContent = primary.cn

  const personaVisual = getPersonaVisual(primary.code)
  const artWrap = document.getElementById('result-art')
  const artImage = document.getElementById('result-art-image')
  artWrap.dataset.persona = primary.code
  artWrap.classList.toggle('result-art-featured', primary.code === 'SEXY')
  artImage.src = personaVisual.image
  artImage.alt = personaVisual.alt

  // 匹配度
  document.getElementById('result-badge').textContent =
    `匹配度 ${primary.similarity}%` + (primary.exact != null ? ` · 精准命中 ${primary.exact}/15 维` : '')

  // Intro & 描述
  document.getElementById('result-intro').textContent = primary.intro || ''
  document.getElementById('result-desc').textContent = primary.desc || ''
  document.getElementById('coffee-name').textContent = coffee.name
  document.getElementById('coffee-reason').textContent = coffee.reason

  // 次要匹配
  const secEl = document.getElementById('result-secondary')
  if (secondary && (mode === 'drunk' || mode === 'fallback')) {
    secEl.style.display = ''
    document.getElementById('secondary-info').textContent =
      `${secondary.code}（${secondary.cn}）· 匹配度 ${secondary.similarity}%`
  } else {
    secEl.style.display = 'none'
  }

  // 雷达图
  const canvas = document.getElementById('radar-chart')
  drawRadar(canvas, userLevels, dimOrder, dimDefs)

  // 维度详情
  const detailEl = document.getElementById('dimensions-detail')
  detailEl.innerHTML = ''
  for (const dim of dimOrder) {
    const level = userLevels[dim] || 'M'
    const def = dimDefs[dim]
    if (!def) continue

    const row = document.createElement('div')
    row.className = 'dim-row'
    const header = document.createElement('div')
    header.className = 'dim-header'

    const name = document.createElement('span')
    name.className = 'dim-name'
    name.textContent = def.name

    const badge = document.createElement('span')
    badge.className = `dim-level ${LEVEL_CLASS[level]}`
    badge.textContent = LEVEL_LABEL[level]

    header.append(name, badge)

    const desc = document.createElement('div')
    desc.className = 'dim-desc'
    desc.textContent = def.levels[level]

    row.append(header, desc)
    detailEl.appendChild(row)
  }

  // TOP 5
  const topEl = document.getElementById('top-list')
  topEl.innerHTML = ''
  const top5 = rankings.slice(0, 5)
  top5.forEach((t, i) => {
    const item = document.createElement('div')
    item.className = 'top-item'
    const rank = document.createElement('span')
    rank.className = 'top-rank'
    rank.textContent = `#${i + 1}`

    const code = document.createElement('span')
    code.className = 'top-code'
    code.textContent = t.code

    const name = document.createElement('span')
    name.className = 'top-name'
    name.textContent = t.cn

    const sim = document.createElement('span')
    sim.className = 'top-sim'
    sim.textContent = `${t.similarity}%`

    item.append(rank, code, name, sim)
    topEl.appendChild(item)
  })

  // 免责声明
  document.getElementById('disclaimer').textContent =
    mode === 'normal' ? config.display.funNote : config.display.funNoteSpecial

  // 下载分享图
  const btnDownload = document.getElementById('btn-download')
  btnDownload.onclick = () => {
    generateShareImage(primary, userLevels, dimOrder, dimDefs, mode)
  }
}

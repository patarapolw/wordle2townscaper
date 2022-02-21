import './style.css'
import md from '@readme'
import { sparseToClip, SparseCorner } from 'townsclipper'
import { mapping, similar } from './mapping'

document.querySelector<HTMLDivElement>('#readme')!.innerHTML = md

const elRaw = document.querySelector<HTMLTextAreaElement>('#raw')!
const elNTries = document.querySelector<HTMLInputElement>('#ntries')!
const elId = document.querySelector<HTMLInputElement>('#townscaper-id')!
const elLink = document.querySelector<HTMLAnchorElement>('#townscaper-link')!
const elSubmit = document.querySelector<HTMLButtonElement>('#submit')!
const elCleaned = document.querySelector<HTMLDivElement>('#cleaned')!
const elLinkArea = document.querySelector<HTMLDivElement>('#link-area')!

function setNTries(n: number, evt: Event): false {
  if (evt) evt.preventDefault()
  elNTries.value = String(n)
  elSubmit.click()

  return false
}

Object.assign(window, { setNTries })

elRaw.oninput = () => {
  elLinkArea.setAttribute('data-changed', '')
}

function setId(v = 'FCIfgnPf_c') {
  elId.value = v
  elLink.href = 'https://' + elLink.innerText.trim() + elId.value
  elLinkArea.removeAttribute('data-changed')
}

setId()

const mapDown = new Map<string, string>()

Object.entries(similar).map(([k, vs]) => {
  mapDown.set(k, k)
  vs.map((v) => {
    mapDown.set(v, k)
  })
})

const reStr = `(?:${Array.from(mapDown.keys()).join('|')})`
const regex = new RegExp(reStr, 'g')

elSubmit.onclick = () => {
  let width = 0
  let matrix: (keyof typeof similar)[][] = []

  for (const row of elRaw.value.trim().split('\n')) {
    const contents = Array.from(row.matchAll(regex))
    if (contents.length > 0) {
      const blocks = contents.map(
        (m) => mapDown.get(m[0]) as keyof typeof similar
      )

      matrix.push(blocks)

      if (blocks.length > width) {
        width = blocks.length
      }
    }
  }

  if (!matrix.length) {
    setId()
    return
  }

  const height = Number(elNTries.value)

  if (!isNaN(height) && height > matrix.length) {
    matrix = [
      ...matrix,
      ...Array(height - matrix.length).fill(Array(width).fill('⬛'))
    ]
  }

  elCleaned.innerHTML = matrix.map((m) => m.join('')).join('<br/>')

  const sparse: SparseCorner[] = []

  for (let x1 = 0; x1 < width; x1++) {
    const sparseItem: SparseCorner = {
      x: 9 * (x1 + 1),
      y: -9,
      voxels: {
        0: 15
      }
    }

    for (let z1 = 0; z1 < matrix.length; z1++) {
      const c = mapping[matrix[matrix.length - z1 - 1][x1]]
      if (typeof c !== 'undefined' && c >= 0) {
        sparseItem.voxels[z1 + 1] = c
      }
    }

    sparse.push(sparseItem)
  }

  setId(sparseToClip(sparse))
}

elSubmit.click()

elRaw.addEventListener('paste', () => {
  setTimeout(() => {
    elSubmit.click()
  })
})

elNTries.oninput = () => {
  setTimeout(() => {
    elSubmit.click()
  })
}

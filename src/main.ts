import './style.css'

import md from '@readme'
import { SparseCorner, sparseToClip } from 'townsclipper'

import { isSquare, mapping, similar } from './mapping'

document.querySelector<HTMLDivElement>('#readme')!.innerHTML = md

const elRaw = document.querySelector<HTMLTextAreaElement>('#raw')!
const elNTries = document.querySelector<HTMLInputElement>('#ntries')!
const elId = document.querySelector<HTMLInputElement>('#townscaper-id')!
const elLink = document.querySelector<HTMLAnchorElement>('#townscaper-link')!
const elSubmit = document.querySelector<HTMLButtonElement>('#submit')!
const elCleaned = document.querySelector<HTMLDivElement>('#cleaned')!
const elLinkArea = document.querySelector<HTMLDivElement>('#link-area')!
const elBuildingSquares =
  document.querySelector<HTMLDivElement>('#building-squares')!

document.querySelectorAll('[data-wordle-ntries]').forEach((el) => {
  el.addEventListener('click', () => {
    elNTries.value = String(el.getAttribute('data-wordle-ntries'))
    elSubmit.click()
  })
})

elRaw.oninput = () => {
  elSubmit.click()
}

elRaw.onpaste = () => {
  elSubmit.click()
}

elCleaned.oninput = () => {
  elSubmit.click()
}

elNTries.oninput = () => {
  elSubmit.click()
}

const mapDown = new Map<string, string>()

Object.entries(similar).map(([k, vs]) => {
  mapDown.set(k, k)
  vs.map((v) => {
    mapDown.set(v, k)
  })
})

elBuildingSquares.innerText = Object.keys(similar).join(' ')

const reStr = `(?:${[...new Set(mapDown.keys())].join('|')})`
const regex = new RegExp(reStr, 'g')

elSubmit.onclick = () => {
  setTimeout(() => {
    doParse().then(doBuildLink)
  })
}

elSubmit.click()

async function doParse() {
  const matrix: (keyof typeof similar)[][] = []

  for (const block of elRaw.value.trim().split(/(?:\r?\n){2,}/g)) {
    const b0 = block.trim()
    if (b0) {
      matrix.push(...doSubParse(b0))
      matrix.push([])
    }
  }

  matrix.pop()

  elCleaned.innerHTML = matrix.map((m) => m.join('')).join('<br/>')

  return matrix
}

function doSubParse(raw: string) {
  let matrix: (keyof typeof similar)[][] = []
  let width = 0

  for (const row of raw.split('\n')) {
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

  const height = Number(elNTries.value)

  if (matrix.length && !isNaN(height) && height > matrix.length) {
    matrix = [
      ...matrix,
      ...Array(height - matrix.length).fill(
        matrix[0].map((c) => (isSquare(c) ? '⬛' : ' '))
      )
    ]
  }

  return matrix
}

async function doBuildLink(matrix: (keyof typeof similar)[][] = []) {
  elLinkArea.setAttribute('data-changed', '')

  if (!matrix || !matrix.length) {
    setId()
    return
  }

  const sparse: SparseCorner[] = []
  const width = Math.max(...matrix.map((m) => m.length))

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

function setId(v?: string) {
  if (v) {
    elLinkArea.removeAttribute('data-changed')
  }
  elId.value = v || 'FCIfgnPf_c'
  elLink.href = 'https://' + elLink.innerText.trim() + elId.value
}

async function main() {
  setId()
}

main()

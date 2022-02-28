import './style.css'

import md from '@readme'
import { SparseCorner, clipToSparse, sparseToClip } from 'townsclipper'

import { isSquare, mapping, similar } from './mapping'

document.querySelector<HTMLDivElement>('#readme')!.innerHTML = md

const elRaw = document.querySelector<HTMLTextAreaElement>('#raw')!
const elNTries = document.querySelector<HTMLInputElement>('#ntries')!
const elIds = document.querySelectorAll<HTMLElement>('.townscaper-id')
const elLink = document.querySelector<HTMLAnchorElement>('#townscaper-link')!
const elSubmit = document.querySelector<HTMLButtonElement>('#submit')!
const elCleaned = document.querySelector<HTMLDivElement>('#cleaned')!
const elLinkArea = document.querySelector<HTMLDivElement>('#link-area')!
const elBuildingSquares =
  document.querySelector<HTMLDivElement>('#building-squares')!

const loadOptions: ILoadOptions = {
  type: localStorage.getItem('type') || undefined,
  ntries: Number(localStorage.getItem('ntries')) || undefined,
  width: Number(localStorage.getItem('width')) || undefined
}

document.querySelectorAll('[data-wordle-ntries]').forEach((el) => {
  el.addEventListener('click', () => {
    loadOptions.type =
      loadOptions.type === el.textContent
        ? undefined
        : el.textContent || undefined
    loadOptions.ntries =
      Number(el.getAttribute('data-wordle-ntries')) || undefined
    loadOptions.width =
      Number(el.getAttribute('data-wordle-width')) || undefined

    elSubmit.click()
  })
})

elRaw.addEventListener('input', () => {
  elSubmit.click()
})

elRaw.addEventListener('paste', () => {
  elSubmit.click()
})

elCleaned.addEventListener('input', () => {
  setTimeout(() => {
    doSubParse(elCleaned.innerText, true).then(doBuildLink)
  })
})

elNTries.addEventListener('input', () => {
  loadOptions.type = undefined
  loadOptions.ntries = Number(elNTries.value) || undefined
  elSubmit.click()
})

const mapDown = new Map<string, string>()

Object.entries(similar).map(([k, vs]) => {
  mapDown.set(k, k)
  vs.map((v) => {
    mapDown.set(v, k)
  })
})

elBuildingSquares.innerText = Object.keys(similar).join(' ')

const regex = new RegExp(`(?:${[...new Set(mapDown.keys())].join('|')})`, 'g')

elSubmit.addEventListener('click', () => {
  setTimeout(() => {
    doParse(elRaw.value).then(doBuildLink)
  })
})

async function doParse(raw: string) {
  const oldMatrix: (keyof typeof similar)[][] = []

  for (const block of raw.trim().split(/(?:\r?\n){2,}/g)) {
    const b0 = block.trim()
    if (b0) {
      oldMatrix.push(...(await doSubParse(b0)))
      oldMatrix.push([])
    }
  }

  const newMatrix: typeof oldMatrix = []
  const isBlank = (r: typeof oldMatrix[0]) => {
    return !r.join('').trim().length
  }

  oldMatrix.map((r, i) => {
    if (isBlank(r)) {
      if (i === 0 || i === oldMatrix.length - 1) return
      if (oldMatrix[i - 1] && isBlank(oldMatrix[i - 1])) return
    }
    newMatrix.push(r)
  })

  elCleaned.innerHTML = newMatrix.map((m) => m.join('')).join('<br/>')

  return newMatrix
}

async function doSubParse(raw: string, fromElClean?: boolean) {
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

  if (!fromElClean) {
    if (
      matrix.length &&
      loadOptions.ntries &&
      loadOptions.ntries > matrix.length
    ) {
      matrix = [
        ...matrix,
        ...Array(loadOptions.ntries - matrix.length).fill(
          matrix[0].map((c) => (isSquare(c) ? '⬜' : ' '))
        )
      ]
    }
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

interface ILoadOptions {
  type?: string
  ntries?: number
  width?: number
}

function setId(v?: string, init?: boolean) {
  if (v) {
    elLinkArea.removeAttribute('data-changed')
    let hash = v

    Object.entries(loadOptions).map(([k, v]) => {
      if (v) {
        hash += `&${k}=${v}`
        localStorage.setItem(k, v)
      } else {
        localStorage.removeItem(k)
      }
    })

    const u = new URL(location.href)
    u.hash = hash
    location.replace(u.href)

    setLoadOptions()
  } else {
    init = false
  }

  v = v || 'FCIfgnPf_c'
  elIds.forEach((el) => {
    el.innerText = v!
  })
  elLink.href = elLink.getAttribute('data-baseurl')! + v
  elLink.innerText = elLink.href.replace(/^https:\/\//, '')

  if (init === true) {
    const reverseMapping = new Map<number, keyof typeof similar>()
    Object.entries(mapping).map(([k, v]) => {
      reverseMapping.set(v, k as keyof typeof similar)
    })

    const sp = clipToSparse(v)
    const height = Math.max(
      0,
      ...sp.flatMap((s) => Object.keys(s.voxels).map((k) => Number(k) - 1))
    )
    const matrix: (keyof typeof similar)[][] = JSON.parse(
      JSON.stringify(Array(height).fill(Array(sp.length).fill('⬜')))
    )

    if (loadOptions.ntries) {
      const { ntries } = loadOptions
      Array(Math.floor(height / ntries))
        .fill(null)
        .map((_, i) => {
          if (!i) return
          const h = i * ntries - 1
          matrix[h] = []
        })
    }

    sp.map((s) => {
      Object.entries(s.voxels).map(([h, c]) => {
        let i = Number(h)
        if (i === 0) return
        i = height - i + 1

        const j = s.x / 9 - 1
        matrix[i] = matrix[i] || []
        matrix[i][j] = reverseMapping.get(c) || '⬜'
      })
    })

    if (loadOptions.width) {
      const { width } = loadOptions
      Array(Math.floor(sp.length / width))
        .fill(null)
        .map((_, i) => {
          if (!i) return

          matrix.map((r) => {
            if (!i) return
            const h = i * width
            r[h] = ' '
          })
        })
    }

    elCleaned.innerHTML = matrix.map((m) => m.join('')).join('<br/>')
  }
}

function setLoadOptions() {
  elNTries.value = String(loadOptions.ntries || '')

  document.querySelectorAll('[data-wordle-ntries]').forEach((el) => {
    if (el.textContent === loadOptions.type) {
      el.setAttribute('data-current', 'true')
    } else {
      el.removeAttribute('data-current')
    }
  })
}

async function main() {
  setLoadOptions()

  let id = ''
  new URL(location.href).hash
    .replace(/^#/, '')
    .split('&')
    .map((kv) => kv.split('=', 2))
    .map(([k, v]) => {
      if (!v) {
        id = k
        return
      }

      switch (k) {
        case 'type':
          loadOptions.type = decodeURIComponent(v)
          break
        case 'ntries':
          loadOptions.ntries = Number(v) || undefined
          break
        case 'width':
          loadOptions.width = Number(v) || undefined
      }
    })

  setId(id, true)
}

main()

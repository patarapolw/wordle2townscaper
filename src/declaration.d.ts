declare module '@readme' {
  const md: string
  export default md
}

declare module 'townsclipper' {
  export interface SparseCorner {
    x: number
    y: number
    voxels: {
      [floor: number]: number
    }
  }
  export function sparseToClip(sparse: SparseCorner[]): string
  export function clipToSparse(clip: string): SparseCorner[]
}

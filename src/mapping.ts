export const similar = {
  '⬜': [
    '⬛',
    '⚪️',
    '⚫️',
    ':white_large_square:',
    ':black_large_square:',
    ':white_circle:',
    ':black_circle:'
  ],
  '🟥': [':red_square:', ':large_red_square:'],
  '🟧': [':yellow_square:', ':large_yellow_square:'],
  '🟨': ['🟡', ':yellow_square:', ':yellow_circle:'],
  '🟩': ['🟢', ':green_square:', ':green_circle:'],
  '🟪': [':purple_square:', ':large_purple_square:']
}

export const mapping: Record<keyof typeof similar, number> = {
  '⬜': -1,
  '🟥': 1,
  '🟧': 2,
  '🟨': 3,
  '🟩': 5,
  '🟪': 11
}

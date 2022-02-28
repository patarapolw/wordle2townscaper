export const similar = {
  ' ': [],
  '⬜': ['⚪️', ':white_large_square:', ':white_circle:'],
  '⬛': ['⚫️', ':black_large_square:', ':black_circle:'],
  '🟥': [':red_square:', ':large_red_square:'],
  '🟧': [':yellow_square:', ':large_yellow_square:'],
  '🟨': ['🟡', ':yellow_square:', ':yellow_circle:'],
  '🟩': ['🟢', ':green_square:', ':green_circle:'],
  '🟦': [':blue_square:', ':large_blue_square:'],
  '🟪': [':purple_square:', ':large_purple_square:'],
  '🔼': [':arrow_up_small:', ':arrow_up:'],
  '↕️': [':arrow_up_down:'],
  '↔': ['↔ ', ':arrow_left_right:'],
  '🔽': [':arrow_down_small:', ':arrow_down:']
}

export const mapping: Record<keyof typeof similar, number> = {
  ' ': -1,
  '⬜': -1,
  '⬛': -1,
  '🟥': 1,
  '🟧': 2,
  '🟨': 3,
  '🔽': 3,
  '↔': 3,
  '🟩': 5,
  '🟦': 10,
  '🔼': 10,
  '↕️': 10,
  '🟪': 11
}

export function isSquare(c: string) {
  return c !== ' '
}

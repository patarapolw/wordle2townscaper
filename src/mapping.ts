export const similar = {
  ' ': [],
  '⬜': [
    '⚪️',
    ':white_large_square:',
    ':white_circle:',
    '🤍',
    ':white_heart:'
  ],
  '⬛': [
    '⚫️',
    ':black_large_square:',
    ':black_circle:',
    '🖤',
    ':black_heart:'
  ],
  '🟥': [':red_square:', ':large_red_square:', '❤️', ':red_heart:'],
  '🟧': [':orange_square:', ':large_orange_square:', '🧡', ':orange_heart:'],
  '🟨': [
    '🟡',
    ':yellow_square:',
    ':large_yellow_square:',
    ':yellow_circle:',
    '💛',
    ':yellow_heart:'
  ],
  '🟩': [
    '🟢',
    ':green_square:',
    ':large_green_square:',
    ':green_circle:',
    '💚',
    ':green_heart:'
  ],
  '🟦': [':blue_square:', ':large_blue_square:', '💙', ':blue_heart:'],
  '🟪': [':purple_square:', ':large_purple_square:', '💜', ':purple_heart:'],
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

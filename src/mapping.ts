export const similar = {
  ' ': [],
  '⬜': [
    ':white_square:',
    ':white_large_square:',
    '⚪️',
    ':white_circle:',
    ':large_white_circle:',
    '🤍',
    ':white_heart:'
  ],
  '⬛': [
    ':black_square:',
    ':black_large_square:',
    '⚫️',
    ':black_circle:',
    ':large_black_circle:',
    '🖤',
    ':black_heart:'
  ],
  '🟥': [
    ':red_square:',
    ':large_red_square:',
    '🔴',
    ':red_circle:',
    ':large_red_circle:',
    '❤️',
    ':red_heart:'
  ],
  '🟧': [
    ':orange_square:',
    ':large_orange_square:',
    '🟠',
    ':orange_circle:',
    ':large_orange_circle:',
    '🧡',
    ':orange_heart:'
  ],
  '🟨': [
    ':yellow_square:',
    ':large_yellow_square:',
    '🟡',
    ':yellow_circle:',
    ':large_yellow_circle:',
    '💛',
    ':yellow_heart:'
  ],
  '🟩': [
    ':green_square:',
    ':large_green_square:',
    '🟢',
    ':green_circle:',
    ':large_green_circle:',
    '💚',
    ':green_heart:'
  ],
  '🟦': [
    ':blue_square:',
    ':large_blue_square:',
    '🔵',
    ':blue_circle:',
    ':large_blue_circle:',
    '💙',
    ':blue_heart:'
  ],
  '🟪': [
    ':purple_square:',
    ':large_purple_square:',
    '🟣',
    ':purple_circle:',
    ':large_purple_circle:',
    '💜',
    ':purple_heart:'
  ],
  '↕️': [':arrow_up_down:'],
  '↔': [':arrow_left_right:'],
  '🔼': [':arrow_up_small:', ':arrow_up:'],
  '🔽': [':arrow_down_small:', ':arrow_down:'],
  '⬅️': [':arrow_left:'],
  '↖️': [':arrow_upper_left:', ':arrow_up_left:'],
  '↙️': [':arrow_lower_left:', ':arrow_down_left:'],
  '➡️': [':arrow_right:'],
  '↗️': [':arrow_upper_right:', ':arrow_up_right:'],
  '↘️': [':arrow_lower_right:', ':arrow_down_right:']
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
  '⬅️': 4,
  '↖️': 4,
  '↙️': 4,
  '🟩': 5,
  '🟦': 10,
  '🔼': 10,
  '↕️': 10,
  '🟪': 11,
  '➡️': 12,
  '↗️': 12,
  '↘️': 12
}

export function isSquare(c: string) {
  return c !== ' '
}

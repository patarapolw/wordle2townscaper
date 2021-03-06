export const similar = {
  ' ': [],
  'โฌ': [
    ':white_square:',
    ':white_large_square:',
    'โช๏ธ',
    ':white_circle:',
    ':large_white_circle:',
    '๐ค',
    ':white_heart:'
  ],
  'โฌ': [
    ':black_square:',
    ':black_large_square:',
    'โซ๏ธ',
    ':black_circle:',
    ':large_black_circle:',
    '๐ค',
    ':black_heart:'
  ],
  '๐ฅ': [
    ':red_square:',
    ':large_red_square:',
    '๐ด',
    ':red_circle:',
    ':large_red_circle:',
    'โค๏ธ',
    ':red_heart:'
  ],
  '๐ง': [
    ':orange_square:',
    ':large_orange_square:',
    '๐ ',
    ':orange_circle:',
    ':large_orange_circle:',
    '๐งก',
    ':orange_heart:'
  ],
  '๐จ': [
    ':yellow_square:',
    ':large_yellow_square:',
    '๐ก',
    ':yellow_circle:',
    ':large_yellow_circle:',
    '๐',
    ':yellow_heart:'
  ],
  '๐ฉ': [
    ':green_square:',
    ':large_green_square:',
    '๐ข',
    ':green_circle:',
    ':large_green_circle:',
    '๐',
    ':green_heart:'
  ],
  '๐ฆ': [
    ':blue_square:',
    ':large_blue_square:',
    '๐ต',
    ':blue_circle:',
    ':large_blue_circle:',
    '๐',
    ':blue_heart:'
  ],
  '๐ช': [
    ':purple_square:',
    ':large_purple_square:',
    '๐ฃ',
    ':purple_circle:',
    ':large_purple_circle:',
    '๐',
    ':purple_heart:'
  ],
  'โ๏ธ': [':arrow_up_down:'],
  'โ': [':arrow_left_right:'],
  '๐ผ': [':arrow_up_small:'],
  '๐ฝ': [':arrow_down_small:'],
  'โฌ๏ธ': [':arrow_up:'],
  'โฌ๏ธ': [':arrow_down:'],
  'โฌ๏ธ': [':arrow_left:'],
  'โ๏ธ': [':arrow_upper_left:', ':arrow_up_left:'],
  'โ๏ธ': [':arrow_lower_left:', ':arrow_down_left:'],
  'โก๏ธ': [':arrow_right:'],
  'โ๏ธ': [':arrow_upper_right:', ':arrow_up_right:'],
  'โ๏ธ': [':arrow_lower_right:', ':arrow_down_right:']
}

export const mapping: Record<keyof typeof similar, number> = {
  ' ': -1,
  'โฌ': -1,
  'โฌ': -1,
  '๐ฅ': 1,
  '๐ง': 2,
  '๐จ': 3,
  '๐ฝ': 3,
  'โฌ๏ธ': 3,
  'โ': 3,
  'โฌ๏ธ': 4,
  'โ๏ธ': 4,
  'โ๏ธ': 4,
  '๐ฉ': 5,
  '๐ฆ': 10,
  '๐ผ': 10,
  'โฌ๏ธ': 10,
  'โ๏ธ': 10,
  '๐ช': 11,
  'โก๏ธ': 12,
  'โ๏ธ': 12,
  'โ๏ธ': 12
}

export function isSquare(c: string) {
  return c !== ' '
}

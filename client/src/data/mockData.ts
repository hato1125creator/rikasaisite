import { Program, Event, FestivalInfo } from '@/types';

export const festivalInfo: FestivalInfo = {
  theme: '未来へ繋ぐ、私たちの物語',
  year: 2026,
  dates: {
    staffDay: '2026年7月18日（金）',
    publicDay: '2026年7月19日（土）',
  },
  description:
    '梨花祭は、生徒たちが日頃の学習成果を発表し、来場者の皆様と共に楽しむ学園祭です。クラス発表、部活動発表、飲食企画など、多彩なプログラムをご用意しています。',
};

export const mockPrograms: Program[] = [
  {
    id: 'class-1a',
    type: 'class',
    title: '1年A組 お化け屋敷',
    organizer: '1年A組',
    description:
      '暗闇の中で繰り広げられる恐怖体験。心臓の弱い方はご遠慮ください。',
    location: '1階 1-A教室',
    schedule: {
      day1: { start: '10:00', end: '16:00' },
      day2: { start: '10:00', end: '16:00' },
    },
    images: [],
    tags: ['体験型', 'スリル'],
  },
  {
    id: 'class-2b',
    type: 'class',
    title: '2年B組 縁日',
    organizer: '2年B組',
    description:
      '射的、輪投げ、ヨーヨー釣りなど、懐かしい縁日の雰囲気をお楽しみください。',
    location: '2階 2-B教室',
    schedule: {
      day1: { start: '10:00', end: '16:00' },
      day2: { start: '10:00', end: '16:00' },
    },
    images: [],
    tags: ['体験型', 'ファミリー向け'],
  },
  {
    id: 'club-drama',
    type: 'club',
    title: '演劇部 公演「時の彼方へ」',
    organizer: '演劇部',
    description:
      '時空を超えた壮大な物語。感動のラストをお見逃しなく。',
    location: '体育館',
    schedule: {
      day1: { start: '13:00', end: '14:30' },
      day2: { start: '13:00', end: '14:30' },
    },
    images: [],
    tags: ['公演', '感動'],
  },
  {
    id: 'club-music',
    type: 'club',
    title: '軽音楽部 ライブ',
    organizer: '軽音楽部',
    description:
      '生徒たちによる熱いライブパフォーマンス。会場が一体となって盛り上がります。',
    location: '中庭ステージ',
    schedule: {
      day1: { start: '11:00', end: '12:00' },
      day2: { start: '11:00', end: '12:00' },
    },
    images: [],
    tags: ['音楽', 'ライブ'],
  },
  {
    id: 'food-takoyaki',
    type: 'food',
    title: 'たこ焼き屋台',
    organizer: '3年C組',
    description: 'アツアツのたこ焼きをご提供します。ソース、マヨネーズ、青のりたっぷり。',
    location: '中庭 屋台エリア',
    schedule: {
      day1: { start: '10:00', end: '15:00' },
      day2: { start: '10:00', end: '15:00' },
    },
    images: [],
    tags: ['軽食', '人気'],
    isFoodSoldOut: false,
    menuItems: [
      { name: 'たこ焼き（6個）', price: 300, isSoldOut: false },
      { name: 'たこ焼き（10個）', price: 500, isSoldOut: false },
    ],
  },
  {
    id: 'food-crepe',
    type: 'food',
    title: 'クレープ屋台',
    organizer: '2年D組',
    description: '甘いクレープから食事系クレープまで、種類豊富にご用意。',
    location: '中庭 屋台エリア',
    schedule: {
      day1: { start: '10:00', end: '15:00' },
      day2: { start: '10:00', end: '15:00' },
    },
    images: [],
    tags: ['スイーツ', '人気'],
    isFoodSoldOut: false,
    menuItems: [
      { name: 'チョコバナナクレープ', price: 400, isSoldOut: false },
      { name: 'いちごクレープ', price: 450, isSoldOut: false },
      { name: 'ツナマヨクレープ', price: 350, isSoldOut: false },
    ],
  },
];

export const mockEvents: Event[] = [
  {
    id: 'chuyasai',
    name: '中夜祭',
    type: 'chuyasai',
    date: '2026年7月18日（金）',
    time: { start: '16:30', end: '18:00' },
    location: '体育館',
    description:
      '関係者限定の中夜祭。生徒たちによるパフォーマンスや抽選会をお楽しみください。',
    requiresTicket: true,
    ticketInfo: '事前抽選制。詳細は後日発表。',
  },
  {
    id: 'kouyasai',
    name: '後夜祭',
    type: 'kouyasai',
    date: '2026年7月19日（土）',
    time: { start: '16:30', end: '18:30' },
    location: '体育館',
    description:
      '梨花祭のフィナーレを飾る後夜祭。豪華ゲストのパフォーマンスや花火をお楽しみください。',
    requiresTicket: true,
    ticketInfo: '事前抽選制。詳細は後日発表。',
  },
  {
    id: 'award',
    name: '梨花祭賞',
    type: 'award',
    date: '投票期間：7月18日〜19日',
    time: { start: '10:00', end: '15:00' },
    location: 'オンライン投票',
    description:
      '来場者の皆様による投票で、最優秀企画を決定します。ぜひご参加ください。',
    requiresTicket: false,
  },
];

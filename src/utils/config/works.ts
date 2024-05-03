export interface Iwork {
  date: string
  img: string
  title: string
  tags: string[]
  website?: string
  repository: string

  details: string[]
  isHide?: boolean
}

export const works: Iwork[] = [
  {
    date: '2024/05',
    title: '電子商務購物網站',
    img: '../../assets/images/work-ec.png',
    tags: ['vue', 'bootstrap', 'pinia', 'vite', 'eslint', 'cypress'],
    website: 'https://minilabmemo.github.io/f2e-ec-store/#/',
    repository: 'https://github.com/minilabmemo/f2e-ec-store',
    details: ['vue 3  composition API', 'pinia 狀態管理', '串接後端 Restful API ']
  },
  {
    date: '2024/01',
    title: '薩卡班甲魚官網 ',
    img: '/src/assets/images/work-meow.png',
    tags: ['vue', 'typescript', 'tailwind', 'storybook'],
    website: 'https://minilabmemo.github.io/f2e-showcase-vite/meow/',
    repository: 'https://github.com/minilabmemo/f2e-showcase-vite',
    details: [
      'The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網，示範網頁 ',
      'vue 3  composition API'
    ],
    isHide: true
  },
  {
    date: '2023/11',
    title: '公車動態查詢服務 ',
    img: '/src/assets/images/work-bus.png',
    tags: ['react', 'typescript', 'scss', 'Leaflet', 'OpenStreetMap'],
    website: 'https://minilabmemo.github.io/f2e-time-twbus/',
    repository: 'https://github.com/minilabmemo/f2e-time-twbus',
    details: ['台灣動態街景地圖 Leaflet+OpenStreetMap', '串接交通部運輸資料流通服務 API']
  },

  {
    date: '2023/11',
    title: '薩卡班甲魚官網 ',
    img: '/src/assets/images/work-meow.png',
    tags: ['react', 'typescript', 'tailwind'],
    website: 'https://minilabmemo.github.io/f2e-election-meowsakka/',
    repository: 'https://github.com/minilabmemo/f2e-election-meowsakka',
    details: [
      'The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網',
      '立委個人資訊介紹 - 示範網頁'
    ]
  },
  {
    date: '2023/12',
    title: '即時開票全台地圖 ',
    img: '/src/assets/images/work-tw.png',
    tags: ['react', 'next', 'typescript', 'tailwind', 'D3', 'vercel'],
    website: 'https://f2e-president-tw.vercel.app/',
    repository: 'https://github.com/minilabmemo/f2e-president-tw',

    details: [
      'The F2E 六角學院 修煉精神光屋 Mission 2 - 總統即時開票全台地圖， ',
      '台灣地圖統計圖表 - 示範網頁'
    ]
  },
  {
    date: '2023/11',
    title: '喵立漢競選官網 ',
    img: '/src/assets/images/work-miao.png',
    tags: ['react', 'typescript', 'scss'],
    website: ' https://minilabmemo.github.io/f2e-election-person/',
    repository: ' https://github.com/minilabmemo/f2e-election-person',
    details: [
      'The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網， ',
      '立委個人資訊介紹 - 示範網頁'
    ]
  },
  {
    date: '2023/10',
    title: '電子書關鍵字速查 ',
    img: '/src/assets/images/work-e-book.png',
    tags: ['chrome extension', 'css', 'javascript'],
    repository: ' https://github.com/minilabmemo/chrome-ext-find-ebook',
    details: ['Chrome 擴充功能插件', '快速找尋電子書關鍵字', '可自訂網址']
  }
]

export const tagColors: Record<string, string> = {
  vue: 'bg-green',
  leaflet: 'bg-green',
  scss: 'bg-pink',
  react: 'bg-teal',
  next: 'bg-black',
  bootstrap: 'bg-purple',
  tailwind: 'bg-cyan',
  pinia: 'bg-yellow',
  javascript: 'bg-yellow',
  vite: 'bg-blue',
  typescript: 'bg-blue',
  css: 'bg-blue',
  cypress: 'bg-teal',
  eslint: 'bg-indigo',
  d3: 'bg-orange'
}

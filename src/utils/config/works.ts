export interface Iwork {
  date: string
  img: string
  title: string
  tags: string[]
  website?: string
  repository: string
  videos?: { src: string; description: string; type?: 'image' | 'video' }[]
  details: string[]
  isHide?: boolean
}
import imgEc from '../../assets/images/work-ec.png'
import imgMeow from '@/assets/images/work-meow.png'
import imgBus from '@/assets/images/work-bus.png'
import imgTW from '@/assets/images/work-tw.png'
import imgMiao from '@/assets/images/work-miao.png'
import imgEBook from '@/assets/images/work-e-book.png'
import videoEc from '@/assets/videos/ec-store.mp4'
import videoEc2 from '@/assets/videos/ec-store2.mp4'

export const works: Iwork[] = [
  {
    date: '2024/09',
    title: '電子商務購物網站',
    img: imgEc,
    videos: [
      { src: imgEc, description: '購物網站 + 響應式設計', type: 'image' },
      { src: videoEc, description: '商品展示與購物車', type: 'video' },
      { src: videoEc2, description: '會員管理', type: 'video' }
    ],
    tags: ['Vue', 'Bootstrap', 'Pinia', 'Vite', 'Eslint', 'Cypress'],
    website: 'https://minilabmemo.github.io/f2e-ec-store/#/',
    repository: 'https://github.com/minilabmemo/f2e-ec-store',
    details: ['使用 vue 3  composition API', 'pinia 狀態管理', '串接後端 Restful API ']
  },
  {
    date: '2024/01',
    title: '薩卡班甲魚官網 ',
    img: imgMeow,
    tags: ['Vue', 'Typescript', 'Tailwind CSS', 'Storybook'],
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
    img: imgBus,
    tags: ['React', 'Typescript', 'SCSS', 'Leaflet', 'OpenStreetMap'],
    website: 'https://minilabmemo.github.io/f2e-time-twbus/',
    repository: 'https://github.com/minilabmemo/f2e-time-twbus',
    details: ['使用 Leaflet + OpenStreetMap 技術製作出台灣動態街景地圖 ', '串接交通部運輸資料流通服務 API']
  },

  {
    date: '2023/12',
    title: '即時開票全台地圖 ',
    img: imgTW,
    tags: ['React', 'Next', 'Typescript', 'Tailwind CSS', 'D3', 'Vercel'],
    website: 'https://f2e-president-tw.vercel.app/',
    repository: 'https://github.com/minilabmemo/f2e-president-tw',

    details: [
      'The F2E 六角學院 修煉精神光屋 Mission 2 - 總統即時開票全台地圖',
      '台灣地圖統計圖表 - 分區視覺著色'
    ]
  },
  {
    date: '2023/11',
    title: '喵立漢競選官網 ',
    img: imgMiao,
    tags: ['React', 'Typescript', 'SCSS'],
    website: ' https://minilabmemo.github.io/f2e-election-person/',
    repository: ' https://github.com/minilabmemo/f2e-election-person',
    details: [
      'The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網',
      '立委個人資訊介紹 - 示範網頁'
    ]
  },
  {
    date: '2023/11',
    title: '薩卡班甲魚 web 官網 ',
    img: imgMeow,
    tags: ['React', 'Typescript', 'Tailwind CSS'],
    website: 'https://minilabmemo.github.io/f2e-election-meowsakka/',
    repository: 'https://github.com/minilabmemo/f2e-election-meowsakka',
    details: [
      'The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網',
      '立委個人資訊介紹 - 示範網頁'
    ]
  },
  {
    date: '2023/10',
    title: '電子書關鍵字速查 ',
    img: imgEBook,
    tags: ['Chrome Extension', 'CSS', 'Javascript'],

    repository: ' https://github.com/minilabmemo/chrome-ext-find-ebook',
    details: ['Chrome 擴充功能插件', '快速找尋電子書關鍵字', '可自訂網址']
  }
]

export const tagColors: Record<string, string> = {
  vue: 'tag-green',
  leaflet: 'tag-green',
  scss: 'tag-pink',
  react: 'tag-teal',
  next: 'tag-black',
  bootstrap: 'tag-purple',
  tailwindcss: 'tag-cyan',
  pinia: 'tag-yellow',
  javascript: 'tag-yellow',
  vite: 'tag-blue',
  typescript: 'tag-blue',
  css: 'tag-blue',
  cypress: 'tag-teal',
  eslint: 'tag-indigo',
  d3: 'tag-orange',
  chromeextension: 'tag-gray',
  storybook: 'tag-pink'
}

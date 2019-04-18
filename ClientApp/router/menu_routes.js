import HomePage from 'views/Main/HomePage'
import NewVideo from 'views/Main/NewVideo'
import MyPage from 'views/Main/MyPage'

export const MENU_ROUTES = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage,
    display: 'Home',
    icon_off: '/dist/image/btn_home_off.png',
    icon_on: '/dist/image/btn_home_on.png',
  },
  {
    name: 'NewVideo',
    path: '/newvideo',
    component: NewVideo,
    display: 'New',
    icon_off: '/dist/image/btn_new_off.png',
    icon_on: '/dist/image/btn_new_on.png',
  },
  {
    name: 'MyPage',
    path: '/mypage',
    component: MyPage,
    display: 'MyPage',
    icon_off: '/dist/image/btn_myinfo_off.png',
    icon_on: '/dist/image/btn_myinfo_on.png',
  },
]

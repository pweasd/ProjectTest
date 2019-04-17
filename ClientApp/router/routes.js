import HomePage from 'views/Main/HomePage'
import NewVideo from 'views/Main/NewVideo'
import MyPage from 'views/Main/MyPage'

export const routes = [
  // { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  // { name: 'about', path: '/about', component: About, display: 'About Template', icon: 'info' },
  // { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  // { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Data', icon: 'list' },
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

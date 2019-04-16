import HomePage from 'views/Main/HomePage'
import MyPage from 'views/Main/MyPage'
import NewVideo from 'views/Main/NewVideo'

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
  },
  {
    name: 'NewVideo',
    path: '/newvideo',
    component: NewVideo,
    display: 'New',
  },
  {
    name: 'MyPage',
    path: '/mypage',
    component: MyPage,
    display: 'MyPage',
  },
]

import UploadPage from 'views/Upload/UploadPage'
import VideoPage from 'views/Video/VideoPage'

export const ROUTES = [
  {
    name: 'VideoPage',
    path: '/video',
    component: VideoPage,
    display: 'Video',
  },
  {
    name: 'UploadPage',
    path: '/upload',
    component: UploadPage,
    display: 'UploadPage',
  },
]

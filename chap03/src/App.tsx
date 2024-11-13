import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 1. 만든 페이지들을 import
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import DetailPage from './pages/movies/DetailPage'
import Search from './pages/Search'
import NowPlaying from './pages/movies/NowPlaying'
import Popular from './pages/movies/Popular'
import TopRated from './pages/movies/TopRated'
import UpComing from './pages/movies/UpComing'
import LogInPage from './pages/LogIn'
import SignUpPage from './pages/SignUp'

import RootLayout from './style/root-layout'
import GlobalStyle from './style/GlobalStyle'

// 2. 연결
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'movies',
        element: <MoviePage />,
      },
      {
        // DetailPage 경로 추가
        path: 'movies/:movieId',
        element: <DetailPage />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
      {
        path: 'popular',
        element: <Popular />,
      },
      {
        path: 'top-rated',
        element: <TopRated />,
      },
      {
        path: 'up-coming',
        element: <UpComing />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'log-in',
        element: <LogInPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App

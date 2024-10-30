import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 1. 만든 페이지들을 import
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Search from './pages/Search'
import NowPlaying from './pages/movies/NowPlaying'
import Popular from './pages/movies/popular'
import TopRated from './pages/movies/TopRated'
import UpComing from './pages/movies/UpComing'

import RootLayout from './style/root-layout'
import GlobalStyle from './style/GlobalStyle'

// 2. 연결
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
    children: [
      {
        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
        index: true,
        element: <Home />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
        path: 'search',
        element: <Search />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
        path: 'movies',
        element: <MoviePage />,
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

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 1. 만든 페이지들을 import
import HomePage from './pages/home'
import NotFound from './pages/NotFound'
import Movies from './pages/MoviePage'
import RootLayout from './style/root-layout'

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
        element: <HomePage />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
        path: 'movies',
        element: <Movies />
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

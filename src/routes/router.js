import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import HomePage from '../home-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        // element: <About />,
      },
    ],
  },
])

export default router

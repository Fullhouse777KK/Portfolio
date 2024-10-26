import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import './i18n'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>

  </RouterProvider>
)

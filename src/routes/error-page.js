import { useRouteError } from 'react-router-dom'
function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  )
}

export default ErrorPage

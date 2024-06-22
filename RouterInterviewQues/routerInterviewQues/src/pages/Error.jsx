import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError();
    console.error(error);
  return (
    <div>
        <p>{error.data || error.message}</p>
    </div>
  )
}

export default Error
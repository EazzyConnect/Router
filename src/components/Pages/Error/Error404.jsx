import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <h2>You visited the wrong link</h2>
      <Link to={"/"}>
        <button>Go home</button>
      </Link>
    </>
  )
}

export default Error404

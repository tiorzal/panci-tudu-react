import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Edit() {
  let { id } = useParams();
  return (
    <div>
      {id}
      <Link to="/">back</Link>
    </div>
  )
}

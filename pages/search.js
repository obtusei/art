import { useRouter } from 'next/router'
import React from 'react'

function Search() {
  const router = useRouter()
  const searchTerm = router.query.q
  return (
    <div>
      <h1>Search {searchTerm}</h1>
    </div>
  )
}

export default Search
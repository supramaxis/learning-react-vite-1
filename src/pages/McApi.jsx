import React from 'react'
import { SupabaseProvider } from '../context/ItemsContext'
import McAPI2 from './McAPI2'

function McApi() {
  return (
    <SupabaseProvider>
      <McAPI2/>

    </SupabaseProvider>
  )
}

export default McApi
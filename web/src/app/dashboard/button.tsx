'use client'

import { api } from '@/utils/axios'
import { useAuth } from '@clerk/nextjs'

export function Button() {
  const { getToken } = useAuth()

  async function getId() {
    const token = await getToken()
    const res = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    console.log(res.data)
  }

  return (
    <button onClick={getId}>click</button>
  )
}
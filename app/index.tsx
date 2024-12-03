import React, { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      //router.push('auth/signin')
    }, 0)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return <></>
}

export default Index

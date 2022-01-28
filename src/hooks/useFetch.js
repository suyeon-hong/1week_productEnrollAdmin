import { useEffect, useState } from 'react'

const useFetch = (URL) => {
  const [data, setData] = useState({})

  useEffect(async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }, [])

  return data
}

export default useFetch

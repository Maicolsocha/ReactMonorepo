import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=blue&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=blue&json=true`)
          .then(res => res.json)
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])
  return (
    <main>
      <h1>Hola</h1>
      <img src={imageUrl} alt={`Image extracteed using the first three words for ${fact}`} />
      {fact && <p>{fact}</p>}
    </main>
  )
}

import React from 'react'

export default function ImgCards({url,nombre}) {
  return (
    <>
    <img src={url} alt={nombre} height="175px"></img>
    </>
  )
}

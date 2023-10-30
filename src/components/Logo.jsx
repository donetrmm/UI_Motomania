import React from 'react'

export default function Logo({logo}) {
  return (
    <>
    <img
    src={logo.src}
    alt={logo.alt}
    width={logo.width}
    height={logo.height}
    >
    </img>
    </>
  )
}

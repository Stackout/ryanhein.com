import React from 'react'
import Hero from '../assets/images/Hero-1.jpg'

const taglines = [
  'Crafting Future-Proof Solutions in the Digital Realm',
  'Coding the Future, One Line at a Time',
  'Where Innovation Meets Code',
  'Engineering Digital Excellence',
  'Crafting Code, Shaping Dreams',
  'Transforming Ideas into Digital Realities',
]

export default function Main() {
  const tagline = taglines[Math.floor(Math.random() * taglines.length)]

  return (
    <>
      {/* Hero Image */}
      <div
        className="hero-image bg-cover h-screen-minus-navbar flex flex-col justify-center pl-10"
        style={{ backgroundImage: `url('${Hero}')` }}
      >
        <h1 className="text-5xl font-bold text-white">Ryan Hein</h1>
        <p className="text-xl mt-4 text-white">{tagline}</p>
      </div>

    </>
  )
}

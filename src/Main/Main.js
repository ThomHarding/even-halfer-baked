import React from 'react';
import backgroundImg from '../background.png';
{/* import the ZodiacCard component */}
import ZodiacCard from '../ZodiacCard/ZodiacCard';
{/* get the zodiac array from props */}
import { zodiac } from '../data';
import './Main.css';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}> {
      zodiac.map((zodiac) => 
        <ZodiacCard
          key={zodiac.name}
          zodiac={zodiac} />
      )
    }
    {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
    {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  );
}

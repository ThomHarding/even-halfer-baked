import './App.css';
{/* import and use the Header. Main, and Footer components here */}
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { zodiac } from './data.js';
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <Header name='Zodiac Time'/>
      {/* the Header component needs a string passed in as the `name` prop */}
      <Footer year='2004'/>
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Main zodiacs={zodiac}/>
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;

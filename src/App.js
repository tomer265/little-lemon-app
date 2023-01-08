import './App.css';
import WithSubnavigation from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';

function App() {
  return (
    <div className='main-div'>
      <WithSubnavigation />
      <Hero />
      <Specials/>
    </div>
  );
}

export default App;

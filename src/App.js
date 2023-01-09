import './App.css';
import WithSubnavigation from './components/Nav';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import BookTable from './components/BookTable';


function App() {
  return (
    <div className='main-div'>
      <WithSubnavigation />
      <Route path={['/', '/home']} component={HomePage} exact />
      <Route path='/booking' component={BookTable} />
    </div>
  );
}

export default App;

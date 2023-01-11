import './App.css';
import WithSubnavigation from './components/Nav';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import BookTable from './components/BookTable';
import { useReducer } from 'react';


function App() {
  const handleTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00',];
  }

  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00',];
  }

  const reducer = (state, action) => {
    console.log(action)
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00',];
  }

  const [availableTimes, dispatch] = useReducer(reducer, handleTimes, initializeTimes);

  return (

    <div className='main-div'>
      <WithSubnavigation />
      <Route path={['/', '/home']} component={HomePage} exact />
      <Route path='/booking'>
        <BookTable availableTimes={availableTimes} dispatchAvailableTimes={dispatch} />
      </Route>
    </div>
  );
}

export default App;

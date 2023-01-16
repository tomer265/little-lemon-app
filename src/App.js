import './App.css';
import WithSubnavigation from './components/Nav';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import BookTable from './components/BookTable';
import { useReducer } from 'react';
import ThankYouBooking from './components/ThankYouBooking';



function App() {

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = () => {
    const result = fetchAPI(new Date());
    return result;
  }

  const initializeData = () => {
    const result = fetchAPI(new Date());
    const newState = {
      times: result,
      formData: null
    }
    if (localStorage.getItem('formData')) {
      newState.formData = JSON.parse(localStorage.getItem('formData'));
    }
    return newState;
  }

  const reducer = (state, action) => {
    if (action.type === 'timeChange') {
      const res = updateTimes();
      const newState = {
        ...state,
        times: res
      }
      return newState;
    }
    if (action.type === 'submitForm') {
      if (submitAPI(action.payload)) {
        const newState = {
          ...state,
          formData: action.payload
        }
        localStorage.setItem('formData', JSON.stringify(action.payload));
        return newState;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, [], initializeData);

  return (
    <div className='main-div'>
      <WithSubnavigation />
      <Route path={['/', '/home']} component={HomePage} exact />
      <Route path='/booking'>
        <BookTable availableTimes={state.times} dispatchForm={dispatch} />
      </Route>
      <Route path="/thank-you-booking">
        <ThankYouBooking formData={state.formData} />
      </Route>
    </div >
  );
}

export default App;

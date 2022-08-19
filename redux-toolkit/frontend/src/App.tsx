import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { decrement, increment, incrementByAmount } from './redux/slices/counter';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchHealth } from './redux/slices/globalSnackbar';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { count } = useSelector((state:RootState) => state.counter)
  const { message } = useSelector((state:RootState) => state.globalSnackbar)
  const handleFetch = async () => {
    try {
      await dispatch(fetchHealth(123))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is count: {count}</h1>
        {message}
        <button onClick={() => dispatch(increment())}>Click Me +</button>
        <button onClick={() => dispatch(decrement())}>Click Me -</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>Add amount by 33</button>
        <button onClick={handleFetch}>fetch to backend</button>
      </header>
    </div>
  );
}

export default App;

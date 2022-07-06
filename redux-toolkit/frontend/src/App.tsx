import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { decrement, fetchHealth, increment, incrementByAmount } from './redux/slices/counter';
import { unwrapResult } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { count, healthyName } = useSelector((state:RootState) => state.counter)
  const { message } = useSelector((state:RootState) => state.globalSnackbar)
  const handleFetch = async () => {
    try {
      const err = await dispatch(fetchHealth(123))
      console.log(err)
    } catch (err) {
      console.log('catch error')
      console.log(err)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is count: {count}</h1>
        {healthyName}
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

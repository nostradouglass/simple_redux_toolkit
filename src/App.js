import {useSelector, useDispatch} from 'react-redux' 
import {increment, decrement} from './redux/counterSlice'

function App() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h3>Value: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;

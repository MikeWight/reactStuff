import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../reduxstuff/counter";

export default function Expenses() {
  const { count } = useSelector((state) => state.counter ) 
  const dispatch = useDispatch();
    return (
      <div>
        <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(22))}>Add 22</button>
      </div>
    );
  }
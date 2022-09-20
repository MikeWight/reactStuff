import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { increment, decrement, incrementByAmount } from "../reduxstuff/counter";

export default function Expenses() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <h1>The count is: {count}</h1>
      <Button
        className="mr-2"
        variant="primary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        className="mr-2"
        variant="primary"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button variant="primary" onClick={() => dispatch(incrementByAmount(22))}>
        Add 22
      </Button>
    </div>
  );
}
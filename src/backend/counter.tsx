import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, increment, incrementByAmount } from './counterSlice';


export function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button aria-label="Increase By 5"
                onClick={() => dispatch(incrementByAmount(3))}>
                    Increment by 5
                </button>
            </div>
        </div>
    )
}
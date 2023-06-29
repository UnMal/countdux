import React, { useEffect } from 'react';
import './counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, initCounter } from '../../redux/actions/countActions';

const Counter = () => {
    const count = useSelector((state)=>state.countReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initCounter());
    }, [dispatch]);
    const increment = (e) => {
        e.preventDefault();
        dispatch(incrementCounter());
    }
    const decrement = (e) => {
        e.preventDefault();
        dispatch(decrementCounter());
    }
    return (
        <div className='counter'>
            <h1>{count}</h1>
            <div className='buttons'>
                <button onClick={e=>decrement(e)}>Decrement</button>
                <button onClick={e=>increment(e)}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;
import { useEffect, useState, useMemo } from 'react';
import MathOperation from './MathOperation';

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  /*
  The useMemo hook is used to memoize the result of a computation.
It takes a function as its first argument, which performs the computation.
The second argument is an array of dependencies. If any of these dependencies change, the memoized value will be recalculated.
  */
  const value = useMemo(() => MathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of a math computation: {value}</h2>
    </div>
  );
}

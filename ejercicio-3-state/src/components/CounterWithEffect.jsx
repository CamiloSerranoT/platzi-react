import { useEffect, useState } from 'react';

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambio a: ${count}`)
    }, [count])

    return (
    <div>
        <h2>El contador está en: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default CounterWithEffect;
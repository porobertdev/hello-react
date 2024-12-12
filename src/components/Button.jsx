import { useState } from 'react';

const variants = {
    s: {
        fontSize: '0.3rem',
        padding: '0.6rem 1.2rem',
    },
    m: {
        fontSize: '0.6rem',
        padding: '1rem 1.7rem',
    },
    l: {
        fontSize: '1rem',
        padding: '1.5rem 3rem',
    },
};

function Button({ size }) {
    const [count, setCount] = useState(0);
    return (
        <button
            style={variants[size]}
            onClick={() => setCount((count) => count + 1)}
        >
            count is {count}
        </button>
    );
}

export default Button;

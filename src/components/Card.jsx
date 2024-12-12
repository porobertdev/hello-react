import { useState } from 'react';
import Button from './Button';

function Card() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <Button
                size={'l'}
                clickHandler={() => setCount((count) => count + 1)}
                text={'count: ' + count}
            ></Button>

            <Button
                size={'l'}
                clickHandler={() => {
                    document.getElementById('root').style.display = 'none';
                    alert('I warned you...')
                }}
                text={"DON'T CLICK ME!"}
                style={{ backgroundColor: 'red', color: 'white' }}
            ></Button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    );
}

export default Card;

import { useContext, useState } from 'react';
import Button from './Button';
import { ThemeContext } from '../contexts';

function Card() {
    const [count, setCount] = useState(0);
    const styles = useContext(ThemeContext);

    return (
        <div className="card" style={styles}>
            <Button
                size={'l'}
                clickHandler={() => setCount((count) => count + 1)}
                text={'count: ' + count}
            ></Button>

            <Button
                size={'l'}
                clickHandler={() => {
                    document.getElementById('root').style.display = 'none';
                    alert('I warned you...');
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

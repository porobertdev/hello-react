import Button from './Button';

function Card() {
    return (
        <div className="card">
            <Button size={'l'}></Button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    );
}

export default Card;

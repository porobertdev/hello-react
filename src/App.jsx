import Header from './components/Header';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Info from './components/Info';
import isHomepage from './utils/isHomepage';

import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <Greeting></Greeting>
            <Card></Card>
            <Info></Info>
            {isHomepage() ? (
                <span className="homepage">
                    This text is conditionally rendered on homepage.
                </span>
            ) : (
                ''
            )}
        </>
    );
}

export default App;

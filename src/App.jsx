import Header from './components/Header';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Info from './components/Info';
import isHomepage from './utils/isHomepage';
import { ThemeContext } from './contexts';
import './App.css';
import { useState } from 'react';
import Toggle from './components/Toggle';
import getTheme from './themes';

function App() {
    const [theme, setTheme] = useState('light');
    const styles = getTheme(theme);

    const clickHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={styles}>
            <Header></Header>
            <Greeting></Greeting>
            <Card></Card>
            <Toggle onClick={clickHandler} />
            <Info></Info>
            {isHomepage() && (
                <span className="homepage" style={styles}>
                    This text is conditionally rendered on homepage.
                </span>
            )}
        </ThemeContext.Provider>
    );
}

export default App;

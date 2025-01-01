import Header from './components/Header';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Info from './components/Info';
import isHomepage from './utils/isHomepage';
import { ThemeContext, TitleContext } from './contexts';
import './App.css';
import { useState } from 'react';
import Toggle from './components/Toggle';
import getTheme from './themes';

function App() {
    const [theme, setTheme] = useState('light');
    const styles = getTheme(theme);

    const [titleCount, setTitleCount] = useState(0);

    const clickHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={styles}>
            <Header></Header>
            <Greeting
                titleHandler={(e) => {
                    if (e.key === 'Enter') setTitleCount(titleCount + 1);
                }}
            ></Greeting>

            <TitleContext.Provider value={titleCount}>
                <Card></Card>
            </TitleContext.Provider>

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

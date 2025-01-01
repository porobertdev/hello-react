import { useContext } from 'react';
import { ThemeContext } from '../contexts';

function Info() {
    const styles = useContext(ThemeContext);

    return (
        <p className="read-the-docs" style={styles}>
            Click on the Vite and React logos to learn more
        </p>
    );
}

export default Info;

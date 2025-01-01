import { useContext } from 'react';
import Link from './Link';
import { ThemeContext } from '../contexts';

// or use plain `props` variable as parameter, and then access with `props.items`
function Navbar({ items }) {
    const styles = useContext(ThemeContext);

    if (!items || items.length === 0) {
        return;
    }

    return (
        <nav style={styles}>
            <ul>
                {items.map((name) => (
                    <li style={styles} key={name}>
                        <Link
                            endpoint={
                                name === 'Home' ? '/' : name.toLowerCase()
                            }
                            name={name}
                        ></Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

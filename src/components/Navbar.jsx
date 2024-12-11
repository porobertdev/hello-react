import Link from './Link';

// or use plain `props` variable as parameter, and then access with `props.items`
function Navbar({ items }) {
    if (!items || items.length === 0) {
        return;
    }

    return (
        <nav>
            <ul>
                {items.map((name) => (
                    <li key={name}>
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

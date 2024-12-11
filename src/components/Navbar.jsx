import Link from './Link';

function Navbar({ items }) {
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

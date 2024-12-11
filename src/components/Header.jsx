import { HeroImage } from './Hero';
import Navbar from './Navbar';

function Header() {
    return (
        // use fragment to return multiple root elements
        <>
            <Navbar items={['Home', 'Projects', 'Contact', 'About']} />
            <HeroImage />
        </>
    );
}

export default Header;

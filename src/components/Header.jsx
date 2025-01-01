import { useContext } from 'react';
import { HeroImage } from './Hero';
import Navbar from './Navbar';
import { ThemeContext } from '../contexts';

function Header() {
    return (
        // use fragment to return multiple root elements
        <>
            <Navbar items={['Home', 'Projects', 'Contact', 'About']} />

            {/* this navbar doesn't render because items is empty */}
            <Navbar items={[]} />
            <HeroImage />
        </>
    );
}

export default Header;

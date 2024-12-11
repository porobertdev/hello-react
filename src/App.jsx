import { HeroImage } from './components/Hero';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Info from './components/Info';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <>
            <Navbar items={['Home', 'Projects', 'Contact', 'About']}></Navbar>
            <HeroImage></HeroImage>
            <Greeting></Greeting>
            <Card></Card>
            <Info></Info>
        </>
    );
}

export default App;

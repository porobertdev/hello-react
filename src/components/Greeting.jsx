import { useState } from 'react';
import Tooltip from './Tooltip';
import Input from './Input';

function Greeting() {
    const [newTitle, setNewTitle] = useState('Greeting from Vite + React :)');
    const [hovered, setHovered] = useState(false);
    const [editing, setEditing] = useState(false);

    function inputHandler(e) {
        if (e.key === 'Enter') {
            setNewTitle(e.target.value);
            setEditing(false);
        }
    }

    return (
        // <>
        <h1
            style={hovered ? { cursor: 'pointer' } : {}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onDoubleClick={() => setEditing(true)}
        >
            {editing ? (
                <Input
                    type="text"
                    name="title"
                    id="title"
                    inputHandler={inputHandler}
                    placeholder={newTitle}
                    styles={{
                        width: '100%',
                        height: '100%',
                        fontSize: 'inherit',
                    }}
                />
            ) : (
                newTitle
            )}
            {hovered && !editing && <Tooltip />}
        </h1>
        // </>
    );
}

export default Greeting;

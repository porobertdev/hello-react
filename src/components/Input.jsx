import { useEffect } from 'react';

function Input({ type, name, id, placeholder, inputHandler, styles }) {
    // focus element after is rendered
    // Thx: https://daveceddia.com/react-hook-after-render/
    useEffect(() => document.getElementById('title').focus(), []);

    return (
        <input
            type={type}
            name={name}
            id={id}
            onKeyUp={inputHandler}
            placeholder={placeholder}
            style={styles}
        />
    );
}

export default Input;

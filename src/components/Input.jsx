function Input({ type, name, id, placeholder, inputHandler, styles }) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            onKeyUp={inputHandler}
            placeholder={placeholder}
            style={styles}
            autoFocus
        />
    );
}

export default Input;

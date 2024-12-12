const variants = {
    s: {
        fontSize: '0.3rem',
        padding: '0.6rem 1.2rem',
    },
    m: {
        fontSize: '0.6rem',
        padding: '1rem 1.7rem',
    },
    l: {
        fontSize: '1rem',
        padding: '1.5rem 3rem',
    },
};

function Button({ size, text, clickHandler, style }) {
    const styles = {
        ...variants[size],
        ...style,
    };

    return (
        <button style={styles} onClick={clickHandler}>
            {text}
        </button>
    );
}

export default Button;

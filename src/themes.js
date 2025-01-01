const themes = {
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
};

const getTheme = (theme) => {
    return themes[theme];
};

export default getTheme;

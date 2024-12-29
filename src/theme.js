import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#A8D5BA', // Verde claro
            contrastText: '#2F3E34', // Texto oscuro sobre verde
        },
        secondary: {
            main: '#F6F9F4', // Fondo claro
            contrastText: '#6B8E75', // Texto oscuro sobre blanco verdoso
        },
        text: {
            primary: '#2F3E34', // Texto principal
            secondary: '#6B8E75', // Texto secundario
        },
        warning: {
            main: '#FFC857', // Amarillo suave
        },
        error: {
            main: '#FF6F61', // Rojo coral
        },
        background: {
            default: '#F6F9F4', // Fondo general
            paper: '#FFFFFF', // Fondos de tarjetas o paneles
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif", // Fuente limpia y profesional
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#2F3E34',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#2F3E34',
        },
        body1: {
            fontSize: '1rem',
            color: '#2F3E34',
        },
        body2: {
            fontSize: '0.875rem',
            color: '#6B8E75',
        },
    },
});

export default theme;

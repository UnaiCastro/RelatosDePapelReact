import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" onClick={handleClick} sx={{flexGrow: 1, fontWeight: 'bold'}}>
                    Relatos de Papel
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
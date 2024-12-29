import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import {GitHub, LinkedIn} from "@mui/icons-material";

const Footer = () => {

    function handleButtonGitHub() {
        window.open("https://github.com/UnaiCastro")
    }

    function handleButtonLinkedIn() {
        window.open("https://www.linkedin.com/in/unai-castro-3458132a6/")
    }

    function handleButtonInstagram() {
        window.open("https://www.instagram.com/uniruniversidad/?hl=es")
    }

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                textAlign: 'center',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                <IconButton color="inherit" onClick={handleButtonGitHub}>
                    <GitHub />
                </IconButton>
                <IconButton color="inherit" onClick={handleButtonLinkedIn}>
                    <LinkedIn />
                </IconButton>
                <IconButton color="inherit" onClick={handleButtonInstagram}>
                    <InstagramIcon />
                </IconButton>
            </Box>

            <Typography variant="body2">
                © {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
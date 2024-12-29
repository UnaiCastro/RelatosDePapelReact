import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton/CustomButton";
const LandingPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "#E8F5E9",
                color: "#2d2d2d",
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                Welcome to Relatos de Papel
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
                Discover a world of stories and adventures waiting for you!
            </Typography>
            <CustomButton text="Explore Now" to="/main" />
        </Box>
    );
};

export default LandingPage;

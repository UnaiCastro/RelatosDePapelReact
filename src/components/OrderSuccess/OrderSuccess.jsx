import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CustomButton from "../CustomButton/CustomButton";

const OrderSuccess = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <CheckCircleOutlineIcon
                sx={{ fontSize: 80, color: "green", mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
                Order Placed Successfully!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Thank you for your purchase. Your order is being processed.
            </Typography>
            <CustomButton text="Return to Home" to="/main" />
        </Box>
    );
};

export default OrderSuccess;

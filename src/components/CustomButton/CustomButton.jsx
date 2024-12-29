import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, to, sx = {} }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <Button
            onClick={handleClick}
            sx={{
                px: 4,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
                background: "linear-gradient(to right, #81C784, #A5D6A7)",
                borderRadius: "30px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                    background: "linear-gradient(to right, #A5D6A7, #81C784)",
                },
                height: "min-content",
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;

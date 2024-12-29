import React from "react";
import { Box, IconButton, TextField, Badge } from "@mui/material";
import { MenuOpenRounded, Search, ShoppingCart } from "@mui/icons-material";

const HeaderMainPage = ({ searchQuery, setSearchQuery, toggleDrawer, toggleCart, cartCount }) => {
    const handleSearch = () => {
        console.log("Search query:", searchQuery);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                color: "white",
            }}
        >
            <IconButton color="primary" onClick={toggleDrawer(true)}>
                <MenuOpenRounded />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, mx: 2 }}>
                <TextField
                    variant="outlined"
                    placeholder="Search for books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                />
                <IconButton color="primary" onClick={handleSearch} sx={{ ml: 1 }}>
                    <Search />
                </IconButton>
            </Box>

            <IconButton color="primary" onClick={toggleCart(true)}>
                <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Box>
    );
};

export default HeaderMainPage;
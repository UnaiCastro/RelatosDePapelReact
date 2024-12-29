import React from "react";
import { Box, Drawer, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const DrawerFilter = ({ drawerOpen, toggleDrawer }) => {
    const handleFilterChange = (event) => {
        console.log("Selected filter:", event.target.value);
    };

    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
                sx={{
                    width: 350,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                    <FormLabel id="type">Type</FormLabel>
                    <RadioGroup onChange={handleFilterChange}>
                        <FormControlLabel value="terror" control={<Radio />} label="Terror" />
                        <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
                        <FormControlLabel value="romance" control={<Radio />} label="Romance" />
                        <FormControlLabel value="mystery" control={<Radio />} label="Mystery" />
                        <FormControlLabel value="scifi" control={<Radio />} label="Sci-Fi" />
                    </RadioGroup>

                    <FormLabel id="price">Price</FormLabel>
                    <RadioGroup onChange={handleFilterChange}>
                        <FormControlLabel value="0-20" control={<Radio />} label="$0 - $20" />
                        <FormControlLabel value="21-50" control={<Radio />} label="$21 - $50" />
                        <FormControlLabel value="51-100" control={<Radio />} label="$51 - $100" />
                        <FormControlLabel value="101-" control={<Radio />} label="$101+" />
                    </RadioGroup>


                    <FormLabel id="rating">Rating</FormLabel>
                    <RadioGroup onChange={handleFilterChange}>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
            </Box>
        </Drawer>
    );
};

export default DrawerFilter;

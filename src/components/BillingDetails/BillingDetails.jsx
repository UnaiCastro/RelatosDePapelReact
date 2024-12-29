import React from "react";
import {
    Box,
    Typography,
    Divider,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

const BillingDetails = () => {
    return (
        <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
                Billing Details
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <form>
                <TextField
                    label="First Name"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Company Name"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Street Address"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Apartment, floor, etc. (optional)"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Town/City"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Phone Number"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email Address"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Save this information for faster check-out next time"
                />
            </form>
        </Box>
    );
};

export default BillingDetails;

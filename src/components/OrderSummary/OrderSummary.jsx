import React from "react";
import {
    Box,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
} from "@mui/material";

const OrderSummary = ({ cart, subtotal, total, handlePlaceOrder }) => {
    const shipping = 0;

    return (
        <Box sx={{ flex: 1, bgcolor: "#f9f9f9", p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Your Order
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <List>
                {cart.map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText
                            primary={book.title}
                            secondary={`Price: $${book.price.toFixed(2)}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>
                Subtotal: ${subtotal.toFixed(2)}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
                Shipping: {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
                Total: ${total.toFixed(2)}
            </Typography>
            <RadioGroup defaultValue="cash">
                <FormControlLabel
                    value="bank"
                    control={<Radio />}
                    label="Bank"
                />
                <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Cash on delivery"
                />
            </RadioGroup>
            <TextField
                label="Coupon Code"
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                Apply Coupon
            </Button>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePlaceOrder}
            >
                Place Order
            </Button>
        </Box>
    );
};

export default OrderSummary;
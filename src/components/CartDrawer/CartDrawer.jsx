import React from "react";
import {
    Box,
    Drawer,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const CartDrawer = ({ cartOpen, toggleCart, cart, removeFromCart, proceedToCheckout }) => {
    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        proceedToCheckout();
    };

    return (
        <Drawer anchor="right" open={cartOpen} onClose={toggleCart(false)}>
            <Box
                sx={{
                    width: 350,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                role="presentation"
            >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Shopping Cart
                </Typography>
                <Divider />
                <List>
                    {cart.length === 0 ? (
                        <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                            Your cart is empty
                        </Typography>
                    ) : (
                        cart.map((book) => (
                            <ListItem key={book.id}>
                                <ListItemText primary={book.title} secondary={`$${book.price.toFixed(2)}`} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" color="error" onClick={() => handleRemoveFromCart(book.id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    )}
                </List>
                {cart.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" fullWidth onClick={handleCheckout}>
                            Proceed to Checkout
                        </Button>
                    </Box>
                )}
            </Box>
        </Drawer>
    );
};

export default CartDrawer;

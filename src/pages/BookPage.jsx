import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Badge, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useBooks } from "../components/BookContext/BookContext";
import CartDrawer from "../components/CartDrawer/CartDrawer";
import { ShoppingCart } from "@mui/icons-material";

const BookPage = () => {
    const { id } = useParams();
    const { books, cart, addToCart, removeFromCart } = useBooks();
    const [book, setBook] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();

    const toggleCart = (open) => () => setCartOpen(open);
    const proceedToCheckout = () => navigate("/checkout", { state: { cart } });

    useEffect(() => {
        const foundBook = books.find((b) => b.id === parseInt(id));
        setBook(foundBook);
    }, [id, books]);

    if (!book) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography variant="h6">Book not found</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                position: "relative", // Para posicionar el botón del carrito
                mt: 4,
                pb: 8,
                px: 2,
            }}
        >
            {/* Botón del carrito en la esquina superior derecha */}
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                }}
            >
                <IconButton color="primary" onClick={toggleCart(true)}>
                    <Badge badgeContent={cart.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Card
                    sx={{
                        maxWidth: 800,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        boxShadow: 4,
                        borderRadius: 2,
                        overflow: "hidden",
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            width: { xs: "100%", md: 300 },
                            height: { xs: 250, md: 350 },
                            objectFit: "cover",
                        }}
                        image={book.image}
                        alt={book.title}
                    />
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            p: 3,
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            {book.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                            {book.description}
                        </Typography>
                        <Typography variant="h5" color="primary" sx={{ mt: 2, fontWeight: "bold" }}>
                            ${book.price.toFixed(2)}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            onClick={() => addToCart(book)}
                        >
                            Add to Cart
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            {/* Drawer del carrito */}
            <CartDrawer
                cartOpen={cartOpen}
                toggleCart={toggleCart}
                cart={cart}
                removeFromCart={removeFromCart}
                proceedToCheckout={proceedToCheckout}
            />
        </Box>
    );
};

export default BookPage;

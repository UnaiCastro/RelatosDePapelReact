import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CustomButton from "../CustomButton/CustomButton";
import {useNavigate} from "react-router-dom";

const BookCard = ({ book, addToCart}) => {

    const handleAddToCart = () => {
        addToCart(book);
    };


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="250" image={book.image} alt={book.title} />
            <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.description}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
                    ${book.price.toFixed(2)}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <IconButton color="primary" onClick={handleAddToCart}>
                        <ShoppingCart />
                    </IconButton>
                    <CustomButton text="Details" to={`/book/${book.id}`} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default BookCard;

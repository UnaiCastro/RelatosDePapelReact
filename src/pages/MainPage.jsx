import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import HeaderMainPage from "../components/HeaderMainPage/HeaderMainPage";
import DrawerFilter from "../components/DrawerFilter/DrawerFilter";
import CartDrawer from "../components/CartDrawer/CartDrawer";
import BookCard from "../components/BookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../components/BookContext/BookContext";

const MainPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { books, cart, addToCart, removeFromCart } = useBooks();

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const toggleCart = (open) => () => setCartOpen(open);
    const goToBookPage = (id) => navigate(`/book/${id}`);
    const proceedToCheckout = () => navigate("/checkout", { state: { cart } });

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <HeaderMainPage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                toggleDrawer={toggleDrawer}
                toggleCart={toggleCart}
                cartCount={cart.length}
            />
            <DrawerFilter drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            <CartDrawer
                cartOpen={cartOpen}
                toggleCart={toggleCart}
                cart={cart}
                removeFromCart={removeFromCart}
                proceedToCheckout={proceedToCheckout}
            />
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: 2, mb: 4 }}>
                {filteredBooks.map((book) => (
                    <Grid item xs={12} sm={4} md={4} key={book.id}>
                        <BookCard book={book} addToCart={addToCart} goToBookPage={goToBookPage} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default MainPage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LandingPage from '../pages/LandingPage';
import MainPage from '../pages/MainPage';
import BookPage from '../pages/BookPage';
import CheckoutPage from '../pages/CheckoutPage';
import NotFound from "../pages/NotFound";
import { BooksProvider } from '../components/BookContext/BookContext'; // Importa el proveedor

const AppRoutes = () => {
    return (
        <BooksProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/book/:id" element={<BookPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </BooksProvider>
    );
};

export default AppRoutes;

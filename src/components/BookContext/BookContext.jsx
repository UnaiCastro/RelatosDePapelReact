import React, { createContext, useState, useContext } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([
        // Tu lista de libros
        {
            id: 1,
            title: "The Great Adventure",
            description: "An exciting tale of discovery and wonder.",
            price: 15.99,
            image: "https://edicioneslallave.com/wp-content/uploads/2012/01/La_Gran_Aventura_50488ad5e4265.jpg",
        },
        {
            id: 2,
            title: "Mystery in the Forest",
            description: "A thrilling mystery set in a dark forest.",
            price: 20.5,
            image: "https://www.editorialsusaeta.com/21659-large_default/misterio-en-el-bosque.jpg",
        },
        {
            id: 3,
            title: "Fantasy World",
            description: "A magical journey through an enchanted world.",
            price: 25.75,
            image: "https://static.serlogal.com/imagenes_big/9788723/978872390404.JPG",
        },
        {
            id: 4,
            title: "The Silent River",
            description: "A quiet, yet captivating story of love and loss.",
            price: 18.99,
            image: "https://m.media-amazon.com/images/I/81vi1AmjfVL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 5,
            title: "The Last Kingdom",
            description: "A historical novel about a kingdom on the brink of collapse.",
            price: 22.99,
            image: "https://m.media-amazon.com/images/I/61-FZrjyPWS._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 6,
            title: "Space Odyssey",
            description: "A thrilling sci-fi adventure in the vastness of space.",
            price: 30.99,
            image: "https://m.media-amazon.com/images/I/81CuSEOFVJL._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 7,
            title: "A Tale of Two Cities",
            description: "A classic novel about love, sacrifice, and revolution.",
            price: 12.99,
            image: "https://m.media-amazon.com/images/I/813Yv-lescL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 8,
            title: "The Forbidden Island",
            description: "A mysterious island holds secrets that no one should uncover.",
            price: 19.5,
            image: "https://m.media-amazon.com/images/I/71hy0bG1IEL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 9,
            title: "The Secret Garden",
            description: "A heartwarming story of friendship and personal growth.",
            price: 17.99,
            image: "https://m.media-amazon.com/images/I/A1tANTs3GxL._AC_UF894,1000_QL80_.jpg",
        },
    ]);

    const [cart, setCart] = useState([]);

    // Funciones del carrito
    const addToCart = (book) => setCart((prevCart) => [...prevCart, book]);
    const removeFromCart = (id) => setCart((prevCart) => prevCart.filter((book) => book.id !== id));

    return (
        <BooksContext.Provider value={{ books, setBooks, cart, addToCart, removeFromCart }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => {
    return useContext(BooksContext);
};

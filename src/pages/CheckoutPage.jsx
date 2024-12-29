import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BillingDetails from "../components/BillingDetails/BillingDetails";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import OrderSuccess from "../components/OrderSuccess/OrderSuccess";

const CheckoutPage = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const location = useLocation();
    const { cart } = location.state || { cart: [] };

    const subtotal = cart.reduce((acc, book) => acc + book.price, 0);
    const total = subtotal;
    const handlePlaceOrder = () => {
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return <OrderSuccess />;
    }

    return (
        <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
            <BillingDetails />
            <OrderSummary
                cart={cart}
                subtotal={subtotal}
                total={total}
                handlePlaceOrder={handlePlaceOrder}
            />
        </div>
    );
};

export default CheckoutPage;

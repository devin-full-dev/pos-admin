import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import useAuthStore from "../store/useAuthStore";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard/DashboardPage";
import POSPage from "../pages/pos/POSPage";
import ProductList from "../pages/product/ProductList";
// import ProductDetails from "../pages/product/ProductDetails"

export default function AppRouter() {

    const { user } = useAuthStore();

    // if (!user) return (
    //     <Router>
    //         <Routes>
    //             <Route path="*" element={<LoginPage />} />
    //         </Routes>
    //     </Router>
    // )

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/pos" element={<POSPage />} />
                    <Route path="/products" element={<ProductList />} />
                    {/* <Route path="/products/details/:id" element={<ProductDetails />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

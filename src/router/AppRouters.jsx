import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import Layout from "../components/layouts/Layout";
import ProtectedRoutes from "./ProtectedRoutes";

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const Dashboard = lazy(() => import("../pages/Dashboard/DashboardPage"));
const POSPage = lazy(() => import("../pages/pos/POSPage"));
const ProductList = lazy(() => import("../pages/product/ProductList"));

const Spinner = () => (
    <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
    </div>
)


export default function AppRouter() {

    const { user } = useAuthStore();

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={user ?
                        <Navigate to={'/'} replace />
                        :
                        <Suspense fallback={<Spinner />}>
                            <LoginPage />
                        </Suspense>
                    }
                />
                <Route path="/" element={
                    <ProtectedRoutes>
                        <Layout />
                    </ProtectedRoutes>
                }
                >
                    <Route
                        index
                        element={
                            <Suspense>
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/pos"
                        element={
                            <Suspense>
                                <POSPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <Suspense>
                                <ProductList />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

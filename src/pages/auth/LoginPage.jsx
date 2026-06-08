import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore"

const LoginPage = () => {

    const { login, loading } = useAuthStore()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setSetPassword] = useState('');
    const [validationError, setValidationError] = useState({});
    const [errors, setErrors] = useState('')
    const handleOnChangeUsername = (e) => {
        setEmail(e.target.value);
        setValidationError({});
    }

    const handleOnChangePwd = async (e) => {
        setSetPassword(e.target.value);
        setValidationError({});
    }

    const handleLogin = async () => {

        const errors = {};
        if (email === '') {
            errors.email = "Please Input Email!";
        }
        if (password === '') {
            errors.password = "Please Input Password";
        }

        if (Object?.keys(errors).length > 0) {
            setValidationError(errors);
            return;
        }

        const response = login(email, password);
        if (response.success) {
            navigate('/')
        } else {
            setErrors(response?.message || '')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center">
            <div className="card p-8 w-full max-w-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                        P
                    </div>
                    <div>
                        <p className="text-semibold text-gray-900 dark:text-gray-100">
                            POS Admin
                        </p>
                    </div>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    Welcome to POS Admin
                </h1>
                <p className="text-sm text-gray-400 mb-6">
                    Signin to continue
                </p>
                <div className="mb-4">
                    <label className="label">Username</label>
                    <input
                        className="input"
                        type="text"
                        name="email"
                        placeholder="Please Enter Username"
                        onChange={(e) => handleOnChangeUsername(e)}
                    />
                    {validationError.email && (
                        <p className="text-red-400 text-sm">{validationError.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="label">Password</label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Please Enter Password"
                        onChange={(e) => handleOnChangePwd(e)}
                    />
                    {validationError.password && (
                        <p className="text-red-400 text-sm">{validationError.password}</p>
                    )}
                </div>
                <button
                    className="btn-primary w-full"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Loading ..." : "Sign In"}
                </button>
            </div>
        </div >
    )
}

export default LoginPage

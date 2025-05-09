// src/components/Login.js
import React from 'react';

const Login = () => {
    const handleLogin = (provider: string) => {
        window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-6">Login com Google</h1>

                <button
                    onClick={() => handleLogin('google')}
                    className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition"
                >
                    <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.805 10.023h-9.77v3.96h5.604c-.246 1.32-1.26 3.36-3.6 4.68l-.033.2 5.22 4.02.36.036c3.3-3.045 5.22-7.53 5.22-12.492 0-.9-.09-1.77-.24-2.604l-.06-.24z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12.035 24c3.51 0 6.462-1.14 8.616-3.093l-5.28-4.05c-.96.63-2.25 1.11-3.336 1.11-2.553 0-4.725-1.725-5.502-4.083l-.204.015-5.154 4.002-.06.18C3.33 22.02 7.32 24 12.036 24z"
                            fill="#34A853"
                        />
                        <path
                            d="M6.537 13.89a5.966 5.966 0 01-.318-1.89c0-.66.114-1.305.318-1.89l-.006-.198-5.19-4.05-.168.078A11.967 11.967 0 000 12c0 1.968.48 3.84 1.323 5.502l5.214-4.083z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12.036 4.5c2.433 0 4.08.975 5.01 1.8l3.66-3.63C18.48 1.05 15.546 0 12.036 0 7.32 0 3.33 1.98 1.323 5.502l5.214 4.083C7.311 6.225 9.483 4.5 12.036 4.5z"
                            fill="#EA4335"
                        />
                    </svg>
                    Entrar com Google
                </button>

                <p className="text-center text-gray-400 text-sm mt-6">
                    Ao continuar, você concorda com nossos <span className="underline">Termos de Uso</span> e <span className="underline">Política de Privacidade</span>.
                </p>
            </div>
        </div>
    );
};

export default Login;

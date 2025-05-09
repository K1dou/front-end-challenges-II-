import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./NavBar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (provider: string) => {
        window.location.href = `https://comments-api-c43806001036.herokuapp.com/oauth2/authorization/${provider}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const res = await axios.post("https://comments-api-c43806001036.herokuapp.com/users/login", {
                email,
                password

            });
            const { token, refreshToken } = res.data;


            if (token && refreshToken) {
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", refreshToken);
                navigate("/");
            } else {
                alert("Login falhou: tokens não retornados");
            }
        } catch (error) {
            console.error("Erro ao logar:", error);
            alert("Credenciais inválidas ou erro de conexão.");
        }
    };

    return (
        <div className="min-h-dvh bg-gray-900 text-white flex items-center justify-center px-4">


            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-6">Entrar</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 px-4 rounded-md font-semibold"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => handleLogin("google")}
                        className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition"
                    >
                        <span>Entrar com Google</span>
                    </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                    Não tem uma conta?{" "}
                    <button
                        onClick={() => navigate("/register")}
                        className="underline text-blue-400 hover:text-blue-300"
                    >
                        Criar conta
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatarUrl, setAvatar] = useState<File | null>(null);

    const user = {
        nome,
        email,
        password
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("usuario", new Blob([JSON.stringify(user)], { type: "application/json" }));
        if (avatarUrl) {
            formData.append("avatar", avatarUrl);
        }

        try {
            await axios.post(
                "https://comments-api-c43806001036.herokuapp.com/users/createUser",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            navigate("/login");
        } catch (error) {
            console.error("Erro ao registrar:", error);
            alert("Erro ao registrar. Verifique os dados.");
        }
    };

    return (
        <div className="min-h-dvh bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-6">Criar Conta</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                        required
                    />
                    <div className="flex flex-col items-center gap-3">
                        {avatarUrl ? (
                            <img
                                src={URL.createObjectURL(avatarUrl)}
                                alt="Preview do avatar"
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm border-2 border-gray-600">
                                Preview
                            </div>
                        )}

                        <label
                            htmlFor="avatar"
                            className="cursor-pointer text-sm text-blue-400 hover:text-blue-300 underline"
                        >
                            Escolher imagem de perfil
                        </label>
                        <input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
                            className="hidden"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 transition py-2 px-4 rounded-md font-semibold"
                    >
                        Registrar
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="w-full text-sm text-blue-400 mt-2 hover:underline"
                    >
                        Já tem conta? Fazer login
                    </button>
                </form>
            </div>
        </div>
    );
}

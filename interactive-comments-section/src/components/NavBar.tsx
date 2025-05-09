import { useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center fixed top-0 left-0 right-0 z-50 ">
            <h1 className="text-xl font-bold tracking-wide">💬 Comments</h1>

            <button
                aria-label="logout"
                onClick={handleLogout}
                className="cursor-pointer bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
                Logout
            </button>
        </nav>
    );
}

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const OAuth2Callback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const refreshToken = params.get('refreshToken');

        if (token && refreshToken) {
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            navigate('/');
        } else {
            console.error('Token não encontrado na URL');
            navigate('/login');
        }
    }, [location.search, navigate]);

    return <p>Processando login social...</p>;
};

export default OAuth2Callback;

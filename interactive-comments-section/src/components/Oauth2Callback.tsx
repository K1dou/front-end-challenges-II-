import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const OAuth2Callback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        } else {
            console.error('Token não encontrado na URL');
            navigate('/login');
        }
    }, [location.search, navigate]);

    return <p>Processando login social...</p>;
};

export default OAuth2Callback;

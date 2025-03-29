'use client';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
export default function Login() {
    const auth = useAuth(); // Récupération du contexte

    if (!auth) {
        return <p>Loading...</p>; // Empêche l'erreur si auth est null
    }

    const { login } = auth; // Maintenant, login est bien défini

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(formData.email, formData.password);
    };
    <br />

    return (
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
            <br />
            <br />
    <div className="mb-4">
        <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="mb-6">
        <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="mb-4">
        <button 
            type="submit" 
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Login
        </button>
    </div>
    <p className="text-center text-sm text-gray-500">
        Si vous n'avez pas de compte, <a href="/signup" className="text-blue-500 hover:text-blue-700">inscrivez-vous ici</a>.
    </p>
</form>

    );
}

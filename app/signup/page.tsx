'use client';
import { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm_password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    };

    return (
    
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                        Créez un compte pour commencer
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="py-2">
                                        <input
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2">
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2">
                                        <input
                                            name="confirm_password"
                                            type="password"
                                            placeholder="Confirm Password"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-center">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                                        >
                                            Sign Up
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    
        
    

}
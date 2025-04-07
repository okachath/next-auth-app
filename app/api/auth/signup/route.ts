import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, email, password, confirm_password } = await req.json();

    console.log(name, email, password,confirm_password )

    if (password !== confirm_password) {
        return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    try {
        const response = await fetch('https://auth-fastapi-1-lbwh.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, confirm_password}),
        });
        
        if (!response.ok) {
            console.log(response)
            throw new Error('Failed to register');
        }
        
        return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
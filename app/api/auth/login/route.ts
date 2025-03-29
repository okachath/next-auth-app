import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }
        
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        const err= error as Error;
        return NextResponse.json({ message: err.message }, { status: 401 });
    }
}

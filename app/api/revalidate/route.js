import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export async function POST(request) {
    const secret = request.nextUrl.searchParams.get('secret');

    if (secret !== 'secret') {
        return new NextResponse(JSON.stringify({ message: 'Invalid token' }),
            {
                status: 401,
                statusText: 'Unauthorized',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
    const path = request.nextUrl.searchParams.get('path') || '/';

    revalidatePath(path);

    return NextResponse.json({ revalidated: true });
}
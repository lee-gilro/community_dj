import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { axiosRequest } from '~/utils/api';
import { type UserData } from '~/types/users';


export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('access');
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const data = await axiosRequest<UserData>('/users/me/', {
      method: 'GET',
      withCredentials: true,
      headers: {
        // Cookie: request.headers.get('cookie') ?? '',
        Authorization: `Bearer ${token.value}`,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Unauthorized', }, { status: 401 });
  }
}
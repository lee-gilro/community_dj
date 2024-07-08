import { type NextRequest, NextResponse } from 'next/server';
import { axiosRequest } from '~/utils/api';
import { setAuthCookies } from '~/utils/auth';

interface TokenResponse {
  access: string;
  refresh: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await axiosRequest<TokenResponse>('/token/', {
      method: 'POST',
      data: body,
    });

    // httpOnly 쿠키 설정
    const response = NextResponse.json(data);
    setAuthCookies(response, data.access, data.refresh);

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
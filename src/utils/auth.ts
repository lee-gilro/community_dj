import { type NextResponse } from 'next/server';

export function setAuthCookies(response: NextResponse, accessToken: string, refreshToken: string) {
  response.cookies.set('access', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  });
  response.cookies.set('refresh', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  });
}

export function getJwtToken() {
  return localStorage.getItem('access_token'); // 또는 쿠키에서 가져올 수도 있음
}
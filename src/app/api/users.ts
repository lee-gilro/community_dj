import { UserData } from "~/types/users";
import { axiosRequest } from "~/utils/api";

// 신규 사용자 등록
export async function createUser(data: {
  email: string;
  username: string;
  password: string;
  phone_number?: string;
}) {
  return axiosRequest(`/users/`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
}

// 로그인
export async function login(data: { username: string; password: string }) {
  return axiosRequest(`/token/`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
}

// 현재 로그인 사용자 조회
export async function getCurrentUser(token: string): Promise<UserData | null> {
  try {
    return axiosRequest("/users/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

export async function getUserProfile(token: string) {
  return axiosRequest("/users/me/", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function refreshToken(refreshToken: string) {
  try {
    return axiosRequest("/token/refresh/", {
      refresh: refreshToken
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}
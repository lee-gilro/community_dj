import { axiosRequest } from "~/utils/api";

export async function createPost(data: { board: number, title: string, content: string, created_by: number }) {
    return axiosRequest(`/posts/`, {
        method: 'POST',
        data,
        withCredentials: true,
        // data: JSON.stringify(data),
        // headers: {
        // Authorization: `Bearer ${token}`,
        // },
    });
}

export async function getPosts(boardId: number) {
    return axiosRequest(`/posts/?boardId=${boardId}`);
}

export async function getPost(postId: number) {
    return axiosRequest(`/posts/${postId}/`);
}
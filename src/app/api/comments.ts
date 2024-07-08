import { axiosRequest } from "~/utils/api";

export async function getComments(postId: number) {
    return axiosRequest(`/comments/?post=${postId}`);
}

export async function createComment(data: { post: number; created_by: number; content: string; parent?: number }) {
    return axiosRequest(`/comments/`, {
        method: 'POST',
        data: JSON.stringify(data),
    });
}
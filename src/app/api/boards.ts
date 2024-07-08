import { axiosRequest } from "~/utils/api";

export async function getBoards() {
  return axiosRequest("/boards/");
}

export async function getBoardPosts(boardId: number) {
  return axiosRequest(`/boards/${boardId}/with-posts`);
}
export interface CommentData {
  id: number;
  post: number;
  parent: number | undefined;
  content: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  replies: Comment[];
  username: string;
}
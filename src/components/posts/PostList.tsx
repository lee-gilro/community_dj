import type { PostData } from "~/types/posts";
import Link from "next/link";

interface PostListProps {
  boardId: number
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = async ({ boardId, posts }) => {

  return (
    <ul className="mb-2">
      {posts.map((post: PostData, index: number) => (
        <li key={post.id} className="border-t p-1 last:border-b">
          <Link href={`/boards/${boardId}/${post.id}`} className="inline-flex">
            <b className="pr-2 text-red-600">{index + 1}</b>
            <h2 className="pl-2">{post.title}</h2>
            <small className="pl-2 text-red-600">[{post.comment_count}]</small>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;

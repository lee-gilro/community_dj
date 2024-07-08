import CommentList from "~/components/comments/CommentList";
import Link from "next/link";
import PostDetail from "~/components/posts/PostDetail";
import { getPost } from "~/app/api/posts";
import { getComments } from "~/app/api/comments";
import { cookies } from "next/headers";
import { getCurrentUser } from "~/app/api/users";

interface PostPageProps {
  params: {
    "board-id": number;
    "post-id": number;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params["post-id"]}`,
  };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('access');
  const currentUser = token ? await getCurrentUser(token.value) : null;

  const postId = params["post-id"];
  const post = await getPost(postId);
  const initialComments = await getComments(postId); // 댓글

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params["board-id"]}`}>
          <button className="my-1 border p-1">목록</button>
        </Link>
      </section>

      <PostDetail boardId={params["board-id"]} post={post} />

      <section>
        <CommentList
          initialComments={initialComments}
          postId={postId}
          // user={response.data}
          user={currentUser ? currentUser : { id: 0, username: "Anonymous", email: "", phone_number: "" }}
        />
      </section>
    </>
  );
};

export default PostPage;

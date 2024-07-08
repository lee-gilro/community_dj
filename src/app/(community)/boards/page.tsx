import Link from "next/link";

async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BoardsPage() {
  const posts = await fetchPosts();

  return (
    <>
      <section>
        <h1 className="my-4">
          <strong>커뮤니티 이슈 모아보기! 오늘의 핫벤</strong>
        </h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-t p-1 last:border-b">
              <Link
                href={`/board/${post.id}`}
                className="inline-flex"
              >
                <b className="pr-2 text-red-600">{post.id}</b>
                <small className="text-slate-500">category</small>
                <h2 className="pl-2">{post.title}</h2>
                <small className="pl-2 text-red-600">[10]</small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

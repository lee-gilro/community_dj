import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBoardPosts } from "~/app/api/boards";
import Badge from "~/components/Badge/Badge";
import PostList from "~/components/posts/PostList";
import type { PostData } from "~/types/posts";

// todo delete
const categories: string[] = [
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
];

interface BoardPageParams {
  "board-id": number;
}

interface BoardPageProps {
  params: BoardPageParams;
}

export default async function BoardPage({ params }: BoardPageProps) {
  const boardPosts = await getBoardPosts(params["board-id"]);
  const posts: PostData[] = boardPosts.posts

  return (
    <>
      <section>
        <header className="border-b-2">
          <h1 className="text-2xl">
            <strong>{boardPosts.board.name}</strong>
          </h1>
          <small>{boardPosts.board.description}</small>
          <nav className="my-3">
            <button className="my-1 rounded p-1 hover:bg-slate-200">
              <FontAwesomeIcon icon={faFilter} className="h-4" />
              필터링
            </button>
            <ul className="flex flex-wrap gap-1">
              <li key={categories[0]} className="category-item">
                <button>
                  {categories.map((category) => (
                    <Badge key={category.id} data={category} />
                  ))
                  }
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <PostList boardId={params["board-id"]} posts={posts} />

        <section className="flex flex-row-reverse">
          <a href="/boards/1/new">
            <button className="mb-10 border p-1">글쓰기</button>
          </a>
        </section>
      </section>
    </>
  );
}

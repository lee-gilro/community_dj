import Link from "next/link";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className=" mb-4 flex h-10 items-center gap-4 bg-slate-400 p-4">
        <h1 className="sr-only">main categories</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <img src="/favicon.ico" alt="logo" className="h-6" />
            </Link>
          </li>
          <li>
            <a href="/">뉴스</a>
          </li>
          <li>
            <a href="/boards">커뮤니티</a>
          </li>
          <li>
            <a href="/">팟벤</a>
          </li>
          <li>
            <a href="/">이벤트</a>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}

import Image from "next/image";
import BoardList from "~/components/boards/BoardList";

export default function BoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="">
        <h1 className="sr-only">Boards</h1>
        <BoardList />
      </nav>

      <aside className="relative my-2.5 flex items-center justify-center bg-slate-50">
        <h1 className="absolute left-0 top-0">광고</h1>
        <Image
          src="/noidea.jpeg"
          className="h-28"
          alt="advertisement"
          width={150}
          height={150}
          layout="intrinsic"
        />
        나는 아무 생각이 없다
      </aside>
      {children}
    </>
  );
}



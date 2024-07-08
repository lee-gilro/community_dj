import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";

export default function NavigationMenu() {
  return (
    <>
      <div className="flex flex-wrap my-5">
        <a href="/category/news" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          뉴스
        </a>
        <a href="/boards" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          커뮤니티
        </a>
        <a href="/board/list" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          팟벤
        </a>
        <a href="/category/4" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          오이갤
        </a>
        <a href="/category/5" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          메이플
        </a>
        <a href="/category/6" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          디아4
        </a>
        <a href="/category/7" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          리니지M
        </a>
        <a href="/category/8" className="basis-1/4 flex flex-col items-center">
          <img src="/favicon.ico" alt="menu1" className="" />
          와우
        </a>
      </div>

      {/* <Menubar>
        <MenubarMenu>
          <a href="/category/news" className="font-bold">
            <MenubarTrigger>뉴스</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/community" className="font-bold">
            <MenubarTrigger>커뮤니티</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/3" className="font-bold">
            <MenubarTrigger>팟벤</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/4" className="font-bold">
            <MenubarTrigger>오이갤</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="/category/5" className="font-bold">
            <MenubarTrigger>이벤트</MenubarTrigger>
          </a>
        </MenubarMenu>
      </Menubar> */}
    </>
  );
}

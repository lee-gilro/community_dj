"use client";
export default function Nav() {
  
  function test(){
    console.log("test");
    document.getElementById("navMain")?.classList.add("close");
    document.getElementById("navMain")?.classList.remove("open");
  }

  return (
    <>
      <nav id="navMain" className="absolute left-0 top-0 h-screen w-1/4 bg-white text-sm nav">
        <h1 className="flex h-10 justify-between bg-slate-400">
          <a href="/" className="inline-flex items-center">
            <img src="/icons/login.svg" alt="logo" className="h-5 px-1" />
            <b>로그인</b>
          </a>
            <button onClick={() => test()}>
            <img src="/icons/close.svg" alt="close" className="h-5 px-2" />
          </button>
        </h1>

        <ul>
          <ul className="flex h-16 justify-between">
            <li className="flex basis-1/4 items-center justify-center border">
              <a href="/" className="flex flex-col">
                <img src="/icons/mail.svg" alt="menu" className="h-5 px-1" />
                우편함
              </a>
            </li>
            <li className="flex basis-1/4 items-center justify-center border">
              <a href="/" className="flex flex-col">
                <img src="/icons/box.svg" alt="menu" className="h-5 px-1" />
                인벤토리
              </a>
            </li>
            <li className="flex basis-1/4 items-center justify-center border">
              <a href="/" className="flex flex-col">
                <img src="/icons/stick.svg" alt="menu" className="h-5 px-1" />
                스킬
              </a>
            </li>
            <li className="flex basis-1/4 items-center justify-center border">
              <a href="/" className="flex flex-col">
                <img src="/icons/storage.svg" alt="menu" className="h-5 px-1" />
                창고
              </a>
            </li>
          </ul>

          <ul className="flex h-10 items-center bg-slate-500 pl-1 text-slate-100">
            <h2 className="">
              <button>
                <b>내 즐겨찾기</b>
              </button>
            </h2>
          </ul>

          

          <ul className="">
            <h2 className="flex h-10 items-center bg-slate-200 pl-1 text-slate-500">
              <button>
                <b>게이머 존</b>
              </button>
            </h2>
            <li className="flex h-8 items-center justify-between border-b pl-3 text-gray-500">
              <a href="/">카툰 갤러리</a>
            </li>
            <li className="flex h-8 items-center justify-between border-b pl-3 text-gray-500">
              <a href="/">동영상 갤러리</a>
            </li>
            <li className="flex h-8 items-center justify-between border-b pl-3 text-gray-500">
              <a href="/">공지사항 & 이벤트</a>
            </li>
            <li className="flex h-8 items-center justify-between border-b pl-3 text-gray-500">
              <a href="/">기사제보 및 건의</a>
            </li>
            <li className="flex h-8 items-center justify-between border-b pl-3 text-gray-500">
              <a href="/">인벤 어플 제보 및 건의</a>
            </li>
          </ul>

          <ul className="">
            <h2 className="flex h-10 items-center bg-slate-200 pl-1 text-slate-500">
              <button>
                <b>공통 커뮤니티</b>
              </button>
            </h2>
          </ul>
        </ul>
      </nav>
    </>
  );
}

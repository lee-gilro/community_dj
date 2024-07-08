import Image from "next/image";
import NavigationMenu from "~/components/layout/navigationMenu";

export default function HomePage() {
  // const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/messages")
  //     .then((res) => {
  //       console.log(res.data);
  //       setMessages(res.data);
  //     })
  //     .catch((err) => {
    
  //       console.error("Error fetching data: ", err);
  //     });
  // }, []);

  return (
    <>
      {/* <div>
        <h1>Messages</h1>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      </div> */}

      <NavigationMenu />

      <section>
        <h1 className="">
          <img
            src="/icons/fire.svg"
            alt="logo"
            className="mr-2.5 inline-block h-6"
          />
          Hot Issues
        </h1>

        <div className="flex">
          <a href="/category/news" className="basis-1/5 p-2">
            <figure className="text-center">
              <Image
                width={400}
                height={400}
                src="/noidea.jpeg"
                alt="noidea"
                className="h-auto w-full rounded-3xl"
              />
              <figcaption>나는 아무 생각이 없다</figcaption>
            </figure>
          </a>
          <a href="/category/news" className="basis-1/5 p-2">
            <figure className="text-center">
              <Image
                width={400}
                height={400}
                src="/noidea.jpeg"
                alt="noidea"
                className="h-auto w-full rounded-3xl"
              />
              <figcaption>나는 아무 생각이 없다</figcaption>
            </figure>
          </a>
          <a href="/category/news" className="basis-1/5 p-2">
            <figure className="text-center">
              <Image
                width={400}
                height={400}
                src="/noidea.jpeg"
                alt="noidea"
                className="h-auto w-full rounded-3xl"
              />
              <figcaption>나는 아무 생각이 없다</figcaption>
            </figure>
          </a>
          <a href="/category/news" className="basis-1/5 p-2">
            <figure className="text-center">
              <Image
                width={400}
                height={400}
                src="/noidea.jpeg"
                alt="noidea"
                className="h-auto w-full rounded-3xl"
              />
              <figcaption>나는 아무 생각이 없다</figcaption>
            </figure>
          </a>
          <a href="/category/news" className="basis-1/5 p-2">
            <figure className="text-center">
              <Image
                width={400}
                height={400}
                src="/noidea.jpeg"
                alt="noidea"
                className="h-auto w-full rounded-3xl"
              />
              <figcaption>나는 아무 생각이 없다</figcaption>
            </figure>
          </a>
        </div>
      </section>

      <aside className="bg-slate-50">
        <h2>광고</h2>
        <div className="flex items-center justify-center">
          <Image
            src="/noidea.jpeg"
            className="h-28"
            alt="noidea"
            width={400}
            height={400}
          ></Image>
          나는 아무 생각이 없다
        </div>
      </aside>
    </>
  );
}

import "~/styles/globals.css";
import "react-quill/dist/quill.snow.css";
import { Inter } from "next/font/google";
import Header from "~/components/layout/header";
import type { Metadata } from "next";
import Nav from "~/components/layout/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata = {
//   title: "커뮤니티 이름입니다",
//   description: "한번 만들어보죠",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export const metadata: Metadata = {
  title: {
    default: "My Community",
    template: "%s | My Community",
  },

  description: "NEXT JS SEO",
  // robots: "index, follow", # 기본값

  openGraph: {
    title: "NEXT JS SEO",
    description: "NEXT JS SEO",
    url: "https://www.nextjs.com",
    siteName: "NEXT JS SEO",
    locale: "ko_KR",
    images: [
      {
        url: "https://recodelog.com/og/og.png", // open graph image url
        width: 800,
        height: 600,
        alt: "", // open graph image alt
      },
      // ... {} 여러개 추가 가능
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "https://www.nextjs.com",
    creator: "@vercel",
    title: "NEXT JS SEO",
    description: "NEXT JS SEO",
    images: ["https://recodelog.com/og/og.png"],
  },

  generator: "Next.js", // 웹사이트를 생성한 소프트웨어의 이름을 나타냅니다.
  applicationName: "Next.js", // 웹사이트를 실행하는 소프트웨어의 이름을 나타냅니다.
  referrer: "origin-when-cross-origin", // 웹사이트를 참조한 페이지의 URL을 나타냅니다.
  keywords: ["Next.js", "React", "JavaScript"], // 웹사이트와 관련된 키워드를 나타냅니다.
  authors: [
    { name: "recodelog" },
    { name: "recodelog", url: "https://recodelog.com" },
  ], // 웹사이트의 저자를 나타냅니다.
  creator: "dev Kang", // 웹사이트의 제작자를 나타냅니다.
  publisher: "dev Kang", // 웹사이트의 발행자를 나타냅니다.
  formatDetection: {
    email: false, // 웹사이트에서 이메일 주소를 감지하는지 여부를 나타냅니다.
    address: false, // 웹사이트에서 주소를 감지하는지 여부를 나타냅니다.
    telephone: false, // 웹사이트에서 전화번호를 감지하는지 여부를 나타냅니다.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`mx-auto w-4/5 font-sans mb-4 ${inter.variable}`}>
        <Header />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    // <div className="">
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Head>
        <title>Instgaram 2.0 YT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}
      <Header />
      {/** Feed */}
      <Feed/>
      {/** Modal */}
    </div>
  );
}

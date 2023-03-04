import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Home/Banner";
import DailyDeal from "@/components/Home/DailyDeal";
import PopularPost from "@/components/Home/PopularPost";
import Slider from "@/components/Home/Slider";
import TabArea from "@/components/Home/TabArea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>The Shyz Shop</title>
        <meta name="description" content="Buy, sell item on the free platform made by TShyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <Banner />
      <DailyDeal />
      <TabArea />
      <PopularPost />
    </>
  );
}

import NavMenu from "@/components/NavMenu";
import TopNews from "@/components/TopNews";
import LatestNews from "@/components/LatestNews";
import TrendingNews from "@/components/TrendingNews";
import { NewsResponse } from "../types";

async function getHomeData(): Promise<NewsResponse> {
  const res = await fetch(process.env.API_ENDPOINT as string, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  return res.json();
}

export default async function Home() {
  const { data } = await getHomeData();
  return (
    <div className="flex min-h-screen font-sans px-2 sm:px-4">
      <div className="container mx-auto">
        <NavMenu category_news={data.category_news} />
        <main>
          <TopNews top_news={data.top_news} />
          <LatestNews latest_news={data.latest_news} />
          <TrendingNews trending_news={data.trending_news} />
          {/*  bottom spacing */}
          <div className="py-6"></div>
        </main>
      </div>
    </div>
  );
}

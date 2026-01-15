import PlayIcon from "@/assets/PlayIcon";
import { NewsResponse } from "@/types";
import Image from "next/image";

export default function TrendingNews({
  trending_news,
}: {
  trending_news: NewsResponse["data"]["trending_news"];
}) {
  return (
    <div>
      <div className="border-t-2">
        <h4 className="font-semibold text-lg sm:text-xl mb-4 mt-4 ">ভিডিও</h4>
        <div className="flex flex-col sm:flex-row gap-4 mb-12 overflow-x-auto">
          {trending_news.slice(0, 5).map((news, index) => (
            <div
              key={index}
              className="flex-1 min-w-50 sm:min-w-0 relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4 text-white">
                <div className="text-xs sm:text-sm">{news.category.name}</div>
                <h3 className="font-semibold text-sm sm:text-base mt-1 mb-3">
                  {news.title}
                </h3>
                {news.summary && (
                  <p className="text-xs mt-1 line-clamp-1">{news.summary}</p>
                )}
                <div className="flex items-center gap-2 mt-6">
                  <span>
                    <PlayIcon />
                  </span>
                  <span className="text-xs mt-1 inline-block">1:30</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

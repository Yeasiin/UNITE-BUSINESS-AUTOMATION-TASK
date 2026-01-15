import { NewsResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function LatestNews({
  latest_news,
}: {
  latest_news: NewsResponse["data"]["latest_news"];
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row -mx-2 sm:-mx-4 mb-12 gap-4 sm:gap-0">
        {latest_news.slice(0, 4).map((news) => (
          <div
            key={news.id}
            className="cursor-pointer flex-1 px-2 sm:px-4 bg-white sm:border-r border-gray-300 sm:last:border-r-0"
          >
            <Image
              src={news.image}
              alt={news.title}
              width={200}
              height={160}
              className="w-full h-40 sm:h-40 object-cover"
            />
            <div className="py-3">
              <Link
                href="#"
                className="font-semibold text-sm sm:text-base lg:text-md hover:underline"
              >
                {news.title}
              </Link>
              <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 mt-1">
                {news.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

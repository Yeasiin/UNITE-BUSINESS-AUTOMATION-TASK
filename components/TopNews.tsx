import { NewsResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
const layoutByIndex: Record<number, string> = {
  0: "lg:row-span-2 lg:col-start-1",
  1: "lg:col-start-2 lg:row-start-1",
  2: "lg:col-start-2 lg:row-start-2",
  3: "lg:row-span-1 lg:col-start-3",
};

const borderByIndex: Record<number, string> = {
  0: "lg:border-r border-gray-300",
  1: "lg:border-b border-gray-300",
  3: "lg:border-b border-gray-300",
};

export default function TopNews({
  top_news,
}: {
  top_news: NewsResponse["data"]["top_news"];
}) {
  return (
    <div>
      <div className="border-t border-b border-gray-300 mb-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-y-4 gap-x-2 -mx-4">
          {top_news.slice(0, 4).map((news, index) => (
            <article
              key={news.id}
              className={`cursor-pointer flex flex-col h-full px-2 sm:px-4 mb-4 pb-4  ${
                layoutByIndex[index]
              }
                          ${borderByIndex[index] ?? ""}`}
            >
              <Image
                height={350}
                width={550}
                src={news.image}
                alt={news.title}
                className="h-48 sm:h-64 lg:h-full w-full object-cover"
              />
              <div>
                <div className="text-red-400 mt-2 mb-2 text-xs sm:text-sm">
                  {news.category.name}
                </div>
                <Link
                  href={""}
                  className={`font-semibold line-clamp-3 hover:underline ${
                    index === 0
                      ? "text-sm sm:text-xl lg:text-2xl"
                      : "text-sm sm:text-base lg:text-md"
                  }`}
                >
                  {news.title}
                </Link>

                <p
                  className={`line-clamp-2 text-xs sm:text-sm mt-3 ${
                    index === 0 ? "sm:hidden" : ""
                  } `}
                >
                  {news.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import { NewsResponse } from "@/types";
import Link from "next/link";

export default function NavMenu({
  category_news,
}: {
  category_news: NewsResponse["data"]["category_news"];
}) {
  return (
    <div>
      <nav className="py-4 overflow-x-auto">
        <ul className="flex gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap">
          <li>
            <p className="text-sm sm:text-base">Weekly Edition</p>
          </li>
          {category_news.map((category) => (
            <li key={category.id}>
              <Link href="#" className="text-sm sm:text-base">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

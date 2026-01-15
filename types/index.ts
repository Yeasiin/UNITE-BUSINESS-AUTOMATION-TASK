export type NewsResponse = {
    success: boolean;
    message: string;
    data: {
        top_news: NewsItem[];
        breaking_news: NewsItem[];
        trending_news: NewsItem[];
        latest_news: NewsItem[];
        category_news: {
            "id": number;
            "name": string;
            news: NewsItem[]
        }[];
    };
};
export type NewsItem =
    {
        "id": string;
        "uuid": string;
        "title": string;
        "slug": string;
        "summary": string;
        "content": string
        "image": string;
        "tags": [string];
        "sorting": string
        "category": {
            "id": number;
            "uuid": string;
            "name": string;
        };
        "is_top": boolean;
        "is_breaking": boolean;
        "is_trending": boolean;
        "views": null;
        "published_at": string;
        "approved_at": string;
    };




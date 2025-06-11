import Image from "next/image";

interface Post {
  id: number;
  title: string;
  image: string;
  uploadTime: string;
  author: string;
  image_url: string;
  source: string;
  relevance_score: any;
  url?: string;
  uuid?: string;
  description?: string;
  keywords?: string;
  language?: any;
  published_at?: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "lorem",
    image: "/images/mountain.jpg",
    uploadTime: "06/3/2025",
    author: "lorem",
  },
  {
    id: 2,
    title: "lorem",
    image: "/images/beach.jpg",
    uploadTime: "29/3/2025",
    author: "lorem",
  },
  {
    id: 3,
    title: "lorem",
    image: "",
    uploadTime: "23/3/2025",
    author: "lorem",
  },
  {
            "uuid": "ed35bdcd-6f6a-4007-9949-b769fbe2e36d",
            "title": "Amazon.com mulls new multi-billion dollar investment in Anthropic, the Information reports By Reuters",
            "description": "Amazon.com mulls new multi-billion dollar investment in Anthropic, the Information reports",
            "keywords": "",
            "url": "https://www.investing.com/news/stock-market-news/amazoncom-mulls-new-multibillion-dollar-investment-in-anthropic-the-information-reports-3710319",
            "image_url": "https://i-invdn-com.investing.com/news/amazon_800x533_L_1411373482.jpg",
            "language": "en",
            "published_at": "2024-11-07T23:49:09.000000Z",
            "source": "investing.com",
            "relevance_score": null,
            "entities": [
                {
                    "symbol": "AMZN",
                    "name": "Amazon.com, Inc.",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "us",
                    "type": "equity",
                    "industry": "Consumer Cyclical",
                    "match_score": 34.292408,
                    "sentiment_score": 0,
                    "highlights": [
                        {
                            "highlight": "<em>Amazon.com</em> mulls new multi-billion dollar investment in Anthropic, the Information reports By Reuters",
                            "sentiment": 0,
                            "highlighted_in": "title"
                        }
                    ]
                }
            ],
            "similar": []
        }
];

const PostGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-6 drop-shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mt-3">{post.title}</h3>
            <p className="text-gray-500 text-sm">{post.uploadTime} • {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostGrid;

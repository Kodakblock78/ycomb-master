"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "./input";
import { Search } from "lucide-react";

interface Post {
  id: number;
  company: string;
  image: string;
  uploadTime: string;
  author: string;
  visibility?: string;
  description?: string;
  imageUrl?: string;
}

const posts: Post[] = [
  {
    id: 1,
    company: "Wreh productions",
    image: "/images/mountain.jpg",
    uploadTime: "06/3/2025",
    author: "Thomas Wreh",
    visibility: "private",
    description: "Innovative video production company specializing in commercial and creative content.",
  },
  {
    id: 2,
    company: "EZE'S",
    image: "/EZE'S.png",
    uploadTime: "06/12/2025",
    author: "Ezekiel Forko",
    visibility: "public",
    description: "Premium footwear brand focusing on style and comfort.",
  },
  {
    id: 3,
    company: "TechStart Solutions",
    image: "/images/tech.jpg",
    uploadTime: "06/10/2025",
    author: "Sarah Chen",
    visibility: "public",
    description: "Technology consulting for startups and small businesses.",
  },
  // Add more example posts as needed
];

const PostGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 drop-shadow-lg">
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search companies, descriptions, or founders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full bg-white/10 text-white placeholder-gray-400 border-gray-300 focus:border-purple-500"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-slate-700">Latest Post</h2>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center text-slate-400 py-8">
          No companies found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-md p-4 hover:shadow-lg transition border border-gray-700">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.company}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3 text-black">{post.company}</h3>
              <p className="text-slate-700 text-sm mb-2">{post.uploadTime} • {post.author}</p>
              {post.description && (
                <p className="text-slate-600 text-sm line-clamp-2">{post.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostGrid;

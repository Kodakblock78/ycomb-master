"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "./input";
import { Search, Calendar, Eye } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/combobox";

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
];

const PostGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState<string>("all");
  const [dateSort, setDateSort] = useState<"asc" | "desc">("desc");

  // Fonction pour convertir la date en format comparable
  const parseDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split("/");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  const filteredAndSortedPosts = posts
    .filter((post) => {
      const matchesSearch = 
        post.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesVisibility = 
        visibilityFilter === "all" || post.visibility === visibilityFilter;

      return matchesSearch && matchesVisibility;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.uploadTime);
      const dateB = parseDate(b.uploadTime);
      return dateSort === "asc" 
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="container mx-auto p-6 drop-shadow-lg">
      <div className="max-w-xl mx-auto mb-8 space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search companies, descriptions, or founders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full bg-white/10 text-white placeholder-gray-400 border-gray-700 focus:border-purple-500"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="flex-1">
            <Select
              value={visibilityFilter}
              onValueChange={setVisibilityFilter}
            >
              <SelectTrigger className="w-full bg-white/10 text-white border-gray-700">
                <Eye className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select
              value={dateSort}
              onValueChange={(value: "asc" | "desc") => setDateSort(value)}
            >
              <SelectTrigger className="w-full bg-white/10 text-white border-gray-700">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Newest first</SelectItem>
                <SelectItem value="asc">Oldest first</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-white">Latest Companies</h2>
      
      {filteredAndSortedPosts.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          No companies found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-md p-4 hover:shadow-lg transition border border-gray-700">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.company}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-lg font-semibold text-white">{post.company}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  post.visibility === 'public' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {post.visibility}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {new Date(parseDate(post.uploadTime)).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })} • {post.author}
              </p>
              {post.description && (
                <p className="text-gray-300 text-sm line-clamp-2">{post.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostGrid;

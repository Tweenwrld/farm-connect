
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Search, Plus, MapPin, Clock, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CommunityDiscussions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const discussions = [
    {
      id: 1,
      title: "Looking for organic tomato seeds in Nakuru",
      author: "Mary Wanjiku",
      location: "Nakuru County",
      category: "Seeds & Supplies",
      content: "I'm looking for high-quality organic tomato seeds. Preferably variety that's resistant to blight. Anyone know where I can get them?",
      replies: 8,
      likes: 12,
      timeAgo: "2 hours ago",
      tags: ["organic", "tomatoes", "seeds"],
      status: "active",
      avatar: "MW"
    },
    {
      id: 2,
      title: "Best fertilizer for maize in this season?",
      author: "John Kimani",
      location: "Nyeri County",
      category: "Farming Tips",
      content: "With the current weather patterns, what's the best fertilizer for maize? I'm planning to plant next week.",
      replies: 15,
      likes: 23,
      timeAgo: "4 hours ago",
      tags: ["maize", "fertilizer", "season"],
      status: "active",
      avatar: "JK"
    },
    {
      id: 3,
      title: "Bulk buyer needed for 500kg of beans",
      author: "Grace Njeri",
      location: "Meru County",
      category: "Trade Opportunities",
      content: "I have 500kg of high-quality beans ready for sale. Looking for serious buyers. Contact me for pricing.",
      replies: 6,
      likes: 18,
      timeAgo: "6 hours ago",
      tags: ["beans", "bulk", "trade"],
      status: "urgent",
      avatar: "GN"
    },
    {
      id: 4,
      title: "Weather patterns affecting coffee harvest",
      author: "Samuel Ochieng",
      location: "Kisumu County",
      category: "Weather & Climate",
      content: "The recent rainfall patterns are unusual. How is this affecting your coffee harvest? Any tips for adapting?",
      replies: 22,
      likes: 34,
      timeAgo: "1 day ago",
      tags: ["coffee", "weather", "harvest"],
      status: "discussion",
      avatar: "SO"
    },
    {
      id: 5,
      title: "Organic certification process - need guidance",
      author: "Peter Muthoni",
      location: "Kiambu County",
      category: "Certifications",
      content: "I want to get organic certification for my farm. Can someone guide me through the process and costs involved?",
      replies: 11,
      likes: 19,
      timeAgo: "2 days ago",
      tags: ["organic", "certification", "guidance"],
      status: "question",
      avatar: "PM"
    }
  ];

  const categories = [
    "all",
    "Seeds & Supplies",
    "Farming Tips",
    "Trade Opportunities",
    "Weather & Climate",
    "Certifications",
    "Equipment",
    "Pest Control",
    "Market Prices"
  ];

  const locations = [
    "all",
    "Nairobi County",
    "Nakuru County",
    "Nyeri County",
    "Kiambu County",
    "Meru County",
    "Kisumu County",
    "Machakos County",
    "Uasin Gishu County"
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || discussion.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || discussion.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "bg-red-500";
      case "active": return "bg-green-500";
      case "question": return "bg-blue-500";
      case "discussion": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "urgent": return "Urgent";
      case "active": return "Active";
      case "question": return "Question";
      case "discussion": return "Discussion";
      default: return "General";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Community Discussions</h1>
          <p className="text-gray-600">Connect, share knowledge, and find trading opportunities</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Start Discussion
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Start a New Discussion</DialogTitle>
              <DialogDescription>
                Share your question, offer, or start a conversation with the farming community
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Discussion title..." />
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.slice(1).map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="What would you like to discuss?" rows={4} />
              <Input placeholder="Tags (separate with commas)" />
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-green-600 hover:bg-green-700">Post Discussion</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search discussions, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filters:</span>
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location === "all" ? "All Locations" : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">324</div>
            <div className="text-sm text-gray-600">Active Discussions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">1,245</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">856</div>
            <div className="text-sm text-gray-600">Questions Answered</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">127</div>
            <div className="text-sm text-gray-600">Trade Connections</div>
          </CardContent>
        </Card>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600">
                      {discussion.title}
                    </h3>
                    <Badge className={`${getStatusColor(discussion.status)} text-white text-xs`}>
                      {getStatusText(discussion.status)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{discussion.avatar}</AvatarFallback>
                      </Avatar>
                      <span>{discussion.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{discussion.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 line-clamp-2">{discussion.content}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{discussion.category}</Badge>
                    {discussion.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes} likes</span>
                  </button>
                </div>
                <Button variant="outline" size="sm">
                  Join Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show message when no discussions found */}
      {filteredDiscussions.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No discussions found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                Start the First Discussion
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default CommunityDiscussions;

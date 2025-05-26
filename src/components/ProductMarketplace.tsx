
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MapPin, Calendar, Filter, X, Video, Star, MessageSquare, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProductMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedQuality, setSelectedQuality] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const categories = [
    "All Products", "Grains", "Vegetables", "Fruits", "Legumes", "Tubers"
  ];

  const qualityFilters = ["Organic", "Premium", "Standard", "Bulk Only"];
  const distanceFilters = ["Within 5km", "Within 10km", "Within 25km", "Any Distance"];
  const locations = ["All Locations", "Nairobi", "Nakuru", "Nyeri", "Kiambu", "Meru", "Kisumu"];

  const products = [
    {
      id: 1,
      name: "Fresh Maize",
      farmer: "John Kimani",
      location: "Nyeri County",
      price: 50,
      unit: "kg",
      quantity: 500,
      harvest_date: "2024-01-15",
      quality: "Premium",
      status: "In Stock",
      trending: true,
      image: "🌽",
      category: "Grains",
      rating: 4.8,
      hasVideo: true,
      verified: true
    },
    {
      id: 2,
      name: "Organic Tomatoes",
      farmer: "Mary Wanjiku",
      location: "Nakuru County",
      price: 80,
      unit: "kg",
      quantity: 300,
      harvest_date: "2024-01-10",
      quality: "Organic",
      status: "In Stock",
      trending: false,
      image: "🍅",
      category: "Vegetables",
      rating: 4.9,
      hasVideo: true,
      verified: true
    },
    {
      id: 3,
      name: "Sweet Potatoes",
      farmer: "Peter Muthoni",
      location: "Kiambu County",
      price: 40,
      unit: "kg",
      quantity: 200,
      harvest_date: "2024-01-18",
      quality: "Standard",
      status: "Out of Stock",
      trending: false,
      image: "🍠",
      category: "Tubers",
      rating: 4.5,
      hasVideo: false,
      verified: false
    },
    {
      id: 4,
      name: "Green Beans",
      farmer: "Grace Njeri",
      location: "Meru County",
      price: 120,
      unit: "kg",
      quantity: 150,
      harvest_date: "2024-01-20",
      quality: "Premium",
      status: "In Stock",
      trending: true,
      image: "🫘",
      category: "Vegetables",
      rating: 4.7,
      hasVideo: true,
      verified: true
    },
    {
      id: 5,
      name: "Fresh Bananas",
      farmer: "Samuel Ochieng",
      location: "Kisumu County",
      price: 60,
      unit: "kg",
      quantity: 400,
      harvest_date: "2024-01-22",
      quality: "Organic",
      status: "In Stock",
      trending: true,
      image: "🍌",
      category: "Fruits",
      rating: 4.6,
      hasVideo: false,
      verified: true
    }
  ];

  const handleFilterToggle = (filter: string, type: string) => {
    if (type === "category") {
      setSelectedCategory(filter);
      updateActiveFilters(filter, selectedQuality, selectedDistance, selectedLocation);
    } else if (type === "quality") {
      const newQuality = selectedQuality === filter ? "" : filter;
      setSelectedQuality(newQuality);
      updateActiveFilters(selectedCategory, newQuality, selectedDistance, selectedLocation);
    } else if (type === "distance") {
      const newDistance = selectedDistance === filter ? "" : filter;
      setSelectedDistance(newDistance);
      updateActiveFilters(selectedCategory, selectedQuality, newDistance, selectedLocation);
    } else if (type === "location") {
      const newLocation = selectedLocation === filter ? "" : filter;
      setSelectedLocation(newLocation);
      updateActiveFilters(selectedCategory, selectedQuality, selectedDistance, newLocation);
    }
  };

  const updateActiveFilters = (category: string, quality: string, distance: string, location: string) => {
    const filters = [];
    if (category && category !== "All Products") filters.push(category);
    if (quality) filters.push(quality);
    if (distance) filters.push(distance);
    if (location && location !== "All Locations") filters.push(location);
    setActiveFilters(filters);
  };

  const clearAllFilters = () => {
    setSelectedCategory("All Products");
    setSelectedQuality("");
    setSelectedDistance("");
    setSelectedLocation("");
    setActiveFilters([]);
  };

  const removeFilter = (filter: string) => {
    if (categories.includes(filter)) setSelectedCategory("All Products");
    if (qualityFilters.includes(filter)) setSelectedQuality("");
    if (distanceFilters.includes(filter)) setSelectedDistance("");
    if (locations.includes(filter)) setSelectedLocation("");
    
    const newFilters = activeFilters.filter(f => f !== filter);
    setActiveFilters(newFilters);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesQuality = !selectedQuality || product.quality === selectedQuality;
    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" || 
                           product.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesQuality && matchesLocation;
  });

  const handleViewDetails = (productId: number) => {
    console.log(`Viewing details for product ${productId}`);
    // Navigation logic will be implemented
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Adding product ${productId} to cart`);
    // Cart logic will be implemented
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search for crops, farms, locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-3 text-lg bg-yellow-200 border-yellow-300 placeholder:text-gray-600"
        />
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {/* Categories */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>Categories</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterToggle(category, "category")}
                className={selectedCategory === category ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Button
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterToggle(location, "location")}
                className={selectedLocation === location ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
              >
                {location}
              </Button>
            ))}
          </div>
        </div>

        {/* Distance */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Distance</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {distanceFilters.map((distance) => (
              <Button
                key={distance}
                variant={selectedDistance === distance ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterToggle(distance, "distance")}
                className={selectedDistance === distance ? "bg-green-500 text-white hover:bg-green-600" : ""}
              >
                {distance}
              </Button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-2">
          <span className="text-sm text-gray-600">Quality</span>
          <div className="flex flex-wrap gap-2">
            {qualityFilters.map((quality) => (
              <Button
                key={quality}
                variant={selectedQuality === quality ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterToggle(quality, "quality")}
                className={selectedQuality === quality ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""}
              >
                {quality}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            <div className="flex flex-wrap gap-2 items-center">
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="bg-green-100 text-green-800">
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="ml-1 hover:bg-green-200 rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-red-600">
                Clear all
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Special Offer */}
      <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <Badge className="bg-red-500 text-white mb-2">Special Offer</Badge>
              <h3 className="text-xl font-bold text-gray-800">Premium Yara Fertilizer - 20% Off</h3>
              <p className="text-gray-600">Boost your crop yields with our premium fertilizers. Limited-time offer for FarmConnect users.</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Shop Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="border-2 border-yellow-400 bg-yellow-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="relative">
              <div className="flex justify-between items-start mb-2">
                <div className="text-4xl">{product.image}</div>
                <div className="flex flex-col space-y-1">
                  {product.trending && (
                    <Badge className="bg-red-500 text-white text-xs">
                      Trending
                    </Badge>
                  )}
                  {product.verified && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      Verified
                    </Badge>
                  )}
                  {product.hasVideo && (
                    <Badge className="bg-purple-500 text-white text-xs flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      Video
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className={
                      product.status === "In Stock" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-black">
                  KSH {product.price}
                </span>
                <span className="text-gray-600 text-sm">/{product.unit}</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {product.quality}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-600">
                from {product.farmer} • {product.location}
              </div>
              <div className="flex justify-between gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleViewDetails(product.id)}
                >
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={product.status === "Out of Stock"}
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show message when no products found */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default ProductMarketplace;

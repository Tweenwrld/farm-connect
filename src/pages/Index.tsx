
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Leaf, TrendingUp, Package, Users, Award, Bell, Search, MapPin, Phone, Mail, MessageCircle, Menu, X, Cloud, Sun, Droplets } from "lucide-react";
import HeroSection from '@/components/HeroSection';
import ProductMarketplace from '@/components/ProductMarketplace';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import OrderTracking from '@/components/OrderTracking';
import RewardsDashboard from '@/components/RewardsDashboard';
import UserProfile from '@/components/UserProfile';
import OnboardingModal from '@/components/OnboardingModal';
import TabContent from '@/components/TabContent';
import WeatherInsights from '@/components/WeatherInsights';
import CommunityDiscussions from '@/components/CommunityDiscussions';
import FAQ from '@/components/FAQ';

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketplaceSubTab, setMarketplaceSubTab] = useState("marketplace");

  const navigationItems = [
    { id: "home", label: "Home", icon: Leaf },
    { id: "marketplace", label: "Marketplace", icon: Package },
    { id: "weather", label: "Weather & Insights", icon: Cloud },
    { id: "community", label: "Community", icon: Users },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "orders", label: "Orders", icon: Package },
    { id: "rewards", label: "Rewards", icon: Award },
    { id: "faq", label: "FAQ", icon: Bell },
    { id: "profile", label: "Profile", icon: Users }
  ];

  const marketplaceTabs = [
    { id: "marketplace", label: "Marketplace" },
    { id: "farms", label: "Farms" },
    { id: "prices", label: "Prices" },
    { id: "premium", label: "Premium" },
    { id: "rewards", label: "Rewards" },
    { id: "loans", label: "Loans" },
    { id: "partners", label: "Partners" },
    { id: "data", label: "Data" }
  ];

  const handleMarketplaceClick = () => {
    setActiveTab("marketplace");
    setMarketplaceSubTab("marketplace");
  };

  const handleJoinAsFarmerClick = () => {
    setShowOnboarding(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-green-800">FarmConnect</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === item.id 
                      ? "bg-green-100 text-green-800" 
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 max-w-md flex-1 mx-6">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search products, farms..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Bell className="h-4 w-4" />
              </Button>
              
              <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700 hidden md:flex">
                    Get Started
                  </Button>
                </DialogTrigger>
                <OnboardingModal />
              </Dialog>

              <Badge variant="secondary" className="bg-green-100 text-green-800 hidden md:flex">
                Farmer
              </Badge>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === item.id 
                        ? "bg-green-100 text-green-800" 
                        : "text-gray-600 hover:bg-green-50"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="border-t pt-4 mt-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 mb-2"
                    onClick={() => setShowOnboarding(true)}
                  >
                    Get Started
                  </Button>
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Farmer
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Show Hero Section only on Home tab */}
        {activeTab === "home" && <HeroSection />}

        {/* Content Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === "home" && (
            <div className="space-y-12">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Empowering Kenyan Agriculture
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Join thousands of farmers and buyers creating a sustainable agricultural ecosystem
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
                    <div className="text-gray-600">Active Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">500K+</div>
                    <div className="text-gray-600">Consumers Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
                    <div className="text-gray-600">Loss Reduction</div>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleMarketplaceClick}>
                  <CardHeader>
                    <Package className="h-10 w-10 text-green-600 mb-4" />
                    <CardTitle>Browse Marketplace</CardTitle>
                    <CardDescription>
                      Discover fresh produce directly from local farmers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleJoinAsFarmerClick}>
                  <CardHeader>
                    <Users className="h-10 w-10 text-orange-500 mb-4" />
                    <CardTitle>Join as Farmer</CardTitle>
                    <CardDescription>
                      Sell your produce directly to consumers and increase income
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                      Sign Up
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Weather Preview */}
              <Card className="bg-gradient-to-r from-blue-100 to-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="h-6 w-6 mr-2" />
                    Today's Weather Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Nairobi</p>
                        <p className="text-lg font-semibold">24°C</p>
                      </div>
                      <Sun className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Nakuru</p>
                        <p className="text-lg font-semibold">22°C</p>
                      </div>
                      <Droplets className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Humidity</p>
                        <p className="text-lg font-semibold">72%</p>
                      </div>
                      <Cloud className="h-8 w-8 text-gray-500" />
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                    onClick={() => setActiveTab("weather")}
                  >
                    View Full Weather Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "marketplace" && (
            <div className="space-y-6">
              {/* Navigation Tabs */}
              <div className="flex space-x-1 bg-green-600 rounded-lg p-1 overflow-x-auto">
                {marketplaceTabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={marketplaceSubTab === tab.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setMarketplaceSubTab(tab.id)}
                    className={`${
                      marketplaceSubTab === tab.id 
                        ? "bg-white text-green-800" 
                        : "text-white hover:bg-green-500"
                    } whitespace-nowrap`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Marketplace Content */}
              {marketplaceSubTab === "marketplace" && <ProductMarketplace />}
              {marketplaceSubTab !== "marketplace" && <TabContent activeTab={marketplaceSubTab} />}
            </div>
          )}

          {activeTab === "weather" && <WeatherInsights />}
          {activeTab === "community" && <CommunityDiscussions />}
          {activeTab === "analytics" && <AnalyticsDashboard />}
          {activeTab === "orders" && <OrderTracking />}
          {activeTab === "rewards" && <RewardsDashboard />}
          {activeTab === "faq" && <FAQ />}
          {activeTab === "profile" && <UserProfile />}
        </div>
      </main>

      {/* Fixed WhatsApp Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg"
          onClick={() => window.open("https://wa.me/254700000000", "_blank")}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Chat Support</span>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <h3 className="text-lg font-bold">FarmConnect</h3>
              </div>
              <p className="text-green-100 text-sm">
                Empowering Kenyan farmers through direct market access and smart agriculture tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Farmers</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><button onClick={handleJoinAsFarmerClick} className="hover:text-white">Join Platform</button></li>
                <li><button onClick={handleMarketplaceClick} className="hover:text-white">Sell Products</button></li>
                <li><button onClick={() => setActiveTab("weather")} className="hover:text-white">Access Tools</button></li>
                <li><button onClick={() => setActiveTab("faq")} className="hover:text-white">Get Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><button onClick={handleMarketplaceClick} className="hover:text-white">Browse Marketplace</button></li>
                <li><button onClick={() => { setActiveTab("marketplace"); setMarketplaceSubTab("data"); }} className="hover:text-white">Bulk Orders</button></li>
                <li><button onClick={() => { setActiveTab("marketplace"); setMarketplaceSubTab("prices"); }} className="hover:text-white">Price Analytics</button></li>
                <li><button onClick={() => { setActiveTab("marketplace"); setMarketplaceSubTab("data"); }} className="hover:text-white">Quality Assurance</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp: +254700000000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>help@farmconnect.ke</span>
                </li>
                <li>Call: 0700 000 000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-100">
            © 2024 FarmConnect Kenya. Empowering smallholder farmers across Kenya.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MapPin, Calendar, Star, Zap, Cloud, Droplets, Sun, ThermometerSun } from "lucide-react";

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const renderFarmsContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Farms</h2>
        <p className="text-gray-600">Connect with verified farmers across Kenya</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Kimani's Organic Farm", location: "Nyeri County", products: "Maize, Beans, Potatoes", rating: 4.8, farmers: 1, verified: true },
          { name: "Wanjiku Vegetable Farm", location: "Nakuru County", products: "Tomatoes, Onions, Carrots", rating: 4.9, farmers: 2, verified: true },
          { name: "Meru Cooperative Farm", location: "Meru County", products: "Coffee, Bananas, Avocados", rating: 4.7, farmers: 15, verified: true }
        ].map((farm, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{farm.name}</CardTitle>
                {farm.verified && <Badge className="bg-green-500">Verified</Badge>}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {farm.location}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">{farm.products}</p>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{farm.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {farm.farmers} farmer{farm.farmers > 1 ? 's' : ''}
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Visit Farm</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPricesContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Real-time Market Prices</h2>
        <p className="text-gray-600">Live pricing data across Kenyan markets</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { product: "Maize", price: 50, change: "+5%", trend: "up", market: "Nairobi" },
          { product: "Tomatoes", price: 80, change: "-2%", trend: "down", market: "Nakuru" },
          { product: "Beans", price: 120, change: "+8%", trend: "up", market: "Meru" },
          { product: "Potatoes", price: 40, change: "+3%", trend: "up", market: "Nyeri" }
        ].map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.product}</CardTitle>
              <CardDescription>{item.market} Market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-2">KSH {item.price}/kg</div>
              <Badge variant={item.trend === "up" ? "default" : "destructive"} className={item.trend === "up" ? "bg-green-500" : ""}>
                {item.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Market Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span>Maize prices increasing due to high demand</span>
              <Badge className="bg-green-500">Trending Up</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span>Tomato harvest season beginning in Nakuru</span>
              <Badge variant="secondary">Seasonal</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span>Bean export demand from neighboring countries</span>
              <Badge className="bg-yellow-500">Export Boost</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPremiumContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Premium Services</h2>
        <p className="text-gray-600">Unlock advanced features for your farming business</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "Premium Analytics", 
            price: "KSH 2,000/month", 
            features: ["Advanced market insights", "Price predictions", "Crop yield analytics", "Weather forecasting"],
            popular: true
          },
          { 
            title: "Verified Seller", 
            price: "KSH 1,000/month", 
            features: ["Verified badge", "Priority listing", "Enhanced profile", "Customer reviews"]
          },
          { 
            title: "Bulk Trading", 
            price: "KSH 3,000/month", 
            features: ["Bulk order management", "Contract farming", "Direct buyer connections", "Logistics support"]
          }
        ].map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-2 border-yellow-400' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle>{plan.title}</CardTitle>
              <div className="text-2xl font-bold text-green-600">{plan.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-green-600 hover:bg-green-700'}`}>
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderRewardsContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">FarmConnect Rewards</h2>
        <p className="text-gray-600">Earn tokens for quality farming and trading</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-green-100 to-yellow-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Your Reward Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">2,450 FCP</div>
            <p className="text-sm text-gray-600">FarmConnect Points</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Quality Seller Badge</span>
                <Badge className="bg-yellow-500">+100 FCP</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Trading Goal</span>
                <Badge className="bg-green-500">+200 FCP</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Customer Review 5★</span>
                <Badge className="bg-blue-500">+50 FCP</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderLoansContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Agricultural Loans</h2>
        <p className="text-gray-600">Access funding for your farming operations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { type: "Seed Capital", amount: "KSH 50,000 - 500,000", rate: "12% annually", duration: "6-12 months" },
          { type: "Equipment Loan", amount: "KSH 100,000 - 2M", rate: "15% annually", duration: "12-36 months" },
          { type: "Crop Insurance", amount: "Coverage up to KSH 1M", rate: "5% of coverage", duration: "Per season" }
        ].map((loan, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{loan.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>Amount:</strong> {loan.amount}</div>
                <div><strong>Rate:</strong> {loan.rate}</div>
                <div><strong>Duration:</strong> {loan.duration}</div>
              </div>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPartnersContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Partners</h2>
        <p className="text-gray-600">Working together to empower Kenyan agriculture</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "Kenya Agricultural Research Institute", type: "Research", logo: "🔬" },
          { name: "Equity Bank", type: "Financial Services", logo: "🏦" },
          { name: "Safaricom", type: "Technology", logo: "📱" },
          { name: "Ministry of Agriculture", type: "Government", logo: "🏛️" },
          { name: "World Bank", type: "Development", logo: "🌍" },
          { name: "USAID", type: "Development", logo: "🤝" },
          { name: "FAO", type: "Food & Agriculture", logo: "🌾" },
          { name: "Twiga Foods", type: "Supply Chain", logo: "🚚" }
        ].map((partner, index) => (
          <Card key={index} className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="text-3xl mb-2">{partner.logo}</div>
              <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-600">{partner.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDataContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Agricultural Data & Insights</h2>
        <p className="text-gray-600">Real-time data to drive smart farming decisions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Weather Data", value: "28°C", subtitle: "Current Temperature", icon: Sun, color: "text-orange-500" },
          { title: "Rainfall", value: "45mm", subtitle: "This Week", icon: Droplets, color: "text-blue-500" },
          { title: "Humidity", value: "72%", subtitle: "Current Level", icon: Cloud, color: "text-gray-500" },
          { title: "Soil Temp", value: "24°C", subtitle: "Average", icon: ThermometerSun, color: "text-red-500" }
        ].map((data, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <data.icon className={`h-8 w-8 mx-auto mb-2 ${data.color}`} />
              <div className="text-2xl font-bold">{data.value}</div>
              <div className="text-sm text-gray-600">{data.title}</div>
              <div className="text-xs text-gray-500">{data.subtitle}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Maize</span>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+12%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Tomatoes</span>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1 rotate-180" />
                  <span className="text-red-500">-5%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Beans</span>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Regional Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-sm">Nairobi Region</h4>
                <p className="text-xs text-gray-600">High demand for vegetables, stable prices</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-sm">Nakuru Region</h4>
                <p className="text-xs text-gray-600">Good weather conditions, harvest season</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-sm">Meru Region</h4>
                <p className="text-xs text-gray-600">Coffee prices rising, export opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  switch (activeTab) {
    case "farms":
      return renderFarmsContent();
    case "prices":
      return renderPricesContent();
    case "premium":
      return renderPremiumContent();
    case "rewards":
      return renderRewardsContent();
    case "loans":
      return renderLoansContent();
    case "partners":
      return renderPartnersContent();
    case "data":
      return renderDataContent();
    default:
      return <div>Content not found</div>;
  }
};

export default TabContent;

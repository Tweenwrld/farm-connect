
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, CloudRain, BarChart3, Lightbulb } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-green-500 bg-opacity-20 px-4 py-2 rounded-full text-sm">
              Empowering 1M+ Farmers
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Connect Farms to Markets in{" "}
              <span className="text-orange-300">Kenya</span>
            </h1>
            
            <p className="text-lg text-green-100 max-w-lg">
              FarmConnect bridges smallholder farmers with buyers and consumers, 
              increasing farmer incomes by 20-50% while reducing post-harvest losses 
              through direct market access and smart agriculture tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Browse Marketplace
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Join as Farmer
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">15,000+</div>
                <div className="text-sm text-green-100">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">500K+</div>
                <div className="text-sm text-green-100">Consumers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">30%</div>
                <div className="text-sm text-green-100">Loss Reduction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white bg-opacity-10 border-green-400 border-opacity-30">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-orange-300 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Fresh Produce</h3>
                <p className="text-sm text-green-100">Direct from farm</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-green-400 border-opacity-30">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-orange-300 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Direct Trading</h3>
                <p className="text-sm text-green-100">No middlemen</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-green-400 border-opacity-30">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 text-orange-300 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Market Access</h3>
                <p className="text-sm text-green-100">Price Analytics</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-green-400 border-opacity-30">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-orange-300 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Quality Assurance</h3>
                <p className="text-sm text-green-100">Grade A produce</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Real-time Market Data Section */}
        <div className="mt-16 bg-white bg-opacity-10 rounded-lg p-8 border border-green-400 border-opacity-30">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Real-time Market Data</h2>
            <p className="text-green-100">Get live prices, weather alerts, and farming insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <BarChart3 className="h-10 w-10 text-orange-300" />
              <h3 className="font-semibold">Live Prices</h3>
              <p className="text-sm text-green-100">Real-time market pricing data</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CloudRain className="h-10 w-10 text-orange-300" />
              <h3 className="font-semibold">Weather Alerts</h3>
              <p className="text-sm text-green-100">Climate monitoring and forecasts</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Lightbulb className="h-10 w-10 text-orange-300" />
              <h3 className="font-semibold">Farming Insights</h3>
              <p className="text-sm text-green-100">AI-powered recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

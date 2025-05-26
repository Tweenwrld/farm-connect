
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, Award, Gift, TrendingUp, Star, Target } from "lucide-react";

const RewardsDashboard = () => {
  const userStats = {
    total_tokens: 2450,
    tokens_earned_today: 45,
    current_level: "Gold Farmer",
    next_level: "Platinum Farmer",
    progress_to_next: 75,
    tokens_needed: 550
  };

  const recentActivities = [
    {
      id: 1,
      action: "Quality Product Sale",
      tokens: 50,
      date: "2024-01-20",
      description: "Premium tomatoes sold"
    },
    {
      id: 2,
      action: "On-time Delivery",
      tokens: 25,
      date: "2024-01-19",
      description: "Delivered within promised timeframe"
    },
    {
      id: 3,
      action: "Customer Rating",
      tokens: 30,
      date: "2024-01-18",
      description: "Received 5-star customer review"
    },
    {
      id: 4,
      action: "Bulk Order Completion",
      tokens: 75,
      date: "2024-01-17",
      description: "Successfully fulfilled large order"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "Weekly Sales Target",
      description: "Sell 500kg of produce this week",
      progress: 68,
      reward: 100,
      deadline: "3 days left"
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      description: "Maintain 4.5+ star rating",
      progress: 90,
      reward: 75,
      deadline: "Ongoing"
    },
    {
      id: 3,
      title: "New Product Launch",
      description: "List a new product category",
      progress: 0,
      reward: 150,
      deadline: "7 days left"
    }
  ];

  const rewards = [
    {
      id: 1,
      name: "Free Delivery Voucher",
      cost: 200,
      description: "Free delivery for your next 5 orders",
      category: "Logistics"
    },
    {
      id: 2,
      name: "Premium Listing",
      cost: 300,
      description: "Feature your products for 7 days",
      category: "Marketing"
    },
    {
      id: 3,
      name: "Farming Tools Discount",
      cost: 500,
      description: "20% off on farming equipment",
      category: "Equipment"
    },
    {
      id: 4,
      name: "Training Workshop Access",
      cost: 150,
      description: "Access to premium farming courses",
      category: "Education"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-green-800">Rewards Dashboard</h2>
        <p className="text-gray-600">Earn tokens and unlock benefits for quality farming</p>
      </div>

      {/* Token Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-100 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">
              Total Tokens
            </CardTitle>
            <Coins className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-800">{userStats.total_tokens}</div>
            <p className="text-xs text-green-600 mt-1">
              +{userStats.tokens_earned_today} earned today
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100 bg-gradient-to-r from-orange-50 to-orange-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">
              Current Level
            </CardTitle>
            <Award className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-orange-800">{userStats.current_level}</div>
            <p className="text-xs text-orange-600 mt-1">
              {userStats.tokens_needed} tokens to {userStats.next_level}
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">
              Progress to Next Level
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={userStats.progress_to_next} className="h-2" />
              <p className="text-xs text-blue-600">
                {userStats.progress_to_next}% complete
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities & Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Token Activities */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Recent Activities</CardTitle>
            <CardDescription>Your latest token earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <Coins className="h-3 w-3 mr-1" />
                    +{activity.tokens}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Active Challenges</CardTitle>
            <CardDescription>Complete challenges to earn bonus tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      <Target className="h-3 w-3 mr-1" />
                      {challenge.reward} tokens
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                    <p className="text-xs text-gray-500">{challenge.deadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rewards Store */}
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="text-green-800">Rewards Store</CardTitle>
          <CardDescription>Redeem your tokens for valuable rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rewards.map((reward) => (
              <div key={reward.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <Gift className="h-5 w-5 text-purple-600" />
                  <Badge variant="secondary">{reward.category}</Badge>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">{reward.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600">
                    <Coins className="h-4 w-4 mr-1" />
                    <span className="font-medium">{reward.cost}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700"
                    disabled={userStats.total_tokens < reward.cost}
                  >
                    {userStats.total_tokens >= reward.cost ? "Redeem" : "Not enough"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsDashboard;

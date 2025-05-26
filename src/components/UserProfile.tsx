
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, Phone, Mail, Star, Award, TrendingUp, Camera } from "lucide-react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Kariuki",
    email: "john.kariuki@farmconnect.co.ke",
    phone: "+254712345678",
    location: "Nyeri County, Kenya",
    farm_size: "5 acres",
    specialization: "Vegetables & Fruits",
    experience: "8 years",
    bio: "Passionate organic farmer specializing in high-quality vegetables and fruits. Committed to sustainable farming practices and providing fresh produce to local communities."
  });

  const stats = {
    total_sales: "KES 2.4M",
    products_listed: 247,
    orders_completed: 189,
    customer_rating: 4.8,
    tokens_earned: 2450,
    level: "Gold Farmer"
  };

  const recentSales = [
    { product: "Tomatoes", quantity: "50kg", amount: "KES 6,000", date: "2024-01-20" },
    { product: "Maize", quantity: "100kg", amount: "KES 8,000", date: "2024-01-18" },
    { product: "Green Beans", quantity: "30kg", amount: "KES 4,500", date: "2024-01-15" },
    { product: "Potatoes", quantity: "80kg", amount: "KES 5,600", date: "2024-01-12" }
  ];

  const achievements = [
    { title: "Top Seller", description: "Ranked in top 10 sellers this month", icon: TrendingUp, color: "text-green-600" },
    { title: "Quality Champion", description: "Maintained 4.5+ rating for 6 months", icon: Star, color: "text-yellow-600" },
    { title: "Gold Farmer", description: "Reached Gold tier in rewards program", icon: Award, color: "text-orange-600" },
    { title: "Community Leader", description: "Helped 50+ new farmers join platform", icon: User, color: "text-blue-600" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save the profile data
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-green-800">User Profile</h2>
        <p className="text-gray-600">Manage your account and view your farming journey</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
          <TabsTrigger value="profile">Profile Info</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="sales">Recent Sales</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Picture & Basic Info */}
            <Card className="border-green-100">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-green-800">{profile.name}</CardTitle>
                <CardDescription className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {profile.location}
                </CardDescription>
                <Badge className="w-fit mx-auto bg-green-100 text-green-800">
                  {stats.level}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </CardContent>
            </Card>

            {/* Profile Details */}
            <div className="lg:col-span-2">
              <Card className="border-green-100">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-green-800">Profile Details</CardTitle>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farm_size">Farm Size</Label>
                      <Input
                        id="farm_size"
                        value={profile.farm_size}
                        onChange={(e) => setProfile({...profile, farm_size: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        value={profile.specialization}
                        onChange={(e) => setProfile({...profile, specialization: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="w-full p-3 border border-gray-300 rounded-md resize-none"
                      rows={4}
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Sales</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{stats.total_sales}</div>
                <p className="text-xs text-gray-600">Lifetime earnings</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Products Listed</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{stats.products_listed}</div>
                <p className="text-xs text-gray-600">Active and sold products</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Orders Completed</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{stats.orders_completed}</div>
                <p className="text-xs text-gray-600">Successfully fulfilled</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Customer Rating</CardTitle>
                <Star className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{stats.customer_rating}/5</div>
                <p className="text-xs text-gray-600">Average rating</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Tokens Earned</CardTitle>
                <Award className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{stats.tokens_earned}</div>
                <p className="text-xs text-gray-600">Reward tokens</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Current Level</CardTitle>
                <Award className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-green-800">{stats.level}</div>
                <p className="text-xs text-gray-600">Farmer tier</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Recent Sales</CardTitle>
              <CardDescription>Your latest product sales and earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{sale.product}</p>
                      <p className="text-sm text-gray-600">Quantity: {sale.quantity}</p>
                      <p className="text-xs text-gray-500">{sale.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{sale.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-green-100">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    <div>
                      <CardTitle className="text-green-800">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;

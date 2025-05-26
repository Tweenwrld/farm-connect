
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AnalyticsDashboard = () => {
  const priceData = [
    { month: 'Jan', tomatoes: 100, maize: 70, milk: 45 },
    { month: 'Feb', tomatoes: 120, maize: 75, milk: 48 },
    { month: 'Mar', tomatoes: 110, maize: 80, milk: 50 },
    { month: 'Apr', tomatoes: 140, maize: 85, milk: 52 },
    { month: 'May', tomatoes: 130, maize: 90, milk: 55 },
    { month: 'Jun', tomatoes: 150, maize: 95, milk: 58 },
  ];

  const salesData = [
    { product: 'Tomatoes', sales: 4500 },
    { product: 'Maize', sales: 3200 },
    { product: 'Milk', sales: 2800 },
    { product: 'Beans', sales: 2100 },
    { product: 'Potatoes', sales: 1900 },
  ];

  const demandData = [
    { name: 'High Demand', value: 45, color: '#22c55e' },
    { name: 'Medium Demand', value: 35, color: '#f97316' },
    { name: 'Low Demand', value: 20, color: '#ef4444' },
  ];

  const kpiCards = [
    {
      title: "Total Revenue",
      value: "KES 2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Products Listed",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Active Farmers",
      value: "856",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Orders Completed",
      value: "3,421",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-green-800">Analytics Dashboard</h2>
        <p className="text-gray-600">Market insights and performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className="border-green-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">{kpi.value}</div>
              <div className="flex items-center text-xs text-gray-600">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                )}
                <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {kpi.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trends */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Price Trends</CardTitle>
            <CardDescription>Monthly price changes for key products</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="tomatoes" stroke="#ef4444" name="Tomatoes (KES/kg)" />
                <Line type="monotone" dataKey="maize" stroke="#f59e0b" name="Maize (KES/kg)" />
                <Line type="monotone" dataKey="milk" stroke="#3b82f6" name="Milk (KES/L)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sales Performance */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Sales Performance</CardTitle>
            <CardDescription>Revenue by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Demand Analysis */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Market Demand</CardTitle>
            <CardDescription>Current demand distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demandData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {demandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Predictions */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">AI Predictions</CardTitle>
            <CardDescription>Next week's price forecasts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Tomatoes</p>
                <p className="text-sm text-gray-600">Expected: KES 135/kg</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8%
              </Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium">Maize</p>
                <p className="text-sm text-gray-600">Expected: KES 88/kg</p>
              </div>
              <Badge className="bg-orange-100 text-orange-800">
                <TrendingDown className="h-3 w-3 mr-1" />
                -3%
              </Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">Milk</p>
                <p className="text-sm text-gray-600">Expected: KES 60/L</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

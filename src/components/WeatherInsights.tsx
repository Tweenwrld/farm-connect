
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, Droplets, Wind, AlertTriangle, TrendingUp, Calendar, MapPin } from "lucide-react";

const WeatherInsights = () => {
  const weatherData = [
    {
      location: "Nairobi",
      temperature: "24°C",
      humidity: "65%",
      rainfall: "12mm",
      windSpeed: "15 km/h",
      forecast: "Partly cloudy",
      alert: "Light rain expected",
      alertLevel: "low"
    },
    {
      location: "Nakuru",
      temperature: "22°C",
      humidity: "78%",
      rainfall: "25mm",
      windSpeed: "12 km/h",
      forecast: "Rainy",
      alert: "Heavy rainfall warning",
      alertLevel: "high"
    },
    {
      location: "Meru",
      temperature: "26°C",
      humidity: "55%",
      rainfall: "5mm",
      windSpeed: "18 km/h",
      forecast: "Sunny",
      alert: "Dry conditions",
      alertLevel: "medium"
    }
  ];

  const farmingInsights = [
    {
      title: "Planting Recommendations",
      content: "Ideal time to plant maize in Nakuru region due to adequate rainfall",
      priority: "high",
      date: "Next 2 weeks"
    },
    {
      title: "Harvest Alert",
      content: "Tomato harvest should be completed before heavy rains in Nairobi",
      priority: "urgent",
      date: "Within 5 days"
    },
    {
      title: "Irrigation Advisory",
      content: "Reduce irrigation in Central Kenya due to increased rainfall",
      priority: "medium",
      date: "This week"
    },
    {
      title: "Pest Management",
      content: "Monitor for fungal diseases in high humidity areas like Nakuru",
      priority: "medium",
      date: "Ongoing"
    }
  ];

  const weeklyForecast = [
    { day: "Mon", temp: "24°C", condition: "sunny", rain: "0mm" },
    { day: "Tue", temp: "26°C", condition: "cloudy", rain: "2mm" },
    { day: "Wed", temp: "23°C", condition: "rainy", rain: "15mm" },
    { day: "Thu", temp: "25°C", condition: "sunny", rain: "0mm" },
    { day: "Fri", temp: "27°C", condition: "sunny", rain: "0mm" },
    { day: "Sat", temp: "24°C", condition: "cloudy", rain: "5mm" },
    { day: "Sun", temp: "22°C", condition: "rainy", rain: "20mm" }
  ];

  const getAlertColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny": return <Sun className="h-6 w-6 text-yellow-500" />;
      case "cloudy": return <Cloud className="h-6 w-6 text-gray-500" />;
      case "rainy": return <Droplets className="h-6 w-6 text-blue-500" />;
      default: return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Weather Insights & Farming Analytics</h1>
        <p className="text-gray-600">Real-time weather data and intelligent farming recommendations</p>
      </div>

      {/* Current Weather Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.map((weather, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {weather.location}
                  </CardTitle>
                  <CardDescription>{weather.forecast}</CardDescription>
                </div>
                <div className="text-2xl font-bold text-blue-600">{weather.temperature}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Droplets className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm">{weather.humidity}</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">{weather.rainfall}</span>
                </div>
                <div className="flex items-center">
                  <Wind className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">{weather.windSpeed}</span>
                </div>
              </div>
              <Badge className={`w-full justify-center ${getAlertColor(weather.alertLevel)}`}>
                <AlertTriangle className="h-3 w-3 mr-1" />
                {weather.alert}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            7-Day Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weeklyForecast.map((day, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-sm mb-2">{day.day}</div>
                <div className="flex justify-center mb-2">
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="text-sm font-medium mb-1">{day.temp}</div>
                <div className="text-xs text-blue-600">{day.rain}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Farming Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Farming Insights
            </CardTitle>
            <CardDescription>AI-powered recommendations for your crops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farmingInsights.map((insight, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{insight.title}</h3>
                    <Badge className={`${getPriorityColor(insight.priority)} text-white text-xs`}>
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{insight.content}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {insight.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Climate Impact Analysis</CardTitle>
            <CardDescription>How weather affects your farming decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-sm text-green-800 mb-2">Positive Impact</h3>
                <p className="text-sm text-green-700">Adequate rainfall in Nakuru region will boost maize production by 15-20%</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-sm text-yellow-800 mb-2">Caution Required</h3>
                <p className="text-sm text-yellow-700">High humidity may increase fungal disease risk in tomato crops</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-sm text-blue-800 mb-2">Opportunity</h3>
                <p className="text-sm text-blue-700">Dry conditions in Meru perfect for coffee bean drying and processing</p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Get Detailed Analysis
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Climate Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Seasonal Climate Patterns</CardTitle>
          <CardDescription>Historical data and predictions for better planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Long Rains (March-May)</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">450mm</div>
              <p className="text-sm text-gray-600">Expected rainfall</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Dry Season (June-September)</h3>
              <div className="text-2xl font-bold text-orange-600 mb-1">28°C</div>
              <p className="text-sm text-gray-600">Average temperature</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Short Rains (October-December)</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">280mm</div>
              <p className="text-sm text-gray-600">Expected rainfall</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherInsights;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const OrderTracking = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      product: "Fresh Tomatoes",
      farmer: "John Kariuki",
      quantity: "50 kg",
      total: "KES 6,000",
      status: "delivered",
      delivery_date: "2024-01-20",
      pickup_location: "Nyeri County",
      delivery_address: "Nairobi CBD",
      driver: "Michael Ochieng",
      driver_phone: "+254712345678",
      progress: [
        { step: "Order Placed", completed: true, time: "10:00 AM" },
        { step: "Farmer Confirmed", completed: true, time: "11:30 AM" },
        { step: "Picked Up", completed: true, time: "2:00 PM" },
        { step: "In Transit", completed: true, time: "3:30 PM" },
        { step: "Delivered", completed: true, time: "6:45 PM" }
      ]
    },
    {
      id: "ORD-2024-002",
      product: "Organic Maize",
      farmer: "Mary Wanjiku",
      quantity: "100 kg",
      total: "KES 8,000",
      status: "in_transit",
      delivery_date: "2024-01-21",
      pickup_location: "Nakuru County",
      delivery_address: "Kisumu",
      driver: "David Kimani",
      driver_phone: "+254723456789",
      progress: [
        { step: "Order Placed", completed: true, time: "8:00 AM" },
        { step: "Farmer Confirmed", completed: true, time: "9:15 AM" },
        { step: "Picked Up", completed: true, time: "1:00 PM" },
        { step: "In Transit", completed: true, time: "2:30 PM" },
        { step: "Delivered", completed: false, time: "" }
      ]
    },
    {
      id: "ORD-2024-003",
      product: "Fresh Milk",
      farmer: "Peter Maina",
      quantity: "20 liters",
      total: "KES 1,000",
      status: "confirmed",
      delivery_date: "2024-01-22",
      pickup_location: "Kiambu County",
      delivery_address: "Thika",
      driver: "Not assigned",
      driver_phone: "",
      progress: [
        { step: "Order Placed", completed: true, time: "7:00 AM" },
        { step: "Farmer Confirmed", completed: true, time: "7:30 AM" },
        { step: "Picked Up", completed: false, time: "" },
        { step: "In Transit", completed: false, time: "" },
        { step: "Delivered", completed: false, time: "" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "in_transit": return "bg-blue-100 text-blue-800";
      case "confirmed": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="h-4 w-4" />;
      case "in_transit": return <Truck className="h-4 w-4" />;
      case "confirmed": return <Clock className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-green-800">Order Tracking</h2>
        <p className="text-gray-600">Track your orders from farm to delivery</p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="border-green-100">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div>
                  <CardTitle className="text-green-800">{order.product}</CardTitle>
                  <CardDescription>Order ID: {order.id}</CardDescription>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status.replace('_', ' ')}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Farmer</p>
                  <p className="font-medium">{order.farmer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-medium">{order.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-medium text-green-600">{order.total}</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Pickup Location</p>
                    <p className="font-medium">{order.pickup_location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Delivery Address</p>
                    <p className="font-medium">{order.delivery_address}</p>
                  </div>
                </div>
              </div>

              {/* Driver Info */}
              {order.driver !== "Not assigned" && (
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm text-gray-600">Driver</p>
                      <p className="font-medium">{order.driver}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Driver
                  </Button>
                </div>
              )}

              {/* Progress Tracking */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Delivery Progress</h4>
                <div className="space-y-3">
                  {order.progress.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        step.completed 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${
                          step.completed ? 'text-green-800' : 'text-gray-500'
                        }`}>
                          {step.step}
                        </p>
                        {step.time && (
                          <p className="text-sm text-gray-600">{step.time}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-4 border-t">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                {order.status === "delivered" && (
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Rate & Review
                  </Button>
                )}
                {order.status !== "delivered" && (
                  <Button variant="outline" className="flex-1 text-red-600 border-red-600 hover:bg-red-50">
                    Cancel Order
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;

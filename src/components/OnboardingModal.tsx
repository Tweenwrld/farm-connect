
import { useState } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, TrendingUp, CheckCircle } from "lucide-react";

const OnboardingModal = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'farmer' | 'buyer' | null>(null);

  const handleUserTypeSelection = (type: 'farmer' | 'buyer') => {
    setUserType(type);
    setStep(2);
  };

  const handleComplete = () => {
    // Here you would typically handle the signup process
    console.log(`User selected: ${userType}`);
    // Close modal and redirect to appropriate section
  };

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-800">
          Welcome to FarmConnect! 
        </DialogTitle>
        <DialogDescription>
          Let's get you started on your journey to better farming and fresher produce.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              {step > 1 ? <CheckCircle className="h-4 w-4" /> : '1'}
            </div>
            <span className="text-sm font-medium">Choose Role</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="text-sm font-medium">Get Started</span>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Are you a Farmer or Buyer?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-green-500"
                onClick={() => handleUserTypeSelection('farmer')}
              >
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-green-800">I'm a Farmer</CardTitle>
                  <CardDescription>
                    Sell your fresh produce directly to consumers and increase your income
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>List your products</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Set your own prices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Direct market access</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-orange-500"
                onClick={() => handleUserTypeSelection('buyer')}
              >
                <CardHeader className="text-center">
                  <Package className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                  <CardTitle className="text-orange-800">I'm a Buyer</CardTitle>
                  <CardDescription>
                    Access fresh, quality produce directly from local farmers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Fresh produce</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Competitive prices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Support local farmers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {step === 2 && userType && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Perfect! You've chosen to join as a {userType === 'farmer' ? 'Farmer' : 'Buyer'}
              </h3>
              <p className="text-gray-600">
                {userType === 'farmer' 
                  ? "You're about to start selling your produce and connecting with buyers across Kenya."
                  : "You're about to discover fresh, quality produce from local farmers."
                }
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">What happens next?</h4>
              <div className="space-y-3 text-left">
                {userType === 'farmer' ? (
                  <>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">1</Badge>
                      <span>Create your farmer profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">2</Badge>
                      <span>Add your first product listing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">3</Badge>
                      <span>Start receiving orders from buyers</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-orange-100 text-orange-800">1</Badge>
                      <span>Browse fresh products from local farmers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-orange-100 text-orange-800">2</Badge>
                      <span>Place your first order</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-orange-100 text-orange-800">3</Badge>
                      <span>Enjoy fresh, quality produce</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                className={`w-full ${userType === 'farmer' ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-500 hover:bg-orange-600'}`}
                onClick={handleComplete}
              >
                Create My {userType === 'farmer' ? 'Farmer' : 'Buyer'} Account
              </Button>
              <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                Go Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  );
};

export default OnboardingModal;

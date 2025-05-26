
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, ChevronUp, HelpCircle, Users, Package, CreditCard, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle, count: 24 },
    { id: "getting-started", name: "Getting Started", icon: Users, count: 6 },
    { id: "marketplace", name: "Marketplace", icon: Package, count: 8 },
    { id: "payments", name: "Payments & Pricing", icon: CreditCard, count: 5 },
    { id: "security", name: "Security & Privacy", icon: Shield, count: 3 },
    { id: "technical", name: "Technical Support", icon: Settings, count: 2 }
  ];

  const faqs = [
    {
      id: 1,
      category: "getting-started",
      question: "How do I create an account on FarmConnect?",
      answer: "Creating an account is simple! Click the 'Get Started' button on our homepage, choose whether you're a farmer or buyer, fill in your basic information, and verify your email address. You'll be ready to start trading immediately.",
      tags: ["account", "registration", "signup"],
      helpful: 45,
      popular: true
    },
    {
      id: 2,
      category: "getting-started",
      question: "What's the difference between farmer and buyer accounts?",
      answer: "Farmer accounts allow you to list products for sale, manage inventory, access farming tools, and receive payments. Buyer accounts let you browse and purchase products, manage orders, and access bulk buying features. You can switch between roles anytime.",
      tags: ["account types", "farmers", "buyers"],
      helpful: 38,
      popular: true
    },
    {
      id: 3,
      category: "marketplace",
      question: "How do I list my products for sale?",
      answer: "Go to your dashboard and click 'Add Product'. Fill in details like product name, category, price, quantity, quality grade, and upload photos. You can also add videos to showcase organic/authentic produce. Your listing will be live immediately after review.",
      tags: ["selling", "products", "listing"],
      helpful: 52,
      popular: true
    },
    {
      id: 4,
      category: "marketplace",
      question: "How does the quality verification system work?",
      answer: "We verify product quality through farmer verification badges, customer reviews, video documentation, and our partner network. Premium sellers can upload short videos showing their farming practices to build trust with buyers.",
      tags: ["quality", "verification", "trust"],
      helpful: 41,
      popular: false
    },
    {
      id: 5,
      category: "marketplace",
      question: "Can I buy products in bulk?",
      answer: "Yes! We offer bulk purchasing options. Look for the 'Bulk Available' badge on products, or contact sellers directly for custom bulk orders. Premium users get access to our bulk trading platform with contract farming options.",
      tags: ["bulk", "wholesale", "orders"],
      helpful: 33,
      popular: false
    },
    {
      id: 6,
      category: "payments",
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, and mobile money. All payments are processed securely through our integrated payment system. Farmers receive payments directly to their preferred account within 24 hours.",
      tags: ["payments", "mpesa", "banking"],
      helpful: 47,
      popular: true
    },
    {
      id: 7,
      category: "payments",
      question: "How much does it cost to use FarmConnect?",
      answer: "Basic accounts are free! We charge a small transaction fee (2.5%) only when you successfully sell products. Premium subscriptions start at KSH 1,000/month with additional features like priority listing and advanced analytics.",
      tags: ["pricing", "fees", "cost"],
      helpful: 39,
      popular: true
    },
    {
      id: 8,
      category: "security",
      question: "How secure is my personal and financial information?",
      answer: "We use bank-grade encryption to protect all data. Your financial information is processed through certified payment gateways. We never store sensitive payment details and comply with international data protection standards.",
      tags: ["security", "privacy", "data"],
      helpful: 29,
      popular: false
    },
    {
      id: 9,
      category: "technical",
      question: "The app isn't working properly on my phone. What should I do?",
      answer: "First, try refreshing the page or restarting the app. Check your internet connection and ensure you're using an updated browser. If issues persist, contact our support team via WhatsApp (+254700000000) with details about your device and the problem.",
      tags: ["technical", "mobile", "troubleshooting"],
      helpful: 22,
      popular: false
    },
    {
      id: 10,
      category: "marketplace",
      question: "How do I track my orders?",
      answer: "All orders can be tracked from your dashboard under 'My Orders'. You'll receive SMS and email updates at each stage: order confirmed, prepared for dispatch, in transit, and delivered. Real-time GPS tracking is available for premium orders.",
      tags: ["orders", "tracking", "delivery"],
      helpful: 35,
      popular: false
    },
    {
      id: 11,
      category: "getting-started",
      question: "How do I get verified as a farmer?",
      answer: "Upload clear photos of your farm, provide identification documents, and complete our farmer verification form. Our team may contact you for additional verification. Verified farmers get priority listing and increased buyer trust.",
      tags: ["verification", "farmers", "trust"],
      helpful: 31,
      popular: false
    },
    {
      id: 12,
      category: "marketplace",
      question: "What happens if I'm not satisfied with my purchase?",
      answer: "We have a satisfaction guarantee! Contact the seller first to resolve issues. If unresolved, our support team will help mediate. For quality issues, we offer refunds or replacements within 48 hours of delivery.",
      tags: ["returns", "refunds", "quality"],
      helpful: 28,
      popular: false
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort by popular first, then by helpful count
  const sortedFAQs = filteredFAQs.sort((a, b) => {
    if (a.popular && !b.popular) return -1;
    if (!a.popular && b.popular) return 1;
    return b.helpful - a.helpful;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about FarmConnect. Can't find what you're looking for? 
          Contact our support team.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search for answers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-3 text-lg"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 ${
              selectedCategory === category.id 
                ? "bg-green-600 hover:bg-green-700" 
                : "hover:bg-green-50"
            }`}
          >
            <category.icon className="h-4 w-4" />
            {category.name}
            <Badge variant="secondary" className="ml-1">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Quick Contact */}
      <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Personal Help?</h3>
              <p className="text-gray-600">Our support team is available 24/7 to assist you</p>
            </div>
            <div className="flex gap-3">
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://wa.me/254700000000", "_blank")}
              >
                WhatsApp Support
              </Button>
              <Button variant="outline">
                Email Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Items */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {sortedFAQs.map((faq) => (
          <Card key={faq.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      {faq.popular && (
                        <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{faq.helpful} people found this helpful</span>
                      <span>•</span>
                      <div className="flex gap-1">
                        {faq.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {expandedItems.includes(faq.id) && (
                <div className="px-6 pb-6 border-t bg-gray-50">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Was this helpful?</span>
                        <Button variant="outline" size="sm">
                          👍 Yes
                        </Button>
                        <Button variant="outline" size="sm">
                          👎 No
                        </Button>
                      </div>
                      <div className="flex gap-1">
                        {faq.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {sortedFAQs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No questions found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search terms or browse by category</p>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://wa.me/254700000000", "_blank")}
          >
            Contact Support
          </Button>
        </div>
      )}

      {/* Contact Support Section */}
      <Card className="bg-gray-50">
        <CardHeader className="text-center">
          <CardTitle>Still have questions?</CardTitle>
          <CardDescription>
            Can't find the answer you're looking for? Please chat with our friendly team.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.me/254700000000", "_blank")}
            >
              WhatsApp: +254 700 000 000
            </Button>
            <Button variant="outline">
              Email: help@farmconnect.ke
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;

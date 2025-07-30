import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ShoppingCart, MessageCircle, Share2, Heart, Zap, Shield, Truck, Award, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "P10 Premium Outdoor Display",
    category: "outdoor",
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDkWpt1YkMGFw0Ila1efr5UcRCFBgKIZQzN-uaoj7EbV7ADVYxjRFYSEIqq3D_8JZG9kzWq5UvWGK3Mgy7Kmuhc9SP5EPVQ_SUlGnyb_-fQ-8prMkLbPOfbkjW&usqp=CAc",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    ],
    price: "₹45,000",
    originalPrice: "₹55,000",
    rating: 4.9,
    reviews: 127,
    features: ["10mm Pixel Pitch", "IP65 Weather Resistant", "5000 nits Brightness", "Energy Efficient"],
    badge: "Best Seller",
    inStock: true,
    description: "The P10 Premium Outdoor Display represents the pinnacle of LED display technology, designed specifically for outdoor applications where clarity, durability, and performance are paramount. This state-of-the-art display delivers exceptional visual quality with stunning brightness and remarkable energy efficiency.",
    specifications: {
      "Pixel Pitch": "10mm",
      "Brightness": "5000 nits",
      "Resolution": "1920x1080",
      "Viewing Angle": "160° H / 160° V",
      "Weather Rating": "IP65",
      "Power Consumption": "800W/sqm",
      "Refresh Rate": "3840Hz",
      "Control System": "Nova MRV330",
      "Cabinet Size": "960mm x 960mm",
      "Weight": "45kg per panel"
    },
    warranty: "3 Years Comprehensive",
    delivery: "7-10 Business Days",
    installation: "Professional Installation Included"
  },
  {
    id: 2,
    name: "P6 Ultra HD Indoor Panel",
    category: "indoor",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    ],
    price: "₹32,000",
    originalPrice: "₹38,000",
    rating: 4.8,
    reviews: 89,
    features: ["6mm Pixel Pitch", "4K Resolution", "Seamless Design", "Low Power"],
    badge: "Premium",
    inStock: true,
    description: "Experience ultra-high definition visuals with our P6 Indoor Panel, engineered for premium indoor environments requiring exceptional image quality and seamless integration.",
    specifications: {
      "Pixel Pitch": "6mm",
      "Brightness": "1000 nits",
      "Resolution": "4K Ultra HD",
      "Viewing Angle": "160° H / 160° V",
      "Power Consumption": "450W/sqm",
      "Refresh Rate": "3840Hz",
      "Control System": "Linsn TS952",
      "Cabinet Size": "576mm x 576mm",
      "Weight": "28kg per panel"
    },
    warranty: "2 Years Comprehensive",
    delivery: "5-7 Business Days",
    installation: "Professional Installation Included"
  },
  // Add other products with similar structure...
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Button onClick={() => navigate("/")} variant="glass">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0]
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* LED Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/5 to-black"></div>
        
        {/* LED Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="led-grid"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-premium-gold/50 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Lightning Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-premium-gold animate-lightning opacity-30"></div>
          <div className="absolute top-3/4 right-1/3 w-px h-24 bg-premium-blue animate-lightning opacity-25" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-2/3 w-px h-40 bg-premium-gold animate-lightning opacity-20" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <Header />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Back Button */}
        <Button 
          onClick={() => navigate("/")} 
          variant="glass" 
          className="mb-8 hover:shadow-glow"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative glass-morphism rounded-3xl overflow-hidden lightning-border">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`px-3 py-1 text-xs font-bold animate-neon-pulse ${
                  product.badge === "Best Seller" ? "bg-premium-gold text-white" :
                  product.badge === "Premium" ? "bg-premium-blue text-white" :
                  "bg-primary text-white"
                }`}>
                  {product.badge}
                </Badge>
              </div>
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Additional Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="glass-morphism rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300">
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4 font-poppins animate-glow">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                        ? 'text-premium-gold fill-current animate-pulse'
                        : 'text-white/20'
                        }`}
                    />
                  ))}
                  <span className="text-white/80 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Zap className="w-5 h-5 text-premium-gold animate-lightning" />
              </div>
            </div>

            {/* Pricing */}
            <div className="glass-morphism rounded-2xl p-6 lightning-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-premium-gold animate-pulse-glow">
                    {product.price}
                  </span>
                  <span className="text-lg text-white/50 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="text-sm text-whatsapp font-bold bg-whatsapp/20 border border-whatsapp/30 px-3 py-2 rounded-lg">
                  Save ₹{parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full rounded-xl hover:shadow-glow group"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full rounded-xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${product.name}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2 animate-pulse" />
                  Order via WhatsApp
                </Button>
              </div>

              {/* Additional Actions */}
              <div className="flex space-x-2 mt-4">
                <Button variant="glass" size="icon" className="rounded-xl hover:shadow-glow">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="glass" size="icon" className="rounded-xl hover:shadow-glow">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-premium-gold" />
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/20 rounded-lg px-3 py-2"
                  >
                    <CheckCircle className="w-4 h-4 text-premium-gold" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-morphism rounded-xl p-4 text-center">
                <Shield className="w-6 h-6 text-premium-gold mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{product.warranty}</span>
              </div>
              <div className="glass-morphism rounded-xl p-4 text-center">
                <Truck className="w-6 h-6 text-premium-blue mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{product.delivery}</span>
              </div>
              <div className="glass-morphism rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-whatsapp mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{product.installation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Description */}
          <div className="glass-morphism rounded-2xl p-8 lightning-border">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-premium-gold animate-lightning" />
              Product Description
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-premium-blue" />
              Technical Specifications
            </h3>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 font-medium">{key}</span>
                  <span className="text-white font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
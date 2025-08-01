import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const ledDisplays = [
    "PREMIUM LED DISPLAYS",
    "4K ULTRA HD QUALITY", 
    "OUTDOOR WEATHERPROOF",
    "INDOOR RETAIL SCREENS",
    "DIGITAL BILLBOARDS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay((prev) => (prev + 1) % ledDisplays.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[100vh] overflow-hidden flex items-center pt-20 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) contrast(1.1)' }}
        >
          <source src="/videos/city-background.mp4" type="video/mp4" />
        </video>
        
        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <div className="space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-premium-gold/30 rounded-full px-6 py-3 mb-6 mt-20 md:mt-0">
            <Sparkles className="w-4 h-4 text-premium-gold" />
            <span className="text-white/90 font-medium tracking-wide">Premium LED Display Technology</span>
            <TrendingUp className="w-4 h-4 text-premium-gold" />
          </div>

          {/* LED Display Simulator */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-teal-900/40 border-2 border-premium-gold/50 rounded-2xl p-6 md:p-8 backdrop-blur-lg">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Monitor className="w-6 h-6 md:w-8 md:h-8 text-premium-gold" />
                  <div className="text-premium-gold text-xs md:text-sm font-mono">LED DISPLAY ACTIVE</div>
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-premium-blue" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-teal-400 bg-clip-text font-mono tracking-wider mb-2">
                    {ledDisplays[currentDisplay]}
                  </div>
                  <div className="h-1 bg-premium-gold/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 via-blue-400 to-teal-400 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight">
              <span className="block">Transform Your</span>
              <span className="block text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-teal-400 bg-clip-text">
                Vision
              </span>
              <span className="block">Into Reality</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the future of digital advertising with our cutting-edge LED display solutions.
              Premium quality, stunning visuals, and unmatched performance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-12">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-premium-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="premium"
              size="xl"
              className="group relative overflow-hidden"
              onClick={() => window.open('https://wa.me/919274488477', '_blank')}
            >
              <Play className="w-5 h-5 mr-3" />
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              className="group"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Explore Our Work
            </Button>
          </div>


        </div >
      </div >

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-gentle mt-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/50 text-xs mt-2 font-medium tracking-wider">SCROLL</p>
      </div> */}
    </section >
  );
};

export default Hero;
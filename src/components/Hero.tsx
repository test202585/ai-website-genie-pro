import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, Monitor } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
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
          style={{ filter: 'brightness(0.4) contrast(1.2)' }}
        >
          <source src="/videos/city-background.mp4" type="video/mp4" />
        </video>
        
        {/* RGB Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgb(255,0,150)]/10 to-transparent animate-pulse"></div>
      </div>

      {/* Optimized LED Grid - Reduced for mobile performance */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-2 h-full w-full p-4">
          {Array.from({ length: window.innerWidth < 768 ? 64 : 96 }).map((_, i) => (
            <div
              key={i}
              className="bg-[rgb(255,215,0)]/30 rounded-sm animate-pulse will-change-opacity"
              style={{
                animationDelay: `${(i % 8) * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Minimal Lightning Effects - Mobile Optimized */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-px h-16 bg-[rgb(255,215,0)] animate-lightning opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-20 bg-[rgb(0,255,255)] animate-lightning opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* RGB Glow Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: window.innerWidth < 768 ? 8 : 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float will-change-transform"
            style={{
              backgroundColor: `rgb(${255 - i * 15}, ${100 + i * 10}, ${200 - i * 8})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s',
              filter: `drop-shadow(0 0 4px rgb(${255 - i * 15}, ${100 + i * 10}, ${200 - i * 8}))`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl ">
        <div className="animate-fade-in space-y-8">
          {/* Premium Badge */}
          <div className="max-sm:mt-60  inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-premium-gold " />
            <span className="text-white/90 font-medium tracking-wide">Premium LED Display Technology</span>
            <TrendingUp className="w-4 h-4 text-premium-gold" />
          </div>

          {/* LED Display Simulator */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-black/80 border-4 border-premium-gold/50 rounded-2xl p-8 shadow-neon backdrop-blur-lg">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Monitor className="w-8 h-8 text-premium-gold animate-pulse" />
                  <div className="text-premium-gold text-sm font-mono">LED DISPLAY ACTIVE</div>
                  <Zap className="w-6 h-6 text-premium-blue animate-lightning" />
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-premium-gold font-mono tracking-wider mb-2 animate-neon-pulse">
                    {ledDisplays[currentDisplay]}
                  </div>
                  <div className="h-1 bg-premium-gold/30 rounded-full overflow-hidden">
                    <div className="h-full bg-premium-gold animate-shimmer rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white font-poppins leading-tight">
              <span className="block">Transform Your</span>
              <span className=" ">
                Vision
              </span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>Into Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Experience the future of digital advertising with our cutting-edge LED display solutions.
              Premium quality, stunning visuals, and unmatched performance.
            </p>
          </div >

          {/* Stats */}
          < div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-12" >
            {
              [
                { number: "500+", label: "Projects Delivered" },
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-premium-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))
            }
          </div >

          {/* CTA Buttons */}
          < div className="flex flex-col sm:flex-row gap-6 justify-center items-center" >
            <Button
              variant="premium"
              size="xl"
              className="group relative overflow-hidden"
              onClick={() => window.open('https://wa.me/919274488477', '_blank')}
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              className="group"
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Explore Our Work
            </Button>
          </div >


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
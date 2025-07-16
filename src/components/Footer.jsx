import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 当滚动到页面底部附近时显示按钮
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setShowScrollTop(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto max-w-5xl py-12">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kai Huang. All rights reserved.
        </p>
      </div>

      {showScrollTop && (
                  <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 fixed bottom-4 right-4 z-50"
          >
            <ArrowUp className="w-4 h-4 md:w-8 md:h-8" />
          </button>
      )}
    </footer>
  )
}
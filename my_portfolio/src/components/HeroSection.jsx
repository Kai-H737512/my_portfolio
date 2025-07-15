import { ArrowDownIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            <span className="text-glow opacity-0 animate-fade-in">Hi, I'm </span>
            {" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Kai</span>
            {" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-2">Huang</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-foreground/80">
            I'm a software engineer with a passion for building web applications.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">View Projects</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="pb-3 text-muted-foreground/80 text-sm">Scroll Down</span>
        <ArrowDownIcon className="w-6 h-6 text-foreground/80" />
      </div>
    </section>
  )
}
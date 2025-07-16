import {
  Code,
  FileCode,
  FileText,
  Palette,
  Zap,
  Globe,
  Database,
  GitBranch,
  Box,
  PenTool,
  Camera,
} from "lucide-react";

const skills = [
{
  category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },

  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "git" }, 
      { name: "Docker", icon: "docker" },
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "photoshop" },
    ],
  },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover z-10">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center align-middle">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      {skill.icon === "html" && <FileText className="w-6 h-6 text-primary" />}
                      {skill.icon === "css" && <FileCode className="w-6 h-6 text-primary" />}
                      {skill.icon === "javascript" && <Code className="w-6 h-6 text-primary" />}
                      {skill.icon === "python" && <Code className="w-6 h-6 text-primary" />}
                      {skill.icon === "typescript" && <FileCode className="w-6 h-6 text-primary" />}
                      {skill.icon === "react" && <Zap className="w-6 h-6 text-primary" />}
                      {skill.icon === "nextjs" && <Globe className="w-6 h-6 text-primary" />}
                      {skill.icon === "tailwind" && <Palette className="w-6 h-6 text-primary" />}
                      {skill.icon === "nodejs" && <Database className="w-6 h-6 text-primary" />}
                      {skill.icon === "express" && <Globe className="w-6 h-6 text-primary" />}
                      {skill.icon === "mongodb" && <Database className="w-6 h-6 text-primary" />}
                      {skill.icon === "git" && <GitBranch className="w-6 h-6 text-primary" />}
                      {skill.icon === "docker" && <Box className="w-6 h-6 text-primary" />}
                      {skill.icon === "figma" && <PenTool className="w-6 h-6 text-primary" />}
                      {skill.icon === "photoshop" && <Camera className="w-6 h-6 text-primary" />}
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
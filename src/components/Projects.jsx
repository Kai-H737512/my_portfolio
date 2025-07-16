import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project 2", 
    description: "Description of project 2",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project 3",
    description: "Description of project 3", 
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              {/* 图片容器 */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              {/* 内容区域 */}
              <div className="p-6">
                {/* 标签容器 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* 项目标题和描述 */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* 链接容器 */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl} 
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Kai-H737512">
            Check out my GitHub <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  )
}
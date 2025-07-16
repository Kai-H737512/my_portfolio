import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "./UI/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 验证表单
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        variant: "error",
        title: "Form Validation Failed",
        description: "Please fill in all required fields.",
      });
      return;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "error",
        title: "Invalid Email Format",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 显示成功提示
      toast({
        variant: "success",
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // 清空表单
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      // 显示错误提示
      toast({
        variant: "error",
        title: "Send Failed",
        description: "Network connection issue. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-6 rounded-lg shadow-xs card-hover h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6 flex-1">
              <div className="flex items-start space-x-4 bg-background p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold mb-0">Email</h4>
                  <a href="mailto:kaihuang.99@gmail.com" className="text-foreground/80 hover:text-primary transition-colors duration-300">kaihuang.99@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-background p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold mb-0">Phone</h4>
                  <a href="tel:+61 423445805" className="text-foreground/80 hover:text-primary transition-colors duration-300">+61 423445805</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-background p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold mb-0">LinkedIn</h4>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">linkedin.com/in/your-profile</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-background p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold mb-0">Instagram</h4>
                  <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">@your-handle</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs card-hover h-full flex flex-col"> 
            <h3 className="text-2xl font-semibold text-center mb-8">Leave a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none h-full min-h-[120px]" 
                    placeholder="Your message..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full cosmic-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
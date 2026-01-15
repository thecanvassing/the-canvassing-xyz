import { useState } from "react";
import { Send, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import Badge from "@/components/Badge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactOptions = [
    {
      icon: Send,
      title: "Email Us",
      subtitle: "Send us an email anytime",
      detail: "admin@thecanvassing.com",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Chat with our team",
      detail: "Available 9am - 6pm EST",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: Video,
      title: "Scheduled a Demo",
      subtitle: "Book a personalized walkthrough",
      detail: "30-minute session",
      gradient: "from-yellow to-accent"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow" />
        
        <div className="container mx-auto px-4 relative text-center">
          <Badge variant="orange" className="mb-6">Contacts</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground max-w-3xl mx-auto">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions about Canvassing? We're here to help. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl p-6 text-center shadow-card border border-border/50 group hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{option.subtitle}</p>
                <p className="text-sm font-medium text-primary">{option.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-display font-bold text-accent mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="johnexample@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-xl border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

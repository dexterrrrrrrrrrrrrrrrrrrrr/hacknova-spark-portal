import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Database } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "AI Assistant for VTU Students",
    category: "AI/ML",
    description: "Build an AI-powered academic assistant that helps VTU students with syllabus guidance, notes, PYQs, exam preparation, and lab programs.",
    color: "text-primary",
    bgGradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Brain,
    title: "Mental Health & Well-Being",
    category: "Health Tech",
    description: "Create a digital platform that provides emotional support, stress-management tools, and access to mental-health resources for students and young adults.",
    color: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Code2,
    title: "Social Detox & Digital Well-Being",
    category: "Digital Wellness",
    description: "Develop a system that promotes healthy digital habits by tracking screen usage, giving detox reminders, and encouraging mindful tech consumption.",
    color: "text-accent",
    bgGradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Database,
    title: "E-Commerce Platform for Farmers",
    category: "AgriTech",
    description: "Design a direct-to-buyer marketplace enabling farmers to sell produce without middlemen, ensuring fair pricing, logistics support, and real-time crop demand insights.",
    color: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Brain,
    title: "Healthcare Tech – Village Health Access",
    category: "Health Tech",
    description: "Build a rural tele-health platform connecting villagers to doctors, medicine services, health records, and emergency support, optimized for low-network areas.",
    color: "text-primary",
    bgGradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Code2,
    title: "Open Innovation",
    category: "Open Challenge",
    description: "Solve any real-world community problem using technology in areas like sustainability, public services, transportation, or smart campuses.",
    color: "text-accent",
    bgGradient: "from-accent/10 to-accent/5",
  },
];

export const ProblemStatements = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Challenge Yourself
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your domain and create innovative solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-scale-in bg-gradient-to-br"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  <div className="space-y-2">
                    <span className={`text-sm font-semibold ${problem.color} uppercase tracking-wider`}>
                      {problem.category}
                    </span>
                    <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">
                      {problem.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

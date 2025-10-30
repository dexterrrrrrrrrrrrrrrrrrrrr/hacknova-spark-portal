import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Database } from "lucide-react";

const problems = [
  {
    icon: Code2,
    title: "Innovative Web Design for Modern Digital Experiences",
    category: "Web Design",
    description: "Create cutting-edge web interfaces that push the boundaries of user experience. Design and develop responsive, accessible, and visually stunning web applications that solve real-world problems with elegance and efficiency.",
    color: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Brain,
    title: "Advancing Intelligence through AI and Machine Learning",
    category: "AI/ML",
    description: "Harness the power of artificial intelligence and machine learning to build intelligent systems. Develop models that learn, predict, and make decisions, transforming data into actionable insights and innovative solutions.",
    color: "text-primary",
    bgGradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Database,
    title: "Smart Data Management for Scalable Digital Systems",
    category: "Database",
    description: "Design robust database architectures that power modern applications. Create efficient data models, optimize queries, and implement scalable solutions that handle complex data relationships with performance and reliability.",
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


import { useState, useEffect } from "react";
import { frameworks, Framework } from "@/data/frameworks";
import { FrameworkCard } from "@/components/FrameworkCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Sparkles, Brain, Target, Zap } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredFrameworks, setFilteredFrameworks] = useState<Framework[]>(frameworks);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let filtered = frameworks;

    if (searchTerm) {
      filtered = filtered.filter(
        (framework) =>
          framework.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          framework.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          framework.whenToUse.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((framework) => framework.category === selectedCategory);
    }

    setFilteredFrameworks(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [
    { name: 'productivity', icon: <Zap className="w-4 h-4" />, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'decision', icon: <Target className="w-4 h-4" />, color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    { name: 'strategic', icon: <Brain className="w-4 h-4" />, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'life', icon: <Sparkles className="w-4 h-4" />, color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
    { name: 'mental', icon: <Brain className="w-4 h-4" />, color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' }
  ];

  return (
    <div className="min-h-screen bg-stone-200  relative overflow-hidden">

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-12 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Life Frameworks
            </h1>
            <p className="text-md md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
              Interactive decision-making tools and mental models to navigate life's complexities with clarity and confidence.
            </p>
          </div>
        </header>

        {/* Search and Filters */}
        <div className={`container mx-auto px-4 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'animate-fade-scale opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search frameworks, models, and tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 border-border/50 focus:border-primary/50 backdrop-blur-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="font-mono uppercase tracking-wider text-xs"
              >
                <Filter className="w-4 h-4 mr-2" />
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
                  className="font-mono uppercase tracking-wider text-xs"
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="outline" className="font-mono">
                {filteredFrameworks.length} Framework{filteredFrameworks.length !== 1 ? 's' : ''} Found
              </Badge>
            </div>
          </div>
        </div>

        {/* Frameworks Grid */}
        <main className={`container mx-auto px-4 pb-20 transition-all duration-1500 ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredFrameworks.map((framework, index) => (
              <div
                key={framework.id}
                className={` opacity-0 ${isLoaded ? 'opacity-100' : ''}`}
                style={{ animationDelay: `${(index * 50) + 100}ms` }}
              >
                <FrameworkCard framework={framework} index={index} />
              </div>
            ))}
          </div>

          {filteredFrameworks.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No frameworks found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center border-t border-border/30">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground font-mono text-sm">
              Master these frameworks and transform how you make decisions, solve problems, and navigate life.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Badge variant="outline" className="font-mono">
                20 Frameworks
              </Badge>
              <Badge variant="outline" className="font-mono">
                5 Categories
              </Badge>
              <Badge variant="outline" className="font-mono">
                Interactive Learning
              </Badge>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

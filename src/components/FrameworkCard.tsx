
import { useState } from "react";
import { Framework } from "@/data/frameworks";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lightbulb, Clock, Cog } from "lucide-react";

interface FrameworkCardProps {
  framework: Framework;
  index: number;
}

export const FrameworkCard = ({ framework, index }: FrameworkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'framework':
        return <Cog className="w-4 h-4" />;
      case 'mental model':
        return <Lightbulb className="w-4 h-4" />;
      case 'heuristic':
        return <Clock className="w-4 h-4" />;
      default:
        return <Cog className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      productivity: 'bg-muted text-muted-foreground border-border',
      decision: 'bg-primary/5 text-primary border-primary/20',
      strategic: 'bg-accent/5 text-accent-foreground border-accent/20',
      life: 'bg-secondary text-secondary-foreground border-border',
      mental: 'bg-primary/3 text-primary border-primary/15'
    };
    return colors[category as keyof typeof colors] || colors.productivity;
  };

  return (
    <Card
      className={`
        relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer
          hover:scale-[1.02] group
        ${isHovered ? 'shadow-lg apple-card-glow' : 'shadow-md'}
        ${isExpanded ? 'col-span-full md:col-span-2 lg:col-span-3' : ''}
        hover:shadow-xl border-0 ring-1 ring-border/20
      `}
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Apple-style subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 opacity-60" />

      {/* Subtle accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/3 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className={`${getCategoryColor(framework.category)} font-mono text-xs text-stone-900`}>
                {framework.category.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="font-mono text-xs">
                {getIcon(framework.type)}
                <span className="ml-1">{framework.type}</span>
              </Badge>
            </div>
            <h3 className="text-xl font-serif pt-2 group-hover:text-primary transition-colors">
              {framework.title}
            </h3>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
              }`}
          />
        </div>

        {/* When to Use */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-accent font-mono uppercase tracking-wider">
            When to Use
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {framework.whenToUse}
          </p>
        </div>

        {/* Expanded Content */}
        <div className={`space-y-4 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-accent font-mono uppercase tracking-wider mb-2">
                How it Works
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {framework.howItWorks}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-accent font-mono uppercase tracking-wider mb-2">
                Example
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {framework.example}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            variant="default"
            size="sm"
            className="mt-2 bg-stone-800 tracking-wider text-xs uppercase font-mono border-4  rounded-lg  hover:border-stone-300  hover:bg-stone-950"
            onClick={(e) => {
              e.stopPropagation();
              // Could add functionality to save or bookmark
            }}
          >
            Apply This Framework
          </Button>
        </div>
      </div>
    </Card>
  );
};

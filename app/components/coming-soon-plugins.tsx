import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Database,
  Container,
  Layers,
  Atom,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
} from "lucide-react";

const PLUGINS = [
  {
    id: "mongodb",
    name: "MongoDB Plugin",
    description:
      "Seamless integration with MongoDB for persistent vector storage and hybrid search capabilities.",
    icon: Database,
    status: "coming-soon",
    features: [
      "Persistent vector storage",
      "Hybrid text + vector search",
      "Automatic index management",
      "Atlas Vector Search support",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "docker",
    name: "Docker Image",
    description:
      "Pre-configured Docker container with NeuraDB server for easy deployment and scaling.",
    icon: Container,
    status: "coming-soon",
    features: [
      "Ready-to-deploy container",
      "REST API endpoints",
      "Health checks included",
      "Multi-architecture support",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "nextjs",
    name: "Next.js Plugin",
    description:
      "First-class Next.js integration with server components and edge runtime support.",
    icon: Layers,
    status: "in-development",
    features: [
      "Server Components support",
      "Edge Runtime compatible",
      "Built-in caching",
      "TypeScript templates",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "react",
    name: "React Hooks",
    description:
      "React hooks and components for building vector-powered UIs with real-time search.",
    icon: Atom,
    status: "in-development",
    features: [
      "useVectorSearch hook",
      "Real-time search components",
      "Optimistic updates",
      "SSR compatibility",
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

const STATUS_CONFIG = {
  "coming-soon": {
    label: "Coming Soon",
    variant: "secondary" as const,
    icon: Clock,
  },
  "in-development": {
    label: "In Development",
    variant: "default" as const,
    icon: CheckCircle,
  },
};

export function ComingSoonPlugins() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Plugins & Integrations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Extend NeuraDB with powerful plugins and integrations for your
          favorite tools and frameworks
        </p>
      </div>

      {/* Newsletter Signup */}
      {/* <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0">
        <CardContent className="p-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              Get notified when plugins launch
            </h3>
            <p className="text-gray-600">
              Be the first to know when new integrations become available
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Notify Me
              </Button>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Plugins Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {PLUGINS.map((plugin) => {
          const StatusIcon =
            STATUS_CONFIG[plugin.status as keyof typeof STATUS_CONFIG].icon;
          const IconComponent = plugin.icon;

          return (
            <Card key={plugin.id} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 ${plugin.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className={`h-6 w-6 ${plugin.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{plugin.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={
                            STATUS_CONFIG[
                              plugin.status as keyof typeof STATUS_CONFIG
                            ].variant
                          }
                          className="gap-1 text-xs"
                        >
                          <StatusIcon className="h-3 w-3" />
                          {
                            STATUS_CONFIG[
                              plugin.status as keyof typeof STATUS_CONFIG
                            ].label
                          }
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {plugin.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Features</h4>
                  <ul className="space-y-2">
                    {plugin.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Roadmap */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Development Roadmap
          </CardTitle>
          <CardDescription>Our planned timeline for upcoming plugins and features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q1 2024</h4>
                  <Badge variant="default" className="text-xs">
                    In Progress
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">React Hooks & Next.js Plugin</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q2 2024</h4>
                  <Badge variant="secondary" className="text-xs">
                    Planned
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">MongoDB Plugin & Docker Image</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q3 2024</h4>
                  <Badge variant="outline" className="text-xs">
                    Future
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">Supabase, Pinecone & Weaviate adapters</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Request Plugin */}
      {/* <Card className="border-dashed border-2">
        <CardContent className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">
            Need a specific integration?
          </h3>
          <p className="text-gray-600 mb-4">
            Let us know what tools and frameworks you'd like to see supported
          </p>
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Request Plugin
          </Button>
        </CardContent>
      </Card> */}
    </div>
  );
}

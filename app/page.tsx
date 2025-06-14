"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpen,
  Brain,
  FileText,
  Github,
  Puzzle,
  Star,
} from "lucide-react";
import { useRef } from "react";
import { ApiReference } from "./components/api-reference";
import { ComingSoonPlugins } from "./components/coming-soon-plugins";
import { Documentation } from "./components/documentation";
import { config } from "./config";

export default function NeuraDBDocs() {
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold">{config.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.location.href = "#docs";
                }}
              >
                Docs
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={() => window.open(config.github, "_blank")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button
                size="sm"
                onClick={() => window.open(config.npm, "_blank")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary" className="gap-1 text-xs">
              <Star className="h-3 w-3" />
              Zero Dependencies
            </Badge>
            <Badge variant="secondary" className="gap-1 text-xs">
              <Brain className="h-3 w-3" />
              In-Memory
            </Badge>
            <Badge variant="secondary" className="gap-1 text-xs">
              <Puzzle className="h-3 w-3" />
              TypeScript
            </Badge>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Vector search for
            <br />
            <span className="text-gray-600">modern applications</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lightning-fast in-memory vector database with automatic OpenAI
            embeddings. Build semantic search, recommendations, and AI features
            in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="gap-2 px-8"
              onClick={() => window.open(config.npm, "_blank")}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open(config.github, "_blank")}
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          {/* Code Preview */}
          <div className="bg-gray-50 rounded-xl p-6 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-500 ml-2">Quick Start</span>
            </div>
            <pre className="text-sm text-gray-800 overflow-x-auto">
              {`npm install neuradb

import { NeuraDB } from 'neuradb'

const db = new NeuraDB()
await db.addDocument({
  content: "AI will transform software",
  metadata: { category: "tech" }
})

const results = await db.search("artificial intelligence")`}
            </pre>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        id="docs"
      >
        <Tabs defaultValue="docs" className="space-y-8" ref={tabsRef}>
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="docs" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Docs
              </TabsTrigger>
              <TabsTrigger value="plugins" className="gap-2">
                <Puzzle className="h-4 w-4" />
                Plugins
              </TabsTrigger>
              <TabsTrigger value="api" className="gap-2">
                <FileText className="h-4 w-4" />
                API
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="docs">
            <Documentation />
          </TabsContent>

          <TabsContent value="plugins">
            <ComingSoonPlugins />
          </TabsContent>
          {/* 
          <TabsContent value="upload">
            <DataUpload />
          </TabsContent> */}

          <TabsContent value="api">
            <ApiReference />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

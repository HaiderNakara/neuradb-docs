import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Gauge } from "lucide-react"

export function Documentation() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Documentation</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to integrate NeuraDB into your application
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-600">Automatic OpenAI embeddings with multiple model support</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
            <h3 className="font-semibold mb-2">Zero Dependencies</h3>
            <p className="text-sm text-gray-600">Lightweight library with no external dependencies</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Gauge className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <h3 className="font-semibold mb-2">High Performance</h3>
            <p className="text-sm text-gray-600">Optimized in-memory operations for fast retrieval</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font-semibold mb-2">Type Safe</h3>
            <p className="text-sm text-gray-600">Full TypeScript support with comprehensive types</p>
          </CardContent>
        </Card>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>Get started with NeuraDB in seconds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">npm install neuradb</div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Basic usage example</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              {`import { NeuraDB } from 'neuradb'

// Initialize database
const db = new NeuraDB()

// Add documents
await db.addDocument({
  id: 'doc1',
  content: 'Machine learning transforms data analysis',
  metadata: { category: 'AI', difficulty: 'intermediate' }
})

// Search with natural language
const results = await db.search('artificial intelligence', {
  limit: 5,
  threshold: 0.7,
  similarityMethod: 'cosine'
})`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Usage</CardTitle>
          <CardDescription>Using with OpenAI integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              {`import { NeuraDB } from 'neuradb'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const db = new NeuraDB({
  openai,
  embeddingModel: 'text-embedding-3-small',
  defaultBatchSize: 100
})

// Batch add with automatic embeddings
await db.addDocuments(documents, {
  createEmbedding: true,
  batchSize: 50,
  onProgress: (processed, total) => {
    console.log(\`Progress: \${processed}/\${total}\`)
  }
})`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Similarity Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Similarity Methods</CardTitle>
          <CardDescription>Choose the right similarity calculation for your use case</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Cosine Similarity</h4>
              <p className="text-sm text-gray-600 mb-2">
                Measures the cosine of the angle between vectors. Best for text similarity.
              </p>
              <Badge variant="secondary">Recommended</Badge>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Euclidean Distance</h4>
              <p className="text-sm text-gray-600 mb-2">
                Measures straight-line distance between points. Good for numerical data.
              </p>
              <Badge variant="outline">Numerical</Badge>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Dot Product</h4>
              <p className="text-sm text-gray-600 mb-2">
                Measures vector alignment. Useful for recommendation systems.
              </p>
              <Badge variant="outline">Recommendations</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

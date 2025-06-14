import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileText, Zap } from "lucide-react"

export function ApiReference() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">API Reference</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Complete reference for all NeuraDB methods and types</p>
      </div>

      {/* Core Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Core Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-sm font-semibold">addDocument(document, options?)</code>
                <Badge variant="secondary">async</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Add a single document with optional embedding generation</p>
              <div className="bg-gray-50 rounded p-3 text-xs overflow-x-auto">
                <pre>{`await db.addDocument({
  id: 'doc1',
  content: 'Document content',
  metadata: { category: 'example' }
}, { createEmbedding: true })`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-sm font-semibold">search(query, options?)</code>
                <Badge variant="secondary">async</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Find documents most similar to the query (text or vector)</p>
              <div className="bg-gray-50 rounded p-3 text-xs overflow-x-auto">
                <pre>{`const results = await db.search('search query', {
  limit: 10,
  threshold: 0.7,
  similarityMethod: 'cosine',
  metadataFilter: { category: 'tech' }
})`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-sm font-semibold">addDocuments(documents, options?)</code>
                <Badge variant="secondary">async</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Batch-add multiple documents with progress tracking</p>
              <div className="bg-gray-50 rounded p-3 text-xs overflow-x-auto">
                <pre>{`await db.addDocuments(documents, {
  createEmbedding: true,
  batchSize: 50,
  onProgress: (processed, total) => console.log(\`\${processed}/\${total}\`)
})`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Configuration Methods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <code className="text-sm font-semibold">setEmbeddingModel(model)</code>
                <p className="text-sm text-gray-600 mt-1">Set the OpenAI embedding model</p>
              </div>
              <div className="border rounded-lg p-4">
                <code className="text-sm font-semibold">getStats()</code>
                <p className="text-sm text-gray-600 mt-1">Get database statistics</p>
              </div>
              <div className="border rounded-lg p-4">
                <code className="text-sm font-semibold">clear()</code>
                <p className="text-sm text-gray-600 mt-1">Clear all documents</p>
              </div>
              <div className="border rounded-lg p-4">
                <code className="text-sm font-semibold">getDocument(id)</code>
                <p className="text-sm text-gray-600 mt-1">Fetch document by ID</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            TypeScript Interfaces
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">VectorDocument</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm overflow-x-auto">
                <pre>{`interface VectorDocument {
  id: string
  content: string
  embedding: number[]
  metadata?: Record<string, any>
  createdAt?: Date
  updatedAt?: Date
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">SearchOptions</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm overflow-x-auto">
                <pre>{`interface SearchOptions {
  limit?: number
  threshold?: number
  similarityMethod?: 'cosine' | 'euclidean' | 'dot'
  metadataFilter?: Record<string, any>
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">SearchResult</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm overflow-x-auto">
                <pre>{`interface SearchResult {
  document: VectorDocument
  similarity: number
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

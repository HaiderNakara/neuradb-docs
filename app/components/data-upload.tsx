"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, FileText, Download, Info, CheckCircle } from "lucide-react"

const SAMPLE_FILES = {
  json: {
    name: "products.json",
    description: "E-commerce product catalog",
    schema: {
      id: "string",
      content: "string",
      metadata: {
        category: "string",
        price: "number",
        rating: "number",
      },
    },
    example: `[
  {
    "id": "prod_1",
    "content": "Premium wireless headphones with noise cancellation",
    "metadata": {
      "category": "Electronics",
      "price": 299,
      "rating": 4.8
    }
  }
]`,
  },
  csv: {
    name: "articles.csv",
    description: "Blog articles and content",
    schema: {
      id: "string",
      content: "string",
      category: "string",
      author: "string",
      published_date: "date",
    },
    example: `id,content,category,author,published_date
art_1,"Machine learning revolutionizes data analysis",AI,John Doe,2024-01-15
art_2,"Vector databases enable semantic search",Database,Jane Smith,2024-01-20`,
  },
}

export function DataUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setIsUploading(true)

    // Simulate file processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date(),
    }

    setUploadedFiles((prev) => [...prev, newFile])
    setIsUploading(false)
  }

  const downloadSample = (fileType) => {
    const sample = SAMPLE_FILES[fileType]
    const content = fileType === "json" ? sample.example : sample.example
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = sample.name
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Data Upload</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Upload your datasets to populate the vector database</p>
      </div>

      {/* Schema Information */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Your data should include an <code className="bg-gray-100 px-1 rounded">id</code>,
          <code className="bg-gray-100 px-1 rounded ml-1">content</code> field, and optional
          <code className="bg-gray-100 px-1 rounded ml-1">metadata</code> object.
        </AlertDescription>
      </Alert>

      {/* Sample Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Sample Files
          </CardTitle>
          <CardDescription>Download sample files to understand the expected data format</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SAMPLE_FILES).map(([type, file]) => (
              <div key={type} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{file.name}</h4>
                    <p className="text-sm text-gray-600">{file.description}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => downloadSample(type)} className="gap-2">
                    <Download className="h-3 w-3" />
                    Download
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="text-xs font-semibold mb-2 text-gray-700">SCHEMA</h5>
                  <pre className="text-xs text-gray-600 overflow-x-auto">{JSON.stringify(file.schema, null, 2)}</pre>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Your Data
          </CardTitle>
          <CardDescription>Supports JSON, CSV, and Excel files up to 10MB</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center space-y-4">
              <Upload className="h-12 w-12 mx-auto text-gray-400" />
              <div>
                <p className="text-lg font-medium">Drop files here or click to upload</p>
                <p className="text-sm text-gray-500">JSON, CSV, or Excel files</p>
              </div>

              <input
                type="file"
                accept=".json,.csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                disabled={isUploading}
              />

              <label htmlFor="file-upload">
                <Button asChild disabled={isUploading}>
                  <span>{isUploading ? "Uploading..." : "Choose Files"}</span>
                </Button>
              </label>
            </div>
          </div>

          {/* Supported Formats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 border rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium">JSON</p>
              <p className="text-xs text-gray-500">Structured data</p>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">CSV</p>
              <p className="text-xs text-gray-500">Comma separated</p>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-orange-600" />
              <p className="text-sm font-medium">Excel</p>
              <p className="text-xs text-gray-500">Spreadsheet format</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Uploaded Files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB • {file.uploadedAt.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Processed</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

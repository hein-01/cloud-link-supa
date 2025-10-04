import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function FlutterWebView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-6 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-500" />
              <CardTitle className="text-xl font-semibold text-gray-800">
                Flutter Web View App
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This section is for Flutter Web View App configuration and tools.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

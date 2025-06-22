import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image as ImageIcon, FileText, Video } from "lucide-react";
import Link from "next/link";
import { WalletConnect } from "@/components/WalletConnect";

export default function CreateCoinPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
              {/* Potentially a top-bar component like in pump.fun */}
          </div>
          <div className="flex items-center gap-4">
              <Link href="/create">
                  <Button className="bg-primary text-primary-foreground">
                      Create a coin
                  </Button>
              </Link>
              <WalletConnect />
          </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Create New Coin</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Main form */}
          <div className="md:col-span-2">
            <Card className="bg-muted/40">
              <CardHeader>
                <CardTitle>Coin Details</CardTitle>
                <CardDescription>
                  Choose carefully, these can&apos;t be changed once the coin is created.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="coinName">Coin Name</label>
                    <Input id="coinName" placeholder="Name your coin" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="ticker">Ticker</label>
                    <Input id="ticker" placeholder="Add a coin ticker (e.g. DOGE)" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="description">Description (optional)</label>
                  <Textarea id="description" placeholder="Write a short description" />
                </div>
                {/* Optional Social Links would go here */}
              </CardContent>
            </Card>

            <Card className="mt-8 bg-muted/40">
              <CardHeader>
                  <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed border-muted-foreground/20 p-12 text-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Select video or image to upload</h3>
                  <p className="text-muted-foreground">or drag and drop it here</p>
                  <Button variant="outline">Log in</Button>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold">File size and type</h4>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Image - max 15mb. &quot;.jpg&quot;, &quot;.gif&quot; or &quot;.png&quot; recommended</li>
                        <li>Video - max 30mb. &quot;.mp4&quot; recommended</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Video className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold">Resolution and aspect ratio</h4>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Image - min. 1000x1000px, 1:1 square recommended</li>
                        <li>Video - 16:9 or 9:16, 1080p+ recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-4">
              <Card className="bg-muted/40">
                  <CardHeader>
                      <CardTitle>Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="flex h-[300px] items-center justify-center rounded-lg border border-muted-foreground/20 bg-background/20">
                          <p className="text-muted-foreground">A preview of how the coin will look like</p>
                      </div>
                  </CardContent>
              </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 
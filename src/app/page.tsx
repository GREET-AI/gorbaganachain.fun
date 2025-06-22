import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Sidebar } from "@/components/Sidebar";

const tokens = [
  {
    name: "Saying Pumpfun 1MIL Times Live (1MIL)",
    marketCap: "$736.9K",
    replies: 615,
    description: "Streamer Attempts to Say 'Pump Fun' 1,000,000 Times",
    creator: "973krj",
    age: "12m ago",
    image: "/placeholder.svg",
    live: true,
  },
  {
    name: "Gorbagana (GOR)",
    marketCap: "$37.0M",
    replies: 1986,
    description: "Toly Questions if Blockchain Branding Really Matters, Birthing Gorbagana",
    creator: "DFtGxr",
    age: "1h ago",
    image: "/gorbagana-logo.png",
  },
  {
    name: "Fartbook (FB)",
    marketCap: "$448.1K",
    replies: 832,
    description: "Fartbook Creates Their Own Fart-Inspired Degen Facebook Clone",
    creator: "F7GpWN",
    age: "3m ago",
    image: "/placeholder.svg",
  },
  {
    name: "BASED D House (BASED)",
    marketCap: "$2.0M",
    replies: 194,
    description: "Streamer Collective 'BASED D House' Launches Token",
    creator: "aAAtxU",
    age: "9m ago",
    image: "/placeholder.svg",
  },
  {
    name: "catmando (camo)",
    marketCap: "$4.0K",
    replies: 0,
    description: "solana cat trenches are ready",
    creator: "3AG2FX",
    age: "15m ago",
    image: "/placeholder.svg",
  },
    {
    name: "Belief (Belief)",
    marketCap: "$3.8K",
    replies: 1,
    description: "gather your spirit and believe",
    creator: "6zRBXr",
    age: "22m ago",
    image: "/placeholder.svg",
  },
];

function TokenCard({ token }: { token: (typeof tokens)[0] }) {
    return (
        <Card className="bg-muted/40 border-muted-foreground/20 transform transition-transform hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="p-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border">
                        <AvatarImage src={token.image} alt={token.name} />
                        <AvatarFallback>{token.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-base font-bold">{token.name}</CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>mcap: <span className="text-foreground font-semibold">{token.marketCap}</span></span>
                            <span>replies: {token.replies}</span>
                            {token.live && <Badge variant="destructive">LIVE</Badge>}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{token.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                <p>created by {token.creator} {token.age}</p>
            </CardFooter>
        </Card>
    )
}

export default function PumpFunClone() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="w-full flex-1">
                {/* Potentially a top-bar component like in pump.fun */}
            </div>
            <Button variant="outline" size="sm">Create Coin</Button>
            <Button size="sm">Log In</Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight">[start a new coin]</h1>
            <div className="w-full max-w-lg">
                <form>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                        className="w-full appearance-none bg-background pl-10 shadow-none"
                        placeholder="Search for token"
                        />
                         <Button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 h-8" >Search</Button>
                    </div>
                </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tokens.map((token, index) => (
              <TokenCard key={index} token={token} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

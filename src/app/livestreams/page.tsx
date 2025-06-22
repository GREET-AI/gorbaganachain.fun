import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { WalletConnect } from "@/components/WalletConnect";

const livestreams = [
  {
    title: "PUMPKIN SAID 36011 TIMES",
    user: "1MIL",
    viewers: "1.2k",
    marketCap: "$876.2k",
    image: "/placeholder.svg",
    live: true,
  },
  {
    title: "zesty",
    user: "zesty",
    viewers: "420",
    marketCap: "$453.1k",
    image: "/placeholder.svg",
    live: true,
  },
  {
    title: "DELIFM",
    user: "DELIFM",
    viewers: "1.5k",
    marketCap: "$345.4k",
    image: "/placeholder.svg",
    live: true,
  },
    {
    title: "ISO9000",
    user: "ISO9000",
    viewers: "888",
    marketCap: "$95.5k",
    image: "/placeholder.svg",
    live: true,
  },
    {
    title: "BABA",
    user: "ashqs2",
    viewers: "777",
    marketCap: "$44.7k",
    image: "/placeholder.svg",
    live: true,
  },
    {
    title: "PSD",
    user: "ashqs2",
    viewers: "123",
    marketCap: "$37.3k",
    image: "/placeholder.svg",
    live: true,
  },
    {
    title: "SM",
    user: "ashqs2",
    viewers: "456",
    marketCap: "$35.4k",
    image: "/placeholder.svg",
    live: true,
  },
  {
    title: "C8FLM",
    user: "ashqs2",
    viewers: "789",
    marketCap: "$32.7k",
    image: "/placeholder.svg",
    live: true,
  },
];

function LivestreamCard({ stream }: { stream: (typeof livestreams)[0] }) {
    return (
        <Card className="bg-muted/40 border-muted-foreground/20 transform transition-transform hover:scale-[1.02] hover:shadow-lg overflow-hidden">
            <div className="relative">
                <Image src={stream.image} alt={stream.title} width={400} height={225} className="object-cover w-full aspect-video"/>
                {stream.live && <Badge variant="destructive" className="absolute top-2 left-2">LIVE</Badge>}
            </div>
            <CardHeader className="p-4">
                <CardTitle className="text-base font-bold">{stream.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>mcap: <span className="text-foreground font-semibold">{stream.marketCap}</span></span>
                </div>
            </CardContent>
        </Card>
    )
}

export default function LivestreamsPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center justify-between border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <h1 className="text-xl font-semibold">Livestreams</h1>
          <div className="flex items-center gap-4">
              <WalletConnect />
          </div>
      </header>
      <main className="flex-1 p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {livestreams.map((stream, index) => (
              <LivestreamCard key={index} stream={stream} />
            ))}
          </div>
      </main>
    </div>
  );
} 
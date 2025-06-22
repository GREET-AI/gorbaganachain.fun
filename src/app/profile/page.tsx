"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy, ExternalLink, ArrowLeft, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletConnect } from "@/components/WalletConnect";

const whoToFollow = [
  {
    name: "hbgop",
    followers: 1293,
    avatar: "/placeholder.svg",
  },
  {
    name: "rnutdev",
    followers: 1292,
    avatar: "/placeholder.svg",
  },
  {
    name: "jeeterslut",
    followers: 1291,
    avatar: "/placeholder.svg",
  },
  {
    name: "gandy",
    followers: 1286,
    avatar: "/placeholder.svg",
  },
];

const balances = [
    {
        name: "Solana balance",
        amount: "0.2956 SOL",
        value: "$39",
        logo: "/placeholder.svg" // Replace with actual Solana logo if available
    }
]

const replies = [
    {
        username: "48vWu2",
        date: "03/06/2025, 16:49:36",
        id: "#18501065",
        message: "Damn nice idea",
    }
]

export default function ProfilePage() {
  const router = useRouter();
  const { connected } = useWallet();

  return (
    <div className="flex flex-col flex-1">
      <header className="flex h-14 items-center justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <WalletConnect />
      </header>
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
     {connected ? (
      <>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2 relative">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="absolute top-4 right-4">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="relative mx-auto h-24 w-24">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="/placeholder.svg" alt="User Avatar" />
                                    <AvatarFallback>48</AvatarFallback>
                                </Avatar>
                                <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full">
                                    <Camera className="h-4 w-4"/>
                                </Button>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="username">Username</label>
                                <Input id="username" defaultValue="48vWu2" />
                                <p className="text-xs text-muted-foreground">you can change your username once every day</p>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="bio">Bio</label>
                                <Textarea id="bio" placeholder="describe your profile"/>
                            </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" alt="User Avatar" />
                    <AvatarFallback>48</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <CardTitle className="text-2xl">48vWu2</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>48vWu...pjgD</span>
                        <Copy className="h-3 w-3 cursor-pointer" />
                        <ExternalLink className="h-3 w-3 cursor-pointer" />
                    </div>
                    </div>
                </div>
                </CardHeader>
                <CardContent className="flex justify-around pt-2">
                    <div className="text-center">
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-xs text-muted-foreground">followers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-xs text-muted-foreground">following</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-xs text-muted-foreground">created coins</p>
                    </div>
                </CardContent>
            </Card>
            </div>
            <Tabs defaultValue="balances">
            <div className="flex items-center">
                <TabsList>
                <TabsTrigger value="balances">Balances</TabsTrigger>
                <TabsTrigger value="replies">Replies</TabsTrigger>
                <TabsTrigger value="notifications" className="relative">
                    Notifications
                    <span className="absolute top-1 right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="balances">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between text-sm text-muted-foreground">
                        <p>Coins</p>
                        <div className="flex gap-8 pr-8">
                        <p>mcap</p>
                        <p>value</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {balances.map(b => (
                            <div key={b.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={b.logo} />
                                        <AvatarFallback>{b.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{b.name}</p>
                                        <p className="text-sm text-muted-foreground">{b.amount}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <p className="font-semibold w-12 text-right">--</p>
                                    <p className="font-semibold w-12 text-right">{b.value}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="replies">
                <Card>
                    <CardContent className="p-4 space-y-4">
                        {replies.map(reply => (
                            <div key={reply.id} className="border rounded-lg p-3">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                                <div>
                                    <span className="font-bold text-primary">{reply.username}</span>
                                    <span className="ml-2">{reply.date}</span>
                                    <span className="ml-2">{reply.id}</span>
                                </div>
                                <Button variant="link" size="sm">[view thread]</Button>
                            </div>
                            <p>{reply.message}</p>
                            </div>
                        ))}
                        <div className="flex justify-center items-center gap-4 text-sm">
                            <Button variant="link" size="sm">[&lt;&lt;]</Button>
                            <Button variant="link" size="sm">&lt;</Button>
                            <span>1</span>
                            <Button variant="link" size="sm">&gt;</Button>
                            <Button variant="link" size="sm">[&gt;&gt;]</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="notifications">
                <Card>
                    <CardContent className="p-4">
                        <p className="text-muted-foreground text-center">No notifications yet.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            </Tabs>
        </div>
        <div>
            <Card>
            <CardHeader>
                <CardTitle>Who to follow</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                {whoToFollow.map((user) => (
                <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                        {user.followers} followers
                        </p>
                    </div>
                    </div>
                    <Button variant="outline" size="sm">
                    Follow
                    </Button>
                </div>
                ))}
            </CardContent>
            </Card>
        </div>
      </>
      ) : (
        <div className="col-span-3 flex h-[80vh] items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Sign in to view your profile</h2>
                <p className="text-muted-foreground">Connect your wallet to get started.</p>
            </div>
        </div>
      )}
    </main>
    </div>
  );
} 
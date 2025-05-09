"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Portfolio items categorized by type
const portfolioItems = {
  thumbnails: [
    {
      id: 1,
      title: "YouTube Shorts Automation",
      description: "Thumbnail showcasing YouTube Shorts automation with impressive revenue statistics.",
      category: "youtube",
      image: "/images/thumbnail1.png",
    },
    {
      id: 2,
      title: "Gaming 1v1 Battle",
      description: "Eye-catching thumbnail for a gaming video featuring a 1v1 battle between characters.",
      category: "gaming",
      image: "/images/thumbnail2.png",
    },
    {
      id: 3,
      title: "24 Hours Forest Challenge",
      description: "Adventure-themed thumbnail for a 24-hour survival challenge in the forest.",
      category: "challenge",
      image: "/images/thumbnail3.png",
    },
    {
      id: 4,
      title: "Views Transformation Guide",
      description: "Before and after comparison showing how to increase YouTube views dramatically.",
      category: "tutorial",
      image: "/images/thumbnail4.png",
    },
    {
      id: 5,
      title: "YouTube Earnings Potential",
      description: "Thumbnail highlighting potential YouTube earnings with eye-catching statistics.",
      category: "finance",
      image: "/images/thumbnail5.png",
    },
    {
      id: 6,
      title: "YouTube Automation Stats",
      description: "Close-up thumbnail showing impressive views and revenue from YouTube automation.",
      category: "youtube",
      image: "/images/thumbnail6.png",
    },
    {
      id: 7,
      title: "How to Create YouTube Channel",
      description: "Tutorial thumbnail showing how to create a successful YouTube channel with earnings potential.",
      category: "tutorial",
      image: "/images/thumbnail7.png",
    },
    {
      id: 8,
      title: "Power of Money",
      description:
        "Financial education thumbnail featuring an animated businessman with a green growth chart background.",
      category: "finance",
      image: "/images/thumbnail8.png",
    },
    {
      id: 9,
      title: "Is Teaching Worth It?",
      description: "Educational thumbnail discussing the financial aspects of teaching as a profession.",
      category: "education",
      image: "/images/thumbnail9.png",
    },
  ],
  posts: [
    {
      id: 10,
      title: "Spicy Crispy Beef Burger",
      description: "Food advertisement for a spicy beef burger with vibrant yellow and orange background.",
      category: "food",
      image: "/images/thumbnail10.png",
    },
    {
      id: 11,
      title: "BMW Racing Poster",
      description: "Automotive advertisement featuring a BMW racing car with M&M's branding.",
      category: "automotive",
      image: "/images/thumbnail11.png",
    },
    {
      id: 12,
      title: "Toyota Supra GR",
      description: "Automotive poster showcasing the Toyota Supra GR Blue Edition with engine details.",
      category: "automotive",
      image: "/images/thumbnail12.png",
    },
    {
      id: 13,
      title: "Special Chicken Wings",
      description: "Food advertisement for crispy chicken wings with free delivery, featuring an orange background.",
      category: "food",
      image: "/images/thumbnail13.png",
    },
    {
      id: 14,
      title: "Labour Day Celebration",
      description:
        "Commemorative poster for May 1st Labour Day featuring a fist holding a wrench symbolizing worker strength.",
      category: "holiday",
      image: "/images/thumbnail14.png",
    },
  ],
}

export function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<any>(null)

  // Function to render a section of portfolio items
  const renderPortfolioSection = (items: any[], title: string) => (
    <div className="mb-16">
      <h2 className="mb-6 text-2xl font-bold tracking-tight relative inline-block">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">{title}</span>
        <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-neon-pink to-neon-purple"></div>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden transition-all bg-gray-900 border-0 hover:shadow-[0_0_15px_rgba(101,255,206,0.5)] group"
            onClick={() => setSelectedItem(item)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="mb-10">
        <div className="inline-block rounded-lg bg-gradient-to-r p-[2px] from-neon-green to-neon-blue">
          <div className="rounded-lg bg-black px-4 py-2">
            <h2 className="text-lg font-semibold text-white">My Professional Work</h2>
          </div>
        </div>
      </div>

      {/* Thumbnails Section */}
      {renderPortfolioSection(portfolioItems.thumbnails, "Thumbnails")}

      {/* Posts Section */}
      {renderPortfolioSection(portfolioItems.posts, "Posts")}

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-3xl bg-gray-900 text-white border-neon-blue">
            <DialogHeader>
              <DialogTitle className="text-white">{selectedItem.title}</DialogTitle>
              <DialogDescription className="text-gray-400">{selectedItem.category}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">{selectedItem.description}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-gray-800"
              onClick={() => setSelectedItem(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

import { PortfolioGallery } from "@/components/portfolio-gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
          Ateeq Ur Rehman Portfolio
        </h1>
        <div className="h-1 w-48 bg-gradient-to-r from-neon-green to-neon-blue mb-8 rounded-full"></div>
        <p className="mb-12 text-lg text-gray-300">
          A collection of my design work including YouTube thumbnails and promotional posts. Click on any item to view
          details.
        </p>
        <PortfolioGallery />
      </div>
    </main>
  )
}

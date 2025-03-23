
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, BarChart2, PieChart, Wallet } from "lucide-react";

interface NFT {
  id: string;
  title: string;
  image: string;
  price: number;
  creator: string;
  likes: number;
}

export default function NFTSalesDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock data for NFTs
  const nfts: NFT[] = [
    { id: "1", title: "Liquid Space", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 3.2, creator: "artofvisions", likes: 34 },
    { id: "2", title: "Energy Portal", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 1.4, creator: "cryptoart", likes: 22 },
    { id: "3", title: "Golden Horizon", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 2.8, creator: "digitalcraft", likes: 18 },
    { id: "4", title: "Cosmic Genesis", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 1.2, creator: "nftmaster", likes: 27 },
    { id: "5", title: "Neon Dreams", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 4.3, creator: "futureart", likes: 42 },
    { id: "6", title: "Digital Soul", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 2.1, creator: "artmatrix", likes: 31 },
    { id: "7", title: "Quantum Echo", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 5.5, creator: "pixelgenius", likes: 53 },
    { id: "8", title: "Virtual Cosmos", image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png", price: 3.7, creator: "cyberdesign", likes: 29 }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-semibold text-gray-900">NFT Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">JD</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "dashboard"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "analytics"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "reports"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "settings"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Stat Card 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">$24,780</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <ArrowUp className="h-4 w-4 flex-shrink-0 self-center" />
                          <span className="sr-only">Increased by</span>
                          8.2%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <BarChart2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">NFTs Sold</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">345</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <ArrowUp className="h-4 w-4 flex-shrink-0 self-center" />
                          <span className="sr-only">Increased by</span>
                          12.6%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Unique Visitors</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">12,857</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <ArrowUp className="h-4 w-4 flex-shrink-0 self-center" />
                          <span className="sr-only">Increased by</span>
                          5.4%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Average Price</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">2.8 ETH</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                          <svg className="self-center flex-shrink-0 h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          <span className="sr-only">Decreased by</span>
                          3.1%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent NFTs */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent NFTs
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {nfts.map(nft => (
                  <div key={nft.id} className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                      <img src={nft.image} alt={nft.title} className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900">{nft.title}</h3>
                      <div className="flex items-center mt-1">
                        <p className="text-xs text-gray-500">@{nft.creator}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm font-medium text-gray-900">{nft.price} ETH</p>
                        <div className="flex items-center space-x-1">
                          <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-500">{nft.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            © 2023 NFT Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

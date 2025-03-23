
import { Link } from "react-router-dom";

interface NFT {
  id: string;
  title: string;
  image: string;
  creator: {
    name: string;
    username: string;
    avatar?: string;
  };
  price: number;
  sold: boolean;
}

export default function NFTSalesDashboard() {
  // Mock data for NFTs
  const nfts: NFT[] = [
    {
      id: "1",
      title: "The Only Ghost I'm Haunted By",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Eric Pause",
        username: "EricPause",
      },
      price: 2.50,
      sold: true
    },
    {
      id: "2",
      title: "Embrace",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Wyn Jackz",
        username: "wynjackz",
      },
      price: 1.25,
      sold: true
    },
    {
      id: "3",
      title: "the hidden king of cups",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Zala Faz Zalas",
        username: "zala_faz_zalas",
      },
      price: 0.35,
      sold: true
    },
    {
      id: "4",
      title: "High Low - somewhere in between",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "SIGMA-X",
        username: "SIGMA-X",
      },
      price: 2.75,
      sold: true
    },
    {
      id: "5",
      title: "The unconscious perception of...",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Samantha Cavet",
        username: "samanthacavet",
      },
      price: 3.71,
      sold: true
    },
    {
      id: "6",
      title: "Untitled #45",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Creator 6",
        username: "creator6",
      },
      price: 1.85,
      sold: true
    },
    {
      id: "7",
      title: "Digital Dreams",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Creator 7",
        username: "creator7",
      },
      price: 4.20,
      sold: true
    },
    {
      id: "8",
      title: "Abstract Reality",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Creator 8",
        username: "creator8",
      },
      price: 5.30,
      sold: true
    },
    {
      id: "9",
      title: "Virtual Landscape",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Creator 9",
        username: "creator9",
      },
      price: 6.15,
      sold: true
    },
    {
      id: "10",
      title: "Crypto Art #001",
      image: "/lovable-uploads/8cdb6d4d-b9d3-474d-9048-98e1f87d9ef4.png",
      creator: {
        name: "Creator 10",
        username: "creator10",
      },
      price: 7.45,
      sold: true
    },
  ];

  // Calculate total sales
  const totalSales = nfts.reduce((sum, nft) => sum + nft.price, 0);
  const totalNFTsSold = nfts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header */}
      <header className="border-b sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex items-center justify-center h-16 px-4">
          <nav className="flex space-x-8">
            <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/listings" className="font-medium text-gray-900">Listings</Link>
            <Link to="/sales" className="font-medium text-gray-500 hover:text-gray-900">Sales</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 pb-20">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="text-sm text-gray-400">Total sales</div>
            <div className="text-5xl font-bold mt-2">127.5 ETH</div>
          </div>
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="text-sm text-gray-400">NFTs sold</div>
            <div className="text-5xl font-bold mt-2">64</div>
          </div>
        </div>

        {/* Sold NFTs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Sold NFTs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="p-2">
                  <img 
                    src={nft.image} 
                    alt={nft.title} 
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </div>
                <div className="px-3 pb-3">
                  <h3 className="font-medium text-sm">{nft.title}</h3>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 bg-gray-800 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-700">@{nft.creator.username}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">{nft.price} ETH</span>
                    <span className="text-xs text-red-500">Sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-black text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-md mr-3"></div>
              <span className="font-bold">Foundation</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">curated by</span>
              <span className="font-bold">Mobbin</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

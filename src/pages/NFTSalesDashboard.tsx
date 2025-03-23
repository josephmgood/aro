
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
      image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png",
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
      image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png",
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
      image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png",
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
      image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png",
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
      image: "/lovable-uploads/d362c45c-974e-4e14-95f0-b554972f9994.png",
      creator: {
        name: "Samantha Cavet",
        username: "samanthacavet",
      },
      price: 3.71,
      sold: true
    },
  ];

  // Calculate total sales
  const totalSales = nfts.reduce((sum, nft) => sum + nft.price, 0);
  const totalNFTsSold = nfts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header for NFT Dashboard */}
      <header className="border-b sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex items-center justify-center h-16 px-4 md:px-6">
          <nav className="flex space-x-8">
            <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/listings" className="font-medium text-gray-900">Listings</Link>
            <Link to="/sales" className="font-medium text-gray-500 hover:text-gray-900">Sales</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="text-sm text-gray-300">Total sales</div>
            <div className="text-5xl font-bold mt-2">{totalSales.toFixed(1)} ETH</div>
          </div>
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="text-sm text-gray-300">NFTs sold</div>
            <div className="text-5xl font-bold mt-2">{totalNFTsSold}</div>
          </div>
        </div>

        {/* Sold NFTs Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sold NFTs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="p-4">
                  <img 
                    src={nft.image} 
                    alt={nft.title} 
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <div className="px-4 pb-4">
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

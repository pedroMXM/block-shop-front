
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-primary">NFT Market</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary">Explore</Link>
            <Link to="/advanced-search" className="text-gray-600 hover:text-primary">Advanced Search</Link>
            <Link to="/" className="text-gray-600 hover:text-primary">Collections</Link>
            <Link to="/" className="text-gray-600 hover:text-primary">Artists</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search items..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

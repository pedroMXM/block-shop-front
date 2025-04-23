
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";

const DEMO_PRODUCTS = [
  {
    id: 1,
    title: "Cosmic Voyage #001",
    price: "0.85",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    author: "CryptoArtist"
  },
  {
    id: 2,
    title: "Digital Dreams #137",
    price: "1.2",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "PixelMaster"
  },
  {
    id: 3,
    title: "Abstract Realms #42",
    price: "0.65",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    author: "Web3Creator"
  },
  {
    id: 4,
    title: "Future Vision #89",
    price: "2.1",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: "NFTGenius"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
          <p className="text-gray-600">Discover the most unique digital assets</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              author={product.author}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;

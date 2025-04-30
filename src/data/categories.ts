
import { CategoryType } from "@/types/category";

export const categories: CategoryType[] = [
  {
    id: "digital-art",
    name: "Digital Art",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    subcategories: [
      {
        id: "illustrations",
        name: "Illustrations",
        subcategories: [
          { id: "2d-illustrations", name: "2D Illustrations" },
          { id: "3d-illustrations", name: "3D Illustrations" },
          { id: "pixel-art", name: "Pixel Art" }
        ]
      },
      {
        id: "animated-art",
        name: "Animated Art",
        subcategories: [
          { id: "animated-gifs", name: "Animated GIFs" },
          { id: "short-videos", name: "Short Videos" },
          { id: "interactive", name: "Interactive Art" }
        ]
      },
      {
        id: "generative-art",
        name: "Generative Art",
        subcategories: [
          { id: "algorithm-based", name: "Algorithm-based" },
          { id: "ai-art", name: "AI-Generated Art" }
        ]
      }
    ]
  },
  {
    id: "collectibles",
    name: "Collectibles",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    subcategories: [
      { id: "trading-cards", name: "Trading Cards" },
      { id: "virtual-goods", name: "Virtual Goods" },
      { id: "digital-wearables", name: "Digital Wearables" },
      { id: "limited-editions", name: "Limited Editions" },
      { id: "memorabilia", name: "Memorabilia" }
    ]
  },
  {
    id: "music",
    name: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    subcategories: [
      { id: "tracks", name: "Tracks" },
      { id: "albums", name: "Albums" },
      { id: "music-videos", name: "Music Videos" },
      { id: "concert-tickets", name: "Concert Tickets" },
      { id: "soundbites", name: "Soundbites" }
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    subcategories: [
      {
        id: "game-assets",
        name: "Game Assets",
        subcategories: [
          { id: "characters", name: "Characters" },
          { id: "weapons", name: "Weapons" },
          { id: "environments", name: "Environments" }
        ]
      },
      { id: "game-keys", name: "Game Keys" },
      { id: "virtual-land", name: "Virtual Land" },
      { id: "in-game-currency", name: "In-Game Currency" }
    ]
  },
  {
    id: "photography",
    name: "Photography",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    subcategories: [
      { id: "portraits", name: "Portraits" },
      { id: "landscapes", name: "Landscapes" },
      { id: "abstract", name: "Abstract" },
      { id: "photojournalism", name: "Photojournalism" },
      { id: "street", name: "Street Photography" }
    ]
  },
  {
    id: "sport-moments",
    name: "Sport Moments",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
    subcategories: [
      { id: "basketball", name: "Basketball" },
      { id: "football", name: "Football" },
      { id: "soccer", name: "Soccer" },
      { id: "baseball", name: "Baseball" },
      { id: "tennis", name: "Tennis" },
      { id: "olympics", name: "Olympics" }
    ]
  },
  {
    id: "domain-names",
    name: "Domain Names",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    subcategories: [
      { id: "premium", name: "Premium Domains" },
      { id: "short-domains", name: "Short Domains" },
      { id: "crypto-domains", name: "Crypto Domains" },
      { id: "metaverse", name: "Metaverse Domains" }
    ]
  },
  {
    id: "virtual-fashion",
    name: "Virtual Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    subcategories: [
      {
        id: "avatar-wearables",
        name: "Avatar Wearables",
        subcategories: [
          { id: "clothing", name: "Clothing" },
          { id: "accessories", name: "Accessories" },
          { id: "jewelry", name: "Jewelry" }
        ]
      },
      { id: "digital-fashion", name: "Digital Fashion" },
      { id: "ar-fashion", name: "AR Fashion" }
    ]
  },
  {
    id: "memes",
    name: "Memes",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
    subcategories: [
      { id: "classic-memes", name: "Classic Memes" },
      { id: "viral-moments", name: "Viral Moments" },
      { id: "community-memes", name: "Community Memes" }
    ]
  },
  {
    id: "virtual-real-estate",
    name: "Virtual Real Estate",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    subcategories: [
      { id: "decentraland", name: "Decentraland" },
      { id: "the-sandbox", name: "The Sandbox" },
      { id: "cryptovoxels", name: "Cryptovoxels" },
      { id: "somnium-space", name: "Somnium Space" }
    ]
  },
  {
    id: "documents",
    name: "Documents",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    subcategories: [
      { id: "contracts", name: "Contracts" },
      { id: "certificates", name: "Certificates" },
      { id: "licenses", name: "Licenses" },
      { id: "deeds", name: "Deeds" },
      { id: "academic", name: "Academic Papers" }
    ]
  },
  {
    id: "digital-identity",
    name: "Digital Identity",
    image: "https://images.unsplash.com/photo-1589786722850-49596e136bad",
    subcategories: [
      { id: "avatars", name: "Avatars" },
      { id: "profiles", name: "Profiles" },
      { id: "credentials", name: "Credentials" },
      { id: "reputation", name: "Reputation" }
    ]
  },
  {
    id: "memberships",
    name: "Memberships",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf",
    subcategories: [
      { id: "dao", name: "DAO Membership" },
      { id: "clubs", name: "Exclusive Clubs" },
      { id: "communities", name: "Communities" },
      { id: "subscriptions", name: "Subscriptions" }
    ]
  },
  {
    id: "tickets",
    name: "Tickets",
    image: "https://images.unsplash.com/photo-1522158073516-6ba8b6f3380f",
    subcategories: [
      { id: "events", name: "Events" },
      { id: "conferences", name: "Conferences" },
      { id: "festivals", name: "Festivals" },
      { id: "sport-events", name: "Sport Events" },
      { id: "movie-tickets", name: "Movie Tickets" }
    ]
  },
  {
    id: "virtual-pets",
    name: "Virtual Pets",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    subcategories: [
      { id: "cryptopets", name: "CryptoPets" },
      { id: "virtual-companions", name: "Virtual Companions" },
      { id: "breedable", name: "Breedable Pets" },
      { id: "battle-pets", name: "Battle Pets" }
    ]
  },
  {
    id: "3d-models",
    name: "3D Models",
    image: "https://images.unsplash.com/photo-1525434280327-e525e532111a",
    subcategories: [
      { id: "characters-3d", name: "Characters" },
      { id: "environments-3d", name: "Environments" },
      { id: "objects-3d", name: "Objects" },
      { id: "animations", name: "Animations" }
    ]
  },
  {
    id: "video",
    name: "Video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    subcategories: [
      { id: "short-films", name: "Short Films" },
      { id: "vfx", name: "VFX" },
      { id: "motion-graphics", name: "Motion Graphics" },
      { id: "video-clips", name: "Video Clips" }
    ]
  },
  {
    id: "metaverse-assets",
    name: "Metaverse Assets",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    subcategories: [
      { id: "buildings", name: "Buildings" },
      { id: "vehicles", name: "Vehicles" },
      { id: "decorations", name: "Decorations" },
      { id: "integration-tools", name: "Integration Tools" }
    ]
  },
  {
    id: "defi-tokens",
    name: "DeFi Tokens",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    subcategories: [
      { id: "governance", name: "Governance Tokens" },
      { id: "liquidity", name: "Liquidity Tokens" },
      { id: "fractionalized", name: "Fractionalized Assets" },
      { id: "yield", name: "Yield-bearing Tokens" }
    ]
  }
];

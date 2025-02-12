"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Quantum Watch X",
    price: "$299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Wearables"
  },
  {
    id: 2,
    name: "Neo Glasses Pro",
    price: "$199",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Hover Board Elite",
    price: "$899",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    category: "Transport"
  },
  {
    id: 4,
    name: "Smart Home Hub",
    price: "$249",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    category: "Smart Home"
  }
];

const GridPattern = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "center",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              FUTURE<span className="text-blue-500">SHOP</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Shop", "Categories", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="relative group px-3 py-2 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GridPattern />
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            Welcome to the Future
          </motion.h1>
          <div className="text-xl md:text-2xl mb-8 h-12 text-gray-300">
            <TypeAnimation
              sequence={[
                "Discover the Future of Shopping...",
                1000,
                "Experience Innovation...",
                1000,
                "Embrace Tomorrow, Today...",
                1000,
              ]}
              repeat={Infinity}
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full
                         shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-shadow duration-300
                         hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Explore Now
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          Trending Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-gray-400">{product.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-400 font-bold">{product.price}</span>
                    <Button size="sm" variant="outline" className="border-blue-500/20 hover:bg-blue-500/10 text-blue-400">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-3xl p-12 text-center relative overflow-hidden border border-blue-500/20"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-white">Special Launch Offer</h2>
              <p className="text-xl mb-8 text-blue-200">Get 30% off on all new arrivals</p>
              <div className="text-2xl font-mono mb-8 text-blue-300">
                Ends in: {formatTime(timeLeft)}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full
                             shadow-lg transition-all duration-300"
                >
                  Shop Now
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
      >
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center
                     shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
        </Button>
      </motion.div>
    </div>
  );
}
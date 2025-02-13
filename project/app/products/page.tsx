"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { fetchProducts } from '../../services/api'
import { Button } from "@/components/ui/button";



export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
        setProducts(data); 
    });
}, []);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Our Products
        </motion.h1>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
{products.map((product: any, index: number) => (  // 👈 Ignores TypeScript checks
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-primary mt-2">${product.price}</p>
                <p className="text-muted-foreground mt-2">{product.description}</p>
                <Button className="w-full mt-4">Add to Cart</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
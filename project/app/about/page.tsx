"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen pt-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-8"
        >
          About FutureStore
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg text-muted-foreground">
            Welcome to FutureStore, where innovation meets elegance in the world of e-commerce. 
            We specialize in bringing you the latest and most advanced technology products, 
            carefully curated for the modern consumer.
          </p>
          <div className="mt-8 space-y-6">
            <div className="p-6 rounded-lg bg-secondary/50">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p>
                To revolutionize the online shopping experience by combining cutting-edge 
                technology with intuitive design, making premium products accessible to everyone.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/50">
              <h2 className="text-2xl font-semibold mb-4">Quality Promise</h2>
              <p>
                Every product in our store undergoes rigorous quality testing and verification 
                to ensure it meets our high standards of excellence and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
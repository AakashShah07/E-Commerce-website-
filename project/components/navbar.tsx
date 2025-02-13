"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Moon, Sun,LogIn } from "lucide-react";
import { useTheme } from "next-themes";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const { setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 top-0 px-4 lg:px-8 py-4 backdrop-blur-lg bg-background/80 border-b"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          FutureStore
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
         
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          
        <Link href="/authentication">
  <Button variant="ghost" size="icon">
    <LogIn className="h-5 w-5" />
  </Button>
</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
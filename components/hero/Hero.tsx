"use client";

import { Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ContributeButton } from "@/components/ContributeButton";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pip install appgen");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <ContributeButton />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">
            Fastest way to bootstrap apps
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Set up your next app in{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
            seconds
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          AppGen is the fastest way to bootstrap your next application with
          modern tools and best practices.
        </motion.p>

        {/* Command Section */}
        <motion.div
          className="flex flex-col items-center gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="bg-card backdrop-blur-lg  rounded-3xl p-4 sm:p-8 shadow-2xl  w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                Terminal
              </span>
            </div>

            {/* Command row */}
            <div className="mt-4 flex items-center bg-secondary rounded-2xl p-2 sm:p-3 gap-4">
              <div className="flex items-center gap-2 rounded-lg">
                <span className="text-muted-foreground text-sm">$</span>
                <p className="text-foreground text-base">pip install appgen</p>
              </div>
              <motion.button
                onClick={copyToClipboard}
                className="p-2 rounded-lg flex ml-auto hover:bg-accent/50 transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </motion.button>
            </div>

            {/* Video */}
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden  bg-black ">
                <video
                  src="./demo.mp4" // Replace with your demo video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              Copy and paste this command to get started
            </p>
            <div className="hidden sm:flex items-center gap-6 text-xs text-muted-foreground">
              <span>⚡ Lightning fast</span>
              <span>🛠️ Modern tools</span>
              <span>🚀 Production ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

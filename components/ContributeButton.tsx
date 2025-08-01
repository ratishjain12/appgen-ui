"use client";

import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContributeButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Button */}
      <Link
        target="_blank"
        href="https://github.com/ratishjain12/appgen"
        className="text-lg"
      >
        <motion.div
          className="bg-primary text-primary-foreground rounded-full h-8 flex items-center gap-2 justify-center overflow-hidden"
          initial={{ width: "32px" }}
          animate={{ width: isExpanded ? "120px" : "32px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
        >
          {isExpanded && (
            <motion.span
              className="text-sm font-medium whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Contribute
            </motion.span>
          )}
          <GithubIcon className="h-4 w-4 flex-shrink-0" />
        </motion.div>
      </Link>
    </div>
  );
}

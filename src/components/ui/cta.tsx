import { Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function CTA() {
  return (
    <div className="w-full section-padding relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col text-center bg-white rounded-xl p-12 gap-10 items-center shadow-lg border border-muted">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="px-4 py-1.5 text-sm md:text-lg md:px-6 md:py-2 bg-primary/20 hover:bg-primary/30 transition-colors">
              Discover Your Dream Home
            </Badge>
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.h3 
              className="text-4xl md:text-6xl tracking-tight max-w-2xl font-bold bg-gradient-to-r from-[#23d0d9] to-[#6856eb] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Your Perfect Property Awaits in Paradise
            </motion.h3>
            <motion.p 
              className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Experience the luxury of Dominican Republic real estate. From beachfront villas 
              to urban apartments, find your ideal investment opportunity with our expert guidance.
            </motion.p>
          </div>
          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-colors w-full"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Properties <Home className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/10 to-primary-foreground/0 group-hover:translate-x-full transition-transform duration-500" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export { CTA };

import { X, ExternalLink, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, item }) {
  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative w-[92vw] max-w-4xl bg-neutral-900 rounded-lg overflow-hidden shadow-2xl"
          >
            {item.trailer && (
              <div className="relative aspect-video bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={item.trailer}
                  autoPlay
                  controls
                  playsInline
                />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            )}
            <div className="p-6 grid gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                {item.year && (
                  <span className="text-white/60">{item.year}</span>
                )}
              </div>
              {item.description && (
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              )}
              {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-2 flex flex-wrap gap-3">
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-black font-medium hover:bg-neutral-200"
                  >
                    <Play size={16} /> Demo
                  </a>
                )}
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20"
                  >
                    <ExternalLink size={16} /> Source
                  </a>
                )}
                {item.link && !item.demo && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20"
                  >
                    <ExternalLink size={16} /> Visit
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

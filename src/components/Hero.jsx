/* eslint-disable jsx-a11y/media-has-caption */
import { motion } from "framer-motion";

export default function Hero({ data }) {
  const { title, subtitle, videoUrl, tagline, cta } = data || {};

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-xl text-white/90"
            >
              {subtitle}
            </motion.p>
          )}
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base text-white/80 max-w-xl"
            >
              {tagline}
            </motion.p>
          )}
          {cta?.label && (
            <motion.a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-neutral-200"
            >
              {cta.label}
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}

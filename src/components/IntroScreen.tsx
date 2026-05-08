import { motion } from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d1b2a] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      >
        <source src="/videos/run-intro.mp4" type="video/mp4" />
      </video>

      {/* Thin Overlay */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full">
        {/* Logo */}
        <motion.img
          src="/images/run-logo-intro.png"
          alt="Redeemer's University Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-28 md:w-40 lg:w-48 mb-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        />

        {/* Welcome Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 tracking-tight"
        >
          Welcome to
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#c9a227] mb-4"
        >
          Redeemer's University
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase font-light mb-16"
        >
          Running with the Vision
        </motion.p>

        {/* Enter Site Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onComplete}
          className="relative px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium tracking-[0.2em] text-sm uppercase transition-all duration-300 hover:bg-white/20 hover:border-white/40 group"
        >
          {/* Pulsing Ring */}
          <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-30" />

          <span className="relative z-10 flex items-center gap-3">
            Enter Site
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-[#c9a227]"
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}

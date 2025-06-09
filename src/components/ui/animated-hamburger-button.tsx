import { MotionConfig, motion } from 'framer-motion';

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
};

export const AnimatedHamburgerButton = ({ active, setActive }: { active: boolean; setActive: (active: boolean) => void }) => {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <motion.button initial={false} animate={active ? 'open' : 'closed'} onClick={() => setActive(!active)} className="group border border-primary bg-primary dark:bg-input/30 dark:border-primary dark:hover:bg-input/50 relative z-20 flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1 rounded-md shadow-none">
        <motion.span variants={VARIANTS.top} className="absolute h-0.5 w-5 bg-white transition-all duration-300 group-hover:bg-white" />
        <motion.span variants={VARIANTS.bottom} className="absolute h-0.5 w-5 bg-white transition-all duration-300 group-hover:bg-white" />
      </motion.button>
    </MotionConfig>
  );
};

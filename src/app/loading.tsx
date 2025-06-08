'use client';

import { SpinningText } from '@/components/ui/spinning-text';

export default function Loading() {
  return (
    <div className="bg-background fixed inset-0 z-50 flex h-screen items-center justify-center">
      <SpinningText
        radius={5.5}
        fontSize={1}
        variants={{
          container: {
            hidden: {
              opacity: 1,
            },
            visible: {
              opacity: 1,
              rotate: 360,
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 6,
                repeat: Infinity,
                staggerChildren: 0.03,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
            },
          },
        }}
        className="font-[450]">
        {`Welcome • Xush Kelibsiz • Добро Пожаловать • `}
      </SpinningText>
    </div>
  );
}

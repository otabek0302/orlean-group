'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './glowing-effect';

export const TestimonialsColumn = (props: { className?: string; testimonials: any; duration?: number }) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="bg-background flex flex-col gap-6 pb-6">
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }: { text: string; image: string; name: string; role: string }, i: number) => (
                <div className="shadow-primary/10 relative w-full rounded-3xl border p-10 shadow-lg" key={i}>
                  <GlowingEffect spread={70} glow={true} disabled={false} proximity={64} inactiveZone={0.02} borderWidth={5} />
                  <div className="text-copy-text text-base font-normal">{text}</div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="flex flex-col">
                      <div className="text-copy-title text-base font-medium tracking-tight">{name}</div>
                      <div className="text-copy-text text-sm tracking-tight opacity-60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

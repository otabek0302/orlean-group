import { cn } from '@/lib/utils';
import { GlowingEffect } from './glowing-effect';

interface GridItemProps {
  area: string;
  image: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export const GridItem = ({ area, image, title, description }: GridItemProps) => {
  return (
    <li className={cn('h-full list-none', area)}>
      <div className="border-border relative rounded-xl border-[0.75px] p-2 md:rounded-3xl md:p-4">
        <GlowingEffect spread={70} glow={true} disabled={false} proximity={64} inactiveZone={0.02} borderWidth={5} />
        <div className="bg-background relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-4 shadow-sm md:p-6 dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="relative border-border bg-muted w-fill min-h-[280px] h-full rounded-lg border-[0.75px] p-2 object-cover overflow-hidden">{image}</div>
            <div className="space-y-3 min-h-[130px]">
              <h3 className="pt-0.5 text-copy-title text-xl font-semibold tracking-[-0.04em] text-balance md:text-2xl">{title}</h3>
              <h2 className="text-copy-text text-sm [&_b]:md:font-semibold [&_strong]:md:font-semibold line-clamp-4">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

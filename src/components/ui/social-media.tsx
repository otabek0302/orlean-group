import Link from 'next/link';

import { Facebook, Instagram, LinkedIn, Telegram } from '@/assets';

export const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-2 md:justify-start">
      <Link target="_blank" href="https://www.facebook.com/orlean.group" className="border-primary text-primary hover:bg-primary mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:text-white dark:text-white">
        <Facebook className="h-4 w-4 fill-current" />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/orlean.group" className="border-primary text-primary hover:bg-primary mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:text-white dark:text-white">
        <Instagram className="h-4 w-4 fill-current" />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/orlean-group" className="border-primary text-primary hover:bg-primary mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:rounded-full hover:text-white dark:text-white">
        <LinkedIn className="h-4 w-4 fill-current" />
      </Link>
      <Link target="_blank" href="https://t.me/@orleangroup" className="border-primary text-primary hover:bg-primary mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:rounded-full hover:text-white dark:text-white">
        <Telegram className="h-4 w-4 fill-current" />
      </Link>
    </div>
  );
};

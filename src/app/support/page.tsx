'use client';

import { useEffect, useState } from 'react';
import { Loading } from '@/components/ui/loading';

const Support = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section id="support" className="min-h-screen w-full overflow-y-auto bg-white dark:bg-neutral-950">
        <div className="container py-16 md:py-24">
          <h1 className="text-2xl font-bold text-black md:text-4xl dark:text-white">Support</h1>
          <p>Coming soon...</p>
        </div>
      </section>
    </>
  );
};

export default Support;

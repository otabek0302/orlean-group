import { generateMetadata } from './metadata';

export { generateMetadata };

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}

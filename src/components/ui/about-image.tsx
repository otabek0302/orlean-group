import { useEffect, useState } from 'react';

import { BackgroundBeamsWithCollision } from './background-beams-with-collision';
import { Gravity, MatterBody } from './gravity';
import { useTranslation } from 'react-i18next';
import { Particles } from './particles';
import { useTheme } from 'next-themes';

export const AboutImage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[26px] border">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
      <BackgroundBeamsWithCollision>
        <Gravity gravity={{ x: 0, y: 1 }} className="z-20 h-full w-full">
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.business')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="30%">
            <div className="bg-primary rounded-xl px-8 py-4 text-xl text-white hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.it-solutions')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="40%" y="20%" angle={10}>
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.consulting')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="75%" y="10%">
            <div className="bg-primary rounded-xl px-8 py-4 text-xl text-white hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.real-estate')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="80%" y="20%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.construction')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="bg-primary rounded-xl px-8 py-4 text-xl text-white hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.investment')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.logistics')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.education')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.finance')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.retail')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-8 py-4 text-xl hover:cursor-grab sm:text-2xl md:text-3xl">{t('pages.home.about.buttons.energy')}</div>
          </MatterBody>
        </Gravity>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

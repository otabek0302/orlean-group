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
    <div className="relative h-full w-full overflow-hidden rounded-[26px] border z-50">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
      <BackgroundBeamsWithCollision>
        <Gravity gravity={{ x: 0, y: 1 }} className="z-20 h-full w-full overflow-hidden">
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="20%" y="10%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.web-development')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="25%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.mobile-development')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="45%" y="15%" angle={5}>
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.desktop-applications')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="70%" y="10%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.ai-automation')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="80%" y="20%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.services-maintenance')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="15%" y="40%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.databases')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="25%" y="55%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.design-media')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="40%" y="45%" angle={-5}>
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.documents-registration')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="60%" y="35%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.hardware-software')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="75%" y="45%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.office-solutions')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="85%" y="35%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize  hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.business-automation')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="10%" y="70%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.office-equipment')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="75%">
            <div className="border-primary text-primary rounded-xl border px-6 py-3 text-sm capitalize hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.server-hardware')}</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="70%">
            <div className="bg-primary rounded-xl px-6 py-3 text-sm capitalize text-white hover:cursor-grab sm:text-base md:text-lg">{t('pages.home.about.buttons.network-equipment')}</div>
          </MatterBody>
        </Gravity>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

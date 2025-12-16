import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Founders } from '../components/home/Founders';
import { AbuAliShowcase } from '../components/home/AbuAliShowcase';
import { FairouzShowcase } from '../components/home/FairouzShowcase';
import { VictorHugoShowcase } from '../components/home/VictorHugoShowcase';
import { BlueBlackShowcase } from '../components/home/BlueBlackShowcase';
import { DiegoVitaglianoShowcase } from '../components/home/DiegoVitaglianoShowcase';
import { NaghamShowcase } from '../components/home/NaghamShowcase';
import { UmbertoEcoShowcase } from '../components/home/UmbertoEcoShowcase';
import { Certificates } from '../components/home/Certificates';
import { Heritage } from '../components/home/Heritage';
import { Contact } from '../components/home/Contact';
import { Footer } from '../components/layout/Footer';
import AudioPlayer from '../components/ui/AudioPlayer';

const Home: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Header />
      <AudioPlayer src="/assets/piano.mp3" initialMuted={false} />
      <main>
        <Hero />
        <Services />
        <Founders />
        {/* Restaurants ordered by most recent date */}
        <DiegoVitaglianoShowcase /> {/* Recent/Ongoing */}
        <BlueBlackShowcase />       {/* 2020 */}
        <UmbertoEcoShowcase />      {/* 2019 */}
        <VictorHugoShowcase />      {/* 2018 */}
        <NaghamShowcase />          {/* 2015 */}
        <AbuAliShowcase />          {/* 2013 */}
        <FairouzShowcase />         {/* 2012 */}
        
        <Certificates />
        <Heritage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

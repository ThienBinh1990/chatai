import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Objectives from './components/Objectives';
import Features from './components/Features';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import Footer from './components/Footer';
import ChatDemo from './components/ChatDemo';

function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Objectives />
        <Features />
        <ChatDemo />
        <Process />
        <Gallery />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

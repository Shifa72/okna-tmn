import React from "react";
import Header from "./components/Header/Header";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import IntroSection from "./components/introSection";
import EffectSection from "./components/EffectSection";
import AdvertSection from "./components/AdvertSection";
import TeachingSection from "./components/TeachingSection";
import OurWorksSection from "./components/OurWorksSection";
import Footer from "./components/Footer/Footer";
import { useState } from "react";



export default function mainPage() {
  const [isHeaderVisible, setVisible] = useState(true);
  const [tab, setTab] = useState("main");

  // setTimeout(() => {setVisible(false)}, 3000)

  return (
    <>
      {isHeaderVisible && <Header />}
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <IntroSection />
            <EffectSection />
            <AdvertSection />
            <TeachingSection />
          </>
        )}

        {tab === "ourworks" && <OurWorksSection />}

        {tab === "feedback" && <FeedbackSection />}
      </main>
      {isHeaderVisible && <Footer />}
    </>
  );
}


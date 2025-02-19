import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import IntroSection from "./components/introSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";
import AdvertSection from "./components/AdvertSection";
import OurWorksSection from "./components/OurWorksSection";
import Footer from "./components/Footer/Footer";

export default function App() {
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

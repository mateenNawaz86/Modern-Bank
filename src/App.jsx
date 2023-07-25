import React from "react";
import styles from "./style";

// Import components here
import {
  Navbar,
  Hero,
  GetStarted,
  Business,
  Billing,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Testimonials,
  Footer,
  Stats,
} from "./components";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden ">
        {/* For NAVABR */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* For HERO Section */}
        <div className={` bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* For ALL OTHER COMPONENTS */}
        <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

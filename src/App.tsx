import { useRef, useState } from 'react';
import './styles/global/App.scss';
import Benefits from './blocks/benefits';
import Partners from './blocks/partners';
import ServicesProvided from './blocks/services-provided';
import Brands from './blocks/brands';
import Budget from './blocks/budget';
import Footer from './blocks/footer';
import Introduction from './blocks/introduction';

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollToSection, setScrollToSection] = useState(false);

  const handleScrollToSection = () => {
    setScrollToSection(true);
  };

  const handleSectionScroll = () => {
    if (scrollToSection && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToSection(false);
    }
  };

  return (
    <>
      <Introduction scrollToSection={handleScrollToSection} />
      <ServicesProvided />
      <Benefits />
      <Brands />
      <Partners />
      <Budget ref={sectionRef} onSectionScroll={handleSectionScroll} />
      <Footer />
    </>
  );
}

export default App;

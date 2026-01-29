import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TripForm from './components/TripForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import Footer from './components/Footer';
import { generateItinerary } from './utils/itineraryGenerator';

function App() {
  const [itineraryData, setItineraryData] = useState(null);

  const handleGenerate = (formData) => {
    const data = generateItinerary(formData);
    setItineraryData(data);
  };

  const handleRegenerate = () => {
    if (itineraryData) {
      handleGenerate({
        destination: itineraryData.destination,
        duration: itineraryData.duration,
        budget: itineraryData.budget,
        preference: itineraryData.preference
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TripForm onGenerate={handleGenerate} />
        {itineraryData && (
          <ItineraryDisplay
            data={itineraryData}
            onRegenerate={handleRegenerate}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

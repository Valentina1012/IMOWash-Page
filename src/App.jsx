import './App.css'
import Hero from './sections/Hero/Hero.jsx'
import Introduction from './sections/Introduction/Introduction.jsx'
import OurFeatures from './sections/OurFeatures/OurFeatures.jsx'
import History from './sections/History/History.jsx'
import Subscription from './sections/Subscription/Subscription';
import OurClients from './sections/OurClients/OurClients.jsx'
import Locations from './sections/Locations/Locations';
import MobileAppFeatures from './sections/MobileAppFeatures.jsx/MobileAppFeatures.jsx'

function App() {

  return (
    <>  
      <Hero />
      <Introduction />
      <OurFeatures />
      <MobileAppFeatures />
      <History />
      <Subscription />
      <OurClients />
      <Locations />
    </>
  )
}

export default App

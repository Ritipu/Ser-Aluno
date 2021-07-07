import './App.css';
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';



function App() {
  
  return (<div className="titulodoslide"><h1>Slider</h1>
  <ImageSlider slides={SliderData} />
          </div>
    )

}


export default App;


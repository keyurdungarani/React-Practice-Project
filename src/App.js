
import './App.css';
import ImageSlider from './components/image-slider';
// import Accordion from './components/accordian';
// import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
    {/* Accordian Component */}
      {/* <Accordion /> */}

    {/* Random color Generator */}
      {/* <RandomColor /> */}

    {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} />  */}
    
    {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />
    </div>
  );
}

export default App;

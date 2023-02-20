import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PetCard from './components/PetCard';
import Surround from './components/Surround';
import EventButtons from './components/EventButtons';

function App() {
  const name1 = ['Fred & Sky', 'Rex', 'Lily'];

  const image1 = [
    <img src="./public/images/mouse.jpg" />,
    <img src="./public/images/dog.jpg" />,
    <img src="./public/images/cat.jpg" />,
  ];

  const text =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nemo sed eaque voluptatum est iste animi cumque, veritatis, similique qui consequatur reprehenderit facere officia veniam harum reiciendis ipsam labore incidunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nemo sed eaque voluptatum est iste animi cumque, veritatis, similique qui consequatur reprehenderit facere officia veniam harum reiciendis ipsam labore incidunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nemo sed eaque voluptatum est iste animi cumque, veritatis, similique qui consequatur reprehenderit facere officia veniam harum reiciendis ipsam labore incidunt.';

  return (
    <div>
      <PetCard
        name={name1[0]}
        image={image1[0]}
        text={<Surround color="blue">{text}</Surround>}
      />
      <PetCard
        name={name1[1]}
        image={image1[1]}
        text={<Surround color="red">{text}</Surround>}
      />
      <PetCard
        name={name1[2]}
        image={image1[2]}
        text={<Surround color="yellow">{text}</Surround>}
      />
      
      <div className="App" style={{ border: `5px solid red`, borderRadius:"2em" }}>
        <EventButtons />
      </div>
    </div>
  );
}

export default App;

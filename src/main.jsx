import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="parent">
      <Card
        user="Dog"
        para="This is my dog and his name is Rocky."
        image='/images/dog.avif'
        link="https://en.wikipedia.org/wiki/Dog"
              />
      <Card
        user="Cat"
        para="This is my cat and his name is Kitty."
        image='/images/cat.avif'
        link="https://en.wikipedia.org/wiki/Cat"
        
      />
      <Card
        user="tiger"
        para="This is a tiger in the jungle."
        image='/images/tiger.avif'  
        link="https://en.wikipedia.org/wiki/Tiger"
      />
      <Card
        user="elephant"
        para="This is an elephant in the wild."
        image='/images/elephant.avif'
        link="https://en.wikipedia.org/wiki/Elephant"
      />    
      <Card
        user="lion"
        para="This is a lion, the king of the jungle."
        image='/images/lion.avif'
        link="https://en.wikipedia.org/wiki/Lion"
      />
      <Card
        user="panda"
        para="This is a panda eating bamboo."
        image='/images/panda.avif'
        link="https://en.wikipedia.org/wiki/Giant_panda"
      />
      <Card
      user="bear"
      para="This is a polar bear in the arctic."
      image='/images/bear.avif'
      link="https://en.wikipedia.org/wiki/Polar_bear"
    />
    <Card 
    user="cheetah"
    para="This is a cheetah running fast."
    image='/images/cheetah.avif'
    link="https://en.wikipedia.org/wiki/Cheetah"
    />
    <Card
    user="chigare"
    para="This is a chigare in the forest."
    image='/images/chigare.avif'
    link="https://en.wikipedia.org/wiki/Chigare"
    />
    <Card
    user="chimpanzee"
    para="This is a chimpanzee swinging on trees."
    image='/images/chimpanzee.avif'
    link="https://en.wikipedia.org/wiki/Chimpanzee"
    />
    <Card
    user="monkey"
    para="This is a monkey playing in the jungle."
    image='/images/monkey.avif'
    link="https://en.wikipedia.org/wiki/Monkey"
    />
    <Card
    user="horse"
    para="This is a horse running in the field."
    image='/images/horse.avif'
    link="https://en.wikipedia.org/wiki/Horse"
    />

</div>
  </StrictMode>,
)

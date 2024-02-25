import { useEffect, useState } from 'react';
import Monkeys from './components/Monkeys';
import Giraffes from './components/Giraffes';
import Elephants from './components/Eelephants';
import Footer from './components/Footer';
import './style.css/main.css';

const initalHealthStatus = {
 monkey1:{health: 100, unableToWalk: false, isDead: false},
 monkey2:{health: 100, unableToWalk: false, isDead: false},
 monkey3:{health: 100, unableToWalk: false, isDead: false},
  monkey4:{health: 100, unableToWalk: false, isDead: false},
  monkey5:{health: 100, unableToWalk: false, isDead: false},
  giraffe1: {health: 100, unableToWalk: false, isDead: false},
  giraffe2: {health: 100, unableToWalk: false, isDead: false},
  giraffe3: {health: 100, unableToWalk: false, isDead: false},
  giraffe4: {health: 100, unableToWalk: false, isDead: false},
  giraffe5: {health: 100, unableToWalk: false, isDead: false},
  elephant1: { health: 100, unableToWalk: false, isDead: false },
  elephant2: { health: 100, unableToWalk: false, isDead: false },
  elephant3: { health: 100, unableToWalk: false, isDead: false },
  elephant4: { health: 100, unableToWalk: false, isDead: false },
  elephant5: { health: 100, unableToWalk: false, isDead: false },

}

function App() {
const [health, setHealth] = useState(initalHealthStatus);

    function healthDegenerator() {
    setHealth((previousHealth) => {
      const newHealth = { ...previousHealth };
      Object.keys(newHealth).forEach((animalID) => {
        let randomNumber = Math.floor(Math.random() * 21);
        let currentHealth = newHealth[animalID].health - randomNumber;
        let unableToWalk = newHealth[animalID].unableToWalk || (animalID.startsWith('elephant') && currentHealth < 70);
        let isDead = currentHealth <= 0 || (animalID.startsWith('elephant') && unableToWalk && newHealth[animalID].unableToWalk);

        newHealth[animalID] = { health: Math.max(0, currentHealth), unableToWalk, isDead };
      });
      return newHealth;
    });
  }

  function healthGenerator(animalID) {
    setHealth((previousHealth) => {
      const newHealth = { ...previousHealth };
      let randomNumber = Math.floor(Math.random() * 16) + 10;
      let updatedHealth = newHealth[animalID].health + randomNumber;
      let unableToWalk = animalID.startsWith('elephant') && updatedHealth < 70;
      let isDead = updatedHealth <= 0;

      newHealth[animalID] = { health: Math.min(100, updatedHealth), unableToWalk: unableToWalk, isDead: isDead };
      return newHealth;
    });
  }


  return (
   <div className='container'>
   <Monkeys health={health.monkey1} name={'Bubbles'} feedBtn={() => healthGenerator('monkey1')}/>
     <Monkeys health={health.monkey2} name={'George'}  feedBtn={() => healthGenerator('monkey2')}/>
        <Monkeys health={health.monkey3} name={'Jingles'} feedBtn={() => healthGenerator('monkey3')}/>
           <Monkeys health={health.monkey4} name={'Bandit'} feedBtn={() => healthGenerator('monkey4')}/>
            <Monkeys health={health.monkey5} name={'Peanuts'} feedBtn={() => healthGenerator('monkey5')}/>

          <Giraffes health={health.giraffe1} name={'Skyler'} feedBtn={() => healthGenerator('giraffe1')}/>
              <Giraffes health={health.giraffe2} name={'Patch'} feedBtn={() => healthGenerator('giraffe2')}/>
               <Giraffes health={health.giraffe3} name={'Twiggy'} feedBtn={() => healthGenerator('giraffe3')}/>
                <Giraffes health={health.giraffe4} name={'Stretch'} feedBtn={() => healthGenerator('giraffe4')}/>
                 <Giraffes health={health.giraffe5} name={'Savannah'} feedBtn={() => healthGenerator('giraffe5')}/> 

                <Elephants health={health.elephant1} name={'Jumbo'} feedBtn={() => healthGenerator('elephant1')}/>
                 <Elephants health={health.elephant2} name={'Tusker'} feedBtn={() => healthGenerator('elephant2')}/>
                     <Elephants health={health.elephant3} name={'Kibo'} feedBtn={() => healthGenerator('elephant3')}/>
                          <Elephants health={health.elephant4} name={'Mara'} feedBtn={() => healthGenerator('elephant4')}/>
                              <Elephants health={health.elephant5} name={'Indra'} feedBtn={() => healthGenerator('elephant5')}/>

               <Footer healthDegenerator={healthDegenerator}/>
    </div>
  )
}


export default App

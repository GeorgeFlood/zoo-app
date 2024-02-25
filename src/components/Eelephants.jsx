import elephant from "../assets/images/elephant.jpg";
import deadElephant from '../assets/images/deadElephant.jpg';


function Elephants({ health, name, feedBtn }) {
  let isDead = health.isDead;
  let healthValue = health.health;
  let unableToWalk = health.unableToWalk;

  return (
      <div className='elephantGrid'>
        <div className='img__name'>
          <img src={isDead ? deadElephant : elephant} alt='Picture of Elephant' />
          <div className='name-plaque'>
          <h1>{name}</h1>
          </div>
        </div>

        <div className='healthstatus'>
        {isDead || <p>Health: {healthValue}%</p>}
          <p>
            {isDead ? `${name} has passed.` : unableToWalk ? `${name} is struggling to walk.` : `${name} is healthy`}
          </p>
        { !isDead && <button onClick={() => feedBtn()}>Feed</button> }
         </div>
      </div>
  );
}

export default Elephants;
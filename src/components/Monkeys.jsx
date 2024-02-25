import monkey from '../assets/images/monkey.jpg'
import deadMonkey from '../assets/images/deadmonkey.jpg';

function Monkeys({ health, name, feedBtn }) {
  let healthValue = health.health;

  return (
   <div className='monkeyGrid'>
      <div className='img__name'>
        <img src={healthValue < 30 ? deadMonkey : monkey} alt='Picture of monkey' />
        <div className='name-plaque'>
        <h1>{name}</h1>
        </div>
      </div>
      <div className='healthstatus'>
       {healthValue < 30 || <p>Health: {healthValue}%</p>}
        <p>
          {healthValue < 30 ? `${name} has passed.` : `${name} is healthy`}
        </p>
        {healthValue < 30 || <button onClick={feedBtn}>Feed</button>}
      </div>
   </div>
  );
}

export default Monkeys;
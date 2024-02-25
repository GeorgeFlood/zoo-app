import giraffe from '../assets/images/giraffe.jpg';
import deadGiraffe from "../assets/images/deadgiraffe.jpg";

function Giraffes({health, name, feedBtn}){
  let healthValue = health.health;

  return(
 <div className='giraffeGrid'>
      <div className='img__name'>
        <img src={healthValue < 50 ? deadGiraffe : giraffe} alt='Picture of giraffe' />
        <div className='name-plaque'>
        <h1>{name}</h1>
        </div>
      </div>
      <div className='healthstatus'>
        {healthValue < 50 || <p>Health: {healthValue}%</p>}
        <p>
          {healthValue < 50 ? `${name} has passed.` : `${name} is healthy`}
        </p>
        {healthValue < 50 || <button onClick={feedBtn}>Feed</button>}
      </div>
  </div>
  )
}

export default Giraffes;
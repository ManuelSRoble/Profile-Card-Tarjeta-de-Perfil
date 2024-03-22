import profilePic from './assets/bunny.png'
function Card(){
    return (
      <div className='card'>
        <img className='card-img' src={profilePic} alt="Profile-picture" />
        <h2 className='card-title'>Manu Developer</h2>
        <p className='card-text'>I study and i like to walk.</p>
      </div>  
    )
}

export default Card
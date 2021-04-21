
import './MCUShows.css'

const MCUShows = (releaseDates) => {
    return (
        <div className= 'MCUShows'>
           <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
           <h2>MCU Show Release Dates</h2>
           <p>WandaVision: {releaseDates.wandaVision}</p>
           <p>The Falcon and the Winter Soldier: </p>
           <p>Loki:</p>
           <p>Hawkeye:</p>
        </div>
    );
}

export default MCUShows;
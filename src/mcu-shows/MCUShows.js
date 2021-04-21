// 1a
import './MCUShows.css'

// 1b
const MCUShows = ({dates}) => {
    // div>h1+h2+p*4
    // 1c
    return (
        <div className= 'MCUShows'>
            {/* 3b */}
           <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
           <h2>MCU Show Release Dates</h2>
           <p>WandaVision: {dates.wandaVision} </p>
           <p>The Falcon and the Winter Soldier: {dates.falconWinter} </p>
           <p>Loki: {dates.loki}</p>
           <p>Hawkeye: {dates.hawkeye}</p>
        </div>
    );
}

// 1d
export default MCUShows;
//makes the volume slider
//takes 3 props from `Apps` 
//volume, handleVolume, power
//if there is no power, cannot slide


const VolumeSlider = ({ volume, handleVolume, power }) => {
    return (
        <div>
            <input 
        type="range" 
        step = "0.01"
        // no power than cannot change the volume
        onChange = { power? handleVolume : null }
        max = "1"
        min = "0"
        value={ volume }
        className="volume-slider"
        />
        </div>
        
    );
}

export default VolumeSlider;
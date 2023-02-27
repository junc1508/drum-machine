// make individual pad with props from PadList
//pad and power (true/false)
const Pad = ({ pad, power, volume, parentCallback }) => {
    const audio = new Audio(pad.url);
    const playSound = () => {
        audio.volume = volume;
        audio.play();
        parentCallback(pad.id);
    }
    
    return (
        <button className="drum-pad" id={ pad.id }  onClick = { power? playSound : null }>
            { pad.keyTrigger }
        </button>
    );
}
export default Pad;
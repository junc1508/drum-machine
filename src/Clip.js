// another way of making key pads
const Clip = ({clip}) => {
    const playSound = () => {
        //get the ID of audio 
        const audioTag = document.getElementById(clip.keyTrigger);
        
        audioTag.play();
    }
    return (
        <div className="keypad" onClick={ playSound }>
            <audio className="clip" id={clip.keyTrigger} src={clip.url}></audio>
            { clip.keyTrigger }
        </div>

    );
}
export default Clip;
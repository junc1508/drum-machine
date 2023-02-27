//makes a list of pads with props form App
//props: pads, power

import Pad from "./Pad";

const PadList = ({ pads, power, volume, parentCallback }) => {
    return (
        
        <div className="pad-list">
            {pads.map((pad) =>(
                <div>
                <Pad pad={ pad } power={ power } volume={ volume } parentCallback = { parentCallback }/>
                { power }
                </div>
            ))}
        </div>
    );
}
export default PadList;
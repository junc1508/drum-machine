//alternative way of making keypads

import Clip from "./Clip";
const Clips = ({ bank }) => {
    return (
        <div>
            {bank.map((clip) => (
                <Clip clip={ clip } />
        ))}
        </div>
    )
}
export default Clips;
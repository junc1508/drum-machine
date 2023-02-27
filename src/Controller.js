//controller mods for Power and Bank
//base on checkbox
//props from App 
//props: name, checked, handlechange, power
//when power off, cannot move
//so for the power button to be able to move, 
//pass power = true regardless of the real power state

const Controller = ({ name, checked, handleChange, power }) => {
    return (
        <div> 
            <h3>{ name }</h3>
            <label className="switch">
                <input type="checkbox" checked={ checked } onChange={ power? handleChange: null } />
                <span className="slider"></span>
            </label>
        </div>
        
    );
}
export default Controller;
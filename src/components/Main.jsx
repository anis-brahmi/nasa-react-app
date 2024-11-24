export default function Main (Props) {
const {showModel, handleToggleModel} = Props
    return (
        <div onClick={showModel ? handleToggleModel : null} className="imgContainer">
            <img src="mars.png" alt="mars" className="bgImage"/>
        </div>
    );
}
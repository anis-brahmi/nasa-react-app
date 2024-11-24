export default function SideBar(Props) {
    const {data, handleToggleModel} = Props

    return (<div className="sideBar">
        <div className="bgOverlay"></div>
        <div className="sideBarContent">
            <h2>{data.title}</h2>
            <div>
                <p>Description</p>
                <p>{data.explanation}</p>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>)
}
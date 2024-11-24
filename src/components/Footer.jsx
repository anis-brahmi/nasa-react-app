export default function Footer (Props) {
    const {data, handleToggleModel}= Props
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2> {data?.title}</h2>
                <h1>APOD project</h1>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
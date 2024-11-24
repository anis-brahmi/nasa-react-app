import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const VITE_NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const [showModel, setSHowModel] = useState(false)

    function handleToggleModel() {
        setSHowModel(!showModel)
    }

    useEffect(() => {
            async function fetchNasaData() {
                let url = `https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_API_KEY}`

                let today = (new Date()).getDay()
                const localKey = `NASA-${today}`
                if (localStorage.getItem(localKey)) {
                    let data = localStorage.getItem(localKey)
                    setData(JSON.parse(data))
                    setLoader(!loader)

                } else {
                    try {
                        let response = await fetch(url)
                        let data = await response.json()
                        localStorage.setItem(localKey, JSON.stringify(data))
                        setData(data)
                        setLoader(!loader)
                    } catch (e) {
                        localStorage.clear()
                        console.log(e)
                    }
                }

            }

            fetchNasaData()
        }

        ,
        []
    )
    return (
        <>
            {showModel && (<SideBar data={data} handleToggleModel={handleToggleModel}></SideBar>)}
            {!loader ? (<Main data={data} showModel={showModel} handleToggleModel={handleToggleModel}/>) :
                <div className="loadingState"><i className="fa-solid fa-spinner"></i></div>}
            <Footer data={data} handleToggleModel={handleToggleModel}/>
        </>
    )
}

export default App

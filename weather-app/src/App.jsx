import axios from "axios" 
import { useState } from "react"
import './app.css'
 
function App() {

      const [city, setCity] = useState('')
      const [weather, setWeather] = useState(null)
      const [error, setError] = useState(null)

      const apiKey = '9b33cd4237b6b16e133917d58343ae16'

      const getWeather = async(city)=>{
        try{
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          setWeather(response.data)
          // console.log(response)
        }
        catch(error){
          setError('City not found')  
          setWeather(null)
        }
      }

      const handleSubmit =(e)=>{
        e.preventDefault()
        getWeather(city)
        setCity('')

        // console.log("handleSubmitCalled")
      }

  return (
    <>
      <div style={styles.container}>
      <div style={styles.formDiv}>

<div className="mainDiv" style={{backgroundRepeat:'no-repeat'}}>


  
        <h1 style={styles.heading}>Weather Application</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Enter City Name..." value={city} onChange={(e)=>setCity(e.target.value)} style={styles.input} />
          <button type="submit" style={styles.button}>Get Weather</button>
        </form>

        {error && <p style={styles.error}>{error}</p>}
        {weather && <div style={styles.weather}>
          <h2 style={styles.name}>{weather.name}</h2>
          <p style={styles.ph}>{Math.floor(weather.main.temp-273.15)} °C</p>
          <p style={styles.ph}>{weather.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
          </div>
          }
      
      </div>
  </div>
      </div>
    </>
  )
}

const styles={
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  },

  form:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  input:{
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px'
  },

  button:{
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: 'white',
    marginBottom: '10px'
  },

  error:{
    color: 'red',
    textAlign: 'center'
  },

  weather:{
    textAlign: 'center',
  },

  heading:{
    color: 'Green'
  },

  formDiv:{
    display: 'flex',
    width: '35%',
    textAlign: 'center',
    borderRadius: '10px',
    border: '1px solid gray',
    boxShadow: '3px 5px 5px rgba(0, 0, 0, 0.5)'
  },

  name:{
    color: 'purple',
  },

  ph:{
    fontSize: '20px',
  },

}

export default App

import React,{useEffect,useState} from 'react';
import './covid.css'


const Covid = () => {
    const  [data, setdata] = useState([])
  const getCovidData =  async () =>{
    try{
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json(); 
        console.log(actualData.statewise[0]);   
        setdata(actualData.statewise[0]);
        console.log(res);
    }catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
      getCovidData();
  }, [])
  return (
    <>
    <section>
    <h1>Live</h1>
      <h1>Covid-19 coronavirus tracking</h1>
       <ul>
          <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>OUR</span> COUNTRY</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>      
         </li>   
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>      
         </li>
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span></span> CONFIRMED</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>      
         </li>
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> DEATHS</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>      
         </li>
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>      
         </li>
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>LAST</span> UPDATED</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>      
         </li> 
       </ul> 

    </section>
      
    </>
  )
}

export default Covid

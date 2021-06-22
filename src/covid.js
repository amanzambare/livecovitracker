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
    <center>

    <h1>Live</h1>
      <h1>Covid-19 coronavirus tracking</h1>
       
          
                        <p className="card_name"><span>OUR</span> COUNTRY</p>
                        <p className="card_total card_small">INDIA</p>
    </center>
                    
           
         
         <div className="cards"> 
                <li className="card">
                        <div className="card_main" >
                            <div className="card_inner">
                                <p className="card_name"><h1><span>TOTAL</span> RECOVERED</h1></p>
                                <p className="card_total card_small"><h3>{data.recovered}</h3></p>
                            </div>
                        </div>      
                </li>
         </div>
         <div className="cards">
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><h1> CONFIRMED</h1></p>
                        <p className="card_total card_small"><h3>{data.confirmed}</h3></p>
                    </div>
                </div>      
         </li>
         </div>
        <div className="cards">
                 <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><h1>TOTAL DEATHS</h1></p>
                        <p className="card_total card_small"><h3>{data.deaths}</h3></p>
                    </div>
                </div>      
         </li>
         </div>
         <div className="cards">
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><h1><span>TOTAL</span> ACTIVE</h1></p>
                        <p className="card_total card_small"><h3>{data.active}</h3></p>
                    </div>
                </div>      
         </li>
         </div>
         <div className="cards">
         <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><h1><span>LAST</span> UPDATED</h1></p>
                        <p className="card_total card_small"><h3>{data.lastupdatedtime}</h3></p>
                    </div>
                </div>      
         </li>
         </div> 
      

       
      
    </>
  )
}

export default Covid

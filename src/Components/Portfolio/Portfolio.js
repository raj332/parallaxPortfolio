import React from 'react'
import "./portfolio.scss"
import courier from "../../img/courier.jpg"
import cricket from "../../img/cricket.jpg"
import photowebsite from "../../img/photowebsite.jpeg"
import placement from "../../img/placement.jpg"
import notebook from "../../img/notebook.jpeg"

const data=[{
    name: "Courier Billing and Tracking" ,
    path:courier,
    link:"https://github.com/raj332/ExportBillingAndTrackingApp"
},
{
    name: "Placement Portal" ,
    path:placement,
    link:"https://github.com/raj332/UniversityPlacementPortal"
},
{
    name: "Cricket Connect" ,
    path:cricket,
    link:"https://github.com/raj332/CricketConnect"
},
{
    name: "Photography" ,
    path:photowebsite,
    link:"https://github.com/raj332/PhotographyPortfolioWebsite"
},{
    name:"Notebook",
    path:notebook,
    link:"https://github.com/raj332/NotebookWebApp"
}
]

const Portfolio = () => {
  return (
    <div id="portfolio">
        <center class="titles" data-aos="fade-up">My Portfolio</center>
        <div class="container">
{
    data.map((item ,i )=>(
             <a href={item.link} key={i}>
                <div class="work-box">
                <img src={item.path} alt="Snow" style={{width: "100%" }}/>
                <div class="centered">{item.name} </div>
                </div>
            </a>
    ))}
            
          

        </div>
    </div>
  )
}

export default Portfolio
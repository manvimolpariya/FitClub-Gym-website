import React from 'react'
import './Program.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
const Programs =()=>{
    return (
       <div className="Programs" id="programs">
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stroke-text1'>Explore our</span>
            <span className='spantag'>Programs</span>
            <span className='stroke-text1'>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program, i)=>(<div className='category' key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
            </div>
            ))
        }
        </div>
       </div>
    )
}
export default Programs;
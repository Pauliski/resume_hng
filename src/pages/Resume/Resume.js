import React from 'react'
import ResumeBody from '../../components/ResumeBody/ResumeBody'
import ResumeTop from '../../components/ResumeTop/ResumeTop'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Resume.css'

function Resume() {
    return (
        
            
                    <div className="container">
                        <div >
                            <ResumeTop />
                        </div>
                        <div style={{display: 'flex'}}>
                            <ResumeBody />
                            <Sidebar />
                        </div>
                    </div>
                    
                 
            
               
           
    )
}

export default Resume

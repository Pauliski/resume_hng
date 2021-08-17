import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        
            <div className="sidebar">
                <div className="section-one">
                    <h2 style={{margin: '0'}}>Personal Details</h2>
                    <div>
                        <ul style={{marginBottom: '0'}}>
                            <li>parokoola@gmail.com</li>
                            <li>07068546905</li>
                            <li>Lagos, Nigeria</li>
                        </ul>
                    </div>
                    
                </div>
                <div style={{height: '70%', backgroundColor: '#D8DCEC', marginTop: '0'}}>
                     <div className="other-section">
                    <div >
                        <h3 style={{margin: '0', padding: '0'}}>SKILLS</h3>
                        <ul>
                            <li>JavaScript, React , HTML, CSS, Styled-component </li>
                            <li>Photoshop, Illustrator</li>
                            <li>Netlify and Netlify-CLI</li>
                                <li>Technical</li>
                                <li>Team work</li>
                                <li>Leadership</li>
                            </ul>
                    </div>
                    <div >
                        <h3 style={{marginTop: '0', padding: '0'}}>Education</h3>
                        <p>University of Ilorin</p>
                        <p>2016</p>
                    </div>
                    <div >
                    <h3 style={{marginTop: '0', padding: '0'}}>Education</h3>
                        <p>University of Ilorin</p>
                        <p>2016</p>

                    </div>
                </div >
                </div>
               
                
            </div>
        
    )
}

export default Sidebar

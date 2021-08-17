import React from 'react'
import './Form.css'

function Form() {
    return (
        <main>
            
            <div className="form-field">
            
                 <form action="">
                 <h1>Submit A Resume</h1>
                <div className="details">
                   <span>First Name</span>
                    <div className="full-name">
                        {/* <input type="text" /> */}
                        <input type="text" className="text-input"/>
                    </div> 
                </div>
                <div className="details">
                   <span>Last Name</span>
                    <div className="full-name">
                        {/* <input type="text" /> */}
                        <input type="text" className="text-input"/>
                    </div> 
                </div>
                <div className="details">
                   <span>Address</span>
                        <div>
                            <input type="text" className="text-input"/>
                            
                        </div> 
                </div>
                <div className="details">
                   <span>Email</span>
                        <div>
                            <input type="text" className="text-input"/>
                            
                        </div> 
                </div>
                <div className="details">
                   <span>Skill Level</span>
                        <select name="" id="">
                            <option value={null} selected disabled hidden>Select skill level</option>
                            <option value=''>Junior</option>
                            <option value=''>Intermediate</option>
                            <option value=''>Senior</option>
                        </select>
                </div>
                <div className="details">
                   <span>Area of Interest</span>
                        <div className="checkboxes">
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <span>Frontend</span>
                            </div>
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <span>Backend</span>
                            </div>
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <span>DevOp</span>
                            </div>
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <span>Mobile Marketing</span>
                            </div>
                            
                            
                            
                        </div> 
                </div>
                <button className="submit-btn">Create Resume</button>
                
            </form>
            </div>
           
        </main>
    )
}

export default Form

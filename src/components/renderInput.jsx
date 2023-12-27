import { LabelInput } from "./labelInput";
import PropTypes from 'prop-types';
import {renderInputEducation, renderInputWork} from "./renderComponents"

function RenderInputComponent({personalDetails, displayPDiv, displayEdDiv, displayWorkDiv, handlePersonalDetails, handleNewEducation, handleNewWork,
     setDisplayPDiv, setDisplayEdDiv, setDisplayWorkDiv, education, handleEducation, removeEducationDiv, handleDisplayEducation, work, handleWork, removeWorkDiv, handleDisplayWork}) {
    return (
        <div className="left-main">
            <div className="inside-left-main">
                <div style={{textAlign: 'end', margin: '10px 0px'}}><button style={{fontSize: '20px', width: '100%', textAlign: 'center'}} className="reload-button" onClick = {() => {window.location.reload(true)}}>Load Example</button></div>
                
                <div className = "left-main-title" style={{display: 'flex', justifyContent: 'space-between'}}><span>Personal Details:</span>
                <span><button className = "style-button style-button-1" onClick = {() => {console.log("Hello"); console.log(displayPDiv); setDisplayPDiv(!displayPDiv)}}>{displayPDiv ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>
                
                <div id="personal-details-input" className="main-details-input">
                    <div style={{display:displayPDiv ? "block" : "none"}}>
                    <LabelInput id = "name" type = "text" value = {personalDetails.name} handleFunc = {handlePersonalDetails} labelName = "Your Name" placeholder = "Name" prop1 = "required" prop2 = {{autocomplete : "off"}}></LabelInput>
                    <LabelInput id = "mainTitle" type = "text" value = {personalDetails.mainTitle} handleFunc = {handlePersonalDetails} labelName = "Your Name" placeholder = "Title"></LabelInput>
                    <LabelInput id = "email" type = "email" value = {personalDetails.email} handleFunc = {handlePersonalDetails} labelName = "Email" placeholder = "Email"></LabelInput>
                    <LabelInput id = "contactNumber" type = "text" value = {personalDetails.contactNumber} handleFunc = {handlePersonalDetails} labelName = "Your Contact Number" placeholder = "Contact Number"></LabelInput>
                    <LabelInput id = "address" type = "text" value = {personalDetails.address} handleFunc = {handlePersonalDetails} labelName = "Address" placeholder = "Address"></LabelInput>
                    </div>
                </div>

                <div className = "left-main-title" style={{display: 'flex', justifyContent: 'space-between'}}><span>Education Details:</span>
                <span><button className="style-button style-button-1" onClick = {() => {console.log("Hello"); console.log(displayEdDiv); setDisplayEdDiv(!displayEdDiv)}}>{displayEdDiv ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>
                
                <div id="education-details-input" className="main-details-input">

                    <div className="seperate-details-main" style={{display: displayEdDiv ? "block" : "none"}}>
                        {renderInputEducation(education, handleEducation, removeEducationDiv, handleDisplayEducation)}
                        
                    </div>

                    <div style={{textAlign: 'center', margin: 'auto', display: 'flex', justifyContent: 'center'}}><button style={{display: displayEdDiv ? "flex": "none"}} className="add-more-button" onClick = {handleNewEducation}>Add more +</button></div>
                
                </div>

                <div className = "left-main-title" style={{display: 'flex', justifyContent: 'space-between'}}><span>Work Details:</span>
                <span><button className = "style-button style-button-1" onClick = {() => {console.log("Hello"); console.log(displayWorkDiv); setDisplayWorkDiv(!displayWorkDiv)}}>{displayWorkDiv ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>

                    <div id="work-details-input" className="main-details-input">

                    <div className="seperate-details-main" style={{display: displayWorkDiv ? "block" : "none"}}>
                        {renderInputWork(work, handleWork, removeWorkDiv, handleDisplayWork)}
                        
                    </div>

                    <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><button style={{display: displayWorkDiv ? "flex": "none"}} className="add-more-button" onClick = {handleNewWork}>Add more +</button></div>
                </div>

            </div>
        </div>
    )
}

RenderInputComponent.propTypes = {
    personalDetails: PropTypes.object.isRequired, // Adjust the type as needed
    displayPDiv: PropTypes.bool.isRequired,
    displayEdDiv: PropTypes.bool.isRequired,
    displayWorkDiv: PropTypes.bool.isRequired,
    handlePersonalDetails: PropTypes.func.isRequired,
    handleNewEducation: PropTypes.func.isRequired,
    handleNewWork: PropTypes.func.isRequired,
    setDisplayPDiv: PropTypes.func.isRequired,
    setDisplayEdDiv: PropTypes.func.isRequired,
    setDisplayWorkDiv: PropTypes.func.isRequired,
    education: PropTypes.array.isRequired, // Adjust the type as needed
    handleEducation: PropTypes.func.isRequired,
    removeEducationDiv: PropTypes.func.isRequired,
    handleDisplayEducation: PropTypes.func.isRequired,
    work: PropTypes.array.isRequired, // Adjust the type as needed
    handleWork: PropTypes.func.isRequired,
    removeWorkDiv: PropTypes.func.isRequired,
    handleDisplayWork: PropTypes.func.isRequired,
  };

export {RenderInputComponent}
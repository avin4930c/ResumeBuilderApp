import { useState } from 'react'
import { LabelInput } from './components/labelInput.jsx';
import { CreateEducationDiv, CreateWorkDiv } from './components/creatediv.jsx';



function App() {
    const [personalDetails, setPersonalDetails] = useState({name: "Julia Andreson", mainTitle: "SENIOR STUDENT", email: "resumedraft@gmail.com", contactNumber: "+12025550186", address: "12th street, Charlote, North Carolina"});
    const [education, setEducation] = useState({main: [{title: "MTECH COMPUTER SCIENCE ENGINEERING", year: "2022-05-28", yearEnd: "2027-04-10", name: "Vellore Institute of Technology, Vellore", display: true}]});
    const [work, setWork] = useState([{position: "SENIOR SOFTWARE DEVELOPER", year: "2022-03-05", yearEnd: "2024-05-29", place: "Meta Facebook, New York", disabled: true, display: true}]);
    const [displayEdDiv, setDisplayEdDiv] = useState(true);
    const [displayWorkDiv, setDisplayWorkDiv] = useState(true);
    const [displayPDiv, setDisplayPDiv] = useState(true);

    function handlePersonalDetails(e) {
        const {id, value} = e.target;
        console.log(id);
        setPersonalDetails(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    function handleEducation(e) {
        const id = parseInt(e.target.parentNode.getAttribute("data-edid"), 10);
        const { name, value } = e.target;
        console.log(name, value, id);
      
        setEducation((prevState) => ({
          main: prevState.main.map((entry, index) =>
            index === id
              ? {
                  ...entry,
                  [name]: value
                }
              : entry
          )
        }));
      }

    function handleDisplayEducation(id) {
    console.log(id);

    setEducation((prevState) => ({
        main: prevState.main.map((entry, index) =>
            index === id
            ? {
                ...entry,
                display: !(entry.display)
                }
            : entry
        )
        }));
      }

    function handleNewEducation() {
    setEducation((prevState) => ({
        main: [...prevState.main, {title: "", year: "", yearEnd: "", name: "", display: true}]
    }))
    }

    function handleNewWork() {
        setWork((prevState) => (
            [...prevState, {position: "", year: "", yearEnd: "", place: "", display: true}]
        ))
    }

    function handleWork(e) {
        const key1 = parseInt(e.target.parentNode.getAttribute("data-wid"));
        const {name, value} = e.target;
        console.log(key1);

        setWork((prevState) => 
            prevState.map((entry, index) =>
              index === key1
                ? {
                    ...entry,
                    [name]: value
                  }
                : entry
            )
        );
    }

    function handleDisplayWork(id, checkBox, e) {
        console.log(id);
        checkBox !== "disable" ? setWork((prevState) => (
            prevState.map((entry, index) =>
                index === id
                ? {
                    ...entry,
                    display: !(entry.display)
                    }
                : entry
            )
            )) :
            
            setWork((prevState) => (
                prevState.map((entry, index) =>
                    index === id
                    ? {
                        ...entry,
                        disabled: e.target.checked
                        }
                    : entry
                )
                ))
    }

    function removeEducationDiv(e) {
        const id = parseInt(e.target.parentNode.getAttribute("edId"), 10);
        console.log(id);
        setEducation((prevState) => ({
            ...prevState,
            main: prevState.main.filter((entry, index) => index !== id)
        }));
    }

    function removeWorkDiv(e) {
        const id = parseInt(e.target.parentNode.getAttribute("wID"), 10);
        console.log(id);
        setWork((prevState) => (
            prevState.filter((entry, index) => index !== id)
        ))
    }

    function renderInputEducation() {
        return education.main.map((data, index) => (
            <>
            <div className="seperate-detail">
            <div data-edid = {index} className="detail-main" style={{display: 'flex', justifyContent: 'space-between'}}><span>Detail {index + 1}:</span>
            <span><span data-edid = {index} style={{marginRight: '5px'}}><button data-edid = {index} className="style-button" onClick = {removeEducationDiv}><i className="fa-solid fa-trash"></i></button></span>
            <button data-edid = {index} className="style-button" onClick = {() => handleDisplayEducation(index)}>{education.main[index].display ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>
            <div key = {index} data-edid = {index} style={{display: education.main[index].display ? "block": "none"}} className = "seperate-details">
                <LabelInput id = "education-title" type = "text" value = {education.main[index].title} handleFunc = {handleEducation} labelName = "Education" placeholder = "Education Title"></LabelInput>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0px'}}>
                <div style={{width: '40%'}} data-edid = {index}>
                    <LabelInput id = "education-year" type = "date" value = {education.main[index].year} handleFunc = {handleEducation} labelName = "Education Start Year" placeholder = "Education Year"></LabelInput>
                </div>
                <div style={{width: '40%'}} data-edid = {index}>
                <LabelInput id = "education-yearEnd" type = "date" value = {education.main[index].yearEnd} handleFunc = {handleEducation} labelName = "Education End Year" placeholder = "Education Year"></LabelInput>
                </div>
                </div>
                <LabelInput id = "college-name" type = "text" value = {education.main[index].name} handleFunc = {handleEducation} labelName = "College Name" placeholder = "College Name"></LabelInput>
            </div>
            </div>
            </>
        ))
    }

    function renderEducation() {
        return education.main.map((data, index) => (
            <CreateEducationDiv key={index} id={index} data = {education}></CreateEducationDiv>
        ))}

    function renderInputWork() {
        return work.map((data, index) => (
            <>
            <div className="seperate-detail">
            <div data-wid = {index} className="detail-main" style={{display: 'flex', justifyContent: 'space-between'}}><span>Work Detail {index + 1}:</span>
            <span><span data-wid = {index} style={{marginRight: '5px'}}><button data-wid = {index} className="style-button" onClick = {removeWorkDiv}><i className="fa-solid fa-trash"></i></button></span>
            <button data-wid = {index} className="style-button" onClick = {() => handleDisplayWork(index)}>{work[index].display ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>
            <div key = {index} data-wid = {index} style={{ display: work[index].display ? 'block' : 'none' }} className = "seperate-details">
            <LabelInput id = "work-position" type = "text" value = {work[index].position} handleFunc = {handleWork} labelName = "Work Position" placeholder= "Work Position"></LabelInput>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0px'}}>
            <div style={{width: '40%'}} data-wid = {index}>
                <LabelInput id = "work-year" type = "date" value = {work[index].year} handleFunc = {handleWork} labelName = "Work End Year"></LabelInput>
            </div>
            <div style={{width: '40%'}} data-wid = {index}>
                <LabelInput id = "work-yearEnd" type = "date" value = {work[index].yearEnd} handleFunc = {handleWork} labelName = "Work End Year" disabled={work[index].disabled}></LabelInput>
                <label htmlFor={`current${index}`}>Current</label>
                <input type = "checkbox" id = {`current${index}`} name = {`current${index}`} onChange={(e) => handleDisplayWork(index, "disable", e)} checked={work[index].disabled}></input>
            </div>
            </div>
            
            <LabelInput id = "work-place" type = "text" value = {work[index].place} handleFunc = {handleWork} labelName = "Work Place" placeholder="Work Place"></LabelInput>
            </div>
            </div>
            </>
        ))
    }

    function renderWork() {
        return work.map((data, index) => (
            <CreateWorkDiv key = {index} id = {index} data = {work}></CreateWorkDiv>
        ))
    }

    return(
        <>
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
                        {renderInputEducation()}
                        
                    </div>

                    <div style={{textAlign: 'center', margin: 'auto', display: 'flex', justifyContent: 'center'}}><button style={{display: displayEdDiv ? "flex": "none"}} className="add-more-button" onClick = {handleNewEducation}>Add more +</button></div>
                
                </div>

                <div className = "left-main-title" style={{display: 'flex', justifyContent: 'space-between'}}><span>Work Details:</span>
                <span><button className = "style-button style-button-1" onClick = {() => {console.log("Hello"); console.log(displayWorkDiv); setDisplayWorkDiv(!displayWorkDiv)}}>{displayWorkDiv ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button></span></div>

                    <div id="work-details-input" className="main-details-input">

                    <div className="seperate-details-main" style={{display: displayWorkDiv ? "block" : "none"}}>
                        {renderInputWork()}
                        
                    </div>

                    <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><button style={{display: displayWorkDiv ? "flex": "none"}} className="add-more-button" onClick = {handleNewWork}>Add more +</button></div>
                </div>

            </div>
        </div>
        
        <div className = "right-main">
            <div id = "main1">
                <div className="main-name text-center">{personalDetails.name || "YOUR NAME HERE"}</div>
                <div className="main-position text-center text-capitalize">{personalDetails.mainTitle || "YOUR TITLE HERE"}</div>
            </div>
            <div id="main2">
                <div className="icon-details">
                <div className="main-email">{personalDetails.email}</div>
                </div>
                <div className="icon-details" data-icon="\f095">
                <div className="main-ph-number">{personalDetails.contactNumber}</div>
                </div>
                <div className="icon-details" data-icon="\f015">
                <div className="main-address">{personalDetails.address}</div>
                </div>
            </div>
            <div id="main3">
                <div id="education-experience">
                    <div className="education-main-title">
                        <h3>EDUCATION</h3>
                    </div>
                    {renderEducation()}
                </div>

                <div id="work-experience">
                    <div className="work-experience-main-title">
                        <h3>Experience</h3>
                    </div>
                    {renderWork()}
                </div>
            </div>
            </div>
        </>
    )
    
}

export default App

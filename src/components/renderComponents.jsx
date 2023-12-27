import { LabelInput } from "./labelInput"
import { CreateEducationDiv, CreateWorkDiv } from "./creatediv"

function renderInputEducation(education, handleEducation, removeEducationDiv, handleDisplayEducation) {
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

function renderEducation(education) {
    return education.main.map((data, index) => (
        <CreateEducationDiv key={index} id={index} data = {education}></CreateEducationDiv>
    ))}

function renderInputWork(work, handleWork, removeWorkDiv, handleDisplayWork) {
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

function renderWork(work) {
    return work.map((data, index) => (
        <CreateWorkDiv key = {index} id = {index} data = {work}></CreateWorkDiv>
    ))
}

export {renderInputEducation, renderEducation, renderInputWork, renderWork}
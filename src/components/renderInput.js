// import { LabelInput } from './labelInput';

// function RenderInputEducation({education, handleDisplayFunction, handleRemoveDiv, handleFunction}) {
//     console.log(education.main[0], "hello");
//         return education.main.map((education, index) => (
//             <>
//             <div className="seperate-detail">
//             <div edId = {index} className="detail-main" style={{display: 'flex', justifyContent: 'space-between'}}><span>Detail {index + 1}:</span>
//             <span><span edId = {index} style={{marginRight: '5px'}}><button edId = {index} className="style-button" onClick = {handleRemoveDiv}><i class="fa-solid fa-trash"></i></button></span>
//            </span></div>
//             <div key = {index} edId = {index} style={{display: education.main[index].display ? "block": "none"}} className = "seperate-details">
//                 <LabelInput id = "education-title" type = "text" value = {education.main[index].title} handleFunc = {handleFunction} labelName = "Education" placeholder = "Education Title"></LabelInput>
//                 <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0px'}}>
//                 <div style={{width: '40%'}} edId = {index}>
//                     <LabelInput id = "education-year" type = "date" value = {education.main[index].year} handleFunc = {handleFunction} labelName = "Education Start Year" placeholder = "Education Year"></LabelInput>
//                 </div>
//                 <div style={{width: '40%'}} edId = {index}>
//                 <LabelInput id = "education-yearEnd" type = "date" value = {education.main[index].yearEnd} handleFunc = {handleFunction} labelName = "Education End Year" placeholder = "Education Year"></LabelInput>
//                 </div>
//                 </div>
//                 <LabelInput id = "college-name" type = "text" value = {education.main[index].name} handleFunc = {handleFunction} labelName = "College Name" placeholder = "College Name"></LabelInput>
//             </div>
//             </div>
//             </>
//         ))
//     }

// export { RenderInputEducation }
import { useState } from 'react'
import { RenderInputComponent } from './components/renderInputComponent.jsx';
import { renderEducation, renderWork } from './components/renderComponents.jsx';



function App() {
    const [personalDetails, setPersonalDetails] = useState({ name: "Julia Andreson", mainTitle: "SENIOR STUDENT", email: "resumedraft@gmail.com", contactNumber: "+12025550186", address: "12th street, Charlote, North Carolina" });
    const [education, setEducation] = useState({ main: [{ title: "MTECH COMPUTER SCIENCE ENGINEERING", year: "2022-05-28", yearEnd: "2027-04-10", name: "Vellore Institute of Technology, Vellore", display: true }] });
    const [work, setWork] = useState([{ position: "SENIOR SOFTWARE DEVELOPER", year: "2022-03-05", yearEnd: "2024-05-29", place: "Meta Facebook, New York", disabled: true, display: true }]);
    const [displayEdDiv, setDisplayEdDiv] = useState(true);
    const [displayWorkDiv, setDisplayWorkDiv] = useState(true);
    const [displayPDiv, setDisplayPDiv] = useState(true);

    function handlePersonalDetails(e) {
        const { id, value } = e.target;
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
            main: [...prevState.main, { title: "", year: "", yearEnd: "", name: "", display: true }]
        }))
    }

    function handleNewWork() {
        setWork((prevState) => (
            [...prevState, { position: "", year: "", yearEnd: "", place: "", display: true }]
        ))
    }

    function handleWork(e) {
        const key1 = parseInt(e.target.parentNode.getAttribute("data-wid"));
        const { name, value } = e.target;
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
        const id = parseInt(e.target.parentNode.getAttribute("data-edid"), 10);
        console.log(id);
        setEducation((prevState) => ({
            ...prevState,
            main: prevState.main.filter((entry, index) => index !== id)
        }));
    }

    function removeWorkDiv(e) {
        const id = parseInt(e.target.parentNode.getAttribute("data-wiD"), 10);
        console.log(id);
        setWork((prevState) => (
            prevState.filter((entry, index) => index !== id)
        ))
    }

    return (
        <>
            <RenderInputComponent
                personalDetails={personalDetails}
                displayPDiv={displayPDiv}
                displayEdDiv={displayEdDiv}
                displayWorkDiv={displayWorkDiv}
                handlePersonalDetails={handlePersonalDetails}
                handleNewEducation={handleNewEducation}
                handleNewWork={handleNewWork}
                setDisplayPDiv={setDisplayPDiv}
                setDisplayEdDiv={setDisplayEdDiv}
                setDisplayWorkDiv={setDisplayWorkDiv}
                education={education}
                handleEducation={handleEducation}
                removeEducationDiv={removeEducationDiv}
                handleDisplayEducation={handleDisplayEducation}
                work={work}
                handleWork={handleWork}
                removeWorkDiv={removeWorkDiv}
                handleDisplayWork={handleDisplayWork}
            />

            <div className="right-main">
                <div id="main1">
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
                        {renderEducation(education)}
                    </div>

                    <div id="work-experience">
                        <div className="work-experience-main-title">
                            <h3>Experience</h3>
                        </div>
                        {renderWork(work)}
                    </div>
                </div>
            </div>
        </>
    )

}

export default App

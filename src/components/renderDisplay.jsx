import PropTypes from 'prop-types';
import { renderEducation, renderWork } from './renderComponents';

function RenderDisplay({ personalDetails, education, work }) {
    return (
        <>
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

RenderDisplay.propTypes = {
    personalDetails: PropTypes.object.isRequired,
    education: PropTypes.object.isRequired,
    work: PropTypes.object.isRequired,
}

export { RenderDisplay }
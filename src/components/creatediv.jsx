import { formatMonthAndYear } from './dateformatter.jsx';
import PropTypes from 'prop-types';

function CreateEducationDiv({id, data }) {
    return (
        <div id={`e${id}`} className="education-details-div">
        <div className="education-title">
            <span>{data.main[id].title}</span>
            <div className="education-year">
            <span>{data.main[id].year? formatMonthAndYear(data.main[id].year) : ""} - {data.main[id].yearEnd ? formatMonthAndYear(data.main[id].yearEnd) : ""}</span>
            </div>
        </div>
        <div className="college-name">
            <span>{data.main[id].name}</span>
        </div>
        </div>
    );
}

function CreateWorkDiv({id, data}) {
    return(
        <>
        <div id="work-experience-inside">
            <div className="position">
                <span>{data[id].position}</span>
                <div className="work-year text-end"><span>{ data[id].year? formatMonthAndYear(data[id].year) : ""} - {data[id].disabled ? "current" : data[id].yearEnd ? formatMonthAndYear(data[id].yearEnd) : ""}</span></div>
            </div>
            <div className="company-name">
                <span>{data[id].place}</span>
            </div>
            {/* <div class="resposibilities">
                <h5 style={{ padding: '5px 0px' }}>Responsibilities</h5>
                <span>
                    <ul>
                    <li>To manange the company's top products</li>
                    <li>To test new features and develop them</li>
                    </ul>
                </span>
            </div> */}
        </div>
        </>
    )
}

CreateEducationDiv.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.shape({
        main: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                year: PropTypes.string,
                yearEnd: PropTypes.string,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

CreateWorkDiv.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.string.isRequired,
            year: PropTypes.string,
            yearEnd: PropTypes.string,
            place: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
};

export { CreateEducationDiv, CreateWorkDiv }
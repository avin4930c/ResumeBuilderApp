import PropTypes from 'prop-types';
function LabelInput({id, type, labelName, value, classLabel = "form-label", handleFunc, classInput = "form-control", placeholder,disabled, prop1, prop2}) {
    return(
        <>
        <label htmlFor = {id} className = {classLabel}>{labelName + ": "}</label>
        <input type = {type} id = {id} className = {classInput} name = {id.split("-")[1]} value = {value} onChange = {handleFunc} placeholder = {placeholder} disabled = {disabled} {...prop1} {...prop2}></input>
        </>
    )
}

LabelInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    classLabel: PropTypes.string,
    handleFunc: PropTypes.func.isRequired,
    classInput: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    prop1: PropTypes.object,
    prop2: PropTypes.object,
  };
export { LabelInput}
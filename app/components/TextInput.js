import React from 'react';

export default ({label, placeholder, errorMessage, handleChange, value}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type="text" className={`form-control ${errorMessage.length > 0 ? 'is-invalid' : ''}`}
                   placeholder={placeholder}
                   onChange={(e) => handleChange(e.target.value)}
                   value={value}
                   data-testid="searchJokeInput"
            />
            <div data-testid="inputErrorMessage" className="invalid-feedback">
                {errorMessage}
            </div>            
        </div>
    );
}

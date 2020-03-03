import React from 'react';

export default ({joke}) => {
    if (!joke) {
        return null;
    }
    return (
        <div className="mt-5 alert alert-success">
            <p className="text-dark font-weight-bold">{joke}</p>
        </div>
    );
};

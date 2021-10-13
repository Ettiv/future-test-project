import React from 'react';

const Spinner:React.FC = () => {
    return (
        <div className="d-flex m-5 justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
}

export default Spinner;
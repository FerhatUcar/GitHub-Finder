import React from 'react';

const Alert = ({alert}) => {
    // const [visible, setVisible] = useState('');

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.msg}
            </div>
        )
    );
};

export default Alert;

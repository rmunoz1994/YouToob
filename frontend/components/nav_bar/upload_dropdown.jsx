import React from 'react';

class UploadDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-content-upload">
                    <div className="drop-group">
                        <div className="drop-item">
                            <div className="drop-icon">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div>Upload video</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadDropdown;
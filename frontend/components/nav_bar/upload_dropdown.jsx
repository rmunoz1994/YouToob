import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadDropdown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.popUp = this.popUp.bind(this);
        this.disappear = this.disappear.bind(this);
        this.handleUploadLink = this.handleUploadLink.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.popUp);
    }

    popUp(e) {
        e.preventDefault();
        this.setState({ visibility: true }, () => {
            document.addEventListener('click', this.disappear);
        });
    }

    disappear(e) {
        this.setState({ visibility: false }, () => {
            document.removeEventListener('click', this.disappear);
        });
    }

    handleUploadLink() {
        this.props.history.push('/upload');
    }

    render() {
        let dropdown;
        if (this.state.visibility) {
            dropdown = (
                <div className="dropdown">
                    <div className="dropdown-content-upload">
                        <div className="drop-group">
                            <div className="drop-item" onClick={this.handleUploadLink}>
                                <div className="drop-icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <div>Upload video</div>
                            </div>
                        </div>
                    </div>
                </div>   
            );
        } else {
            dropdown = (<div></div>);
        }
        return (
            <button className="nav-bar-button" onClick={this.popUp}>
                <i id="icon" className="fas fa-video"></i>
                {dropdown}
            </button>
        );
    }
}

export default withRouter(UploadDropdown);
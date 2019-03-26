import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './singup';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

// const mapStateToProps = dispatch => ({
//     formElement: 'email'
// });

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(Login);
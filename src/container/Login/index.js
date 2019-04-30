import { connect } from 'react-redux';
import Login from './Login';
import { loginUser } from '../../store/user';

const mapStateToProps = state => state;

const mapDispatchToProps = {
  login: email => loginUser(email),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

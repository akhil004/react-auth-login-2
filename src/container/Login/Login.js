import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './style';
class Login extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
    }
    state={
        formValues: {},
        loading: false,
        error: {},
    }
    static getDerivedStateFromProps(props, state) {
      if (props.userStore.user) {
        props.history.push('/dashboard');
      }
      if (props.userStore.error && state.error !== props.userStore.error) {
        return { error: props.userStore.error, loading: false };
      }
      return null;
    }

    /**
     * Login Function
     */
    loginUser = () => {
      const { login } = this.props;
      const { formValues } = this.state;
      login(formValues);

      this.setState(state => ({ loading: !state.loading }));
    }

    /**
     * Login Function
     */
    loginUser = () => {
      const { login } = this.props;
      const { formValues } = this.state;
      login(formValues);

      this.setState(state => ({ loading: !state.loading }));
    }
  
      handleChange = (e) => {
        const { formValues } = this.state;
        formValues[e.target.name] = e.target.value;
        this.setState(() => ({ formValues }));
      }
    render(){
        const { classes } = this.props;
        return(
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} required/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange}/>
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.loginUser}
                >
                  Sign in
                </Button>
              </form>
            </Paper>
      </main>
        )
    }
} 

export default withStyles(styles)(Login);
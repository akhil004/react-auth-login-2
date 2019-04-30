import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LOADING } from '../../utils/constant';
import { connect } from 'react-redux';
const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function Loader(props) {
  const { classes } = props;
  console.log("props", props.phase)
  if (props.phase === LOADING) {
    return (
      <CircularProgress className={classes.progress} color="secondary" />
    );
  }
  return null;
  
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ userStore }) => userStore;
export default connect (mapStateToProps)(withStyles(styles)(Loader)) ;
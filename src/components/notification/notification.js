import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { ERROR } from '../../utils/constant';
import { connect } from 'react-redux';
class Notification extends React.Component {
    state = {
        open: false,
        vertical: 'top',
        horizontal: 'right',
      };
    handleClose = () => {
        this.setState({ open: false });
      };
      componentDidUpdate(prevProps, prevState) {
        if(prevProps.phase!==this.props.phase){
          this.setState({open: true});
        }
      } 
    render(){
        const {error } = this.props
        const { open, vertical, horizontal} = this.state;
            return(
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    onClose={this.handleClose}
                    message={<span id="message-id">{error ? error.error : 'Login Successfully'}</span>}
                />
            )
        
    }
}

const mapStateToProps = ({userStore}) => userStore
export default connect(mapStateToProps)(Notification);
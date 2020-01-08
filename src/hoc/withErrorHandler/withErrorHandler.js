import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null})
            });
            axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        };
        render(){
            return(
                <Wrapper>
                    <Modal show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                        Something didn't work.
                        clicked = {this.errorConfirmedHandler}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            )
        }
    }
}

export default withErrorHandler;
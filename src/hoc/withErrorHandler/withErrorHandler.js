import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error})
            });

        }

        componentWillUnmount(){ //cleanup
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        };

        render(){
            return(
                <Wrapper>
                    <Modal show={this.state.error}
                           modalClosed = {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}

                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            )
        }
    }
}

export default withErrorHandler;
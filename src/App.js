import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Router, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./redux/redux-store";
import './App.scss';
import Parameters from "./components/Parameters/Parameters";
import Preview from "./components/Preview/Preview";
import history from './history'

class App extends Component {

    // componentDidMount() {
    //     history.push('/');
    // }

    render() {

        return (
            <div className='app'>
                <div className='app__content'>
                    <div className='app__content-left-side'>
                        <Parameters/>
                    </div>
                    <div className='app__content-right-side'>
                        <Route path={`/preview`}
                               render={() => {
                                   return (<Preview/>)
                               }}/>

                    </div>
                </div>
            </div>
        )
    }
};


let mapStateToProps = (state) => {
    return ({})
}


let AppContainer = compose(
    connect(mapStateToProps, {}),
    withRouter
)(App);


const QuietMedia = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <Router history={history}>
                <AppContainer/>
            </Router>
        </Provider>
    </BrowserRouter>
}

export default QuietMedia;



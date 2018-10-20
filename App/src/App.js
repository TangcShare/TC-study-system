import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import TabBarExample from "./components/tabBar";
import CourseListIndex from "./containers/course/courseListIndex";
import Ad from "./containers/course/ad";
import TuijianDetail from "./containers/course/tuijianDetail";
import DocumentDetail from "./containers/course/documentDetail";
import Register from "./containers/user/register";
import Notice from "./containers/user/notice";
import Star from "./containers/user/star";
import Answer from "./containers/user/answer";
import Response from "./containers/user/response";
import VideoDetail from "./containers/course/videoDetail";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Route exact path='/' component={TabBarExample}/>
                <Route exact path='/courseList/:id' component={CourseListIndex}/>
                <Route path='/ad' component={Ad}/>
                <Route path='/tjDetail' component={TuijianDetail}/>
                <Route path='/documentDetail' component={DocumentDetail}/>
                <Route path='/videoDetail' component={VideoDetail}/>
                <Route path='/register' component={Register}/>
                <Route path='/notice' component={Notice}/>
                <Route path='/star' component={Star}/>
                <Route path='/answer' component={Answer}/>
                <Route path='/response' component={Response}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { Badge } from 'reactstrap';



class Home extends Component {

    render() {

        return (
            <div class="bg">
                <div className="text-center">

                    <div className="landingpage-style">
                        <h1>Road Trip Advisor</h1>
                        <p> Share Road Trip Advisor with your friends!</p>
                    </div>
                    <div class="container my-1">
                        <div class="row text-center pb-1">

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card acik-renk-form">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group ">
                                                    <input type="Location" class="form-control" id="exampleFormControlInput1" placeholder="Starting From" />
                                                </div>
                                            </div>


                                            <div class="col-md-3">
                                                <div class="form-group ">
                                                    <input type="Destination" class="form-control" id="exampleFormControlInput1" placeholder="Destination" />

                                                </div>
                                            </div>

                                            <div class="col-md-3 ">
                                                <div class="form-group ">

                                                    <input type="date" placeholder="Depart" className="form-control" />

                                                </div>
                                            </div>

                                            <div class="col-md-3 ">
                                                <div class="form-group ">

                                                    <input type="time" placeholder="Return" className="form-control" />

                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <div class="form-group ">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <button
                                                    type="button"
                                                    class="btn btn-warning  pl-5 pr-5">
                                                
                                                    Search </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default Home;
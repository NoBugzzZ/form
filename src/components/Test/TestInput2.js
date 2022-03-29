import React from "react";
import { EvenBus } from "../../utils/EventBus";
import './index.css'

export class TestInput2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "" };
        this.eventbus = EvenBus;
    }
    componentDidMount() {
        // this.eventbus.subscribe(["input1"], (value) => {
        //     console.log("sub:",value)
        //     this.setState({ value })
        // })
    }
    componentDidUpdate(){
        this.eventbus.publish("input2",this.state.value)
    }
    render() {
        return (
            <div className="content">
                <label for="名称">名</label>
                <input type="text" name="名称" value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}>
                </input>
                {/* <button onClick={() => {
                    console.log(this.state, this.eventbus)
                }}>click</button> */}
            </div>
        )
    }
}
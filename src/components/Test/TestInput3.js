import React from "react";
import { EvenBus } from "../../utils/EventBus";
import './index.css'

export class TestInput3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "" };
        this.eventbus = EvenBus;
    }
    componentDidMount() {
        this.eventbus.subscribe(["input1", "input2"], (value1, value2) => {
            console.log(`sub: ${value1} ${value2}`)
            this.setState({ value: `${value1} ${value2}` })
        })
    }
    render() {
        return (
            <div className="content">
                <label for="名称">姓名</label>
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
import React from "react";
import { EvenBus } from "../../utils/EventBus";
import './index.css'

export class TestInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "" };
        this.eventbus = EvenBus;
    }

    componentDidUpdate() {
        this.eventbus.publish("input1", this.state.value)
    }
    render() {
        return (
            <div className="content">
                <label for="名称">姓</label>
                <input type="text" name="名称" value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}
                >

                </input>
                {/* <button onClick={() => {
                    console.log(this.state, this.eventbus)
                }}>click</button> */}
            </div>
        )
    }
}
import React from "react";
import './index.css'

export default class Grid extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div
                className="grid-container"
                style={{
                    gridTemplateRows:`repeat(${this.props.row},50px)`,
                    gridTemplateColumns:`repeat(${this.props.col},1fr)`,
                }}
            >
                {this.props.children}
            </div>
        )
    }
}
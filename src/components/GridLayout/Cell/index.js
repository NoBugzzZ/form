import React from "react";
import './index.css'

export default class Cell extends React.Component {

    render() {
        return (
            <div
                className="cell"
                style={{
                    gridRow:`${this.props.row} / span ${this.props.rowspan}`,
                    gridColumn:`${this.props.col} / span ${this.props.colspan}`,
                }}
            >
                {this.props.children}
            </div>
        )
    }
}
import React, { Component } from "react";
import TreeChart from "@ssthouse/react-tree-chart";
import "@ssthouse/react-tree-chart/lib/react-tree-chart.css";

interface IProps {}

const sampleData = {
    value: "1",
    children: [
        { value: "2", children: [{ value: "4" }, { value: "5" }] },
        { value: "3" },
    ],
};

class D3 extends Component<IProps> {
    render() {
        return (
            <div>
                <TreeChart
                    dataset={sampleData}
                    collapseEnabled={true}
                    style={{
                        width: "600px",
                        height: "600px",
                        border: "1px solid black",
                    }}
                    renderCustomNode={({ data, collapsed }) => {
                        console.log(data, collapsed);
                        return (
                            <div>
                                <span style={{ color: "green" }}>
                                    {(data as any).value +
                                        (collapsed ? "yes" : "no")}
                                </span>
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}

export default D3;

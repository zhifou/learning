import { Component } from "react"

const withStorage = (WrappedComponent) => (key) => {
    return class extends Component {
        componentWillMount() {
            let data = localStorage.getItem(key);
            this.setState({data});
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default withStorage;
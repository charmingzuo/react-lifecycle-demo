var Switcher = React.createClass({displayName: "Switcher",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        this.setState({on: !this.state.on});
    },
    render: function () {
        return (
            React.createElement("button", {onClick: this.clickHandle}, 
                this.state.on ? 'On' : 'Off'
            )
        );
    }
});
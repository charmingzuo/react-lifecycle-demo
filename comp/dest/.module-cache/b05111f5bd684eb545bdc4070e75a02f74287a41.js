var Switcher = React.createClass({displayName: "Switcher",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        this.setState({on: !this.state.on});
        console.log();
    },
    render: function () {
        return (
            React.createElement("button", {onClick: this.clickHandle, className: this.state.on ? 'on' : 'off'}, 
                this.state.on ? 'On' : 'Off'
            )
        );
    }
});
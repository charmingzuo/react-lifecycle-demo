var Switcher = React.createClass({displayName: "Switcher",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        console.log('this.setState(' + !this.state.on + ')');
        this.setState({on: !this.state.on});
    },
    render: function () {
        return (
            React.createElement("button", {onClick: this.clickHandle, className: this.state.on ? 'on' : 'off'}, 
                this.state.on ? 'On' : 'Off'
            )
        );
    }
});
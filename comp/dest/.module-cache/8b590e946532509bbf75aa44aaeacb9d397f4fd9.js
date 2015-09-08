var Switcher = React.createClass({displayName: "Switcher",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        console.log('this.setState({on: ' + !this.state.on + '})');
        this.setState({on: !this.state.on});
    },
    render: function () {
        console.log('render(), with on=' + this.state.on);
        return (
            React.createElement("button", {onClick: this.clickHandle, className: 'switcher ' + (this.state.on ? 'on' : 'off')}, 
                this.state.on ? 'ON' : 'OFF'
            )
        );
    }
});

if (typeof module == 'object') {
    module.exports = Switcher;
}

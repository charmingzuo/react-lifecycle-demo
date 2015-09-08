var React = typeof require == 'function' ?
    require('react') :
    window.React;

var Switching = React.createClass({displayName: "Switching",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        console.clear();
        console.log('\nthis.setState({on: ' + !this.state.on + '})');
        this.setState({on: !this.state.on});
    },
    render: function () {
        console.log('render(), with on=' + this.state.on);
        return (
            React.createElement("button", {onClick: this.clickHandle, className: 'switching ' + (this.state.on ? 'on' : 'off')}, 
                this.state.on ? 'ON' : 'OFF'
            )
        );
    }
});

// exports
typeof module == 'object' ?
    (module.exports = Switching) :
    (window.Switching = Switching);
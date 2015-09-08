var Switcher = React.createClass({displayName: "Switcher",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    revert: function () {
        this.setState({on: !this.state.on});
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui-form-item ui-form-item-switch"}, 
                React.createElement("label", {className: "ui-switch"}, 
                    React.createElement("input", {type: "checkbox", defaultChecked: !!this.state.on, onChange: this.revert})
                )
            )
        );
    }
});
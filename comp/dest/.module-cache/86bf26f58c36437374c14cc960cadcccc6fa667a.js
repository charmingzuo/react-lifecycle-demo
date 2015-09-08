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
            React.createElement("div", {class: "ui-form ui-border-t"}, 
                React.createElement("form", {action: "#"}, 
                    React.createElement("div", {class: "ui-form-item ui-form-item-switch ui-border-b"}, 
                        React.createElement("p", null, "开关"), 
                        React.createElement("label", {class: "ui-switch"}, 
                            React.createElement("input", {type: "checkbox", defaultChecked: !!this.state.on, onChange: this.revert})
                        )
                    )
                )
            )
        );
    }
});
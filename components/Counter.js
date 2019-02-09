var Counter = React.createClass({

    // Initial Block

    getDefaultProps: function() {
        console.log("Set deafult props");
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('Before render');
    },

    // Update Block

    componentWillReceiveProps: function(nextProps) {
        console.log('Update component when recieve changes');
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Check before render if component should be updated');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Prepare changes');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick:this.increment}, '+'),
            React.createElement('button', {onClick:this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log('After render. Get data. Manipulate.');
    },

    componentDidUpdate: function() {
        console.log('Manipulate After Update');
    },

    componentWillUnmount: function() {
        console.log('Listen events');
    }
});
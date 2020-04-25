class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test : 'yoohoo'
        }
    }

    render () {
        return (
        <div>
            <h1>Hello World</h1>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


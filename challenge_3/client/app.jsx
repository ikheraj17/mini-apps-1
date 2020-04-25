class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test : <Confirmation />,
            FormData : {
                name : "Yeet"
            }
        }
    }

    render () {
        return (
            <div>
                <h1>Welcome to Shopper's Paradise</h1>
                <div>{this.state.test}</div>
            </div>
        )
    }
}





let Form1 = () => 
    (
        <div>
             <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Password"></input>
            <button type="submit">Create Account</button>
        </div>
    )

let Form2 = () => 
    (
        <div>
             <input type="text" placeholder="Shipping"></input>
            <input type="text" placeholder="Unit, Apt, etc."></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="State"></input>
            <input type="text" placeholder="Zipcode"></input>
            <button type="submit">Proceed to Payment</button>
        </div>
    )
    
let Form3 = () => 
(
    <div>
        <input type="text" placeholder="CC #"></input>
            <input type="text" placeholder="Expiry Date"></input>
            <input type="text" placeholder="CVV"></input>
            <input type="text" placeholder="Billing Zip"></input>
            <button type="submit">Proceed to Confirmation</button>
    </div>
)

let Confirmation = () => 
(
<div>
<div>{this.state.formData}</div>    
<button type="submit">Purchase</button>
</div>
)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ReactDOM.render(<App />, document.getElementById('app'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 1,
            name : '',
            email : '',
            password : ''
            
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onForm1Submit = this.onForm1Submit.bind(this);
        }
    

   

    onNameChange (e) {
        this.setState({
            name : e.target.value
        });
    }

    onEmailChange (e) {
        this.setState({
            email : e.target.value
        });
    }

    onPasswordChange (e) {
        this.setState({
            password : e.target.value
        });
    }

    onForm1Submit (e) {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let pass = this.state.password;
        let sendIt = {Name: name, Email: email, Password: pass}
        console.log(sendIt);
        $.post('/accounts', sendIt);
       
        this.setState({counter : 2});
        
       
        
    }

    render () {
         if (this.state.counter === 1) {
             return <div>
                 <h1>Welcome to Shopper's Paradise</h1>
                        <Form1 onNameChange={this.onNameChange}
                        onEmailChange={this.onEmailChange}
                        onPasswordChange={this.onPasswordChange}
                        onForm1Submit={this.onForm1Submit}/>
                        </div>
         }

         if (this.state.counter === 2) {
             return <div>
                 <h1>Welcome to Shopper's Paradise</h1>
                 <h3>Please Enter Your Shipping Details</h3>
                 <Form2 />
             </div>
         }

         if (this.state.counter === 3) {
            return <div>
                <h1>Welcome to Shopper's Paradise</h1>
                <h3>Please Enter Your Payment Information</h3>
                <Form3 />
            </div>
        }

        if (this.state.counter === 4) {
            return <div>
                <h1>Welcome to Shopper's Paradise</h1>
                <h3>Confirm Purchase</h3>
                <Confirmation />
            </div>
        }

    }
    


    


    
}



let Form1 = ({onNameChange, onForm1Submit, onEmailChange, onPasswordChange}) => 
    (
        <div>
             <input type="text" placeholder="Name" onChange={onNameChange}/>
            <input type="text" placeholder="Email" onChange={onEmailChange}/>
            <input type="text" placeholder="Password" onChange={onPasswordChange}/>
            <button type="button" onClick={onForm1Submit}>Create Account</button>
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
<div>What do I do here</div>    
<button type="submit">Purchase</button>
</div>
)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ReactDOM.render(<App />, document.getElementById('app'));

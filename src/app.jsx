import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e){
    let id = e.target.id;
    let value = e.target.value
    this.setState({
      [id]: value
    })
  }

  calculate(){
    let changeDue = Math.round((this.state.amountReceived * 100) - (this.state.amountDue * 100));
    let output;
    let alert;
    let absoluteChangeDue = Math.abs(changeDue);
    let objChange = {};
    let dollarValues = [
      2000,
      1000,
      500,
      100,
      25,
      10,
      5,
      1
    ];

    if (changeDue / 100 >= 0) {
      output = "The total change due is $";
      alert = "alert alert-success text-center";
    } else {
      output = "You still owe $";
      alert = "alert alert-danger text-center";
    };
    output += Math.abs(changeDue / 100);
    
    for(let i = 0; i < dollarValues.length; i++) {
      let remainder = absoluteChangeDue % dollarValues[i];
      let temp = absoluteChangeDue - remainder;
      objChange[i] = temp / dollarValues[i];
      absoluteChangeDue = absoluteChangeDue % dollarValues[i];
    };

    this.setState({
      changeDue: output,
      alert: alert,
      twenties: objChange["0"],
      tens: objChange["1"],
      fives: objChange["2"],
      ones: objChange["3"],
      quarters: objChange["4"],
      dimes: objChange["5"],
      nickels: objChange["6"],
      pennies: objChange["7"],
    })
  }

  render() {
    return (
      <div className="container">
        
        <header className="h1 text-white">Change Calculator</header>
        <hr className="bg-white"/>

          <div className="row">

            <div className="col-4">
              <div className="card">
                <div className="card-header">Enter Information</div>
                <form>
                  <div className="form-group px-3">
                    <label htmlFor="amountDue"><strong>How much is due?</strong></label>
                    <input id="amountDue" name="amountDue" type="number" className="form-control" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group px-3">
                    <label htmlFor="amountReceived"><strong>How much was received?</strong></label>
                    <input id="amountReceived" name="amountReceived" type="number" className="form-control" onChange={this.handleChange}/>
                  </div>
                </form>
                <button className="btn btn-primary m-3" id="calculate" onClick={this.calculate} type="button">Calculate</button>
              </div>
            </div>

            <div className="col-8">  
              <div className="card p-2">
                {(this.state.alert != null) && (<div className={this.state.alert}
                  role="alert">{this.state.changeDue}
                  </div>)}
                <div className="card-deck p-3">
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/20dollar.png" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Twenties</div>
                      <div className="text-center result text-danger">{this.state.twenties}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/10dollar.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Tens</div>
                      <div className="text-center result text-danger">{this.state.tens}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/5dollar.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Fives</div>
                      <div className="text-center result text-danger">{this.state.fives}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/1dollar.jpg" alt="Card image"/>
                  <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Ones</div>
                      <div className="text-center result text-danger">{this.state.ones}</div>
                    </div>
                  </div>
                </div>
                <div className="card-deck p-3">
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/quarter.png" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Quarters</div>
                      <div className="text-center result text-danger">{this.state.quarters}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/dime.png" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Dimes</div>
                      <div className="text-center result text-danger">{this.state.dimes}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/nickel.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Nickels</div>
                      <div className="text-center result text-danger">{this.state.nickels}</div>
                    </div>
                  </div>
                  <div className="card p-3 bg-light">
                    <img className="card-img" src="css/cent.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                      <div className="text-center card-title  font-weight-bold">Pennies</div>
                      <div className="text-center result text-danger">{this.state.pennies}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    )
  }
}

export default App;

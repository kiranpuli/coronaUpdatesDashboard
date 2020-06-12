import React from "react";
import Axios from "axios";
import { Bar} from "react-chartjs-2";
import "./styles.css";
import Foot from "./components/Foot"

export default class App extends React.Component {
  constructor(){
    super()
    this.getCountryData=this.getCountryData.bind(this);
    this.getData=this.getData.bind(this);
    
  }
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    g:{
      type:'bar',
      data:{
        labels:[],
        datasets:[{
          label:"Confirmed",
          data:[],
          backgroundColor: 'yellow',
        },
        {
          label:"Recovered",
          data:[],
          backgroundColor: 'green',
        },{
          label:"Deaths",
          data:[],
          backgroundColor: 'red',
        },
      ]
      }
    },
    countries: [],
    cc:"WorldWide"
  };
  componentDidMount() {
    this.getData();
    console.log(this.state.cc,this.state.g.data.datasets)
  }
  async getData() {
    const resCountries= await Axios.get("https://covid19.mathdro.id/api/countries")
    const defaultRes = await Axios.get("https://covid19.mathdro.id/api");
    const graph = await Axios.get("https://covid19.mathdro.id/api/daily")
    resCountries.data.countries.map((value)=>{return this.state.countries.push(value['name'])})
    this.setState({
      confirmed: defaultRes.data.confirmed.value,
      recovered: defaultRes.data.recovered.value,
      deaths: defaultRes.data.deaths.value,
      cc:"WorldWide"
    });
    
    graph.data.map((i)=>{
      this.state.g.data.labels.push(i.reportDate)
      this.state.g.data.datasets[0].data.push(i.totalConfirmed)
      this.state.g.data.datasets[1].data.push(i.totalRecovered)
      this.state.g.data.datasets[2].data.push(i.deaths.total)
    })
    
    
  }

  getCountries(){
    return this.state.countries.map((c,i)=>{return <option key={i}>{c}</option>})
  }

   async getCountryData(e){
    const c=e.target.value
    if(c==="WorldWide"){
      this.state.g.data.labels=[]
      this.state.g.data.datasets[0].data=[]
      this.state.g.data.datasets[1].data=[]
      this.state.g.data.datasets[2].data=[]
      const graph = await Axios.get("https://covid19.mathdro.id/api/daily")
      graph.data.map((i)=>{
        this.state.g.data.labels.push(i.reportDate)
        this.state.g.data.datasets[0].data.push(i.totalConfirmed)
        this.state.g.data.datasets[1].data.push(i.totalRecovered)
        this.state.g.data.datasets[2].data.push(i.deaths.total)
      })
      const defaultRes = await Axios.get("https://covid19.mathdro.id/api");
      this.setState({
        confirmed: defaultRes.data.confirmed.value,
        recovered: defaultRes.data.recovered.value,
        deaths: defaultRes.data.deaths.value,
        cc:"WorldWide"
      });
      // console.log(this.state.cc,this.state.g.data.datasets)
    }
    else{
      this.state.g.data.labels=[]
      this.state.g.data.datasets[0].data=[]
      this.state.g.data.datasets[1].data=[]
      this.state.g.data.datasets[2].data=[]
      fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        data[c].forEach((i) =>{
          this.state.g.data.labels.push(i.date)
          this.state.g.data.datasets[0].data.push(i.confirmed)
          this.state.g.data.datasets[1].data.push(i.recovered)
          this.state.g.data.datasets[2].data.push(i.deaths)
        })
      })
      const selectedCountry= await Axios.get(`https://covid19.mathdro.id/api/countries/${c}`)
      this.setState({
        confirmed: selectedCountry.data.confirmed.value,
        recovered: selectedCountry.data.recovered.value,
        deaths: selectedCountry.data.deaths.value,
        cc:c
      });
      // console.log(this.state.cc,this.state.g.data.datasets)
    }
  }
  render() {

    const options = {
      // maintainAspectRatio: true,	// Don't maintain w/h ratio
      // responsive:true
    }

    return (
      <div className="text-danger">
        <h1 className="jumbotron text-center bg-dark ">
          Corona-Virus Outbreak Dashboard
        </h1>
        <h3 className="text-center btn-block">{this.state.cc} Statistics</h3>
        <select className="form-control w-50 mt-3 mb-3" onChange={this.getCountryData}>
        <option defaultValue > WorldWide </option> 
        {this.getCountries()}
        </select>
        <div className="row ">
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3 p-5">
              <h2>
                <i className="fas fa-hospital-user" /> Confirmed
              </h2>
              <h2 className="card-title">{this.state.confirmed}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3 p-5">
              <h2>
                <i className="fas fa-user-plus" /> Recovered
              </h2>
              <h2 className="card-title">{this.state.recovered}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3 p-5">
              <h2>
                <i className="fas fa-procedures" /> Deaths
              </h2>
              <h2 className="card-title">{this.state.deaths}</h2>
            </div>
          </div>
        </div>
        
          <div className="mt-3">
            <Bar
              data={this.state.g.data}
              options={options}
            />
    
            <div className="alert alert-warning" role="alert">
              Try re-sizing the window ( for pc ) / rotating device ( mobile ) if graph is not showing up
            </div>
          </div>
        
        
        
        <Foot/>
      </div>
    );
  }
}

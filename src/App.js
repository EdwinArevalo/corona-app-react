import React, { Component } from 'react'
//Components
import {Cards, Chart, CountryPicker} from './components';
//Styles
import styles from './App.module.css';
//API-data
import {fetchData} from './api';

export default class App extends Component {

    state = {
        data: {},
        country: ''
    }


    async componentDidMount(){
        const fetchedData = await fetchData(); 

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        console.log(country);
    }

    render() {
        const {data} = this.state;
        
        return (
            <div className={styles.container}>
                
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart/>
            </div>
        )
    }
}

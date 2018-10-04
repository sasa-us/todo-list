import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
// import listData from '../data/list';
import axios from 'axios';
import { ESRCH } from 'constants';
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: []
        };
        this.base_url = 'http://api.reactprototypes.com';
        // this.api_key = '?key=c318demouser';
        this.api_key = '?key=sasa-us';
        //pick at least 8 letters long after ?key= for my own api key 
    }

    componentDidMount() {
        this.getListData();
    }

    async getListData() {

        //make call to server to get data
        //p1 use dummy data
        // this.setState({
        //     list: listData
        // });

        //p2 use axios 
        // axios.get(`${this.base_url}/todos${this.api_key}`).then( res => {
        //     console.log('get todos response', res.data.todos);
        //     this.setState({
        //         list: res.data.todos
        //     });
        // }).catch( err=> {
        //     console.log('get todos error', err.message);
        // });

        //p3 use await need add async infornt of function name
        try{
            const response = await axios.get(`${this.base_url}/todos${this.api_key}`);

            this.setState({
                list: response.data.todos
            });
        } catch(err) {
            console.log('data error ', err.message);
        }
        

    }

    async addItem(item) {
        //p1 only update list, then show on dom
        // this.setState({
        //     list: [item, ...this.state.list]
        // });
//p2 delete all old list on dom, call server pull data and show all/replace all on Dom , rebuild DOM 
         try{
            const response = await axios.post(`${this.base_url}/todos${this.api_key}`, item);
            console.log(response);
            this.getListData();
        } catch(err) {
             console.log('error adding item ', err.message);
         }       

    }

    render() {
        console.log('app state', this.state);
        return (
                <div className="container">
                    <h1 className="center">To Do List</h1>
                    <AddItem add={ this.addItem.bind(this)}/>
                    <List data={ this.state.list }/> 
                </div>
            );
    }
}


export default App;

import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
                title: '',
                details: ''     
        };

    }

handleAddItem(e) {
    e.preventDefault();

    console.log('new Item ', this.state);
   
    this.props.add(this.state);
    this.setState({
        title: '',
        details: ''
    });
}

    render() {
        console.log('state is ', this.state);

        const {title, details} = this.state;
        return (
            <form  onSubmit={ this.handleAddItem.bind(this) }>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <label>Title</label>
                        <input onChange={ e => this.setState({ title: e.target.value})} name="title" value={title} type="text"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <label>Details</label>
                        <input onChange={ e => this.setState({details: e.target.value}) } name="details" value={details} type="text"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col s6 offset-s3 right-align">
                        <button className="btn #f8bbd0 pink lighten-4">Add Item</button>
                    </div>

                </div> 
            </form>
        );
    }
}

export default AddItem;


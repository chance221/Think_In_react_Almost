import React, {Component} from 'react';
import SummaryItem from '../SummaryItem/summary-item'

class Summary extends Component{
    
    
    render(){
        
        //console.log('Object.keys(this.props.itemsSelected)', Object.keys(this.props.itemsSelected))
        const selected = Object.keys(this.props.itemsSelected).map(myKey=>
            <SummaryItem
                itemsSelected = {this.props.itemsSelected}
                key = {myKey} 
                name= {myKey}
                total = {this.props.total}
                />)
        console.log('this.props.itemsSelected')
        const total = Object.keys(this.props.itemsSelected)
        .reduce((acc, curr) => {//console.log('this.props.itemsSelected[curr]', this.props.itemsSelected[curr].cost)
            return (acc + this.props.itemsSelected[curr].cost)
        }, 700-700); 
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                
                {selected}
                
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { 
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
                </div>
            </section>
        )
    }
}

Summary.defaultProps = {
    itemsSelected:[],
    currentState:[],
    
}

export default Summary;
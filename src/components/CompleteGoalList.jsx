import React, { Component } from 'react';
import { connect } from "react-redux";
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';

class CompleteGoalList extends Component{
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completedGoals = [];
            snap.forEach(completedGoal => {
                const { email, title } = completedGoal.val();
                completedGoals.push({ email, title });
            })
            this.props.setCompletedGoals(completedGoals);
        })
    }

    clearCompletedGoals(){
        completeGoalRef.set([]);
    }

    render(){
        return(
            <div>
                {
                    this.props.completedGoals.map((completedGoal, index) => {
                        const { title, email } = completedGoal;
                        return(
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button
                    className="btn btn-primary"
                    onClick={() => this.clearCompletedGoals()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { completedGoals } = state;
    return {
        completedGoals
    };
}

export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);
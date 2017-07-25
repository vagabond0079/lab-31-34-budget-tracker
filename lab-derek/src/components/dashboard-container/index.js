import React from 'react';
import {connect} from 'react-redux';

import {
  budgetCreate,
  budgetUpdate,
  budgetDelete,
} from '../../actions/budget-category-actions.js';

import BudgetForm from '../budget-from.js';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.budgetCreate({title: 'testCreate'});
  }

  render() {
    return(
      <main className='dashboard-container'>
        <h2> Budget Dashboard </h2>
        <BudgetForm
          submitText='Add Budget Category'
          onSubmit={this.props.budgetCreate}
        />
        {this.props.budgets.map(budgetCategory => {
          <div key={budgetCategory.id}>
            <h3>{budgetCategory.title}</h3>
            <h4>Budget: {budgetCategory.budget}</h4>
          </div>;
        })}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    budgetCategories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    budgetCreate: budgetCategory => dispatch(budgetCreate(budgetCategory)),
    budgetUpdate: budgetCategory => dispatch(budgetUpdate(budgetCategory)),
    budgetDelete: budgetCategory => dispatch(budgetDelete(budgetCategory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
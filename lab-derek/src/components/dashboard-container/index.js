import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../delete-button';
import updateForm from '../update-form';

import {
  budgetCreate,
  budgetUpdate,
  budgetDelete,
} from '../../actions/budget-category-actions.js';

import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
//TODO: check the .id on the category, it's not populating to the DOM.

  render() {
    return(
      <main className='dashboard-container'>
        <h2> Budget Dashboard </h2>
        <CategoryForm
          submitText='Add Budget Category'
          onComplete={this.props.budgetCreate}
        />
      {this.props.categories.map((category) =>
          <div key={category.id}>
            <h3>{category.name}</h3>
            <h4>Budget: ${category.budget}</h4>
            <DeleteButton
              type='submit'
              submitText='Delete'
              onComplete={this.props.budgetDelete}
              category={category} />
          </div>
        )}
      </main>
    );
  }
}

//TODO: create a categoryForm for updating the category, underneath the category on line 26.

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    budgetCreate: category => dispatch(budgetCreate(category)),
    budgetUpdate: category => dispatch(budgetUpdate(category)),
    budgetDelete: category => dispatch(budgetDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

//TODO: What is the (DashboardContainer) doing here?

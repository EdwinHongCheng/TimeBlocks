import { connect } from 'react-redux';
import { newCategory } from '../../actions/category_actions';
import CategoryCompose from './category_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newCategory: state.categories.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newCategory: data => dispatch(newCategory(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCompose);
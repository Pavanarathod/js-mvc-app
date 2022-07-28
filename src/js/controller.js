import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView';
import paginationView from './view/paginationView';

const controlRecipe = async function () {
  try {
    const resId = window.location.hash.slice(1);
    // Loading recipe
    if (!resId) return;

    await model.loadRecipe(resId);

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    const query = searchView.getQery();
    if (!query) return;
    await model.loadSearchResult(query);

    resultsView.render(model.getSearchResultsPage(1));
    // render initial pagination number;

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function () {
  console.log('pagination control');
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};

init();

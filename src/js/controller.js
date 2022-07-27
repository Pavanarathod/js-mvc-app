import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';

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

    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResult);
};

init();

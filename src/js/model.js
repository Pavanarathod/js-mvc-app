import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './view/helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
  bookmark: [],
};

export const loadRecipe = async function (resId) {
  try {
    const data = await getJSON(`${API_URL}${resId}`);

    let { recipe } = await data?.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      coockingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data?.data?.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
};

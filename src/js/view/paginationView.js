import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      handler();
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    if (currentPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
           <p>next</p>
        </button>
      
      `;
    }

    if (currentPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next">
      <span>Page 3</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>
      `;
    }

    if (currentPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--next">
      <span>Page 3</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>
      
      `;
    }

    return 'only 1 page';
  }
}

export default new PaginationView();

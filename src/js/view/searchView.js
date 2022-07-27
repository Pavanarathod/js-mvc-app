class SearchView {
  #parentElement = document.querySelector('.search');

  getQery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      handler();
    });
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
}
export default new SearchView();

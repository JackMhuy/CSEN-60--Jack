// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions
// This function searches the URL for tags and will either return null or add to "params"
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

// this function examine if the search bar is empty, if it is then the hidden function will be removed from the articles and if not the articles will be removed.
function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }
// if the keyword in the search bar matches a tag, that article with the tag will remain.


  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  for (const article of document.querySelectorAll("article")) {
    if (!articlesWithTags.includes(article)) {
      article.classList.add("hidden"); 
    } else {
      article.classList.remove("hidden"); 
  }
}
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */

// this function creates a tag that will act as a button, next to the search bar as the keyword.
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

// this function remove the tag button when clicked and update the hidden article status.
  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }



  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove);
  return button;
}

// searches articles with tags in search bar and return those articles
function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

// allow you to add a new search tag and updates the displayed articles based on that tag
function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers
// search on enter
function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if (event.key === "Enter") {
    addSearchTerm(input.value);
    input.value = ""; 
  }
}

// Main function
// this function puts everything together and starts the search process.
function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter: onSearch -> addSearchTerm -> createTag -> hideArticles
 * Clicking to Remove a Tag: remove -> hideArticles 
 * Loading the Page: main -> initializeSearch
 * 
 * main -> initializeSearch -> onSearch -> addSearchTerm -> createTag -> hideArticles -> remove -> hideArticles -> findArticlesWithTag 
 */
import named from "./control";
named();

const btnSearch = document.querySelector("#submit");

btnSearch.addEventListener("click", async (e) => {
  e.preventDefault();

  const query = document.querySelector(".search__text").value;

  try {
    const value = await getSearchData(query);

    console.log(value);
  } catch (error) {
    console.log(error);
  }
});

const getSearchData = async (query) => {

  let val = await fetch(`http://localhost:3000/recipes?name=${query}`);

  val = await val.json();

  return val;
};

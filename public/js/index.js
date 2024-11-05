import named from "./control";
named();

const btnSearch = document.querySelector("#submit");

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Hello Kevin");
})
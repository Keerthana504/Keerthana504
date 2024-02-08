const continentSelect = document.getElementById("continent-select");
const countryList = document.getElementById("countries-list");

queryFetch(`query{
    continents{
        name
        code
    }
}`).then((data) => {
  console.log(
    data.data.continents.forEach((continent) => {
      const option = document.createElement("option");
      option.value = continent.code;
      option.innerText = continent.name;
      continentSelect.append(option);
    })
  );
});

continentSelect.addEventListener("change", async (e) => {
  const continentcode = e.target.value;
  const countries = await getContinentCountries(continentcode);
  console.log(countries);
  countryList.innerHTML = "";
  countries.forEach((country) => {
    const element = document.createElement("div");
    element.innerText = country.name;
    countryList.append(element);
  });
});

async function getContinentCountries(continentCode) {
  const data = await queryFetch(
    `query getCountries($ID: ID!){
        continent(code: $ID){
          countries{
            name
          }
        }
      }`,
    {
      ID: continentCode,
    }
  );
  return data.data.continent.countries;
}

function queryFetch(query, variables) {
  return fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).then((res) => res.json());
}

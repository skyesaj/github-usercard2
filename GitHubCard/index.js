/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardContainer = document.querySelector(".cards");
axios.get("https://api.github.com/users/skyesaj").then(response => {
  console.log(response.data);
  cardContainer.appendChild(createCard(response));
});

// const followersArray = [];
axios.get("https://api.github.com/users/skyesaj").then(res => {
  createCard(res);
  axios.get("https://api.github.com/users/skyesaj/followers").then(response => {
    response.data.forEach(follower => {
      axios
        .get(`https://api.github.com/users/${follower.login}`)
        .then(followerRes =>
          cardContainer.appendChild(createCard(followerRes))
        );
    });
  });
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// Elements

function createCard(object) {
  const card = document.createElement("div");
  const cardPic = document.createElement("img");
  const cardDiv = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const oneCard = document.createElement("p");
  const twoCard = document.createElement("p");
  const thirdCard = document.createElement("p");
  const fourCard = document.createElement("p");
  const fiveCard = document.createElement("p");
  const sixCard = document.createElement("p");
  const cardAdd = document.createElement("a");

  // class

  card.appendChild(cardPic);
  card.appendChild(cardDiv);
  cardDiv.appendChild(oneCard);
  cardDiv.appendChild(twoCard);
  cardDiv.appendChild(thirdCard);
  cardDiv.appendChild(fourCard);
  cardDiv.appendChild(fiveCard);
  cardDiv.appendChild(sixCard);
  thirdCard.appendChild(cardAdd);

  // set names

  card.classList.add("card");
  cardDiv.classList.add("card-info");
  cardTitle.classList.add("name");
  oneCard.classList.add("username");

  cardPic.src = object.data.avatar_url;
  cardTitle.textContent = object.data.login;
  oneCard.textContent = object.data.name;
  twoCard.textContent = object.data.location;
  cardAdd.textContent = object.data.html_url;
  cardAdd.setAttribute("href", object.data.html_url);
  fourCard.textContent = object.data.followers;
  fiveCard.textContent = object.data.following;
  sixCard.textContent = object.data.bio;

  return card;
}

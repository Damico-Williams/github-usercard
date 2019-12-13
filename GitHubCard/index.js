/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



// information: {
//   login: "Damico-Williams",
//   id: 52725362,
//   node_id: "MDQ6VXNlcjUyNzI1MzYy",
//   avatar_url: "https://avatars2.githubusercontent.com/u/52725362?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/Damico-Williams",
//   html_url: "https://github.com/Damico-Williams",
//   followers_url: "https://api.github.com/users/Damico-Williams/followers",
//   following_url: "https://api.github.com/users/Damico-Williams/following{/other_user}",
//   gists_url: "https://api.github.com/users/Damico-Williams/gists{/gist_id}",
//   starred_url: "https://api.github.com/users/Damico-Williams/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/Damico-Williams/subscriptions",
//   organizations_url: "https://api.github.com/users/Damico-Williams/orgs",
//   repos_url: "https://api.github.com/users/Damico-Williams/repos",
//   events_url: "https://api.github.com/users/Damico-Williams/events{/privacy}",
//   received_events_url: "https://api.github.com/users/Damico-Williams/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Damico",
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   public_repos: 19,
//   public_gists: 0,
//   followers: 1,
//   following: 0,
//   created_at: "2019-07-10T01:01:10Z",
//   updated_at: "2019-09-13T16:02:09Z"
//  }

// console.log(myStuff);
// cardFactory(myStuff.information);
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

function cardFactory (info){

  //create elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const repos = document.createElement('p');
  const profile = document.createElement('p');
  const adLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const public = document.createElement('p');
  const span = document.createElement('span');
  

  //create structure
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(repos);
  cardInfo.appendChild(profile);
  profile.appendChild(adLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(public)
  cardInfo.appendChild(span);
  

  //set content
  cardImg.setAttribute('src', info.avatar_url);
  name.textContent = info.name;
  userName.textContent = info.login;
  location.textContent = info.location;
  repos.textContent = info.repos_url;
  adLink.textContent = info.html_url;
  followers.textContent = info.followers;
  following.textContent = info.following;
  bio.textContent = info.bio;
  public.textContent = info.public_repos;
  span.textContent = '\u25bc';
  

  //apply styles
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  span.classList.add('expandButton');

  span.addEventListener('click', () => {
    card.classList.toggle('article-open')
  });

  

  return card;
};


//Grab div container
const add = document.querySelector('.cards');





const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
'damico-williams'];


followersArray.map(parameter => {
  console.log(parameter)
  axios.get(`https://api.github.com/users/${parameter}`)
    .then(results => {
      add.appendChild(cardFactory(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  })

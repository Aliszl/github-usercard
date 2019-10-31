/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





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


//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return
//            the following DOM element:
// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>
// when we create the CompositionEvent, instead of passing in string pass in object and pass in the values on the single object
function createCard(obj){
   // 1- Create HTML markup
  const card = document.createElement('div');
  const img= document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitHublLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
   // 2- Define HTML structure
  card.append(img);
  card.append(info);
  info.append(name);
  info.append(userName);
  info.append(location);
  info.append(profile);
  profile.append(gitHublLink);
  info.append(followers);
  info.append(following);
  info.append(bio);
   // 3- Add some class names/attributes
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  return card;
};
const followersArray = [];

 // add the menu component to the DOM.

 const newCard = document.querySelector('.cards');
 console.log(newCard);

 
 axios.get('https://api.github.com/users/Aliszl')
 .then((response) => {
   console.log(response);
   cards.append(card(response));
  
 })
 .catch(error => {
   console.log('API request unsuccessfull');
 });

//  response.data.forEach(card => {
//   console.log();
//  
// });
//  cards.append(createCard(response.data.login))

     
// from challenge:  const acc = document.querySelector('.container');
//     response.data.message.forEach(img => {
//       acc.append(createCard(img.split('/')[img.split('/').length - 2].toUpperCase(), img));
    // }
// menu-button.append(menuCreator(menuItems));





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const profile = {
  name: "John Doe",
  age: 30,
  profession: "Web Developer",
  hobbies: ["Reading", "Hiking", "Photography"],
};

/* DOM */
const getBody = document.querySelector("body");

/* Create Profile-Card */
const setProfileCard = document.createElement("div");
setProfileCard.classList.add("profile-card");
getBody.append(setProfileCard);

/* Create h2 element */
const setName = document.createElement("h2");
setName.innerText = `Name : ${profile.name}`;
setProfileCard.append(setName);

/* Create Paragraph*/
const setParagraph = document.createElement("p");
setParagraph.innerHTML = `Age : ${profile.age}, Profession : ${profile.profession} `;
setProfileCard.append(setParagraph);

/* Create Unordered list */
const setHobbies = document.createElement("p");
setHobbies.innerText = "Hobbies :";
setProfileCard.append(setHobbies);

const setList = document.createElement("ul");
setList.classList.add("my-hobbies");
setProfileCard.append(setList);

for (let item of profile.hobbies) {
  const list = document.createElement("li");
  list.innerText = item;
  setList.append(list);
}

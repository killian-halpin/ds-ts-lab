import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

import { EmailContact } from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f: Friend[]) : string[] {
    const newAge: string[] = [];
    f.forEach((f) => {
    f.age += 1
    newAge.push(`${f.name} is now ${f.age}` );
    });

    return newAge;

}
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
  console.log(highestExtension(colleagues.current));

  function addColleague(cs: Colleague[], name: string, department: string, email: string){
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension + 1
        }
    }
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
console.log(older(friends[0]))

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number     // CHANGED

): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

function findFriends(friends: Friend[], criteria:(friend: Friend)=> boolean): Friend[] {
  const matchingFriends: Friend[] = [];
  for (const friend of friends) {
    if (criteria(friend)) {
      matchingFriends.push(friend);
    }
  }
  return matchingFriends;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Ja')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend: Friend, newInterests: string){
  if (!friend.interests) {

      friend.interests = []; // Ensure interests array exists if it's not already made for that Friend
  }
   friend.interests.push(newInterests)
   return friend.interests 
  }
  //test
  console.log(addInterest(friends[1], 'Racing'))
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Ja')));
console.log(findFriends(friends, (friend) => friend.age < 35));
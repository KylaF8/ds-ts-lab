import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]) {
    let allOlderArray = [];
    for (let i = 0; i < f.length; i++) {
       allOlderArray.push(older(f[i]))
    }
    return allOlderArray;
}

console.log(allOlder(friends))


function highestExtension(cs: Colleague[]) { 
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  console.log(highestExtension(colleagues.current));


  function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs).contact.extension
    const newColleague: Colleague = {
        name,
        department,
        contact: {
          email,
          extension: highest + 1 
        }
      };
      
      cs.push(newColleague);
    }
  

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); 
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  function findFriends(
    friends: Friend[],
    c: (friend: Friend) => boolean
  ): Friend[] {
    const result = friends.filter(c);
    return result;
  }

  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));
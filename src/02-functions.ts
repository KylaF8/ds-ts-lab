import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]) : string[] {
    let allOlderArray = [];
    for (let i = 0; i < f.length; i++) {
       allOlderArray.push(older(f[i]))
    }
    return allOlderArray;
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  console.log(highestExtension(colleagues.current));


  function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
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
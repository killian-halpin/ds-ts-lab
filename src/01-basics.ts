import {Friend, Colleague, ColleagueHistory } from './myTypes'


 const friend1: Friend = {
    name: "Jack Duggan",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2: Friend = {
    name: "Darragh Costello",
    phone: "086--12345",
    age: 31,
    interests: ['Computers', 'Sport']
  };
  
  export const friends: Friend[] = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------

  const colleague1: Colleague = {
    name: "Grace O SUllivan",
    department: "Engineering",
    contact: {
      email: "gosullican@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patrick Barsoum",
    department: "Finance",
    contact: {
      email: "pbarsoum@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Adam Barrett",
    department: "HR",
    contact: {
      email: "abarrett@company.com",
      extension: 125,
    },
  };



  export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
 // console.log(colleagues.current[0]);//



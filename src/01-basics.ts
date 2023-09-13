interface Friend {
    name: string;
    phone: string;
    age: number
}


const friend1: Friend = {
    name: "Jack Duggan",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Darragh Costello",
    phone: "086--12345",
    age: 31,
  };
  
  const friends: Friend[] = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  const colleague1 = {
    name: "Grace O SUllivan",
    department: "Engineering",
    contact: {
      email: "gosullican@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patrick Barsoum",
    department: "Finance",
    contact: {
      email: "pbarsoum@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Adam Barrett",
    department: "HR",
    contact: {
      email: "abarrett@company.com",
      extension: 125,
    },
  };
  const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
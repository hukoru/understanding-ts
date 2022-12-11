enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: "임세환",
  age: 30,
  hobbies: ['스포츠', '요리'],
  role: Role.AUTHOR
}

//person.role.push('admin');
//person.role[1] = 10;
//person.role = [0, 'admin'];

console.log(person)

let favoriteActivities: string[];
favoriteActivities = ['수영', '조깅'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
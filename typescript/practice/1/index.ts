interface User {
  name: string
  age: number
  occupation: string
}

interface Admin {
  name: string
  age: number
  role: string
}

export type Person = User | Admin

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
]

export function logPerson(person: Person) {
  let additionalInformation: string
  if (person.role) {
    additionalInformation = person.role
  } else {
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}

persons.forEach(logPerson)

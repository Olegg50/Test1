interface User {
  type: 'user'
  name: string
  age: number
  occupation: string
}

interface Admin {
  type: 'admin'
  name: string
  age: number
  role: string
}

export type Person = User | Admin

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    type: 'admin',
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    type: 'admin',
    name: 'Agent Smith',
    age: 23,
    role: 'Administrator',
  },
]

export function filterUsers(persons: Person[], criteria: unkown): User[] {
  return persons.filter(isUser).filter(user => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[]
    return criteriaKeys.every(fieldName => {
      return user[fieldName] === criteria[fieldName]
    })
  })
}

console.log('Users of age 23:')

filterUsers(persons, {
  age: 23,
})

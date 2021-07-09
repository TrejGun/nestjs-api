# nest-graphql-bug

# Installation

```sh
npm i
npm start
```

# Description

1. get single user as promise

```graphql
query getByIdAsPromise {
  getById (id: 1){
    id
    email
  }
}
```

```json
{
  "data": {
    "getByIdAsPromise": {
      "id": 1,
      "email": "trejgun+test1@gmail.com"
    }
  }
}
```

2 get list of users as promise
```graphql
query listUsers {
  listUsersAsPromise {
    id
    email
  }
}
```

```json
{
  "data": {
    "listUsersAsPromise": [
      {
        "id": 1,
        "email": "trejgun+test1@gmail.com"
      },
      {
        "id": 2,
        "email": "trejgun+test2@gmail.com"
      },
      {
        "id": 3,
        "email": "trejgun+test3@gmail.com"
      }
    ]
  }
}
```


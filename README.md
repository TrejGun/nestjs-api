# NestJS API

# Installation

```sh
npm i
npm start
```

## REST

Get list of users as promise

```sh
curl http://localhost:3000/users/promise
```

```json
[
  {
    "id": 1,
    "email": "trejgun+test1@gmail.com",
    "password": "qwerty",
    "roles": [
      "USER"
    ]
  },
  {
    "id": 2,
    "email": "trejgun+test2@gmail.com",
    "password": "qwerty",
    "roles": [
      "USER"
    ]
  },
  {
    "id": 3,
    "email": "trejgun+test3@gmail.com",
    "password": "qwerty",
    "roles": [
      "ADMIN"
    ]
  }
]
```

Get single user as promise

```sh
curl http://localhost:3000/users/promise/1
```

```json
{
  "id": 1,
  "email": "trejgun+test1@gmail.com",
  "password": "qwerty",
  "roles": [
    "USER"
  ]
}
```

Get list of users as observable

```sh
curl http://localhost:3000/users/promise
```

```json
[
  {
    "id": 1,
    "email": "trejgun+test1@gmail.com",
    "password": "qwerty",
    "roles": [
      "USER"
    ]
  },
  {
    "id": 2,
    "email": "trejgun+test2@gmail.com",
    "password": "qwerty",
    "roles": [
      "USER"
    ]
  },
  {
    "id": 3,
    "email": "trejgun+test3@gmail.com",
    "password": "qwerty",
    "roles": [
      "ADMIN"
    ]
  }
]
```

Get single user as observable

```sh
curl http://localhost:3000/users/promise/1
```

```json
{
  "id": 1,
  "email": "trejgun+test1@gmail.com",
  "password": "qwerty",
  "roles": [
    "USER"
  ]
}
```

## GraphQL

Get list of users as promise

```gql
query listUsersAsPromise {
  listUsersAsPromise {
    id,
    email,
    roles,
  }
}
```

```json
{
  "data": {
    "listUsersAsPromise": [
      {
        "id": 1,
        "email": "trejgun+test1@gmail.com",
        "roles": [
          "USER"
        ]
      },
      {
        "id": 2,
        "email": "trejgun+test2@gmail.com",
        "roles": [
          "USER"
        ]
      },
      {
        "id": 3,
        "email": "trejgun+test3@gmail.com",
        "roles": [
          "ADMIN"
        ]
      }
    ]
  }
}
```

Get single user as promise

```gql
query getByIdAsPromise {
  getByIdAsPromise (id: 1){
    id,
    email,
    roles,
  }
}
```

```json
{
  "data": {
    "getByIdAsPromise": {
      "id": 1,
      "email": "trejgun+test1@gmail.com",
      "roles": [
        "USER"
      ]
    }
  }
}
```

Get list of users as observable

```gql
query listUsersAsObservable {
  listUsersAsObservable {
    id,
    email,
    roles,
  }
}
```

```json
{
  "data": {
    "listUsersAsObservable": [
      {
        "id": 1,
        "email": "trejgun+test1@gmail.com",
        "roles": [
          "USER"
        ]
      },
      {
        "id": 2,
        "email": "trejgun+test2@gmail.com",
        "roles": [
          "USER"
        ]
      },
      {
        "id": 3,
        "email": "trejgun+test3@gmail.com",
        "roles": [
          "ADMIN"
        ]
      }
    ]
  }
}
```

Get single user as observable

```gql
query getByIdAsObservable {
  getByIdAsObservable (id: 1){
    id,
    email,
    roles,
  }
}
```

```json
{
  "data": {
    "getByIdAsObservable": {
      "id": 1,
      "email": "trejgun+test1@gmail.com",
      "roles": [
        "USER"
      ]
    }
  }
}
```

## WebSockets

Navigate to http://localhost:3000/ to see it in action

# nest-graphql-bug

1. get single user as observable forks fine

```graphql
query getUser {
  getById (id: 1){
    id
    email
  }
}
```

```json
{
  "data": {
    "getById": {
      "id": 1,
      "email": "trejgun+test1@gmail.com"
    }
  }
}
```

2 get list of users as promise forks fine
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


3. get list users as observable throws error
```graphql
query listUsers {
  listUsersAsObservable {
    id
    email
  }
}
```

```
{
  "errors": [
    {
      "message": "Expected Iterable, but did not find one for field Query.listUsersAsObservable.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "listUsersAsObservable"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "message": "Expected Iterable, but did not find one for field Query.listUsersAsObservable.",
          "stacktrace": [
            "GraphQLError: Expected Iterable, but did not find one for field Query.listUsersAsObservable.",
            "    at completeListValue (~/nestjs-graphql-observable-bug/node_modules/graphql/execution/execute.js:606:11)",
            "    at completeValue (~/nestjs-graphql-observable-bug/node_modules/graphql/execution/execute.js:573:12)",
            "    at completeValue (~/nestjs-graphql-observable-bug/node_modules/graphql/execution/execute.js:557:21)",
            "    at ~/nestjs-graphql-observable-bug/node_modules/graphql/execution/execute.js:492:16",
            "    at processTicksAndRejections (internal/process/task_queues.js:93:5)",
            "    at async Promise.all (index 0)"
          ]
        }
      }
    }
  ],
  "data": null
}
```

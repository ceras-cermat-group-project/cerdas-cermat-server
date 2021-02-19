# cerdas-cermat-server
- base url server (deploy): https://cerdas-cermat-server.herokuapp.com
- base url client (deploy): https://foxy-cerdas-cermat-client.web.app/login

## Endpoint List
---json

### Register

- **URL** : `/quiz`
- **Method** : `GET`


- **Success Response**

  _Response(200 - Sukses)_
```json
[
  {
    "id": 1,
    "question": "https://i.ibb.co/8mySRw1/bkqfHAk.jpg",
    "answer": "edison",
    "createdAt": "2021-02-19T06:22:30.014Z",
    "updatedAt": "2021-02-19T06:22:30.014Z"
  },
  {
    "id": 2,
    "question": "https://i.ibb.co/phCytjT/oUA9EuU.jpg",
    "answer": "obama",
    "createdAt": "2021-02-19T06:22:30.014Z",
    "updatedAt": "2021-02-19T06:22:30.014Z"
  }
]
```

- **Error Response**


  _Response(500 - Internal Server Error)_
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

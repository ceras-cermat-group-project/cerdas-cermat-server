# Cerdas-cermat

base url (development): http://localhost:PORT
base url (deploy): 

## Endpoint List
---

### Register

- **URL** : `/quiz`
- **Method** : `GET`

  _Request Header_
  ```

  ``` 

- **Success Response**

  _Response(200 - Created)_
  ```
  {
    "id": <INTEGER><given id by system>,
    "email": <STRING>"<user@mail.com>",
  }
  ```

- **Error Response**

  _Response(400 - Bad Request)_
  ```
  {
    "message": [
      "Email already registered"
    ]
  }
  ```
  
  _Response(400 - Bad Request)_
  ```
  {
    "message": [
      "email cannot be empty and must be using email format"
    ]
  }
  ```
  _Response(400 - Bad Request)_
  ```
  {
    "message": [
      "role cannot be empty"
    ]
  }
  ```
  _Response(400 - Bad Request)_
  ```
  {
    "message": [
      "password cannot be empty"
    ]
  }
  ```

  _Response(500 - Internal Server Error)_
  ```
  {
    "message": "Internal Server Error"
  }
  ```

---
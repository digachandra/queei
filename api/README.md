<img src="../.asset/.logo.png" title="Queei Logo" height="50">

## API
this folder dedicated to store all API that used in Queei

### Package

```
npm install -S express mongoose body-parser
npm install -S ejs node-sass chai chai-http cors
npm install -S lodash
npm install -D mocha
```

---

### API Endpoint

#### Questions

| Method | Tested | URL | Description
|--------|--------|-----|-------------
| GET    | - | `/questions` | Get list of questions
| GET    | - | `/questions/:id` | Get detail of selected question
| GET    | - | `/questions/:userId` | Get list of selected user questions
| POST   | - | `/questions/:userId` | Post a question **(authorized only)**
| PUT    | - | `/questions/:id/:userId` | Update a question **(authorized only)**
| DELETE | - | `/questions/:id/:userId` | Delete a question **(authorized only)**

#### Answers

| Method | Tested | URL | Description
|--------|--------|-----|-------------
| GET    | - | `/answers/:questionId` | Get list answers of a question
| GET    | - | `/answers/:id` | Get detail of selected answer
| GET    | - | `/answers/:id/:questionId/:userId` | Upvote answer of a question **(authorized only)**
| GET    | - | `/answers/:id/:questionId/:userId` | Downvote answer of a question **(authorized only)**
| POST   | - | `/answers/:userId/:token` | Post a answer **(authorized only)**
| PUT    | - | `/answers/:id/:userId` | Update a answer **(authorized only)**
| DELETE | - | `/answers/:id/:userId` | Delete a answer **(authorized only)**

### Users

| Method | Tested | URL | Description
|--------|--------|-----|-------------
| GET    | - | `/users/` | Get list users **(admin only)**
| GET    | - | `/users/:username` | Get detail of selected user
| POST   | - | `/users` | Create a user
| PUT    | - | `/users/:username` | Update info of a user **(authorized only)**
| DELETE | - | `/users/:username` | Delete specific user **(admin only)**


```
Note:

> Tested ✔ : 100% work
> Tested - : not tested yet

> Admin only
>> Specific person that can access all of this API

> Authorized only
>> Registered user
```

---

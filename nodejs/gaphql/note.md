To **upload files** and implement **authentication** in a **Node.js + GraphQL** API, here’s a clean and practical implementation using:

* `graphql-upload` for file uploads
* `jsonwebtoken` for auth (JWT)
* `Apollo Server` and Express
* PostgreSQL (optional, but included in schema)
* Frontend React (Apollo Client with file upload + auth)

---

## 🛠 Backend Setup (Node.js + GraphQL)

### 🔧 1. Install Dependencies

```bash
npm install express apollo-server-express graphql graphql-upload pg jsonwebtoken bcryptjs
```

---

### 📁 2. Folder Structure

```
/project
├── index.js
├── resolvers.js
├── typeDefs.js
├── uploads/
```

---

### 🔐 3. Auth + Upload GraphQL Schema (`typeDefs.js`)

```js
const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar Upload

  type User {
    id: ID!
    email: String!
    token: String
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(email: String!, password: String!): User
    login(email: String!, password: String!): User
    uploadFile(file: Upload!): File!
  }
`;
```

---

### ⚙️ 4. Resolvers with JWT + Upload (`resolvers.js`)

```js
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // In-memory for simplicity

const JWT_SECRET = "your_secret";

function getUserFromToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

module.exports = {
  Upload: require('graphql-upload').GraphQLUpload,

  Query: {
    me: (_, __, { user }) => user
  },

  Mutation: {
    signup: async (_, { email, password }) => {
      const hashed = await bcrypt.hash(password, 10);
      const user = { id: Date.now(), email, password: hashed };
      users.push(user);
      const token = jwt.sign({ id: user.id, email }, JWT_SECRET);
      return { ...user, token };
    },

    login: async (_, { email, password }) => {
      const user = users.find(u => u.email === email);
      if (!user || !(await bcrypt.compare(password, user.password)))
        throw new Error("Invalid credentials");
      const token = jwt.sign({ id: user.id, email }, JWT_SECRET);
      return { ...user, token };
    },

    uploadFile: async (_, { file }, { user }) => {
      if (!user) throw new Error("Not authenticated");

      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const filepath = path.join(__dirname, 'uploads', filename);
      await new Promise((res, rej) =>
        stream.pipe(fs.createWriteStream(filepath)).on('finish', res).on('error', rej)
      );

      return {
        filename,
        mimetype,
        encoding,
        url: `http://localhost:4000/uploads/${filename}`
      };
    }
  }
};
```

---

### 🚀 5. Server Setup (`index.js`)

```js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { graphqlUploadExpress } = require('graphql-upload');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');

const app = express();
app.use('/uploads', express.static('uploads'));
app.use(graphqlUploadExpress());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = token ? jwt.verify(token.replace("Bearer ", ""), "your_secret") : null;
    return { user };
  }
});

async function start() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log('🚀 Server running at http://localhost:4000/graphql');
  });
}

start();
```

---

## 🌐 Frontend React (Apollo Client with Upload + Auth)

### 1. Install Apollo Upload Client

```bash
npm install @apollo/client graphql apollo-upload-client
```

---

### 2. Apollo Setup with Upload Link

```js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem("token") || ""
    }
  }),
  cache: new InMemoryCache()
});
```

---

### 3. File Upload + Login Components

#### `Login.js`

```jsx
import { gql, useMutation } from '@apollo/client';
const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function Login() {
  const [login] = useMutation(LOGIN);
  const handleLogin = async () => {
    const { data } = await login({ variables: { email: 'test@example.com', password: '123456' } });
    localStorage.setItem("token", `Bearer ${data.login.token}`);
  };
  return <button onClick={handleLogin}>Login</button>;
}
```

#### `UploadFile.js`

```jsx
import { gql, useMutation } from '@apollo/client';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      url
    }
  }
`;

function UploadFile() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const { data } = await uploadFile({ variables: { file } });
    alert(`Uploaded: ${data.uploadFile.url}`);
  };

  return <input type="file" onChange={handleChange} />;
}
```

---

Would you like:

* PostgreSQL DB support for file metadata?
* Token expiration and refresh logic?
* Dockerized version?

Let me know how deep you want to go.

# React Hooks Auth Demo

## Installation and running
1. Pre-installation: install and run MongoDB
2. Configure a `.env` file in the `server` directory as follows, using these values or whatever is appropriate:
```
MONGODB_URI=mongodb://localhost:27017/acl-auth
PORT=3333
SECRET="fine, keep your secrets"
```
3. Configure a `.env` file in the `client` directory as follows, using these values or whatever is appropriate:
```
REACT_APP_API_URL=http://localhost:3333
REACT_APP_SECRET="fine, keep your secrets"
```
4. Double-check that the two `.env` variables have the same secret (since we're using a symmetric algorithm to sign JWTs) and the same port number for wherever you're running MongoDB.
5. Change to the `server` directory. Run `yarn` to install.
6. From the server directory, run `yarn dev` to start the server with `nodemon` for auto-reloading on code change (or with `yarn start` to run with regular `node`).
7. Make sure you seed a user or two with different roles into your database by sending some HTTP requests, e.g.:
```
$ http post :3333/roles name=admin permissions:='["create","read","update","delete"]'
$ http post :3333/roles name=editor permissions:='["create","read","update"]'
$ http post :3333/roles name=user permissions:='["read"]'

$ http post :3333/signup username=dumbledore password=drowssap role=admin
$ http post :3333/signup username=mcgonagall password=drowssap role=editor
$ http post :3333/signup username=potter password=drowssap role=user
```
8. In another terminal, from the client directory, run `yarn start` to start the React app in development mode.
9. Go to `http://localhost:3000` in the browser to view the React frontend.
10. You should be able to log in and only have access to the components that the user your logged in with has the appropriate permissions for.

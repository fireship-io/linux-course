## The Full Linux Course

This repo contains the project source code the the [The Full Linux Self-hosting Course](https://fireship.io/courses/linux/). 

## How to Run it Locally

```
git clone <this-repo> guestbook
cd guestbook

npm install
npm run dev

./pocketbase serve
```

### Pocketbase Setup Instructions


Navigate to [localhost:8090/_/](http://127.0.0.1:8090/_/)

Create an admin account for your pocketbase backend

In Pocketbase, go to settings -> auth providers -> github

In order to enable GitHub login, you will need to create a [GitHub OAuth app](https://github.com/settings/applications/new) to obtain a Client ID and Secret. 

Set the callback URL to: http://127.0.0.1:8090/api/oauth2-redirect

Set the Client ID and Secret in Pocketbase and you should now be able to login with GitHub locally. 


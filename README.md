## streaming-desktop

This project is bootstraped by [streamlabs-obs](https://github.com/stream-labs/streamlabs-obs). Most of the components 
are copy from this project, but with some significant changes:

1. Rewrite vue components with react, due to our technique stack.
2. Only copy few components, which are fit for our use cases.
3. Coding style and logic are totally different.

This project is heavily under development and it's bugly, **DO NOT** use it as a reference.

### Project setup
This project is setup powered by **create-react-app** with **electron**, 
mostly follows this [instruction](https://www.codementor.io/@randyfindley/how-to-build-an-electron-app-using-create-react-app-and-electron-builder-ss1k0sfer).

### Local development
Basically we should do development and tests locally before we push it to the testing environment. 
So we need the ability to run everything in our local machine.

1. The project need [obs-headless](https://github.com/MengLi619/obs-headless) as a backend,
which can be run in the docker container locally.
2. Update `env/local.env` with proper values if necessary. (Basically it should not be changed)
3. Run `npm install`
4. Run `npm run local` to start.

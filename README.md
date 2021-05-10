# MovableBoxGenerator

## Build and deploy locally

### Prerequisite
- NodeJS (>= v10.23.0)

###  Steps
- run `npm i` to install dependencies
- run `npm start` and open `http://localhost:4200/` in browser.


## run using docker 
- `docker build -t movable-box-generator .`
- `docker run --name movable-box-generator -d -p 8080:80 movable-box-generator`
- open `http://localhost:8080` in browser

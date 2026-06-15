# Movable Box Generator

An interactive Angular application for creating and manipulating movable boxes on a canvas. Generate boxes dynamically and control their positions using keyboard shortcuts or mouse interactions.

## Features

- **Add Boxes**: Dynamically generate boxes with a single click
- **Move Boxes**: Use keyboard controls to move selected boxes:
  - `W` or `↑` - Move up
  - `S` or `↓` - Move down
  - `A` or `←` - Move left
  - `D` or `→` - Move right
  - `Delete` - Remove selected box
- **Select Boxes**: Click any box to select/deselect it (selected boxes show a black border)
- **Toggle Controls**: Enable/disable keyboard controls via the toolbar toggle
- **Clear All**: Remove all boxes at once using the delete icon in the toolbar
- **Responsive Design**: Built with Angular Material and Flex Layout

## Tech Stack

- **Angular**: v11.0.9
- **Angular Material**: v11.2.12
- **Flex Layout**: v11.0.0-beta.33
- **TypeScript**: v4.0.2
- **SCSS**: For styling
- **Testing**: Karma, Jasmine, and Protractor (e2e)

## Build and run locally

### Prerequisites
- NodeJS (>= v10.23.0)
- npm

### Steps
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open `http://localhost:4200/` in your browser.

## Available npm scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests with Karma
- `npm run lint` - Run TSLint
- `npm run e2e` - Run end-to-end tests with Protractor

## Run using Docker

### Build and Run

```bash
docker build -t movable-box-generator .
docker run --name movable-box-generator -d -p 8080:80 movable-box-generator
```

### Access

Open `http://localhost:8080` in your browser.

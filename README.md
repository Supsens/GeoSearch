

# Country Explorer App

## Description

Country Explorer is a web application built with React that allows users to search for countries and filter them by region. The app fetches data from an external API and displays it in a card layout. It also includes pagination for easier navigation through country data and routing for detailed country views.

## Features

- **Search Functionality**: Users can search for countries by name.
- **Region Filtering**: Countries can be filtered by their region.
- **Pagination**: Browse through countries with pagination controls.
- **Routing**: Users can view detailed information for each country by clicking on the respective card.

## Tech Stack

- **React**: Frontend library used to build the user interface.
- **React Router**: For handling client-side routing.
- **CSS/ Tailwind CSS**: For responsive styling.
- **REST API**: Fetching country data from an external API.

## Getting Started

### Prerequisites

To run this project locally, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/country-explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd country-explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

To run the project in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will reload if you make edits.

### Building the Project

To create a production build:

```bash
npm run build
```

This will create an optimized version of the app in the `build` folder.

## Project Structure

```bash
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable components (Card, Header, SearchBar, etc.)
│   ├── utils/            # Utility functions (fetchData, etc.)
│   ├── App.js            # Main component
│   ├── index.js          # Entry point
│   └── styles.css        # Styling file (Tailwind or custom CSS)
├── package.json          # Project metadata and dependencies
└── README.md             # Documentation
```

## How to Use

1. **Search Countries**: Use the search bar on the homepage to find countries by name.
2. **Filter by Region**: Click on region links or use URLs like `/africa`, `/europe`, etc., to filter countries by region.
3. **Pagination**: Navigate through the list of countries using the "Next" and "Previous" buttons at the bottom of the page.
4. **Country Details**: Click on any country card to view detailed information about that country.



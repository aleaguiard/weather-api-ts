# Diaries weather API with TypeScript

This project is a Weather API built with Node.js and TypeScript. It uses Express for handling HTTP requests and Zod for data validation and type safety. Jest is integrated for testing.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Endpoints](#endpoints)
-   [Testing](#testing)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aleaguiard/weather-api-ts.git
    cd weather-api-ts
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. The API will be available at `http://localhost:3000`.

## Endpoints

### Get Diaries Weather

-   **URL:** `/api/diaries`
-   **Method:** `GET`
-   **Description:** Retrieves diaries weather data.

### Add Diaries Weather Data

-   **URL:** `/api/diaries`
-   **Method:** `POST`
-   **Description:** Adds new diaries weather data.

### Update Diaries Weather Data

-   **URL:** `/api/diaries/:id`
-   **Method:** `PUT`
-   **Description:** Updates diaries weather data for a given ID.

### Delete Diaries Weather Data

-   **URL:** `/api/diaries/:id`
-   **Method:** `DELETE`
-   **Description:** Deletes diaries weather data for a given ID.

## Testing

Run the tests using Jest:

```bash
npm test
```

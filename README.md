
# Image Resizing API

This project provides an on-demand image resizing API that fetches remote images, resizes them, and returns the resized images. The service is built with Node.js and Express, utilizing the `sharp` library for efficient image processing.

## Features

- Resize remote images on-demand.
- Outputs resized images directly for use in `<img>` tags or other applications.
- Lightweight, does not store any images.

## Prerequisites

- Node.js (v18.18+ recommended)
- npm (installed with Node.js)

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## Development

For development with hot-reloading, use:
```bash
npm run dev
```

## Usage

Start the server:
```bash
npm run start
```

The API will run on `http://localhost:3000`.

### Example Request

To resize an image, make a GET request to the endpoint `/resize` with the following query parameters:

- `url` (string, required): The URL of the remote image to resize.
- `width` (number, optional): The desired width of the resized image.
- `height` (number, optional): The desired height of the resized image.

#### Example

```bash
curl -o resized-image.png "http://localhost:3000/resize?url=https://picsum.photos/500&width=200&height=200"
```

Alternatively, use it in an `<img>` tag:
```html
<img src="http://localhost:3000/resize?url=https://picsum.photos/500&width=200&height=200" alt="Resized Image">
```

## API Behavior

1. Validates query parameters (`url`, `width`, `height`).
2. Fetches the image from the provided `url`.
3. Resizes the image based on the provided dimensions.
4. Returns the resized image as the response.

### Error Handling

- If a required parameter is missing or invalid, the API responds with `400 Bad Request` and an error message.
- If the image fetch or resize process fails, the API responds with `500 Internal Server Error`.

### TODO
- swagger documentation
- unit tests
- dockerize

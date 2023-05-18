# Coffee / Tea Maker Backend

This is the backend for a React application where you can store information about your favorite coffee or tea qualities and the price. It allows you to select either coffee or tea, and then enter details such as name, package weight in grams, and roasting level on a scale of 1 to 5. 

## Requirements
Before starting the application, ensure that you have the following software installed:

Node.js (version 12 or higher)
npm (Node Package Manager) or yarn

## Getting Started

To get started with this application: 
 - clone the backend repository `git clone https://github.com/arielmalada/coffee-tea-maker-backend.git`
 - run `cd coffee-tea-maker-backend && npm install` to install the necessary dependencies.
 - create a `.env` and set the appropriate values for your environment.
 - Then, run `npm start` to start the server.

## Usage

Once the server is running, the frontend will be able to access it via HTTP requests to the specified endpoints.

### Endpoints

#### GET /api/product
Returns a list of the details of the tea or coffee.

#### GET /api/order
Returns a list of the saved order.

#### POST /api/order
Creates a new order with the specified data.

Request Body:
```
{
  "type": "coffee" | "tea",
  "name": string,
  "weight": number,
  "price": number,
  "roastingLevel": 1 | 2 | 3 | 4 | 5
}
```

#### POST /api/order/search
Searches for order matching the name of the order.

Request Body:
```
{
  "query": string,
}
```
Note: certainly not the best practices, we can use MongoDB Atlas Search for this action 
### Technologies Used

This application was built using:
- Node.js
- Express
- MongoDB

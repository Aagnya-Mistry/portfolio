# Portfolio Backend

This is the backend server for handling contact form submissions and storing them in MongoDB.

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create a `.env` file in the backend folder:**

   ```env
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=5000
   ```

   Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

3. **Start the server:**
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000` by default and expose a POST endpoint at `/api/contact`.

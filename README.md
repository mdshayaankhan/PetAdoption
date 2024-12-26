
# PetHarbour

PetHarbour is a pet adoption platform that connects pet lovers with available pets in their area. The application consists of a frontend client built with modern web technologies and a backend server managing database operations and API requests.

---

## Starting the Project

Follow these steps to set up and start the application:

### 1. **Start the Client**
Navigate to the `client` directory and start the frontend:
```bash
cd client
npm start

This will start the client-side application. By default, it will run on http://localhost:3000.

2. Start the Server
a) Main Server
Navigate to the server directory and start the backend server:

bash
Copy code
cd server
node index.js
This connects to the database and listens for API requests on port 8080.

b) Server Endpoint (Optional)
If you have additional server endpoints, navigate to the server/serverend directory and start the server:

bash
Copy code
cd server/serverend
node index.js
This will start another server instance on port 5000.

Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
npm
Additional Notes
The application uses two ports:
8080 for the primary server
5000 for additional endpoints (if applicable)
The database connection should be configured in the server/index.js file.

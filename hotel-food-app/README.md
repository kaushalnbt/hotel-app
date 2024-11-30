# Hotel and Food Management System

This project is a web application that allows users to manage hotels, foods, and view a dashboard with statistics. The backend is built with Laravel, and the frontend is built with React.

## Features

-   **Hotel Management**: Create, Read, Update, Delete (CRUD) hotels.
-   **Food Management**: Create, Read, Update, Delete (CRUD) foods associated with hotels.
-   **Search & Filter**: Search for hotels and foods with optional filters.
-   **Dashboard**: Display total counts of hotels and foods, along with a chart for monthly food data.

## Technologies Used

-   **Backend**: Laravel 11
-   **Frontend**: React
-   **Database**: MySQL
-   **API**: RESTful API (using Laravel Controllers)
-   **Charting**: [Any chart library of your choice, like Chart.js or Recharts]

## Prerequisites

Before running the project, ensure that you have the following installed:

-   PHP >= 8.1
-   Composer
-   Node.js
-   npm/yarn
-   MySQL or any other relational database

## Installation

### Backend (Laravel)

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/hotel-food-management.git
    cd hotel-food-management
    ```

2. **Install backend dependencies**:

    Make sure you're in the backend directory, then install Laravel dependencies:

    ```bash
    composer install
    ```

3. **Setup environment file**:

    Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

4. **Generate the application key**:

    ```bash
    php artisan key:generate
    ```

5. **Configure the database**:

    Update the `.env` file with your database credentials.

6. **Run database migrations**:

    ```bash
    php artisan migrate
    ```

7. **Seed the database** (optional, to insert sample data):

    ```bash
    php artisan db:seed
    ```

8. **Start the Laravel server**:

    ```bash
    php artisan serve
    ```

    Your backend API should now be running on `http://localhost:8000`.

### Frontend (React)

1. **Navigate to the frontend folder**:

    Go to the `frontend` folder where the React app is located.

    ```bash
    cd frontend
    ```

2. **Install frontend dependencies**:

    Using npm or yarn, install the necessary packages:

    ```bash
    npm install
    ```

    Or, if you're using yarn:

    ```bash
    yarn install
    ```

3. **Start the React development server**:

    ```bash
    npm start
    ```

    The React application should now be running at `http://localhost:3000`.

4. **Proxy API Requests**:

    If you're running both the backend and frontend locally, ensure the React app proxies API requests to the backend. You can configure this by adding the following line to the `package.json` of the React app:

    ```json
    "proxy": "http://localhost:8000",
    ```

    This ensures that API calls from React are forwarded to the Laravel backend.

## API Endpoints

### Hotels

-   **GET /api/hotels**: List all hotels (supports search).
-   **POST /api/hotels**: Create a new hotel.
-   **GET /api/hotels/{id}**: Get details of a specific hotel.
-   **PUT /api/hotels/{id}**: Update an existing hotel.
-   **DELETE /api/hotels/{id}**: Delete a hotel.

### Foods

-   **GET /api/foods**: List all foods (supports search).
-   **POST /api/foods**: Create a new food item.
-   **GET /api/foods/{id}**: Get details of a specific food item.
-   **PUT /api/foods/{id}**: Update an existing food item.
-   **DELETE /api/foods/{id}**: Delete a food item.

### Dashboard

-   **GET /api/dashboard**: Get the dashboard data, including total counts of hotels and foods, along with monthly food data.

## Folder Structure

hotel-food-management/ ├── backend/ # Laravel backend code │ ├── app/ # Application code (Controllers, Models, etc.) │ ├── database/ # Migrations and Seeds │ ├── routes/ # API routes (api.php) │ └── .env # Environment variables ├── frontend/ # React frontend code │ ├── src/ │ │ ├── components/ # React components (HotelList, FoodList, Dashboard, etc.) │ │ ├── services/ # API calls │ │ └── App.js # Main React component ├── .gitignore # Git ignore rules ├── README.md # This file └── package.json

# React dependencies

## Usage

1. **Search Hotels & Foods**:  
   Use the search bar on the hotel and food listing pages to filter hotels and foods based on name or other criteria.

2. **Dashboard**:  
   View a summary of total hotels, total foods, and a chart showing monthly food data.

3. **CRUD Operations**:
    - Add new hotels and foods through the UI.
    - Update or delete existing hotels or foods via the UI.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you need further assistance or encounter any issues, feel free to reach out on kaushalnbt@gmail.com!

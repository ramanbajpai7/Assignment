# Yoga Class Admission Form

This project is an admission form for monthly Yoga classes, allowing users to enroll and pay for the classes. The project is built with React for the frontend, Node.js with Express for the backend, and MongoDB as the database.

## Features

- Users can enroll for monthly Yoga classes.
- Monthly fee payment is required.
- Users can choose a batch for the month (6-7AM, 7-8AM, 8-9AM, or 5-6PM).
- Shifting between batches is allowed every month.

## Technologies Used

- Frontend: React
- Backend: Node.js with Express
- Database: MongoDB
- Hosting: Heroku (backend), Netlify (frontend)

## Project Structure

- `frontend/`: Contains the React frontend code.
- `backend/`: Contains the Node.js backend code.
- `database/`: Includes the MongoDB schema and ER diagram.

## How to Run Locally

### Frontend

1. Navigate to the `frontend/` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

### Backend

1. Navigate to the `backend/` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the Express server.

### Database

- The MongoDB database connection details can be configured in the backend.

## API Endpoints

- `POST /api/enroll`: Enroll a user for Yoga classes.
- `POST /api/payment`: Process monthly fee payment.

## Database Schema

![ER Diagram]![1](https://github.com/ramanbajpai7/Assignment/assets/84241394/2cd7bf68-14d7-498e-9916-b4d227279dae)


## Deployment

- The backend is deployed on Heroku: [Render Backend URL](https://Render-backend-url).
- The frontend is deployed on Netlify: [Netlify Frontend URL](https://netlify-frontend-url).

## Mock Payment Function

- The project uses a mock payment function named `CompletePayment()` (not implemented).

## Assumptions

- Users must be within the age limit of 18-65.
- Monthly fee is fixed at 500/- Rs INR.
- Shifting between batches is allowed only at the start of each month.

## Contributing

Feel free to contribute to the project. Fork the repository and submit a pull request.
## Screenshots
![DataBase]![2]![5](https://github.com/ramanbajpai7/Assignment/assets/84241394/0f71d534-0c8c-4d96-b897-25c54a6ce2b8)

### Enroll Form
![Enroll Form]![3](https://github.com/ramanbajpai7/Assignment/assets/84241394/e581353b-4e4e-4eb0-9f54-920091f83cb9)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Contact Us Page Implementation using Nodemailer and Database Storage

This project demonstrates a simple implementation of a "Contact Us" page for a web application. It allows users to submit their contact information and messages, which are then stored in a database while also being sent via email using Nodemailer.

## Overview

The Contact Us page is built using Node.js and Express.js on the backend, along with a MongoDB database to store the messages. Nodemailer is utilized to send an email confirmation to the user and a notification email to the website owner upon successful submission of the contact form.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Nodemailer

## Implementation Details

### Backend

- Utilizes Express.js to create RESTful API endpoints.
- MongoDB database is used to store contact form submissions.
- Nodemailer is integrated to send emails to the user and website owner.

### Frontend

- React.js is used to create the frontend interface for the Contact Us form.
- HTML/CSS for basic form layout and styling.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB installed and running locally or a MongoDB Atlas cluster (for remote DB)
- Create a `.env` file with necessary environment variables like database URL, email credentials, etc.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure the `.env` file with required environment variables.
4. Run the application using `npm run dev`.

## How to Use

1. Access the Contact Us page through the provided route or URL.
2. Fill in the required details (Name, Email, Subject, Message) in the form.
3. Click the "Submit" button to send the message.
4. Upon successful submission:
   - An email confirmation will be sent to the user's email address.
   - The message will be stored in the database for reference.
   - A notification email will be sent to the website owner with the message details.

## Folder Structure

- `backend/`: Contains backend Node.js code.
- `frontend/`: Holds the React.js frontend code.
- `config/`: Configuration files, such as database connections, Nodemailer setup.
- `models/`: Database schema/models for message storage.
- `controllers/`: Backend logic for handling form submissions.
- `views/`: Frontend views or components.

## Contributions

Contributions are welcome! Feel free to fork this repository, make changes, and create a pull request.

## License

This project is licensed under the [MIT License](link-to-license-file).

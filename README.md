
# Expense Tracker

This Expense Tracker web application allows users to keep track of their expenses by providing functionalities to add, delete, and read expenses. It is built using Next.js for the frontend and Firebase for the database.

## Features

- **Add Expense**: Users can add new expenses by providing details such as expense name, amount, and date.
- **Delete Expense**: Users can delete existing expenses from the list.
- **Read Expenses**: Users can view a list of all expenses along with their details.

## Technologies Used

- **Next.js**: Next.js is a React framework for building server-side rendered and static web applications.
- **Firebase**: Firebase is a platform developed by Google for creating mobile and web applications.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate into the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project and copy the Firebase configuration.
   - Create a `.env.local` file in the root directory of the project and add your Firebase configuration as environment variables:

     ```plaintext
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.


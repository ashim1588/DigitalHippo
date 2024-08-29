# Digital Hippo

Digital Hippo is a responsive digital marketplace where users can buy and sell digital assets such as icon packs, UI kits, and more. Built using Next.js, Express.js, Payload CMS, MongoDB, and styled with Tailwind CSS and Shad CN UI library, Digital Hippo offers a seamless experience for both buyers and sellers, from browsing to checkout.

## Features

- **Authentication**: Secure sign-up and sign-in pages.
- **Home Page**: Showcases brand new assets with a dynamic hero section.
- **Products Page**: Displays all available digital assets for purchase.
- **Product Details Page**: Detailed view of each asset with descriptions, images, and pricing.
- **Cart & Side Sheet**: Add items to the cart and view them in a side sheet for easy access.
- **Checkout Page**: Complete your purchase with a streamlined checkout process.
- **Payments**: Integrated with Stripe for secure and smooth transactions.
- **Thank You Page**: Receive a receipt and access to your downloadable assets after payment.
- **Seller Dashboard**: Allows sellers to list their products and manage them.
- **Admin Panel**: Admins can approve or reject products listed by sellers.

## Screenshots
<h3>Home Page</h1>
<img width="900" alt="Screenshot 2024-08-21 at 9 12 29 PM (2)" src="https://github.com/user-attachments/assets/a094c1a8-1b62-471d-94b8-60ae1e45b556">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 42 PM (2)" src="https://github.com/user-attachments/assets/4af417f6-2b1f-4c71-b7ae-c8827118f5a1">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/a8e12ffd-7ac5-416d-a79f-05d7e70ce1c1">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/07868217-6934-4b83-8908-51d576f10307">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/f29dc7cf-2987-45df-930b-9d47abcf4fe9">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/65e7f86f-b331-4ea0-a821-530c99595b95">
<br/>

<h3>SignIn & SignUp</h1>
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/ac862097-a3a7-4473-b3b1-e8d7e6bcdba6">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 48 PM (2)" src="https://github.com/user-attachments/assets/05ee6101-d736-48ff-94d6-248797bbb5e4">
<br/>

<h3>Product Details Page</h3>
<img width="900" alt="Screenshot 2024-08-21 at 9 12 29 PM (2)" src="https://github.com/user-attachments/assets/4c3f604e-8e64-42da-8d4f-1bbd0d954cdb">
<img width="900" alt="Screenshot 2024-08-21 at 9 12 29 PM (2)" src="https://github.com/user-attachments/assets/65a14455-49d6-4acf-9e80-288c8b33da8b">

<br/>
<h3>Products Page</h3>
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/74809e2f-fd55-4862-9900-dd877fbdfabf">

<h3>Cart</h3>
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/69c28a6d-1fe6-461f-9bce-c725a5d63674">
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/14b1b41b-18b8-4ef3-9298-6a9fd044565b">

<br/>
<h3>Checkout & Payments</h3>
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/ef191eee-01d5-4d93-93ff-9103b578627e">
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/80a36f0d-cd92-403d-a33d-128e35e63e6e">

<br/>
<h3>Thank You Page</h3>
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/82acc38a-4592-46c3-af66-68576474ad1d">
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/c3fa02f7-9e24-4df3-bb45-e67dbae729af">

<br/>
<h3>Seller & Admin Panel</h3>
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/3b314f5e-256c-43aa-89cc-3b7d7cc6e0c1">
<img width="900" alt="Screenshot 2024-08-29 at 11 23 46 AM" src="https://github.com/user-attachments/assets/46e19c37-6bf3-4bdb-8328-ca3408c3206a">


## Running the Project Locally

To run Digital Hippo on your local machine, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB Setup
- Stripe account and API keys
- Resend API Key

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ashim1588/digitalhippo
    ```
2. Navigate to the project directory:
    ```bash
    cd digital-hippo
    ```
3. Install dependencies:
    ```bash
    npm install
    or
    yarn install
    ```
4. Run:
    ```bash
    npm run dev
    or
    yarn dev
    ```

### Setup Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
PAYLOAD_SECRET=any_secret_key
MONGODB_URL=your_mongo_url
NEXT_PUBLIC_SERVER_URL=your_domain_or_your_localhosturl
STRIPE_SECRET_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_key
RESEND_API_KEY=your_resend_api_key

# Vite Frontend App

This is a simple frontend application built using Vite.js. It serves as a template for deploying a Vite application on an EC2 instance running Nginx.

## Project Structure

```
vite-frontend-app
├── src
│   ├── main.ts          # Entry point of the application
│   ├── style.css        # Global styles for the application
│   └── components
│       └── App.ts      # Main component of the application
├── public
│   └── index.html       # Main HTML file for the application
├── .github
│   └── workflows
│       └── deploy.yml   # GitHub Actions workflow for deployment
├── vite.config.ts       # Vite configuration file
├── tsconfig.json        # TypeScript configuration file
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vite-frontend-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build the application for production:**
   ```bash
   npm run build
   ```

## Deployment

This project includes a GitHub Actions workflow for deploying the application to an EC2 instance running Nginx on port 6000. Ensure that your EC2 instance is properly configured to serve the application.

## Usage

After deployment, you can access the application by navigating to `http://<your-ec2-instance-ip>:6000` in your web browser.

## License

This project is licensed under the MIT License.
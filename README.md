# ShopHub - Mini E-Commerce Website

A modern, modular e-commerce application built with React and Git submodules for better code organization and scalability.

## Architecture Overview

This project uses a modular architecture with Git submodules to separate concerns and enable independent development of different features:

```
main-app/
  ui-components/          # Reusable UI components
  product-module/         # Product listing and details
  cart-module/           # Shopping cart functionality
  auth-module/           # User authentication
  src/                   # Main application code
  public/                # Static assets
```

## Repository Structure

### Main Repository (main-app)
- **Purpose**: Central application that integrates all modules
- **Features**: Routing, state management, module integration
- **Tech Stack**: React, Vite, React Router, Tailwind CSS

### UI Components Repository (ui-components)
- **Purpose**: Reusable UI components used across all modules
- **Components**: Navbar, Footer, Button, Card
- **Tech Stack**: React, Tailwind CSS

### Product Module Repository (product-module)
- **Purpose**: Product listing and detail pages
- **Features**: Product grid, search, filtering, product details
- **Data**: Mock product data from JSON file

### Cart Module Repository (cart-module)
- **Purpose**: Shopping cart functionality
- **Features**: Add/remove items, quantity management, checkout flow
- **State**: Cart items and pricing calculations

### Authentication Module Repository (auth-module)
- **Purpose**: User authentication
- **Features**: Login, signup, form validation
- **Mock Auth**: Simple authentication for demo purposes

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

#### Option 1: Clone with Submodules (Recommended)
```bash
git clone --recurse-submodules <main-repo-url>
cd main-app
npm install
```

#### Option 2: Manual Setup
```bash
# Clone main repository
git clone <main-repo-url>
cd main-app

# Clone each submodule manually
git submodule add <ui-components-repo-url> ui-components
git submodule add <product-module-repo-url> product-module
git submodule add <cart-module-repo-url> cart-module
git submodule add <auth-module-repo-url> auth-module

# Initialize and update submodules
git submodule init
git submodule update

# Install dependencies
npm install
```

### Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:3000`

## Git Submodule Management

### Updating Submodules
```bash
# Update all submodules to latest commits
git submodule update --remote

# Update specific submodule
git submodule update --remote ui-components

# Pull latest changes in submodule
cd ui-components
git pull origin main
cd ..
git add ui-components
git commit -m "Update ui-components submodule"
```

### Making Changes in Submodules
```bash
# Navigate to submodule directory
cd ui-components

# Make changes and commit
git add .
git commit -m "Your changes"
git push origin main

# Return to main repo and update submodule reference
cd ..
git add ui-components
git commit -m "Update ui-components to latest version"
```

### Adding New Submodules
```bash
git submodule add <new-repo-url> new-module
git add .gitmodules new-module
git commit -m "Add new-module as submodule"
```

## Features

### User Interface
- **Modern Design**: Clean, responsive UI with Tailwind CSS
- **Mobile Friendly**: Fully responsive layout for all screen sizes
- **Interactive Elements**: Smooth transitions and hover effects

### Shopping Experience
- **Product Browsing**: Grid view with search and filtering
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add/remove items, quantity management
- **Authentication**: Login/signup with form validation

### Technical Features
- **Modular Architecture**: Separated concerns with Git submodules
- **State Management**: React Context API for global state
- **Routing**: Client-side routing with React Router
- **Component Reusability**: Shared UI components across modules

## Project Structure Details

### Main Application Components
```
src/
  App.jsx              # Main application with routing and state
  main.jsx             # Application entry point
  index.css            # Global styles and Tailwind imports
```

### UI Components
```
ui-components/src/
  components/
    Navbar.jsx         # Navigation bar with cart counter
    Footer.jsx          # Footer with links and information
    Button.jsx          # Reusable button component
    Card.jsx            # Product card component
  index.js             # Component exports
```

### Product Module
```
product-module/src/
  ProductList.jsx      # Product grid with search/filter
  ProductDetail.jsx    # Individual product page
  products.json        # Mock product data
  index.js             # Module exports
```

### Cart Module
```
cart-module/src/
  Cart.jsx             # Shopping cart page
  index.js             # Module exports
```

### Authentication Module
```
auth-module/src/
  Login.jsx            # Login form
  Signup.jsx           # Signup form
  index.js             # Module exports
```

## Development Workflow

### Working with Submodules
1. **Main App Development**: Work in the main repository for integration
2. **Module Development**: Navigate to specific submodule directories
3. **Testing**: Each module can be tested independently
4. **Deployment**: Update submodule references before deployment

### Best Practices
- Keep submodules focused on single responsibilities
- Use semantic versioning for module releases
- Document module APIs and dependencies
- Test modules independently before integration

## Deployment

### Building for Production
```bash
# Build main application
npm run build

# The build output will be in dist/ folder
# Deploy dist/ folder to your hosting service
```

### Environment Variables
Create a `.env` file in the main app root:
```env
VITE_API_URL=your-api-url
VITE_APP_NAME=ShopHub
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes in appropriate modules
4. Update submodule references if needed
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Troubleshooting

### Submodule Issues
```bash
# If submodules are not initialized
git submodule init
git submodule update

# If submodule is in detached HEAD state
cd submodule-name
git checkout main

# To reset all submodules
git submodule deinit --all
git submodule update --init --recursive
```

### Common Issues
- **Module Not Found**: Ensure all submodules are properly initialized
- **Import Errors**: Check that module paths are correct in imports
- **Build Failures**: Verify all dependencies are installed in each module

## Future Enhancements

- [ ] Real backend API integration
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Advanced search and filtering
- [ ] Multi-language support
- [ ] Analytics integration

## Contact

For questions or support, please open an issue in the repository.

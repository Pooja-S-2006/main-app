import React, { createContext, useContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Footer } from '../ui-components/src/index.js';
import { ProductList, ProductDetail } from '../product-module/src/index.js';
import { Cart } from '../cart-module/src/index.js';
import { Login, Signup } from '../auth-module/src/index.js';

// App Context for state management
const AppContext = createContext();

// Initial state
const initialState = {
  user: null,
  cart: [],
  selectedProduct: null,
  currentPage: 'home',
  authMode: 'login'
};

// Reducer for state management
const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, currentPage: 'home' };
    case 'LOGOUT':
      return { ...state, user: null, currentPage: 'home' };
    case 'SIGNUP':
      return { ...state, user: action.payload, currentPage: 'home' };
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cart: [...state.cart, { ...action.payload, quantity: 1, cartId: Date.now() }] 
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cart: state.cart.filter(item => item.cartId !== action.payload.cartId) 
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload, currentPage: 'product-detail' };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_AUTH_MODE':
      return { ...state, authMode: action.payload };
    default:
      return state;
  }
};

// Context Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    login: (userData) => dispatch({ type: 'LOGIN', payload: userData }),
    logout: () => dispatch({ type: 'LOGOUT' }),
    signup: (userData) => dispatch({ type: 'SIGNUP', payload: userData }),
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
    removeFromCart: (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item }),
    updateQuantity: (item, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId: item.cartId, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    setSelectedProduct: (product) => dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product }),
    setCurrentPage: (page) => dispatch({ type: 'SET_CURRENT_PAGE', payload: page }),
    setAuthMode: (mode) => dispatch({ type: 'SET_AUTH_MODE', payload: mode })
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Home Page Component
const HomePage = () => {
  const { state, actions } = useApp();

  const handleProductClick = (product) => {
    actions.setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    actions.addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ShopHub</h1>
          <p className="text-xl text-gray-600">Discover amazing products at great prices</p>
        </div>
        <ProductList 
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

// Product Detail Page Component
const ProductDetailPage = () => {
  const { state, actions } = useApp();

  const handleAddToCart = (product) => {
    actions.addToCart(product);
  };

  const handleBack = () => {
    actions.setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail
          product={state.selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={handleBack}
        />
      </div>
    </div>
  );
};

// Cart Page Component
const CartPage = () => {
  const { state, actions } = useApp();

  const handleRemoveItem = (item) => {
    actions.removeFromCart(item);
  };

  const handleUpdateQuantity = (item, quantity) => {
    actions.updateQuantity(item, quantity);
  };

  const handleClearCart = () => {
    actions.clearCart();
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Cart
          cartItems={state.cart}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

// Auth Page Component
const AuthPage = () => {
  const { state, actions } = useApp();

  const handleLogin = (userData) => {
    actions.login(userData);
  };

  const handleSignup = (userData) => {
    actions.signup(userData);
  };

  const handleSwitchMode = (mode) => {
    actions.setAuthMode(mode);
  };

  return (
    <div>
      {state.authMode === 'login' ? (
        <Login
          onLogin={handleLogin}
          onSwitchToSignup={() => handleSwitchMode('signup')}
        />
      ) : (
        <Signup
          onSignup={handleSignup}
          onSwitchToLogin={() => handleSwitchMode('login')}
        />
      )}
    </div>
  );
};

// Navigation Handler Component
const NavigationHandler = () => {
  const { state, actions } = useApp();

  const handleNavClick = (page) => {
    if (page === 'auth' && state.user) {
      actions.logout();
    } else {
      actions.setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        cartCount={state.cart.length}
        onCartClick={() => handleNavClick('cart')}
        onHomeClick={() => handleNavClick('home')}
        onLoginClick={() => handleNavClick('auth')}
        onLogoutClick={() => actions.logout()}
        isAuthenticated={!!state.user}
      />
      
      <main className="flex-grow">
        {state.currentPage === 'home' && <HomePage />}
        {state.currentPage === 'product-detail' && <ProductDetailPage />}
        {state.currentPage === 'cart' && <CartPage />}
        {state.currentPage === 'auth' && <AuthPage />}
      </main>
      
      <Footer />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<NavigationHandler />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;

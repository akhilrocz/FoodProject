// Importing action constants from a file (orderConstants.js)
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

// Initial state for the newOrderReducer
const initialState = {
  loading: false, // Indicates whether an action is in progress
  error: null, // Stores any errors that occur during actions
  order: null, // Stores the order data when it is successfully created
};

// Reducer function for creating a new order
export const newOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload, // Set the order data when the request is successful
      };
    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload, // Set the error message when the request fails
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null, // Clear any previous errors
      };
    default:
      return state; // Return the current state by default
  }
};

// Reducer function for fetching a user's orders
export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_ORDER_REQUEST:
      return {
        loading: true,
      };
    case MY_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload, // Set the user's orders when the request is successful
      };
    case MY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload, // Set the error message when the request fails
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null, // Clear any previous errors
      };
    default:
      return state; // Return the current state by default
  }
};

// Reducer function for fetching details of a specific order
export const orderDetailsReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true, // Indicates that the request for order details is in progress
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false, // Indicates that the request for order details is complete
        order: action.payload, // Stores the order details when the request is successful
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false, // Indicates that the request for order details has failed
        error: action.payload, // Stores the error message when the request fails
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null, // Clear any previous errors
      };
    default:
      return state; // Return the current state by default
  }
};

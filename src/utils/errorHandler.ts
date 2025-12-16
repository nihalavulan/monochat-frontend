import { AxiosError } from "axios";
import { ShowAlert } from "./Alert";

/**
 * Extracts a user-friendly error message from various error formats
 * @param error - The error object (can be AxiosError, Error, or any)
 * @param defaultMessage - Default message to show if error format is unexpected
 * @returns A user-friendly error message string
 */
export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "An error occurred. Please try again."
): string => {
  // Handle Axios errors (API errors)
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError<{ message?: string; error?: string }>;
    
    if (axiosError.response) {
      // API responded with error status
      const errorData = axiosError.response.data;
      
      if (errorData) {
        if (typeof errorData === "string") {
          return errorData;
        }
        
        if (typeof errorData === "object") {
          // Try message first, then error, then any string property
          if (errorData.message) {
            return errorData.message;
          }
          if (errorData.error) {
            return errorData.error;
          }
        }
      }
      
      // Fallback to status text if available
      if (axiosError.response.statusText) {
        return axiosError.response.statusText;
      }
    } else if (axiosError.request) {
      // Request was made but no response received (network error)
      return "Network error. Please check your connection and try again.";
    }
  }
  
  // Handle standard Error objects
  if (error instanceof Error) {
    return error.message;
  }
  
  // Handle string errors
  if (typeof error === "string") {
    return error;
  }
  
  // Fallback to default message
  return defaultMessage;
};

/**
 * Handles API errors and shows toast notification
 * @param error - The error object
 * @param defaultMessage - Default message to show if error format is unexpected
 * @param showToast - Whether to show toast notification (default: true)
 * @returns The extracted error message
 */
export const handleApiError = (
  error: unknown,
  defaultMessage: string = "An error occurred. Please try again.",
  showToast: boolean = true
): string => {
  const errorMessage = getErrorMessage(error, defaultMessage);
  
  if (showToast) {
    ShowAlert("error", errorMessage);
  }
  
  return errorMessage;
};


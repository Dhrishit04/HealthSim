// If you already have isEmailValid, keep it:
export function isEmailValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ADD the missing validateSettings export:
export function validateSettings(settings) {

  if (!isEmailValid(settings.email)) {
    return 'Email address is invalid';
  }


  return null; // Return null if no errors
}

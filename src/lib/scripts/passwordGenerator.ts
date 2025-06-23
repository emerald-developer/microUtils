function generatePassword(length: number, hasNumbers: boolean, hasSymbols: boolean, upperCase:boolean , lowerCase:boolean): string {
  let charset = '';
  if (lowerCase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (upperCase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (hasNumbers) {
    charset += '0123456789';
  }
  if (hasSymbols) {
    charset += '!@#$%^&*()_+[]{}|;:,.<>?';
  }
  //if charset is empty :
  if (charset.length === 0) {
    throw new Error('At least one character type must be selected');
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
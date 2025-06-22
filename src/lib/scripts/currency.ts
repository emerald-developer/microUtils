/**
 * Convert currency amount from one currency to another using AJELLY123 free-exchange-rate-api.
 * 
 * @param amount - The amount of money to convert.
 * @param fromCurrency - The base currency code (e.g. "USD").
 * @param toCurrency - The target currency code (e.g. "EUR").
 * @returns Promise<number> - The converted amount.
 */
export default async function convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): Promise<number> {
    const url = `https://api.budjet.in/fiat/${fromCurrency}/${toCurrency}/${amount}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    const data: number = await response.json();
    return data;
  }
  
  // Example usage:
  convertCurrency(100, "USD", "EUR")
    .then((convertedAmount) => {
      console.log(`100 USD is approximately ${convertedAmount} EUR`);
    })
    .catch((error) => {
      console.error("Conversion failed:", error);
    });
  
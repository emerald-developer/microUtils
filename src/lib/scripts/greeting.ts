/**
 * Generates a time-based greeting (Good morning, Good afternoon, or Good evening).
 *
 * @returns {string} The time-based greeting followed by an exclamation mark.
 */


export default function greeting() {
    const now = new Date();
    const hours = now.getHours();

    let timeBasedGreeting: string;
    if (hours < 12) {
        timeBasedGreeting = "Good morning";
    } else if (hours < 18) {
        timeBasedGreeting = "Good afternoon";
    } else {
        timeBasedGreeting = "Good evening";
    }
    return `${timeBasedGreeting}!`;

}
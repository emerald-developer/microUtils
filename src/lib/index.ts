// place files you want to import through the `$lib` alias in this folder.
export function greeting() {
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
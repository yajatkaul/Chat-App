export function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format

    return `${hours}:${minutes} ${meridiem}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}

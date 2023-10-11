export default function getFormattedDate(date) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
}
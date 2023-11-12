function formatMonthAndYear(inputDate) {
    const parts = inputDate.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;

    const dateObject = new Date(year, month, 1);

    const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(dateObject);

    return formattedDate;
}

export { formatMonthAndYear }
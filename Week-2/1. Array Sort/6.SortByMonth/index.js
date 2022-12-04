const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    return events.sort((a, b) => {
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)
    })
}

module.exports = sortByMonth;
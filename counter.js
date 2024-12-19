document.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date().toDateString();
    let storedDate = localStorage.getItem('pageViewDate');
    let count = localStorage.getItem('pageViewCount');

    if (count === null) {
        count = 0;
    }

    if (storedDate !== currentDate) {
        count++;
        localStorage.setItem('pageViewCount', count);
        localStorage.setItem('pageViewDate', currentDate);
    }

    document.getElementById('count').innerText = count;
});

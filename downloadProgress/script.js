const download = document.querySelector('.button'),
    addclass = document.querySelector('.site');
download.addEventListener('click', function () {
    addclass.classList.toggle('show')
})

//download progress
const buffering = () => {
    const bar = document.querySelector('.loader');
    let width = 1;
    var interval = 100,
        remaining = interval / 10,
        minus_rem = remaining / 100;

    const rate = () => {
        const d = new Date();
        let seconds = d.getSeconds();

        bar.style.width = `${width}%`;
        document.querySelector('.percentage').innerHTML = `${width}%`;

        remaining = remaining - minus_rem;
        if (width >= 100) {
            remaining = 0;
            document.querySelector('.done').style = 'display:inline-block';
            clearInterval(intervale);
        }
        document.querySelector('.seconds').innerHTML = Math.ceil(remaining);
        width++;
    }
    const intervale = setInterval(rate, interval);
}
document.querySelector('button').addEventListener('click', buffering)
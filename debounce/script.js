
// Backend Function
function search(q) {
    console.log(`Searching ${q}..`)

}








const input = document.getElementById('search-input')


function debounce(fn, ms) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms)
    }
}

const debounceSearch = debounce(search, 2 * 1000)

input.addEventListener('input', e => {
    debounceSearch(e.target.value)
})
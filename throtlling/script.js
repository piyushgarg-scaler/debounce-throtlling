let counter = 0

function recordLike() {
    console.log('[Server] Recording like')
    counter++
}




const likeBtn = document.getElementById('like-btn')

let isClicked = false;

function throttle(fn, ms) {
    let flag = false;

    return function (...args) {
        if (flag) return;

        fn(...args)
        flag = true;

        setTimeout(() => flag = false, ms);
    }
}

const recordLikeWithThrottle = throttle(recordLike, 10 * 1000)


likeBtn.addEventListener('click', e => {
    recordLikeWithThrottle()
    e.target.innerText = `Like (${counter})`
})



















// function recordLikeWithThrottle() {

//     if (isClicked) return console.log('Ignoring...')

//     recordLike()
//     isClicked = true

//     setTimeout(() => isClicked = false, 10 * 1000)

// }

const posts = []

const TITLE_VALIDATION_LIMIT = 100
const TEXT_VALIDATION_LIMIT = 200
const inputTitlePostNode = document.querySelector ('.js-input-title-post') 
const inputTextPostNode = document.querySelector ('.js-input-text-post')

const feedPostsNode = document.querySelector ('.js-feed-col__posts')

const publishPostBtn = document.querySelector ('.js-publish-btn')

const countSymbolsWarningNode = document.querySelector ('.js-count-symbols-warning')
// const textCountSymbolsWarningNode = document.querySelector ('.js-text-count-symbols-warning')

publishPostBtn.addEventListener ('click', function () {
    renderPosts ()
    const currentDate = new Date ()
    const dt = `1111${currentDate.getDate}2222`
    console.log (currentDate)

    // addNewPostToPosts ()
})

inputTitlePostNode.addEventListener ('input', function () {
    validation ()
})

inputTextPostNode.addEventListener ('input', function () {
    validation ()
})

const validation = function () {
    
    const titleLength = inputTitlePostNode.value.length;
    const textLength = inputTextPostNode.value.length;

    if (titleLength > TITLE_VALIDATION_LIMIT) {
        countSymbolsWarningNode.innerText = `Длина символов заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`
        countSymbolsWarningNode.removeAttribute ('hidden', )
        return
    }

    if (textLength > TEXT_VALIDATION_LIMIT) {
        countSymbolsWarningNode.innerText = `Длина символов текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`
        countSymbolsWarningNode.removeAttribute ('hidden', )
        return
    }
    
    countSymbolsWarningNode.setAttribute ('hidden', '')
}



const getNewPostFromInput = function () {
    const title = inputTitlePostNode.value
    const text = inputTextPostNode.value

    const currentDate = new Date ()
    const dt = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`

    return {
        dt,
        title,
        text
    }
}

const addValeuToNewPost = function () {

    newPost = getNewPostFromInput ()
    
    return newPost
}

const addNewPostToPosts = function () {
    
    addValeuToNewPost ()
    


    posts.push (newPost)
}

const renderPosts = function () {
    
    let newPostHTML = ''
    
    addNewPostToPosts ()
    
    posts.forEach(newPost => {
        newPostHTML += `
            <div class='post'>
                <p class='post__date'>${newPost.dt}</p>
                <p class='post__title'>${newPost.title}</p>
                <p class='post__text'>${newPost.text}</p>
            </div>
        `;
    });

    feedPostsNode.innerHTML = newPostHTML
}



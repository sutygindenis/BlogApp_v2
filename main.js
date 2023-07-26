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
    if (inputTitlePostNode.value.length === 0 || inputTextPostNode.value.length === 0) {
    return
    }
    renderPosts ()
    cleaerInputs ()
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
        countSymbolsWarningNode.innerText = `Заголовок больше ${TITLE_VALIDATION_LIMIT} символов`
        countSymbolsWarningNode.removeAttribute ('hidden', )
        return
    }

    if (textLength > TEXT_VALIDATION_LIMIT) {
        countSymbolsWarningNode.innerText = `Пост больше ${TEXT_VALIDATION_LIMIT} символов`
        countSymbolsWarningNode.removeAttribute ('hidden', )
        return
    }
    
    countSymbolsWarningNode.setAttribute ('hidden', '')
}



const getNewPostFromInput = function () {
    const title = inputTitlePostNode.value
    const text = inputTextPostNode.value



    const currentDate = new Date ()
    const dt = `${currentDate.toLocaleDateString ()} ${currentDate.toLocaleTimeString ()}`

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

const cleaerInputs = function () {
    inputTextPostNode.value = ``
    inputTitlePostNode.value = ``
}


const emptyInputsRestriction = function () {

}
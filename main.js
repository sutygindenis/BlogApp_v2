const posts = []

const inputTitlePostNode = document.querySelector ('.js-input-title-post') 
const inputTextPostNode = document.querySelector ('.js-input-text-post')

const feedPostsNode = document.querySelector ('.js-feed-col__posts')

const publishPostBtn = document.querySelector ('.js-publish-btn')

publishPostBtn.addEventListener ('click', function () {
    renderPosts ()
    // addNewPostToPosts ()
})

const getNewPostFromInput = function () {
    const title = inputTitlePostNode.value
    const text = inputTextPostNode.value
    return {
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
                <p class='post__title'>${newPost.title}</p>
                <p class='post__text'>${newPost.text}</p>
            </div>
        `;
    });

    feedPostsNode.innerHTML = newPostHTML
}



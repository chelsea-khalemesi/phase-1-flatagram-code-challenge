
//function to fetch the dog image
const fetchDogImage = () => {
    fetch(`http://localhost:3000/images`)
    .then((res) => res.json())
    .then((data) => (data).forEach((dog) => {displayDog(dog)}))
}
//function to display the image
function displayDog (data){
    const imageTitle = document.getElementById('card-title')
    imageTitle.textContent = data.title;
    const picture = document.getElementById('card-image')
    picture.src = data.image;
    picture.alt = data.title;
//Increasing likes on click
    document.getElementById('like-button').addEventListener('click', ()=> {
        let likeCount = document.getElementById('like-count');
        likeCount.textContent = `${data.likes} likes` 
        data.likes++;
    });
}
fetchDogImage()
//function to fetch coments
const fetchComments = function() {
    fetch(`http://localhost:3000/comments`)
    .then((response) => response.json())
    .then((comments) => (comments).forEach((comment) => {displayComments(comment)}))
}
fetchComments()
//function to display comments
function displayComments (comment){
    let comments = document.createElement('li')
    comments.innerHTML = `
    <li class='commentList'>${comment.content}</li>
    `
    //delete a comment
    comments.addEventListener('click',()=>{
        comments.remove() = "";
    })
    document.getElementById('comments-list').appendChild(comments)
}
//function to add new comment
document.getElementById('comment-form').addEventListener('submit', handleComments)
function handleComments (e){
    e.preventDefault()
    let newComment = {
        content: e.target.comment.value,
        imageId: 1,
    }    
    displayComments(newComment)  
}

const invalidName = () => {

  const warning = document.getElementById('warning');

  const warningInvalidName = document.createElement('p');

  const invalidNameText = document.createTextNode('Le nom doit contenir au moins 2 caractères.');

  warningInvalidName.appendChild(invalidNameText);
  warning.appendChild(warningInvalidName);

  warning.classList.add('warning-div');
  warningInvalidName.classList.add('warning-text');

  warningInvalidName.id = "invalid-name";
}



const invalidComment = () => {

  const warning = document.getElementById('warning');

  const warningInvalidComment = document.createElement('p');

  const warningInvalidCommentText = document.createTextNode('Le commentaire doit contenir au moins 10 caractères.');

  warningInvalidComment.appendChild(warningInvalidCommentText);
  warning.appendChild(warningInvalidComment);

  warning.classList.add('warning-div');
  warningInvalidComment.classList.add('warning-text');

  warningInvalidComment.id = "invalid-comment";
}



const addingCommenterName = () => {

  const enterName = document.querySelector('#commenter-name');

  enterName.addEventListener('input', (typedName) =>{

    const warningInvalidName = document.getElementById('invalid-name');
    const warningInvalidComment = document.getElementById('invalid-comment');

    if(enterName.value.length < 2){

      if(!warningInvalidName){
        invalidName();
      }

    } else{
      
      if(!!warningInvalidName){
        warningInvalidName.remove();

        if(!warningInvalidComment){
          warning.classList.remove('warning-div');
        }
      }
    }
  });
}



const preventRefresh = () => {

  const formName = document.getElementById('name-form');

  formName.addEventListener('submit', (event) =>{
  event.preventDefault();
  });
}



const addingCommentContent = () => {

  const enterContent = document.querySelector('#comment-content');

  enterContent.addEventListener('input', (typedContent) => {

    const warningInvalidComment = document.getElementById('invalid-comment');
    const warningInvalidName = document.getElementById('invalid-name');

    if(enterContent.value.length <10){

      if(!warningInvalidComment){
        invalidComment();
      }

    } else {

      if(!!warningInvalidComment){
        warningInvalidComment.remove();

        if(!warningInvalidName){
          warning.classList.remove('warning-div');
        }
      }
    }
  });
}



const addComment = () => {

  const commentsDiv = document.getElementById('comments-list');

  const comment = document.createElement('article');

  commentsDiv.prepend(comment);
  comment.classList.add('comment');

    const commentTitle = document.createElement('h4');
    const commenterName = document.getElementById('commenter-name');
    const commenterNameText = document.createTextNode(commenterName.value);

    comment.appendChild(commentTitle);
    commentTitle.appendChild(commenterNameText);
    commentTitle.classList.add('comment-title');

    const commentText = document.createElement('p');
    const commentContent = document.getElementById('comment-content');
    const commentContentText = document.createTextNode(commentContent.value);

    comment.appendChild(commentText);
    commentText.appendChild(commentContentText);
    commentText.classList.add('comment-content');

    const commentDeleteButton = document.createElement('button');
    const commentDeleteButtonText = document.createTextNode('🗑️ Supprimer');

    comment.appendChild(commentDeleteButton);
    commentDeleteButton.appendChild(commentDeleteButtonText);
    commentDeleteButton.classList.add('delete-button');
}



const submitComment = () => {

  const submitting = document.querySelector('#submit');

  submitting.addEventListener('click', () => {

    const commenterName = document.getElementById('commenter-name');
    const commentContent = document.getElementById('comment-content');

    if(commenterName.value.length >=2 && commentContent.value.length >= 10){
      addComment();

      document.querySelector('#name-form').reset();
      document.querySelector('#comment-form').reset();
    } else {

      const warningInvalidComment = document.getElementById('invalid-comment');
      const warningInvalidName = document.getElementById('invalid-name');

      if (!warningInvalidName && commenterName.value.length <2){
        invalidName();
      }

      if(!warningInvalidComment && commentContent.value.length <10){
        invalidComment();
      }
    }

    
  });
}



const commentRemoval = document.getElementById('comments-list');

commentRemoval.addEventListener('click', (deletion) => {

  if (deletion.target.classList.contains('delete-button')) {
    deletion.target.parentNode.remove();
  }
}); 


addingCommenterName();
preventRefresh();
addingCommentContent();
submitComment();



function getNameRequest() {
    let name = document.getElementById(`inputName`).value
    let request = document.getElementById(`inputAsk`).value

    let divHost = document.getElementById(`comment`)

    let divCommentName = document.createElement(`div`)
    divCommentName.innerHTML = name;
    let divCommentRequest = document.createElement(`div`)
    divCommentRequest.innerHTML = request;

    commentName(divCommentName);
    commentRequest(divCommentRequest);

    divHost.appendChild(divCommentName);
    divHost.appendChild(divCommentRequest);






}



function commentName(divCommentName) {
    divCommentName.style.fontSize = `25pt`;
    divCommentName.style.fontFamily = `p5Font`;



    return divCommentName
}

function commentRequest(divCommentRequest) {
    divCommentRequest.style.fontSize = `15pt`;
    divCommentRequest.style.fontFamily = `p5Font`;
    divCommentRequest.style.height = `100px`;


    return divCommentRequest
}


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
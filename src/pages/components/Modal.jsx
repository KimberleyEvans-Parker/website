import React from "react";

function Modal(props) {
  return (
    <>
      {/* <!-- Trigger the Modal --> */}
      <img
        id="myImg"
        src="img_snow.jpg"
        alt="Snow"
        style={{ width: "100%", maxWidth: "300px" }}
      />

      {/* <!-- The Modal --> */}
      <div id="myModal" class="modal">
        {/* <!-- The Close Button --> */}
        <span class="close">&times;</span>

        {/* <!-- Modal Content (The Image) --> */}
        <img className="modal-content" id="img01" alt="Snow" />

        {/* <!-- Modal Caption (Image Text) --> */}
        <div id="caption"></div>
      </div>
      {/* <script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
</script> */}
    </>
  );
}

export default Modal;

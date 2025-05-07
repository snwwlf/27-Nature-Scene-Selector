function ChangePhoto() {
    const photoChange = document.getElementById('image-selector').value;

    document.getElementById('image').src = photoChange;
}
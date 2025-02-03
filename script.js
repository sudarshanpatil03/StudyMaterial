document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("input[type='submit']");
    const subjectDropdown = document.getElementById("Subject");

    submitButton.addEventListener("click", function() {
        const selectedSubject = subjectDropdown.value;
        
        alert("You selected: " + selectedSubject);
    });
});
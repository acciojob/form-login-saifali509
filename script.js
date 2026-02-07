function getFormvalue() {
    //Write your code here
event.preventDefault(); // Prevent the form from submitting

    // Get the input values and trim extra spaces
    var firstName = document.querySelector('input[name="fname"]').value.trim();
    var lastName = document.querySelector('input[name="lname"]').value.trim();

    // Check if both fields are empty
    if (!firstName && !lastName) {
        alert("Please enter your name!");
        return;
    }

    // Display the full name
    alert(firstName + " " + lastName);
}

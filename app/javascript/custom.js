console.log("Custom JavaScript loaded!");
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('show');
    });
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('editModal');
    const closeModalBtn = document.querySelector('.close');
    const editButtons = document.querySelectorAll('.edit-btn');
    const studentNameField = document.getElementById('studentName');
    const studentSubjectField = document.getElementById('studentSubject');
    const studentMarksField = document.getElementById('studentMarks');
    const studentIdField = document.getElementById('studentId'); // Hidden field for student ID
    const editForm = document.getElementById('editForm');
  
    editButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Fill the form with student data
        studentNameField.value = this.dataset.name;
        studentSubjectField.value = this.dataset.subject;
        studentMarksField.value = this.dataset.marks;
  
        // Set the student ID in the hidden field
        if (studentIdField) {
          studentIdField.value = this.dataset.id;
        }
        debugger
        // Update the form action URL with the student ID
        editForm.action = `/update/${this.dataset.id}`;
  
        // Show the modal
        modal.style.display = 'block';
      });
    });
  
    // Event to handle closing the modal
    closeModalBtn.onclick = function () {
      modal.style.display = 'none';
    };
  
    // Close modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
  
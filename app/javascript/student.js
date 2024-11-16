document.addEventListener('DOMContentLoaded', function () {
    const newStudentModal = document.getElementById('newStudentModal');
    const newStudentBtn = document.querySelector('.new_student_btn');
    const newCloseBtn = document.querySelector('.new-close');
  
    // Event listener to open the "New Student" modal
    newStudentBtn.addEventListener('click', function (e) {
      e.preventDefault();
      newStudentModal.style.display = 'block';
    });
  
    // Event listener to close the "New Student" modal
    newCloseBtn.onclick = function () {
      newStudentModal.style.display = 'none';
    };
  
    // Close modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target == newStudentModal) {
        newStudentModal.style.display = 'none';
      }
    };
  });
  
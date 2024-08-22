
const form = document.getElementById('Form');
form.addEventListener('submit', function(e)
{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const  confirmpassword = document.getElementById('confirm password').value;
  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }
  if (password.trim() === '') {
    alert('Please enter your password');
    return;
  } else if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }
  if (confirmpassword.trim() === '') {
    alert('Please enter your confirm password');
    return;
  }
alert('Form submitted successfully!')
  form.submit();
  
});


//implement your code here

const allInputes = document.getElementsByTagName('input');



allInputes[4].addEventListener("click", (e) => {

    const fullName = allInputes[0].value;
    const email = allInputes[1].value;
    const passWord = allInputes[2].value;

    var namePattern = /^[a-zA-Z\s-]+$/;
    var emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var passwordLowerCaseLetters = /[a-z]/g;
    var passwordUpperCaseLetters = /[A-Z]/g;
    var passwordNumbers = /[0-9]/g;

    if (!namePattern.test(fullName)) {
        document.querySelector(".nameError").textContent = 'نام کامل را به درستی وارد کنید.';
        e.preventDefault();
    }
    else {
        document.querySelector(".nameError").textContent = '';
    }

    if (!emailPatern.test(email)) {
        document.querySelector(".emailError").textContent = 'ایمیل را به درستی وارد کنید';
        e.preventDefault();
    }
    else {
        document.querySelector(".emailError").textContent = '';
    }
    if (!passwordLowerCaseLetters.test(passWord)
        || !passwordUpperCaseLetters.test(passWord)
        || !passwordNumbers.test(passWord)
        || passWord.length < 8) {
        document.querySelector(".passwordError").textContent = 'رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد';
        e.preventDefault();

    }
    else {
        document.querySelector(".passwordError").textContent = '';
    }
});








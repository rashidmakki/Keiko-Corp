let currentScrollY = 0;
let showScrollButton = false;

function onScroll() {
  currentScrollY = window.pageYOffset;
  showScrollButton = Boolean(currentScrollY > 1);
 	if( typeof(scrollButton) !== "undefined" && scrollButton !== null ){
 		 showScrollButton
    ? scrollButton.classList.remove('scroll-to-top-wrapper--hide')
    : scrollButton.classList.add('scroll-to-top-wrapper--hide');
 	}
}


window.onload = function() {
    main = document.getElementById('main');
    scrollButton = document.getElementById('scroll-to-top-wrapper');
    document.addEventListener('scroll', onScroll, false)
}


// modals

// document.getElementById('loginModal1').addEventListener('click', function() {
//     document.getElementById('loginModal1').style.display = 'block'
// }

let loginModal = document.getElementById('loginModal1');
let registerModal = document.getElementById('registerModal1');
let loginBtn = document.getElementById('login');
let registerBtn = document.getElementById('register');
let loginClose = document.getElementsByClassName('login-close')[0];
let registerClose = document.getElementsByClassName('register-close')[0];
let password = document.getElementById('password');
let eye = document.getElementById('visibility');

/* Password visiblity toggle */
eye.onclick = function () {
  // Toggle the type attribute
  const passwordState = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', passwordState);
  
  // Toggle color
  passwordState === 'password' ? eye.style.color = '#757575' : eye.style.color = '#FD6854';
}
/* Password visibility toggle end */

loginBtn.onclick = function () {
  registerModal.style.display = 'none';
  loginModal.style.display = 'block';
};

registerBtn.onclick = function () {
	loginModal.style.display = 'none';
  registerModal.style.display = 'block';
};

loginClose.onclick = function () {
	loginModal.style.display = 'none';
};
registerClose.onclick = function () {
	registerModal.style.display = 'none';
};


window.onclick = function(event) {
    /*if (event.target == modal) {
      modal.style.display = "none"; //modal is not define.Why?
    }*/
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    } else if (event.target == registerModal) {
      registerModal.style.display = "none";
    }
}



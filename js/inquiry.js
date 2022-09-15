const popupInquiry = document.getElementById('popup-inquiry');
const contactUsPopup = document.querySelector('.contact-us__popup');
const buttonSubmit = document.getElementById('submit-inquiry');

const body = document.getElementById('body');
const sendInquiryForm = document.querySelector('.send-inquiry__form');

sendInquiryForm.addEventListener('submit', popupOpen);

function popupOpen(e) {
        popupInquiry.classList.remove('hidden');
        popupInquiry.classList.add('fade');
        body.style.overflow = 'hidden';
        e.preventDefault();
}

popupInquiry.addEventListener('click', () => {
    popupInquiry.classList.add('hidden');
    popupInquiry.classList.remove('fade');
    body.style.overflow = 'visible';

    const inputs = document.getElementsByTagName('input');
    for (input of inputs) {
        input.value = '';
    } 
})

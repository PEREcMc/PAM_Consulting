const slide = document.getElementById('offer-slider');
const dots = document.querySelectorAll('.dot-slider');
const offer = document.querySelector('.offer');
const offerTitle = document.querySelector('.offer__title');
const offerSubtitle = document.querySelector('.offer__sub-title');
const offerText = document.querySelector('.offer__text');
const offerButton = document.getElementById('get-in-touch');
const citiesTitle = document.querySelector ('.cities-title');
const citiesWrapper = document.querySelector ('.cities-wrapper');


const dotChange = n => {
    for (dot of dots) {
        dot.classList.remove('active')
        if (n !== 0) {
            offerSubtitle.style.display = 'none';
            offerTitle.style.marginBottom = '15px';
            offerButton.innerText = 'Check more';
            citiesTitle.style.visibility = 'hidden';
            citiesWrapper.style.visibility = 'hidden';
            offerText.style.textShadow = 'none';
        } else {
            offerSubtitle.style.display = 'block';
            offerTitle.style.marginBottom = '0px';
            offerButton.innerText = 'Find Out More';
            citiesTitle.style.visibility = 'visible';
            citiesWrapper.style.visibility = 'visible';
            offerText.style.textShadow = '0px 4px 40px rgba(0, 0, 0, 0.25), 0px 0px 80px #023F76';
        }
    } 
        dots[n].classList.add('active')
};

function changeSlide () {
    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            dotChange(index);
            switch (index) {
                case 0:
                    slide.style.backgroundImage = 'url("./img/offers_1440/home1.png")'
                    offer.classList.remove('offer-color')
                    offerTitle.innerText = 'Relocating to Cyprus'
                    offerText.innerText = `The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive.`
                    offerText.style.maxWidth = '520px'
                    break;
                case 1:
                    slide.style.backgroundImage = 'url("./img/offers_1440/offer2_image.png")'
                    offer.classList.add('offer-color')
                    offerTitle.innerText = 'Invest in property in Cyprus'
                    offerText.innerText = `Real estate has become a flourishing type of investment
                    on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus. With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property.`
                    offerText.style.maxWidth = '440px'
                    break;
                case 2:
                    slide.style.backgroundImage = 'url("./img/offers_1440/offer3_image.png")'
                    offer.classList.add('offer-color')
                    offerTitle.innerText = 'Family Relocation'
                    offerText.innerText = `Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family.`
                    offerText.style.maxWidth = '534px'
                    break;
                case 3:
                    slide.style.backgroundImage = 'url("./img/offers_1440/offer4_image.png")'
                    offer.classList.remove('offer-color')
                    offerTitle.innerText = 'Business Relocation'
                    offerText.innerText = `Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone.`
                    offerText.style.maxWidth = '534px'
                    break;
                case 4:
                    slide.style.backgroundImage = 'url("./img/offers_1440/offer5_image.png")'
                    offer.classList.add('offer-color')
                    offerTitle.innerText = 'Investing in Yachts'
                    offerText.innerText = `Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning a yacht as part of your investment plan.`
                    offerText.style.maxWidth = '450px'
                    break;
                case 5:
                    slide.style.backgroundImage = 'url("./img/offers_1440/offer6_image.png")'
                    offer.classList.remove('offer-color')
                    offerTitle.innerText = 'Moving to Cyprus'
                    offerText.innerText = `Thousands of individuals and families from every part of the globe have immigrated to Cyprus after discovering their perfect place to call home. The island is now one of the most dominant destinations with huge expat communities.`
                    offerText.style.maxWidth = '534px'
                    break;            
                default:
                    break;
            }
        })
    })
} 
changeSlide();
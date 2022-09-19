const mapSvg = document.getElementById('map');

const cityImages = document.querySelectorAll('.city__image');
const cityName = document.querySelector('.city__name');
const cityDesc = document.querySelector('.city__desc');

const rects = mapSvg.getElementsByTagName('rect');
const paths = mapSvg.getElementsByTagName('path');

const childSvg = mapSvg.childNodes;

rectsArr = Array.from(rects)
pathsArr = Array.from(paths);

patchLed ();

function patchLed () {
    pathsArr.forEach( item => {
        const fillpath = item.getAttribute('fill');

        item.addEventListener('mouseover', () => {
            item.setAttribute('fill', 'red')
        })
        item.addEventListener('mouseout', () => {
            item.setAttribute('fill', fillpath)
        })     
    })
}


rectsArr.forEach( item => {
    const fill = item.getAttribute('fill');

    // pathsArr.forEach( item => {
    //     const fillpath = item.getAttribute('fill');
    // })

    // item.addEventListener('mouseover', () => {
    //     pathsArr.forEach( item => {
    //         item.setAttribute('fill', 'red')
    //     })
    // })

    // item.addEventListener('mouseout', () => {
    //     pathsArr.forEach( item => {
    //         item.setAttribute('fill', fillpath)
    //     })
    // })

    item.addEventListener('click', () => {
        switch (fill) {
            case "url(#pattern3)":
                cityImages[0].src = './img/ideal-location/Paphos/map_card_Paphos_image_1.jpg'
                cityImages[1].src = './img/ideal-location/Paphos/map_card_Paphos_image_2.jpg'
                cityImages[2].src = './img/ideal-location/Paphos/map_card_Paphos_image_3.jpg'

                cityName.innerHTML = 'Paphos'

                cityDesc.innerHTML = `
                                        Paphos is located on the southwest coast
                                        of Cyprus, and it is one of the most popular cities for expat communities. The crystal-clear, family-friendly beaches are a frequent holiday retreat for millions of tourists all year round. Its exceptional infrastructure includes a huge shopping mall, hospitals, the second largest airport of the island, and many schools.
                                        <br><br>
                                        These are only a few reasons why people choose to move to Paphos, as there are many more
                                        reasons it is considered one of the most excellent places to live in Europe.
                                    `
                break;
            case "url(#pattern4)":
                cityImages[0].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_1.jpg'
                cityImages[1].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_2.jpg'
                cityImages[2].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_3.jpg'

                cityName.innerHTML = 'Nicosia'

                cityDesc.innerHTML = `
                                        Also known as Lefkosia, Nicosia is the capital city of Cyprus and the only divided capital city
                                        in the world. The unique urban scenery is built upon a rich historical past and its mixture with modern lifestyle.
                                        <br><br>
                                        It is in close proximity to every other city
                                        in Cyprus, giving residents the flexibility
                                        of choosing to enjoy the breathtaking views from the mountain tops and soothing beaches of the coastal cities within minutes. 
                                        <br><br>
                                        Nicosia has become an attractive cosmopolitan city made of diverse cultural communities, excellent healthcare facilities and every aspect one requires to build the lifestyle
                                        of your dreams.
                                    `
                break;
              case "url(#pattern4)":
                cityImages[0].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_1.jpg'
                cityImages[1].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_2.jpg'
                cityImages[2].src = './img/ideal-location/Nicosia/map_card_Nicosia_image_3.jpg'

                cityName.innerHTML = 'Nicosia'

                cityDesc.innerHTML = `
                                        Also known as Lefkosia, Nicosia is the capital city of Cyprus and the only divided capital city
                                        in the world. The unique urban scenery is built upon a rich historical past and its mixture with modern lifestyle.
                                        <br><br>
                                        It is in close proximity to every other city
                                        in Cyprus, giving residents the flexibility
                                        of choosing to enjoy the breathtaking views from the mountain tops and soothing beaches of the coastal cities within minutes. 
                                        <br><br>
                                        Nicosia has become an attractive cosmopolitan city made of diverse cultural communities, excellent healthcare facilities and every aspect one requires to build the lifestyle
                                        of your dreams.
                                    `
                break;
            case "url(#pattern5)":
                cityImages[0].src = './img/ideal-location/Larnaka/map_card_Larnaka_image_1.jpg'
                cityImages[1].src = './img/ideal-location/Larnaka/map_card_Larnaka_image_2.jpg'
                cityImages[2].src = './img/ideal-location/Larnaka/map_card_Larnaka_image_3.jpg'
    
                cityName.innerHTML = 'Larnaka'
    
                cityDesc.innerHTML = `
                                        Being the third largest city in Cyprus and home to the island’s most busy airport, it offers visitors a variety of activities and experiences that will remain unforgettable to any individual.
                                        <br><br>
                                        It is known for its Salt Lake that hosts thousands of Flamingos each year as well as for its sandy beaches and historical sites.
                                        <br><br>
                                        The rapidly increasing corporate ecosystem and comfortable lifestyle create an exceptional living
                                        environment for anyone who is looking to enjoy a relaxed life by the sea.
                                    `
                break;
            case "url(#pattern6)":
                cityImages[0].src = './img/ideal-location/Limassol/map_card_Limassol_image_1.jpg'
                cityImages[1].src = './img/ideal-location/Limassol/map_card_Limassol_image_2.jpg'
                cityImages[2].src = './img/ideal-location/Limassol/map_card_Limassol_image_3.jpg'
        
                cityName.innerHTML = 'Limassol'
        
                cityDesc.innerHTML = `
                                        The sunny city of Limassol is the second largest city of the island, and it is among the most desirable travel and business destinations both for families and for entrepreneurs looking
                                        to expand their business horizons.
                                        The combination of elegant accommodation
                                        and ancient architectural views is bound
                                        to capture the interest of people of any age. 
                                        <br><br>
                                        The Limassol Marina is the first marina to harbor
                                        yachts in Cyprus and it is surrounded by renowned bars and restaurants. The residents
                                        of Limassol pride themselves on their cultural values and festivities as hundreds
                                        of theatrical performances take place each 
                                        year at the Rialto theater, and the city holds
                                        an annual Wine Festival and Carnival Parade.
                                    `
                    break;
            default:
                break;
        }
    })
});


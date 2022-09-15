const questionsCards = document.querySelectorAll('.questions__card');
const cardLinks = document.querySelectorAll('.card__link');
const cardTitles = document.querySelectorAll('.card__title');
const cardDescs = document.querySelectorAll('.card__desc');
const questionsDots = document.querySelectorAll('.questions-dot');

const questionsDotsChange = n => {
    for (questionsDot of questionsDots) {
        questionsDot.classList.remove('active-dot');
    }
    questionsDots[n].classList.add('active-dot');
}

function changeCards () {
    questionsDots.forEach( (item, index) => {
        item.addEventListener('click', () => {
            questionsDotsChange(index);
            switch (index) {
                case 0:
                            cardLinks[0].innerText = 'Business';
                            cardTitles[0].innerText = 'Question: How is the business environment in Cyprus?';
                            cardDescs[0].innerText = `Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.`;
                           
                            cardLinks[1].innerText = 'Prices';
                            cardTitles[1].innerText = 'Question: What is the cost of living in Cyprus?';
                            cardDescs[1].innerText = `Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol.`;
                           
                            cardLinks[2].innerText = 'Migration';
                            cardTitles[2].innerText = 'Question: What are the best cities in Cyprus for expats?';
                            cardDescs[2].innerText = `Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.`;
                    break;
                case 1:
                            cardLinks[0].innerText = 'Taxes';
                            cardTitles[0].innerText = 'Question: What is the Tax system like in Cyprus?';
                            cardDescs[0].innerText = `Answer: With one of the lowest corporate tax rates (12.5%) in the European Union, the tax system is attractive to foreign investors. Neither succession taxes nor gains from the disposal of securities are subject to tax.`;
                         
                            cardLinks[1].innerText = 'Investment';
                            cardTitles[1].innerText = 'How long does it take to buy a property in Cyprus?';
                            cardDescs[1].innerText = `Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timeframe may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish.`;
                        
                            cardLinks[2].innerText = 'Migration';
                            cardTitles[2].innerText = 'Question: How long does it take to become a permanent resident in Cyprus?';
                            cardDescs[2].innerText = `Answer: While a residency card can be obtained within two months through the fast-track process, a permanent resident of Cyprus can apply for Cyprus Citizenship after completing 5 years (1825 days) of legal stay in Cyprus, according to the naturalization scheme based on years of residence (M127). Once acquired, permanent residency in Cyprus is valid for life.`;
                    break;
                case 2:
                            cardLinks[0].innerText = 'Family Relocation';
                            cardTitles[0].innerText = 'Question: Is Cyprus a good country to live with a family?';
                            cardDescs[0].innerText = `Answer: Cyprus is a perfect location for every type of family looking for a place to settle with their children. The stunning weather combined with great education programs, excellent healthcare system, and the ability to live in one of the safest countries in the world makes Cyprus a top choice among thousands every year.`;
                     
                            cardLinks[1].innerText = 'Invest in Cyprus';
                            cardTitles[1].innerText = 'Question: Does PAM Consulting offer any Investment Plans?';
                            cardDescs[1].innerText = `Answer: Of course! Our services include the provision of a variety of investment opportunities you can choose from, depending on your needs and economic outlook.`;
                    
                            cardLinks[2].innerText = 'Business';
                            cardTitles[2].innerText = 'Question: Is Cyprus a member of the European Union (EU)?';
                            cardDescs[2].innerText = `Answer: Yes, Cyprus has been a member of the EU since 2004.`;
                    break;
                case 3:
                            cardLinks[0].innerText = 'Migration';
                            cardTitles[0].innerText = 'Question: Am I eligible to receive public healthcare if I am a permanent resident of Cyprus?';
                            cardDescs[0].innerText = `Answer: Yes, you are. In accordance with National Legislation, Cyprus citizens with permanent residency rights and those whose ordinary residence is in an area controlled by the Cyprus Government are entitled to healthcare services under GHS.`;
                 
                            cardLinks[1].innerText = 'Family Relocation';
                            cardTitles[1].innerText = 'Question: Do my children have the option of attending a private or public school in Cyprus if I have a permanent residency?';
                            cardDescs[1].innerText = `Answer: Yes. Public schools are free, while private educational institutions have tuition.`;
                
                            cardLinks[2].innerText = 'Migration';
                            cardTitles[2].innerText = 'Question: How can I contact PAM Consulting?';
                            cardDescs[2].innerText = `Answer: You can contact our team by simply visiting the “Contact Us” page, where you can find out contact details (email, telephone number) or fill in a form so we can get back to you as soon as possible.`;
                    break;     
                    
                default:
                    break;
            }
        })
    })
}

changeCards();
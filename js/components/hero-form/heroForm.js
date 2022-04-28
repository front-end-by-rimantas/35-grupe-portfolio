function heroForm() {
    const formDOM = document.querySelector('.hero .form');
    const submitDOM = formDOM.querySelector('button');

    submitDOM.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('tikriname forma ir gal net siunciame duomenis....');
    })
}

export { heroForm }
'use strict'; 
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advspons = document.querySelector('.promo__adv-title'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          adv = document.querySelectorAll('.promo__adv img'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    advspons.remove();
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFilm = addInput.value;

        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length < 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

   
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);
    

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage ='url(img/bg.jpg)';
    };
    makeChanges();

    const sortArr = (arr) => {
      arr.sort();  
    };
    sortArr(movieDB.movies);


    sortArr(movieDB.movies);
    const movieList = document.querySelector('.promo__interactive-list');
        movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <l1 class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </l1>
        `;
    });


    movieDB.movies,sort();
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
            <l1 class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </l1>
            `;
        });
    }; 

    createMovieList(movieDB.movies, movieList);
});

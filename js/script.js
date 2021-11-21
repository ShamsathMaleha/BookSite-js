// function for fetching data with input search value 

const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    
  //error message
    if (searchText === '') {
      const bookAmount = document.getElementById('book-amount');
      bookAmount.style.display = "block";
      bookAmount.innerText = "Please type a Book Name!!!";
  
      document.getElementById('display-books').innerHTML = '';
    }
    else {
      searchInput.value = '';
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
    }
  
  }
  
  //--------------------------------
  // function for displaying result 
  //-------------------------------
  
  const displaySearchResult = books => {
    document.getElementById('display-books').innerHTML = '';
  
  //showing error mesage 
  
    if (books.length === 0) {
      const bookAmount = document.getElementById('book-amount');
      bookAmount.style.display = "block";
      bookAmount.innerText = "No Result Found!!!";
    }
  
    else {
      const bookAmount = document.getElementById('book-amount');
      bookAmount.style.display = "block";
      bookAmount.innerText = `Number of Books found ${books.length} out of 9900`;
  
      books.forEach(book => {
  
        const displayBooks = document.getElementById('display-books');
  
        const div = document.createElement('div');
        div.classList.add('col');


        // cover image of book 
  
        const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  
        div.innerHTML = `
          <div class="card h-100">
              <img style=" height: 400px" src="${imageUrl}" class="card-img-top img-fluide" alt="...">
              <div class="card-body">
                <h5 class="card-title">Book Name: ${book.title}</h5>
                <ul class="card-title">Author: ${book.author_name}</ul>
                <ul class="card-text">Publisher: ${book.publisher[0]}</ul>
                <ul class="card-text">1st Publish Year: ${book.first_publish_year}</ul>
                
              </div>
            </div>
          `;
  
        displayBooks.appendChild(div);
      });
  
    }
  }
  
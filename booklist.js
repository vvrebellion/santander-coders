//exercício em grupo junto com Karen, Ada e Rodrigo

class Book{
    constructor(title, genre, author, read){
      this.title = title
      this.genre = genre
      this.author = author
      this.read = read === true ? read : false       //Se não for atribuido o valor true, o livro começa como não lido
      this.readDate = this.read === true ? new Date(Date.now()) : null     //caso o livro ja tenha sido lido ao ser criado, vai ser pego a data de criação. Caso contrario vai pegar a data de quando o livro acabar de ser lido
    }
  }
    
  class BookList{
    constructor(){
      this.allBooks = []
      this.nBooksRead = 0
      this.nBooksNotRead = 0
      this.nextBook = null
      this.nowBook = null
      this.lastBook = null
    }   
        
    addBook (book){
      this.allBooks = [...this.allBooks , book] 
              
      if(book.read===true){         // adiciona o livro de acordo se ele ja foi lido ou não
        this.nBooksRead++
      } else {
        this.nBooksNotRead++
      }
      
      this.setNextBook()          
    }
  
    setNextBook(){                      // utilizado para determinar o próximo livro
      this.nextBook = this.allBooks.find(book => book.read === false && book !== this.nowBook) // seleciona o primeiro livro não lido que seja diferente do livro atual
    }
    
    startCurrentBook(){
      this.nowBook = this.allBooks.find(book => book.read === false)  // Seleciona o primeiro livro não lido
      
      this.setNextBook() 
    }
    
    finishCurrentBook(){
      this.nowBook.read = true                         // Alterna o livro para lido
      this.nowBook.readDate = new Date(Date.now())     // Determina quando o livro foi terminado
      this.nBooksRead++                                // É adicionado um livro na quantidade de livros lidos
      this.nBooksNotRead--                             // É retirado um livro na quantidade de livros não lidos
      this.lastBook = this.nowBook                     // O livro que acabou de ser lido passa a ser o ultimo
      this.startCurrentBook()                               // já é selecionado um novo livro atual e um proximo livro para ser lido. 
    }
      
  }
    
  
  
  
    let book1 = new Book("Hora da Estrela",'Ficção', 'Clarice Lispector', true); 
    let book2 = new Book("Doctor Sleep", "suspense", "Stephen King", false);
    let book3 = new Book("Harry Potter", "fantasia", "J. K. Rowling", true);
    let book4 = new Book("Capitães da Area", "romance", "Jorge Amado", false);
    let book5 = new Book("O pequeno príncipe", "fantasia", "Antoine de Saint-Exupéry", false) 
    const bookList = new BookList()
    bookList.addBook(book1)
    bookList.addBook(book2)
    bookList.addBook(book3)
    bookList.addBook(book4)
    bookList.addBook(book5)
    console.log(bookList)
    
    console.log("fazendo o currentBook")
    bookList.startCurrentBook()
    console.log(bookList)
    
    console.log("fazendo o finishCurrentBook")
    bookList.finishCurrentBook()
    console.log(bookList)
  
    let book6 = new Book("Doctor Who ", "fantasia", "David Whitaker")
    bookList.addBook(book6)
    console.log(bookList)
    
    let book7 = new Book("Senhos dos Aneis", "fantasia", "J. R. R. Tolkien", false)
    let book8 = new Book("O Código Da Vinci", "romance", "Dan Brown", true)
  
    bookList.addBook(book7)
    bookList.addBook(book8)

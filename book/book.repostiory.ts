import { Ibook } from "./book.type";

export class BookRepository {
    private books: Ibook[] = [];

    booksStack = () =>{
        return this.books;
    }

    addBook = (title: string, author: string, publicationYear: string) => {
        const book: Ibook = {
            id: Math.random().toString(),
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        this.books.push(book);
        return book;
    }

    getBook = (id: string) => {
        const book = this.books.find((book: Ibook) => book.id === id);
        return book;
    }

    updateBook = (id: string, title?: string, author?: string, publicationYear?: string) => {
        const bookIndex = this.books.findIndex((book: Ibook) => book.id === id);
        if (bookIndex !== -1) {
            const originalBook = this.books[bookIndex];
            const updatedBook: Ibook = {
                ...originalBook,
                title: title || originalBook.title,
                author: author || originalBook.author,
                publicationYear: publicationYear || originalBook.publicationYear
            };
            this.books[bookIndex] = updatedBook;
            return true;
        }
        return false; // Return false if book with the given id doesn't exist
    }
}

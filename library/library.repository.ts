import { BookRepository } from "../book/book.repostiory";
import { Ibook } from "../book/book.type";
import { ILibrary } from "./library.type";

export class LibraryRepository {
    private books = BookRepository.booksStack;

    addBook = (book: Ibook) => {
        this.books.push(book);
    }

    searchByTitle = (title: string) => {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    searchByAuthor = (author: string) => {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    getTotalBooks = () => {
        return this.books.length;
    }
    
}

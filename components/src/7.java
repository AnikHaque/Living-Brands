package Library.LibraryA.LibraryB;

import Library.Book;
import Library.LibraryA.FictionBook;

public class LibraryTest {

    public static void main(String[] args) {
        // 7. a
        Book[] myBooks = new Book[3];

        // 7. b
        myBooks[0] = new FictionBook("Fiction Title 1", "Author 1", "Fantasy");
        myBooks[1] = new FictionBook("Fiction Title 2", "Author 2", "Science Fiction");
        myBooks[2] = new NonFictionBook("Non-Fiction Title", "Author 3", "History");

        // 7. c
        for (Book book : myBooks) {
            book.displayInfo();
            book.displayInfo(true);
            System.out.println();
        }

        // 7. d
        System.out.println("Borrowing the first book:");
        myBooks[0].borrow();

        System.out.println("Trying to borrow the same book again:");
        myBooks[0].borrow();

        System.out.println("Returning the book:");
        myBooks[0].returnBook();

        System.out.println("Trying to return the book again:");
        myBooks[0].returnBook();
    }
}

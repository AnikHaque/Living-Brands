package Library.LibraryA;

import Library.Book;

// 4. a 
public class FictionBook extends Book {
    private String genre;

    // 4. b
    public FictionBook(String title, String author, String genre) {
        super(title, author);
        this.genre = genre;
    }

    // 4. c
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Genre: " + genre);
    }
}

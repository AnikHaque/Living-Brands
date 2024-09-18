package Library.LibraryA.LibraryB;

import Library.Book;

// 6. a 
public class NonFictionBook extends Book {
    private String subject;

    // 6. b
    public NonFictionBook(String title, String author, String subject) {
        super(title, author);
        this.subject = subject;
    }

    // 6. c
    @Override
    public void displayInfo(boolean showStatus) {
        super.displayInfo(showStatus);
        System.out.println("Subject: " + subject);
    }
}

// Library/Book.java
package Library;

// 2. a & b 
public class Book {
    private String title;
    private String author;
    private boolean isBorrowed;
    public static final int max_books = 1000;

    // 2. c
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

     // 2. d 
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean isBorrowed() {
        return isBorrowed;
    }

    public void setBorrowed(boolean borrowed) {
        isBorrowed = borrowed;
    }

    public void displayInfo() {
        System.out.println("Title: " + title + ", Author: " + author);
    }

    // 2. e
    public void displayInfo(boolean showStatus) {
        displayInfo();
        if (showStatus) {
            System.out.println("Borrowed: " + (isBorrowed ? "Yes" : "No"));
        }
    }

    // 2. f
    public void borrow() {
        if (!isBorrowed) {
            System.out.println("You can borrow the book.");
            isBorrowed = true;
        } else {
            System.out.println("You cannot borrow the book.");
        }
    }

    // 2. g
    public void returnBook() {
        if (isBorrowed) {
            System.out.println("Returned the book.");
            isBorrowed = false;
        } else {
            System.out.println("Book is not borrowed.");
        }
    }
}

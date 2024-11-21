import sqlite3

def init_db():
    # Connect to the SQLite database (or create it if it doesn't exist)
    conn = sqlite3.connect("journal.db")
    cur = conn.cursor()

    # Create tables
    cur.execute('''CREATE TABLE IF NOT EXISTS mood (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        mood INTEGER NOT NULL
    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS anxiety (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        level INTEGER NOT NULL
    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS gratitude (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        note TEXT NOT NULL
    )''')

    # Commit changes and close the connection
    conn.commit()
    conn.close()
    print("Database initialized successfully.")

if __name__ == "__main__":
    init_db()

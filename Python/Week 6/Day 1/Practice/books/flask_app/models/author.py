from flask_app.config import connectToMySQL

from flask_app import DATABASE  

class Author:
    def __init__(self,data):
        self.id=data['id']  
        self.name=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']



@classmethod 
def get_all(cls,data):
    query="""
            SELECT * FROM authors;
            """
    result= connectToMySQL(DATABASE).query_db(query,data)
    all_authors=[]
    for x in result:
        all_authors.append(cls(x))
    return all_authors


@classmethod
def get_by_id(cls,data):
    query="""
        SELECT * FROM authors WHERE id=%(id)s;
            """
    result =connectToMySQL(DATABASE).query_db(query,data)
    return cls(result[0])


@classmethod
def create(cls,data):
    query= ''' INSERT INTO authors (name) VALUES (%(name)s);'''
    return connectToMySQL(DATABASE).query_db(query,data)

@classmethod
def get_authors_favorite_by_book (cls,data):
    query ='''select authors.id,authors.name from authors join favorites on authors.id=favorites.author_id 
            join books on favorites.book_id=books.id where books.id=%(id)s ;'''
    return connectToMySQL(DATABASE).query_db(query,data)

@classmethod
def add_favv(cls,data):
        query= ''' INSERT INTO favorites (book_id,author_id) VALUES (%(book_id)s,%(author_id)s) ;'''
        return connectToMySQL(DATABASE).query_db(query,data)


@classmethod
def get_not_favorite (cls,data):
        query = """ select * from authors where id not in 
                (select author_id from favorites where book_id = %(id)s);
                """
        db_result = connectToMySQL(DATABASE).query_db(query, data)
        not_favs = []
        if db_result:
            for row in db_result:
                not_favs.append(cls(row))
        return not_favs
    
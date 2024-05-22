from flask_app.config import connectToMySQL 
from flask_app import DATABASE 



class Dojo:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']



@classmethod
def get_all(cls):
    query="""
            SELECT * FROM dojos ;
    """
    result= connectToMySQL(DATABASE).query_db(query)

    all_dojos=[]
    for x in result:
        all_dojos.append(cls(x))
        return all_dojos
    

def create(cls,data):
    query="""
            INSERT INTO dojos (name)
            VALUES(%(name)s)
            """
    return connectToMySQL(DATABASE).query_db(query,data)
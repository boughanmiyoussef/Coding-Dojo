from flask_app.config import connectToMySQL
from flask_app import DATABASE


class Ninja:
    def __init__(self,data):
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.age=data['age']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.dojo_id=data['dojo_id']


@classmethod
def get_all(cls):
    query="""
        SELECT * FROM ninjas;
        """
    all_ninjas=[]
    result=connectToMySQL(DATABASE).query_db(query)
    for x in result:
        all_ninjas.append(cls(x))
        return all_ninjas
    
@classmethod
def get_by_id(cls,data):
    query="""
        SELECT * FROM ninjas 
        WHERE id=%(id)s;
            """
    result=connectToMySQL(DATABASE).query_db(query,data)
    return cls(result[0])


def create(cls,data):
        query="""" INSERT INTO dojos(name)
                VALUES =%(name)s ;"""
        return connectToMySQL(DATABASE).query_db(query,data)

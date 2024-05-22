
use dojos_and_ninjas_shema;
INSERT INTO dojos(name) VALUES ("Heigi");
INSERT INTO dojos(name) VALUES ("Robin");
INSERT INTO dojos(name) VALUES ("Frank");

DELETE FROM dojos WHERE iddojos=3;

INSERT INTO dojos(name) VALUES ("Luffy");
INSERT INTO dojos(name) VALUES ("Conan");
INSERT INTO dojos(name) VALUES ("Kaido");

INSERT INTO ninjas(first_name, last_name,dojos_id) VALUES ("Jack" ,"Mack",1);
INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("John" , "Don",1);
INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("Tom","Jerry",1);

INSERT INTO ninjas(first_name,last_name, dojos_id) VALUES ("john","Doe",2);
INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("Alex", "Smith",2);
INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("Mohamed", "Mohsen",2);

INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("Levi","Eren",2);
INSERT INTO ninjas(first_name,last_name,dojos_id) VALUES ("Dofy", "Lola",2);
INSERT INTO ninja(first_name,last_name,dojos_id) VALUES ("Akai", "Ran",2);

SELECT * FROM dojos WHERE iddojos=1;
SELECT * FROM dojos WHERE iddojos=2;
SELECT * FROM dojos WHERE iddojos=4;

SELECT * FROM ninjas 
join dojos ON dojos.iddojos=ninjas.dojos_id ;


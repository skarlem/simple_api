CREATE TABLE todos(
    id serial primary key,
    description text
);
INSERT INTO todos(description)VALUES ('first task');
INSERT INTO todos(description)VALUES ('second task');
INSERT INTO todos(description)VALUES ('third task');
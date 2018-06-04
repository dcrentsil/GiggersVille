DROP DATABASE IF EXISTS giggersdb cascade;
CREATE DATABASE giggersdb;

DROP TABLE IF EXISTS giggers cascade;

CREATE TABLE giggers(
    id serial primary key,
    type VARCHAR(11),
    name VARCHAR(15),
    username VARCHAR(50),
    email VARCHAR,
    password VARCHAR,
    speciality VARCHAR(255),
    description VARCHAR(255)
)WITH (OIDS = FALSE);


INSERT INTO giggers
VALUES
(default, 'employee', 'Donald Crentsil', 'dcrentsil', 'test@testerson.com', 'test','Keyboard', 'looking for a gospel piano gig'),
(default, 'employer', 'Shawn Connery', 'kshawn',  'test@testerson.com', 'test','Drummer', 'In search of a drummer'),
(default, 'employer', 'Nat King Cole', 'ACoco',  'test@testerson.com', 'test','Bassist', 'Church in need of Bassist'),
(default, 'employee', '9VISIONS ENT', '9V',  'test@testerson.com', 'test', 'drums' ,'Been playing drums for 5 years. Hire me!');


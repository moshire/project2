DROP DATABASE IF EXISTS project3_db;
CREATE DATABASE project3_db;
USE project3_db;

CREATE TABLE countries(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  country_name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE artists(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  countryId INTEGER(100),
  artistName VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (countryId) REFERENCES countries(id)
);

CREATE TABLE songs(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  artistId INTEGER(100),
  songName VARCHAR(100),
  songYear VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (artistId) REFERENCES artists(id)
);

CREATE TABLE users(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  countryId INTEGER(100),
  userName VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY (id),
    FOREIGN KEY (countryId) REFERENCES countries(id)
);

INSERT INTO countries (country_name) values ('kenya');
INSERT INTO countries (country_name) values ('South Korea');
INSERT INTO countries (country_name) values ('Brazil');
INSERT INTO countries (country_name) values ('France');
INSERT INTO countries (country_name) values ('India');

INSERT INTO artists (artistName, countryId) values ('Masauti', 1);
INSERT INTO artists (artistName, countryId) values ('Nyashinski', 1);
INSERT INTO artists (artistName, countryId) values ('Otile Brown', 1);
INSERT INTO artists (artistName, countryId) values ('Bahati', 1);
INSERT INTO artists (artistName, countryId) values ('Victoria Kimani', 1);

INSERT INTO artists (artistName, countryId) values ('BTS', 2);
INSERT INTO artists (artistName, countryId) values ('BLACKPINK', 2);
INSERT INTO artists (artistName, countryId) values ('JANNABI', 2);
INSERT INTO artists (artistName, countryId) values ('BOL4', 2);
INSERT INTO artists (artistName, countryId) values ('TAEYEON', 2);

INSERT INTO artists (artistName, countryId) values ('Luan Santana & MC Kekel', 3);
INSERT INTO artists (artistName, countryId) values ('Gusttavo Lima', 3);
INSERT INTO artists (artistName, countryId) values ('Ze Neto & Cristiano', 3);
INSERT INTO artists (artistName, countryId) values ('Marilia Mendonca', 3);
INSERT INTO artists (artistName, countryId) values ('Turma Do Pagode', 3);

INSERT INTO artists (artistName, countryId) values ('Angele', 4);
INSERT INTO artists (artistName, countryId) values ('M. Pokora', 4);
INSERT INTO artists (artistName, countryId) values ('Clara Luciani', 4);
INSERT INTO artists (artistName, countryId) values ('Pedro Capo X Farruko', 4);
INSERT INTO artists (artistName, countryId) values ('Maitre Gims', 4);

INSERT INTO artists (artistName, countryId) values ('Frolic Neha Kakkar', 5);
INSERT INTO artists (artistName, countryId) values ('Kalank', 5);
INSERT INTO artists (artistName, countryId) values ('Kesari', 5);
INSERT INTO artists (artistName, countryId) values ('Luka Chuppi', 5);
INSERT INTO artists (artistName, countryId) values ('Gully Boy', 5);

INSERT INTO songs (songName, songYear, artistId) values ('Sare', 2019, 1);
INSERT INTO songs (songName, songYear, artistId) values ('Kebs', 2019, 2);
INSERT INTO songs (songName, songYear, artistId) values ('Baby love', 2019, 3);
INSERT INTO songs (songName, songYear, artistId) values ('Rock Of My Life', 2019, 4);
INSERT INTO songs (songName, songYear, artistId) values ('Boom', 2019, 5);

INSERT INTO songs (songName, songYear, artistId) values ('Mikrokosmos', 2019, 6);
INSERT INTO songs (songName, songYear, artistId) values ('Kill This Love', 2019, 7);
INSERT INTO songs (songName, songYear, artistId) values ('For Lovers Who Hesitate', 2019, 8);
INSERT INTO songs (songName, songYear, artistId) values ('BOM', 2019, 9);
INSERT INTO songs (songName, songYear, artistId) values ('Four Seasons', 2019, 10);

INSERT INTO songs (songName, songYear, artistId) values ('Vinganca', 2019, 11);
INSERT INTO songs (songName, songYear, artistId) values ('Cem Mil', 2019, 12);
INSERT INTO songs (songName, songYear, artistId) values ('Estado Decadente', 2019, 13);
INSERT INTO songs (songName, songYear, artistId) values ('Bem Pior Que Eu', 2019, 14);
INSERT INTO songs (songName, songYear, artistId) values ('Pesquisa No Google', 2019, 15);

INSERT INTO songs (songName, songYear, artistId)  values ('Balance Ton Quoi', 2019, 16);
INSERT INTO songs (songName, songYear, artistId) values ('Les Planetes', 2019, 17);
INSERT INTO songs (songName, songYear, artistId) values ('La Grenade', 2019, 18);
INSERT INTO songs (songName, songYear, artistId) values ('Calma', 2019, 19);
INSERT INTO songs (songName, songYear, artistId) values ('Miami Vice', 2019, 20);

INSERT INTO songs (songName, songYear, artistId) values ('Coca Cola', 2019, 21);
INSERT INTO songs (songName, songYear, artistId) values ('First Class', 2019, 22);
INSERT INTO songs (songName, songYear, artistId) values ('V Maahi', 2019, 23);
INSERT INTO songs (songName, songYear, artistId) values ('Duniyaa', 2019, 24);
INSERT INTO songs (songName, songYear, artistId) values ('Mere Gully Mein', 2019, 25);



SELECT * FROM countries;
SELECT * FROM artists;
SELECT * FROM songs;

SELECT country_name,artistName, songName, songYear
FROM artists
JOIN countries ON artists.countryId = countries.id JOIN songs ON songs.artistId = artists.id
 




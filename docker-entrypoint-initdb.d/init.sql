
CREATE DATABASE ventk2;

USE ventk2;

CREATE TABLE `users` (
  `user_ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `password` VARCHAR(255),
  PRIMARY KEY (`user_ID`),
  UNIQUE INDEX `user_ID` (`user_ID` ASC) VISIBLE);

CREATE TABLE `users_OLD` (
  `user_ID` INT NOT NULL,
  `name` VARCHAR(255),
  `password` VARCHAR(255)
)

CREATE TABLE `rooms` (
  `room_ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`room_ID`),
  UNIQUE INDEX `room_ID` (`room_ID` ASC) VISIBLE);

CREATE TABLE `climate_zones` (
  `climate_zone_ID` INT NOT NULL AUTO_INCREMENT,
  `FK_Room` INT NOT NULL,
  PRIMARY KEY (`climate_zone_ID`),
  FOREIGN KEY (FK_Room) REFERENCES rooms(room_ID),
  UNIQUE INDEX `climate_zone_ID` (`climate_zone_ID` ASC) VISIBLE
);

CREATE TABLE `seats` (
    `seat_ID` INT NOT NULL AUTO_INCREMENT,
    `FK_Climate_Zone` INT NOT NULL,
    FOREIGN KEY (FK_Climate_Zone) REFERENCES climate_zones(climate_zone_ID),
    UNIQUE INDEX `seat_ID` (`seat_ID` ASC) VISIBLE
);

CREATE TABLE `presets` (
  `preset_ID` INT NOT NULL AUTO_INCREMENT,
  `airflow` TINYINT(10) NULL,
  `FK_User` INT NOT NULL,
  `FK_Climate_Zone` INT NOT NULL,
  PRIMARY KEY (`preset_ID`),
  FOREIGN KEY (FK_User) REFERENCES users(user_ID),
  FOREIGN KEY (FK_Climate_Zone) REFERENCES climate_zones(climate_zone_ID),
  UNIQUE INDEX `preset_ID` (`preset_ID` ASC) VISIBLE);

INSERT INTO users (user_ID) VALUES(1);

insert into rooms (room_ID, `name`) values (1, 'copenhagen');
insert into rooms (room_ID,`name`) values (2, 'valby');
insert into rooms (room_ID,`name`) values (3, 'roskilde');
insert into rooms (room_ID, `name`) values (4, 'berlin');

insert into climate_zones (climate_zone_ID, FK_Room) values (1, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (2, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (3, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (4, 1);

insert into climate_zones (climate_zone_ID, FK_Room) values (5, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (6, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (7, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (8, 2);

insert into climate_zones (climate_zone_ID, FK_Room) values (9, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (10, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (11, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (12, 3);

insert into climate_zones (climate_zone_ID, FK_Room) values (13, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (14, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (15, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (16, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (17, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (18, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (19, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (20, 4);


insert into seats (seat_ID, FK_Climate_Zone) values (1, 1);
insert into seats (seat_ID, FK_Climate_Zone) values (2, 1);
insert into seats (seat_ID, FK_Climate_Zone) values (3, 1);
insert into seats (seat_ID, FK_Climate_Zone) values (4, 1);
insert into seats (seat_ID, FK_Climate_Zone) values (5, 1);
insert into seats (seat_ID, FK_Climate_Zone) values (6, 1);

insert into seats (seat_ID, FK_Climate_Zone) values (7, 2);
insert into seats (seat_ID, FK_Climate_Zone) values (8, 2);
insert into seats (seat_ID, FK_Climate_Zone) values (9, 2);
insert into seats (seat_ID, FK_Climate_Zone) values (10, 2);
insert into seats (seat_ID, FK_Climate_Zone) values (11, 2);
insert into seats (seat_ID, FK_Climate_Zone) values (12, 2);

insert into seats (seat_ID, FK_Climate_Zone) values (13, 3);
insert into seats (seat_ID, FK_Climate_Zone) values (14, 3);
insert into seats (seat_ID, FK_Climate_Zone) values (15, 3);
insert into seats (seat_ID, FK_Climate_Zone) values (16, 3);
insert into seats (seat_ID, FK_Climate_Zone) values (17, 3);
insert into seats (seat_ID, FK_Climate_Zone) values (18, 3);

insert into seats (seat_ID, FK_Climate_Zone) values (19, 4);
insert into seats (seat_ID, FK_Climate_Zone) values (20, 4);
insert into seats (seat_ID, FK_Climate_Zone) values (21, 4);
insert into seats (seat_ID, FK_Climate_Zone) values (22, 4);
insert into seats (seat_ID, FK_Climate_Zone) values (23, 4);
insert into seats (seat_ID, FK_Climate_Zone) values (24, 4);


CREATE DATABASE db_mentalShower;

USE db_mentalShower;

CREATE TABLE `users`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(55) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(30)
);

CREATE TABLE `rooms` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    UNIQUE INDEX `id` (`id` ASC) VISIBLE
);

CREATE TABLE `zones` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `room_id` INT NOT NULL,
    `airflow` INT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    UNIQUE INDEX `id` (`id` ASC) VISIBLE
);

CREATE TABLE `seats` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `zone_id` INT NOT NULL,
    `occupied` BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (zone_id) REFERENCES zones(id),
    UNIQUE INDEX `id` (`id` ASC) VISIBLE
);

CREATE TABLE `presets` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `airflow` INT NULL,
    `zone_id` INT NULL,
    `user_id` INT NOT NULL,
#     This should maybe be deleted, due to guests.
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE INDEX `id` (`id` ASC) VISIBLE
);
CREATE TABLE `old_presets` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `airflow` INT NULL,
    `zone_id` INT NULL,
    `user_id` INT NOT NULL,
 #     This should maybe be deleted, due to guests.
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE INDEX `id` (`id` ASC) VISIBLE
);
CREATE TABLE `guest_preset` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `airflow` INT NULL,
    `zone_id` INT NULL,
    `guest_id` INT NOT NULL
);

CREATE TABLE `roles` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(24)
);

# This should take the avg airflow from presets with zone_id(x)
# And then update zone where id = x
# With the avg of airflow from presets
DELIMITER //
CREATE PROCEDURE zone_air(IN currentZone INT)
BEGIN
#     SELECT Avg(airflow) AS airAvg FROM presets WHERE zone_id LIKE currentZone;
    UPDATE zones SET airflow = (SELECT AVG(airflow) FROM presets WHERE zone_id LIKE currentZone) WHERE id LIKE currentZone;
END //
DELIMITER ;

DELIMITER //

DELIMITER //;



# CALL zone_air(zone);


# DATA BELOW
insert into users (id, username, email, password, role) values (1, 'root', 'email@email.com', 'root', 'admin');
insert into users (id, username, email, password, role) values (2, 'test1', 'test1@email.com', 'root', 'mod');
insert into users (id, username, email, password, role) values (3, 'test2', 'test2@email.com', 'root', 'user');

insert into rooms (id, `name`) values (1, 'Eswatini');
insert into rooms (id,`name`) values (2, 'Delhi');
insert into rooms (id,`name`) values (3, 'Harare');
insert into rooms (id, `name`) values (4, 'Banjul');
INSERT INTO roles (id, name) values (1, 'user'), (2, 'mod'), (3, 'admin');
insert into zones (id, room_id) values (1, 1);
insert into zones (id, room_id) values (2, 1);
insert into zones (id, room_id) values (3, 1);
insert into zones (id, room_id) values (4, 1);

insert into zones (id, room_id) values (5, 2);
insert into zones (id, room_id) values (6, 2);
insert into zones (id, room_id) values (7, 2);
insert into zones (id, room_id) values (8, 2);

insert into zones (id, room_id) values (9, 3);
insert into zones (id, room_id) values (10, 3);
insert into zones (id, room_id) values (11, 3);
insert into zones (id, room_id) values (12, 3);

insert into zones (id, room_id) values (13, 4);
insert into zones (id, room_id) values (14, 4);
insert into zones (id, room_id) values (15, 4);
insert into zones (id, room_id) values (16, 4);
insert into zones (id, room_id) values (17, 4);
insert into zones (id, room_id) values (18, 4);
insert into zones (id, room_id) values (19, 4);
insert into zones (id, room_id) values (20, 4);

insert into presets (airflow, zone_id, user_id) values (20, 1, 1), (50, 1, 2), (100, 1, 2);

INSERT INTO `seats` (`id`, `zone_id`, `occupied`) VALUES
(1, 1, 0),
(2, 1, 0),
(3, 1, 0),
(4, 1, 0),
(5, 1, 0),
(6, 1, 0),
(7, 2, 0),
(8, 2, 0),
(9, 2, 0),
(10, 2, 0),
(11, 2, 0),
(12, 2, 0),
(13, 3, 0),
(14, 3, 0),
(15, 3, 0),
(16, 3, 0),
(17, 3, 0),
(18, 3, 0),
(19, 4, 0),
(20, 4, 0),
(21, 4, 0),
(22, 4, 0),
(23, 4, 0),
(24, 4, 0),
(25, 5, 0),
(26, 5, 0),
(27, 5, 0),
(28, 5, 0),
(29, 5, 0),
(30, 5, 0),
(31, 6, 0),
(32, 6, 0),
(33, 6, 0),
(34, 6, 0),
(35, 6, 0),
(36, 6, 0),
(37, 7, 0),
(38, 7, 0),
(39, 7, 0),
(40, 7, 0),
(41, 7, 0),
(42, 7, 0),
(43, 8, 0),
(44, 8, 0),
(45, 8, 0),
(46, 8, 0),
(47, 8, 0),
(48, 8, 0),
(49, 9, 0),
(50, 9, 0),
(51, 9, 0),
(52, 9, 0),
(53, 9, 0),
(54, 9, 0),
(55, 10, 0),
(56, 10, 0),
(57, 10, 0),
(58, 10, 0),
(59, 10, 0),
(60, 10, 0),
(61, 11, 0),
(62, 11, 0),
(63, 11, 0),
(64, 11, 0),
(65, 11, 0),
(66, 11, 0),
(67, 12, 0),
(68, 12, 0),
(69, 12, 0),
(70, 12, 0),
(71, 12, 0),
(72, 12, 0),
(73, 13, 0),
(74, 13, 0),
(75, 13, 0),
(76, 13, 0),
(77, 13, 0),
(78, 13, 0),
(79, 14, 0),
(80, 14, 0),
(81, 14, 0),
(82, 14, 0),
(83, 14, 0),
(84, 14, 0),
(85, 15, 0),
(86, 15, 0),
(87, 15, 0),
(88, 15, 0),
(89, 15, 0),
(90, 15, 0),
(91, 16, 0),
(92, 16, 0),
(93, 16, 0),
(94, 16, 0),
(95, 16, 0),
(96, 16, 0),
(97, 17, 0),
(98, 17, 0),
(99, 17, 0),
(100, 17, 0),
(101, 17, 0),
(102, 17, 0),
(103, 18, 0),
(104, 18, 0),
(105, 18, 0),
(106, 18, 0),
(107, 18, 0),
(108, 18, 0),
(109, 19, 0),
(110, 19, 0),
(111, 19, 0),
(112, 19, 0),
(113, 19, 0),
(114, 19, 0),
(115, 20, 0),
(116, 20, 0),
(117, 20, 0),
(118, 20, 0),
(119, 20, 0),
(120, 20, 0);

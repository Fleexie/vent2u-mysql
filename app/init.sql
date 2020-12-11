
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
    `room_id` INT NOT NULL,
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

INSERT INTO `seats` (`id`, `zone_id`, `room_id`, `occupied`) VALUES
(1, 1, 1, 0),
(2, 1, 1, 0),
(3, 1, 1, 0),
(4, 1, 1, 0),
(5, 1, 1, 0),
(6, 1, 1, 0),
(7, 2, 1, 0),
(8, 2, 1, 0),
(9, 2, 1, 0),
(10, 2, 1, 0),
(11, 2, 1, 0),
(12, 2, 1, 0),
(13, 3, 1, 0),
(14, 3, 1, 0),
(15, 3, 1, 0),
(16, 3, 1, 0),
(17, 3, 1, 0),
(18, 3, 1, 0),
(19, 4, 1, 0),
(20, 4, 1, 0),
(21, 4, 1, 0),
(22, 4, 1, 0),
(23, 4, 1, 0),
(24, 4, 1, 0),
(25, 5, 2, 0),
(26, 5, 2, 0),
(27, 5, 2, 0),
(28, 5, 2, 0),
(29, 5, 2, 0),
(30, 5, 2, 0),
(31, 6, 2, 0),
(32, 6, 2, 0),
(33, 6, 2, 0),
(34, 6, 2, 0),
(35, 6, 2, 0),
(36, 6, 2, 0),
(37, 7, 2, 0),
(38, 7, 2, 0),
(39, 7, 2, 0),
(40, 7, 2, 0),
(41, 7, 2, 0),
(42, 7, 2, 0),
(43, 8, 2, 0),
(44, 8, 2, 0),
(45, 8, 2, 0),
(46, 8, 2, 0),
(47, 8, 2, 0),
(48, 8, 2, 0),
(49, 9, 3, 0),
(50, 9, 3, 0),
(51, 9, 3, 0),
(52, 9, 3, 0),
(53, 9, 3, 0),
(54, 9, 3, 0),
(55, 10, 3, 0),
(56, 10, 3, 0),
(57, 10, 3, 0),
(58, 10, 3, 0),
(59, 10, 3, 0),
(60, 10, 3, 0),
(61, 11, 3, 0),
(62, 11, 3, 0),
(63, 11, 3, 0),
(64, 11, 3, 0),
(65, 11, 3, 0),
(66, 11, 3, 0),
(67, 12, 3, 0),
(68, 12, 3, 0),
(69, 12, 3, 0),
(70, 12, 3, 0),
(71, 12, 3, 0),
(72, 12, 3, 0),
(73, 13, 4, 0),
(74, 13, 4, 0),
(75, 13, 4, 0),
(76, 13, 4, 0),
(77, 13, 4, 0),
(78, 13, 4, 0),
(79, 14, 4, 0),
(80, 14, 4, 0),
(81, 14, 4, 0),
(82, 14, 4, 0),
(83, 14, 4, 0),
(84, 14, 4, 0),
(85, 15, 4, 0),
(86, 15, 4, 0),
(87, 15, 4, 0),
(88, 15, 4, 0),
(89, 15, 4, 0),
(90, 15, 4, 0),
(91, 16, 4, 0),
(92, 16, 4, 0),
(93, 16, 4, 0),
(94, 16, 4, 0),
(95, 16, 4, 0),
(96, 16, 4, 0),
(97, 17, 4, 0),
(98, 17, 4, 0),
(99, 17, 4, 0),
(100, 17, 4, 0),
(101, 17, 4, 0),
(102, 17, 4, 0),
(103, 18, 4, 0),
(104, 18, 4, 0),
(105, 18, 4, 0),
(106, 18, 4, 0),
(107, 18, 4, 0),
(108, 18, 4, 0),
(109, 19, 4, 0),
(110, 19, 4, 0),
(111, 19, 4, 0),
(112, 19, 4, 0),
(113, 19, 4, 0),
(114, 19, 4, 0),
(115, 20, 4, 0),
(116, 20, 4, 0),
(117, 20, 4, 0),
(118, 20, 4, 0),
(119, 20, 4, 0),
(120, 20, 4, 0);

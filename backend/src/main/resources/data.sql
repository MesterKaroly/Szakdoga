INSERT INTO USERS (ID, VERSION, FULLNAME, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (0, 0,'adminka mester', 'admin', 'admin@gmail.com', 'admin', 'ADMIN');
INSERT INTO FOOD (ID, VERSION, NAMES, INGREDIENTS, PRICE) VALUES (0, 0,'Spagetti', 'tészta,darálthús,bazsalikom', 2000);
INSERT INTO ORDERS (ID, VERSION,FULLNAME,PHONENUMBER, COMMENTS,TABLENUMBER) VALUES (0, 0,'MesterKaroly','06302734658','Gyorsan hozzátok ki.',3);
INSERT INTO RATINGS (ID, VERSION, FULLNAME, DATES, COMMENTS, RATINGPOINT) VALUES (0 , 0,'Kiss Jenő', current_timestamp, 'Tökéletes volt.', 5);
INSERT INTO RESERVATION (ID, VERSION, FULLNAME, PHONENUMBER, COMMENTS, DATES, TABLENUMBER) VALUES (0, 0,'Mester Károly', '06317859733','Szeretnénk 10 fővel érkeni mert esküvőt ünneplünk', current_timestamp, 3);
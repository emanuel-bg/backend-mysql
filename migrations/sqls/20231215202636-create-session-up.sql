/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS UserSessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    created_at BIGINT 
    updated_at BIGINT
    token VARCHAR(255)
);


ALTER TABLE
  UserSessions
ADD
  CONSTRAINT fk_userIdUserSessions FOREIGN KEY (userId) REFERENCES Users(id);
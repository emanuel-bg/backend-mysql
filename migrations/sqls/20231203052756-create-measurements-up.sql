/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS Measurements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount VARCHAR(255),
  date DATE,
  measuredby VARCHAR(255),
  userId INT,
  imageName VARCHAR(255)
);
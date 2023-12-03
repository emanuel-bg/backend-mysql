/* Replace with your SQL commands */
ALTER TABLE Measurements
      ADD CONSTRAINT fk_userId
      FOREIGN KEY (userId)
    REFERENCES Users(id);
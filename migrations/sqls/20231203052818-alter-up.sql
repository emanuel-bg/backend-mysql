/* Replace with your SQL commands */
ALTER TABLE
  Measurements
ADD
  CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES Users(id);

ALTER TABLE
  Measurements
ADD
  created_at timestamp
ALTER TABLE
  Measurements
ADD
  updated_atfP timestamp
CREATE TABLE "User" (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  fname VARCHAR(255),
  lname VARCHAR(255),
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  city TEXT,
  state TEXT,
  zip INTEGER,
  phone INTEGER
);

CREATE TABLE "Form" (
  id SERIAL PRIMARY KEY NOT NULL,
  project VARCHAR(255) NOT NULL,
  question1 TEXT,
  question2 TEXT,
  question3 TEXT,
  question4 TEXT,
  question5 TEXT,
  question6 TEXT,
  question7 TEXT,
  question8 TEXT,
  signature1 TEXT,
  signature1box BOOLEAN DEFAULT false,
  signature2 TEXT,
  signature2box BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "authorId" INTEGER NOT NULL,
  FOREIGN KEY ("authorId") REFERENCES "User"(id)
);
# Schema Information


## galleries
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | string    |
photo_id        | integer   | not null, foreign key (references photos)
photographer_id | integer   | not null, foreign key (references users)

## photos
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
photographer_id   | integer   | not null, foreign key (references users)
title             | string    | not null
description       | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id     | integer   | not null, foreign key (references photo)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

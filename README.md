# Challenge-14-MVC

## Overview
This is the backend API for a social network.

## Features
Check posts made by the community

* Create and store users

* Delete and edit users

* Create posts "thoughts"

* Edit posts

* Comment posts
  
* Delete comments to posts

* Add and remove other users from friend list

## Installation

* Clone the repository to your local machine.

* Navigate to the project directory.

* Install the required dependencies.
  npm install

* Install MongoDB

## Usage
Once the server is running, you can use API testing tools like Insomnia or Postman to interact with the API. The API provides routes for managing users, thoughts, reactions and friendships.

## API Routes

```md
USERS
Get all users: GET /api/users
Create a user: POST /api/users
Get user by ID: `GET /api/users/:userId'
Update a user: `PUT /api/users/:userId'
Delete a user: `DELETE /api/users/:userId'
Add a friend: PUT /api/users/:userId/friends/:friendId
Delete a friend: DELETE /api/users/:userId/friends/:friendId
```
```md
THOUGHTS

Get all thoughts: GET /api/thoughts
Create a thought: POST /api/thoughts
Get thought by ID: `GET /api/thoughts/:thoughtId'
Update a thought: `PUT /api/thoughts/:thoughtId'
Delete a thought: `DELETE /api/thoughts/:thoughtId'
```
````md
REACTIONS

Add a reaction: PUT /api/thoughts/:id/reactions
Delete a reaction: DELETE /api/thoughts/:id/reactions 
```
## Preview
![image](https://github.com/jalpiva98/Challenge-18/assets/108430639/031609f7-e307-4a9d-b61c-cfa89a31eee7)
![image](https://github.com/jalpiva98/Challenge-18/assets/108430639/2fffd6c0-8e0b-46a3-aecf-6c2394f65e98)


## Technologies
This application is built with the following technologies:

* Express.js
* MongoDB
* Mongoose
* JavaScript
* Postman (for API testing)
* Node.js

## Acknowledgments
This application was created as part of my coding bootcamp project.


## Repo
https://github.com/jalpiva98/Challenge-18

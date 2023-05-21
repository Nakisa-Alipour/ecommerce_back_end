# E-Commerce Back End
This repository contains the back end for an e-commerce site. It is built using Express.js and Sequelize, and it interacts with a MySQL database. The purpose of this project is to provide the foundational architecture for an e-commerce platform and demonstrate the use of modern technologies.


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```


## Installation

To use this application, please follow these steps:

1. Clone the repository to your local machine by `git clone` command.
2. Navigate to the project's root directory in your terminal or command prompt.
3. Run `npm install` to install the required dependencies.



## Usage

1. Set up your MySQL database by entering your database name, MySQL username, and MySQL password in an environment variable file (e.g., `.env`). 
2. Run the necessary schema and seed commands to create and populate the database with test data. This includes running `mysql -u root -p` and then `source schema.sql` .
3. Start the application by running the command `npm start`.
4. Use an API testing tool like Insomnia to test the available routes (GET, POST, PUT, DELETE) for categories, products, and tags.


## Walkthrough Video

Please refer to the walkthrough video 

for **installation and usage**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/kaBeCnJkRcj)



to see functionality of the application for **categories in Insomnia**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/91Otoq7anD5)



to see functionality of the application for **products in Insomnia**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/8RVNU1mbcuX)



to see functionality of the application for **tags in Insomnia**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/wN8AYwVV8SQ)



## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.



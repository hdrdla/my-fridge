# MY FRIDGE
MyFridge is an app which will help you to avoid food waste from your fridge.


## FEATURES
  - [ ] Principle Features
    - Add item, date and quantity to the fridge or freezer
    - Show the list of items in fridge and freezer by date order (from the oldest to the latest)
    - Can remove item from the fridge or freezer
    - If click an item, show possible recipes and can chose one to show detail.

  - [ ] Nice-to-have
    - Update quantity
    - Move an item from fridge/freezer to freezer/fridge
    - show the list with defualt image of each item


## STACK
MyFridge is using HTML, CSS, React for frontend and Express and MySQL for backend


## API
[EDAMAM](https://developer.edamam.com/edamam-docs-recipe-api)


## PLAN
  - [ ] User Flow
  
   ![Image of userFlow](userFlow.png)
   
   
  
  - [ ] Database schema
  
   ![Image of Database](Database.png)
   
   
  
  - [ ] API routes plan
  
   ![Image of Routes](Routes.png)
   
   
  
  - [ ] Full stack architecture drawing
  
   ![Image of architecture](architecture.jpg)




## SETUP

### Dependencies
Run `yarn` to install dependencies.

### Database Prep
- [ ] Create `.env` file in the api directory and add `DB_PASS=YOURPASSWORD`.

- [ ] Type `mysql -u root -p -e "create database myFridge"` in your terminal to create a database in MySQL.

- [ ] Run `node server/models/database.js`. This will create a table called 'items' in your database. If you experience errors regarding authentication, run the following in mysql first: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';`.


### Run Your Start
Run `yarn start` in your terminal .




_This is a student project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._


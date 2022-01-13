# Shopper

The shopper sample application that comes with this course, is an express application that represents the shopping system with, an item management, a shopping page, a shopping basket, user management and also order management. All the boilerplate code as well as the express routes are in place already so that we can focus on implementing the database functionality. As we work through this course we will use MongoDB, Redis and MySQL for different aspects of this project and learn about their individual strengths. Where it's applicable, we will also use dedicated libraries that are built on top of the basic database drivers

```
sudo docker run --name mongodb -p 37017:27017 -d mongo
sudo docker run --name redis -p 7379:6379 -d redis
sudo docker start mongodb
sudo docker start redis

sudo docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
sudo docker start mysql

npm run dev
```

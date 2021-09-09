//import express module
const express = require('express');
//create express application
const app = express();
// import mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restaurant');

// import bcrypt
const bcrypt = require('bcrypt');
// import axios
const axios=require('axios');
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// import du models plat
const Plat = require('./models/plat');
// import du models chef
const Chef = require('./models/chef');
// import du models user
const User = require('./models/user');
// import du models odrer
const Order = require('./models/order');

// import body parser module
const bodyParser = require("body-parser");
const plat = require('./models/plat');
// Prepare Response to JSON Object
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));


// Business Logic GET all Plats
// / : http://localhost:3000/ => URL de base coté serveur
app.get('/plats', (req, res) => {
  console.log('HERE into get all plats');
  // tableau statique d'objects
  // let platsArray = [
  //   { id: 1, name: 'conscous', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_1.png' },
  //   { id: 2, name: 'ojja', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_2.png' },
  //   { id: 3, name: 'plat tunisien', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_3.png' },
  //   { id: 4, name: 'malfouf', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_4.png' },
  //   { id: 5, name: 'makloub', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_5.png' }
  // ];
  // 404: not found
  //500: server error
  //401: Authorization Error
  // cnx avec la DB
  Plat.find((err, docs) => {
    if (err) {
      console.log('error with DB');
    } else {
      //200:ok
      res.status(200).json({
        // allPlats: platsArray
        allPlats: docs

      });
    }

  })


});
//  get all users
app.get('/users', (req, res) => {
  console.log('HERE into get all users');
  // tableau statique d'objects
  // let usersArray = [
  //   { id: 1, firstName: 'slimen', lastName: 'jemi', email: 's@gamil.com', tel: '25147896', address: 'aaaaaaaaa', img: 'assets/img/client/client_1.png' },
  //   { id: 2, firstName: 'seif', lastName: 'rezqui', email: 'seif@gamil.com', tel: '25874123', address: 'bbbbbbbbbb' },
  //   { id: 3, firstName: 'amine', lastName: 'jemi', email: 'a@gamil.com', tel: '25879637', address: 'cccccccccc' },
  //   { id: 4, firstName: 'taher', lastName: 'timoumi', email: 't@gamil.com', tel: '25879639', address: 'dddddddddd' },
  //   { id: 5, firstName: 'hela', lastName: 'haloula', email: 'h@gamil.com', tel: '25879635', address: 'eeeeeeeeeee' },
  // ];
  // 404: not found
  //500: server error
  //401: Authorization Error
  //200:ok

  // cnx avec la DB
  User.find((err, docs) => {
    if (err) {
      console.log('error with DB');
    } else {
      //200:ok
      res.status(200).json({
        allUsers: docs
      });
    }

  })
});
// get all chefs
app.get('/chefs', (req, res) => {
  console.log('HERE into get all chefs');
  // tableau statique d'objects
  // let chefsArray = [
  //   { id: 1, name: 'slimen', speciality: 'Chef patissier', img: 'assets/img/team/chefs_1.png' },
  //   { id: 2, name: 'seif', speciality: 'chef cuisinier', img: 'assets/img/team/chefs_2.png' },
  //   { id: 3, name: 'amine', speciality: 'chef patissier', img: 'assets/img/team/chefs_3.png' },
  //   { id: 4, name: 'ahmed', speciality: 'chef cuisinier', img: 'assets/img/team/chefs_1.png' },
  //   { id: 5, name: 'taher', speciality: 'chef patissier', img: 'assets/img/team/chefs_2.png' }
  // ];
  // 404: not found
  //500: server error
  //401: Authorization Error
  //200:ok

  // cnx avec la DB
  Chef.find((err, docs) => {
    if (err) {
      console.log('error with DB');
    } else {
      //200:ok
      res.status(200).json({
        allChefs: docs
      });
    }

  })
});
// get plat by id
app.get('/plats/:id', (req, res) => {
  console.log('here into get play by id');
  console.log('here ID', req.params.id);
  // let platsArray = [
  //   { id: 1, name: 'conscous', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_1.png' },
  //   { id: 2, name: 'ojja', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_2.png' },
  //   { id: 3, name: 'plat tunisien', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_3.png' },
  //   { id: 4, name: 'malfouf', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_4.png' },
  //   { id: 5, name: 'makloub', price: '8', description: 'aaaaaaaa', img: 'assets/img/food_menu/single_food_5.png' }
  // ];
  // let searchPlat = {};
  // for (let i = 0; i < platsArray.length; i++) {
  //   if (platsArray[i].id == req.params.id) {
  //     searchPlat = platsArray[i];
  //     break;

  //   }

  // }
  Plat.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          plat: result
        });


      }
    }

  );
});
// get chef by id
app.get('/chefs/:id', (req, res) => {
  console.log('here into get chef by id');
  console.log('here ID', req.params.id);
  // let chefsArray = [
  //   { id: 1, name: 'slimen', speciality: 'Chef patissier', img: 'assets/img/team/chefs_1.png' },
  //   { id: 2, name: 'seif', speciality: 'chef cuisinier', img: 'assets/img/team/chefs_2.png' },
  //   { id: 3, name: 'amine', speciality: 'chef patissier', img: 'assets/img/team/chefs_3.png' },
  //   { id: 4, name: 'ahmed', speciality: 'chef cuisinier', img: 'assets/img/team/chefs_1.png' },
  //   { id: 5, name: 'taher', speciality: 'chef patissier', img: 'assets/img/team/chefs_2.png' }
  // ];
  // let searchChef = {};
  // for (let i = 0; i < chefsArray.length; i++) {
  //   if (chefsArray[i].id == req.params.id) {
  //     searchChef = chefsArray[i];
  //     break;

  //   }

  // }
  Chef.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          chef: result
        });


      }
    }

  );


});
// get chef by speciality
app.post('/chefs/search', (req, res) => {
  console.log('here into search', req.body.speciality);

  Chef.find({ speciality: req.body.speciality }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          findedchefs: result
        });


      }
    }

  );


});
//  get user by id
app.get('/users/:id', (req, res) => {
  console.log('here into get user by id');
  console.log('here ID', req.params.id);
  // let usersArray = [
  //   { id: 1, firstName: 'slimen', lastName: 'jemi', email: 's@gamil.com', tel: '25147896', address: 'aaaaaaaaa', img: 'assets/img/client/client_1.png' },
  //   { id: 2, firstName: 'seif', lastName: 'rezqui', email: 'seif@gamil.com', tel: '25874123', address: 'bbbbbbbbbb' },
  //   { id: 3, firstName: 'amine', lastName: 'jemi', email: 'a@gamil.com', tel: '25879637', address: 'cccccccccc' },
  //   { id: 4, firstName: 'taher', lastName: 'timoumi', email: 't@gamil.com', tel: '25879639', address: 'dddddddddd' },
  //   { id: 5, firstName: 'hela', lastName: 'haloula', email: 'h@gamil.com', tel: '25879635', address: 'eeeeeeeeeee' },
  // ];
  // let searchUser = {};
  // for (let i = 0; i < usersArray.length; i++) {
  //   if (usersArray[i].id == req.params.id) {
  //     searchUser = usersArray[i];
  //     break;

  //   }

  // }
  User.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          user: result
        });


      }
    }

  );




});
// delete plat by id
app.delete('/plats/:id', (req, res) => {
  console.log('here into delete', req.params.id);
  Plat.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('Resullt after delete', result);
      if (result) {
        res.status(200).json({
          message: 'Object deleted with success'
        });


      }
    }

  );


});
// add plat 
app.post('/plats', (req, res) => {
  console.log("here in post ", req.body);
  // save to DB
  const plat = new Plat({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  plat.save().then((result) => {
    console.log("Result after save", result);
    if (result) {
      res.status(200).json({
        message: 'Plat added succesfull'
      })
    }
  });

});
// update plat
app.put('/plats/:id', (req, res) => {
  // save to DB
  const newPlat = new Plat({
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  Plat.updateOne({ _id: req.params.id }, newPlat).then(
    (result) => {
      console.log("Result after update", result);
      if (result) {
        res.status(200).json({
          message: 'Plat update with succesfull'
        })
      }
    });

})

// delete chef by id
app.delete('/chefs/:id', (req, res) => {
  console.log('here into delete', req.params.id);
  Chef.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('Resullt after delete', result);
      if (result) {
        res.status(200).json({
          message: 'Object deleted with success'
        });


      }
    }

  );


});
// add chef
app.post('/chefs', (req, res) => {
  console.log("here in post ", req.body);
  // save to DB

  const chef = new Chef({
    name: req.body.name,
    speciality: req.body.speciality,
    note: req.body.note,
    entryDate: req.body.entryDate,
  });
  chef.save().then((result) => {
    console.log("Result after save", result);
    if (result) {
      res.status(200).json({
        message: 'Chef added succesfull'
      })
    }
  });

});
// update chef
app.put('/chefs/:id', (req, res) => {
  // console.log('here into edit chef Object', req.body);
  // console.log('here into edit chef ID', req.params.id);

  // save to DB
  const newChef = new Chef({
    _id: req.body._id,
    name: req.body.name,
    speciality: req.body.speciality,
    note: req.body.note
  });
  Chef.updateOne({ _id: req.params.id }, newChef).then(
    (result) => {
      console.log("Result after update", result);
      if (result) {
        res.status(200).json({
          message: 'Chef update with succesfull'
        })
      }
    });

})

// signup
app.post('/users/signup', (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then(
    (bcryptedPwd) => {
      console.log("here in signup ", req.body);
      // save to DB
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        pwd: bcryptedPwd,
        role: req.body.role,
      });
      user.save().then((result) => {
        console.log("Result after save", result);
        if (result) {
          res.status(200).json({
            message: 'user added succesfull '
          })
        }
      });
    }
  )
});
//login
app.post('/users/login', (req, res) => {
  console.log('here into login', req.body);
  User.findOne({ email: req.body.email }).then((resultEmail) => {
    console.log('here into result email', resultEmail);
    //if user does not excist :
    // send msg :0;
    if (!resultEmail) {
      res.status(200).json(
        {
          message: '0' //Email does not exist 
        }
      )


    }
    // if user exist by email 
    //comapre pwd from FE and Crypted pw
    return bcrypt.compare(req.body.pwd, resultEmail.pwd).
      then(
        (resultPwd) => {
          console.log('here result pwd', resultPwd);
          if (!resultPwd) {
            res.status(200).json(
              {
                message: '1' // PWD INCORRECT
              }
            );

          }
          // pwd and Email are correct 
          User.findOne({ email: req.body.email }).then((result) => {
            let userToSend = {
              id: result._id,
              fName: result.firstName,
              lName: result.lastName,
              role: result.role,
            }
            console.log('user to send', userToSend);
            res.status(200).json(
              {
                message: '2',
                connectedUser: userToSend
              }
            )
          })


        }
      )
  })
})
// delete user by id
app.delete('/users/:id', (req, res) => {
  console.log('here into delete', req.params.id);
  User.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('Resullt after delete', result);
      if (result) {
        res.status(200).json({
          message: 'Object deleted with success'
        });


      }
    }

  );

});
// update user
app.put('/users/:id', (req, res) => {
  // console.log('here into edit user Object', req.body);
  // console.log('here into edit user ID', req.params.id);
  // save to DB
  const newUser = new User({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    pwd: req.body.pwd,
    confirmPwd: req.body.confirmPwd

  });
  User.updateOne({ _id: req.params.id }, newUser).then(
    (result) => {
      console.log("Result after update", result);
      if (result) {
        res.status(200).json({
          message: 'User update with succesfull'
        })
      }
    });

})
// add order
app.post('/orders', (req, res) => {
  console.log('here into add Order', req.body);

  const order = new Order(
    {
      idPlat: req.body.idPlat,
      idUser: req.body.idUser,

    }
  )
  order.save().then((result) => {
    console.log('result after add', result);
    if (result) {
      res.status(200).json(
        {
          message: 'order added with success !'
        }
      )

    }
  })
})

// get user orders
app.get('/orders/:id', (req, res) => {

  console.log('here into get order by id ');
  console.log('idUser', req.params.id);
  Order.find({ idUser: req.params.id }).then((result) => {
    console.log('here result ', result);
    if (result) {
      ids = result.map((obj) => { return obj.idPlat });
      console.log('ids', ids);
      Plat.find({ _id: { $in: ids } }).then(
        (findedPlats) => {
          console.log('here findedPlats',findedPlats);
          res.status(200).json(
            {
              myOrders: findedPlats
            }
          );

        }
      )



    }
  })
})
// delete order by id
app.delete('/orders/:id', (req, res) => {
  console.log('here into delete', req.params.id);
  Order.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('Resullt after delete', result);
      if (result) {
        res.status(200).json({
          message: 'Object deleted with success'
        });


      }
    }

  );


});
app.post('/weather',(req,res)=>{
  console.log('here into weather',req.body);
  const city = req.body.city;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  apiKey + "&units=metric";
  axios
  .get(apiUrl)
  .then((response) => {
  console.log('Here response', response);
  const weather = response.data.main;
  console.log('Here weather main', weather);
  const result = {
  temp: weather.temp,
  pressure: weather.pressure,
  humidity:weather.humidity
  }
  res.status(200).json({
  result:result
  })
  });
});

//make app exportable
module.exports = app;
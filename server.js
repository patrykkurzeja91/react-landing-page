
const {createServer} = require('http');
const express = require('express');
// const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

// const nodemailer = require('nodemailer');

const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const dev = app.get('env') !== 'production';

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname,'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;
  console.log(`server started at port ${PORT}`);
});

// // body parser middleware
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

// app.post('/api/form', (req, res) => {
//   console.log(req.body)
// });


// // STTIC FOLDER
// // app.use('/public', express.static(path.join(__dirname,'public')));

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });


//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//       user: 'wniufvqs2ojdluzi@ethereal.email',
//       pass: 'XT9mxquDTVCSPJDDFb'
//     }
//   });
//   let mailOptions = {
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: 'wniufvqs2ojdluzi@ethereal.email', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<br>Hello world? twice?</br>' // html body
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// });

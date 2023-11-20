const indexRouting = async (req, res) => {
  const data = {
    title: 'Welcome',
    heading: 'Hello Calance!',
    description: 'Welcome to my simple application that collects Github info and writes it to a CSV.'
  };
  
  res.status(200);
  res.render('basicFrame', data);
}

module.exports = {
  indexRouting
}
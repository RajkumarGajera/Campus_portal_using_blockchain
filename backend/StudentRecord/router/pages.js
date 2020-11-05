exports.error = function(req,res) {
  res.render('error',{title: 'error teacher'});
};
exports.error1 = function(req,res) {
  res.render('error1',{title: 'error admin'});
};
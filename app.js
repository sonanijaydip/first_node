var mysql = require('mysql');

var con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jaydip'
})
con.connect();


// var isert_query = "INSERT INTO user1(user1_id, name, email) VALUES ('6','radhe','radhe@gmail.com')";
// var delete_query = "DELETE FROM user1 WHERE user1_id='2'";
// var update_query = "UPDATE user1 SET name='radhe' WHERE user1_id='4'";
var select_query = "SELECT user1.*, user2.* FROM user1 right JOIN user2 ON user1_id = user2_id";

// con.query(isert_query, function(error, result, field){
//     if (error) throw error;
//     console.log('data insert succesfully');
// });
// con.query(delete_query, function(error, results, field){
//     if (error) throw error;
//     console.log(results);
// });
// con.query(update_query, function(error, results, field){
//     if (error) throw error;
//     console.log(results);
// });
    con.query(select_query, function(error, results, field){
        if (error) throw error;
        console.log(results);

});

var user = {
    insert:'INSERT INTO user(id, username, userpwd, userpic) VALUES(0,?,?,?)',
    update:'update user set username=?, userpwd=?, userpic? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;
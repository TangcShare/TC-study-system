var test = {
    insert:'INSERT INTO test(id, testname, testdes, testcontent, testanswer) VALUES(0,?,?,?,?)',
    update:'update test set testname=?, testdes=?, testcontent=?, testanswer=? where id=?',
    delete: 'delete from test where id=?',
    queryById: 'select * from test where id=?',
    queryAll: 'select * from test'
};

module.exports = test;
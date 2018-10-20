var collect = {
    insert:'INSERT INTO collect(id, collecttitle, username) VALUES(0,?,?)',
    update:'update collect set collecttitle=?, username=? where id=?',
    delete: 'delete from collect where id=?',
    queryById: 'select * from collect where id=?',
    queryAll: 'select * from collect'
};

module.exports = collect;
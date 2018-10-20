var note = {
    insert:'INSERT INTO note(id, resourcetitle, username, content) VALUES(0,?,?,?)',
    update:'update note set collecttitle=?, username=? where id=?',
    delete: 'delete from note where id=?',
    queryById: 'select * from note where id=?',
    queryAll: 'select * from note'
};

module.exports = note;
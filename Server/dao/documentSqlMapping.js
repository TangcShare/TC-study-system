var document = {
    insert:'INSERT INTO document(id, img, title, des, content) VALUES(0,?,?,?,?)',
    update:'update document set img=?, title=?, des=?, content=? where id=?',
    delete: 'delete from document where id=?',
    queryById: 'select * from document where id=?',
    queryAll: 'select * from document'
};

module.exports = document;
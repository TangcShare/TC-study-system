var video = {
    insert:'INSERT INTO video(id, img, title, des, content) VALUES(0,?,?,?,?)',
    update:'update video set img=?, title=?, des=?, content=? where id=?',
    delete: 'delete from video where id=?',
    queryById: 'select * from video where id=?',
    queryAll: 'select * from video'
};

module.exports = video;
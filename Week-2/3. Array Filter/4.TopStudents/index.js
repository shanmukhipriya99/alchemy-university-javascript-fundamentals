function topStudents(array) {
    return array.filter((stu) => {
        return stu.grade >= 90
    })
}

module.exports = topStudents;
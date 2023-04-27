const students = await Student.aggregate([{
    $lookup: {
        from: "workSnapsTimeEntry",  // collection name in the same database
        localField: "_id",
        foreignField: "student",
        as: "time"
    }
}])
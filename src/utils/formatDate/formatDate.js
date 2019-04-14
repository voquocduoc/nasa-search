const formatDate = (valueInput) => {
    if (typeof valueInput !== "string") {
        return;
    }
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var newDate = new Date(valueInput);
    var date = newDate.getUTCDate();
    var year = newDate.getUTCFullYear();
    var month = months[newDate.getMonth()];
    return (date.toString().length == 1 ? ("0" + date) : date) + ", " + month + " " + year;
};

export default formatDate;
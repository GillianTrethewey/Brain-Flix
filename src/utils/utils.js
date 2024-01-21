// converts timestamps (ms since Epoch) to MM/DD/YYYY

const convertTimestamp = (timestamp) => {
    let newDate = new Date(timestamp);
    let month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    let day = newDate.getDate().toString().padStart(2, "0");
    let year = newDate.getFullYear().toString();
    let currDateDesc = `${month}/${day}/${year}`;

    return currDateDesc;
}

export default convertTimestamp;
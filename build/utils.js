"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //day, month, year
    const [day, month, year] = dateString.split(`/`).map((str) => +str);
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;

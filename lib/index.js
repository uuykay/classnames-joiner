"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classnames = void 0;
const classnames = (classnamesList) => {
    let classNames = "";
    for (let i = 0; i < classnamesList.length; i++) {
        if (classnamesList[i] === "" || typeof classnamesList[i] !== "string") {
            continue;
        }
        const className = classnamesList[i];
        if (classNames !== "") {
            classNames += " ";
        }
        if (className[0] === " " || className[className.length - 1] === " ") {
            classNames += className.trim();
        }
        else {
            classNames += className;
        }
    }
    return classNames;
};
exports.classnames = classnames;

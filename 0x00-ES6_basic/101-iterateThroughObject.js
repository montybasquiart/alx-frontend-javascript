<<<<<<< HEAD
export default function iterateThroughObject(reportWithIterator) {  
    const names = [];  
    for (const employee of reportWithIterator) {  
        names.push(employee);  
    }  
    return names.join(' | ');  
}
=======
export default function iterateThroughObject(reportWithIterator) {
    const returnString = [];
    for (const report of reportWithIterator) {
      returnString.push(report);
    }
    return returnString.join(' | ');
  }
>>>>>>> cf6eb95e5e61db81bd82434d0aa3e1e78e05d7db

export default function iterateThroughObject(reportWithIterator) {  
    const employeeNames = [];  
    for (const report of reportWithIterator) {  
        employeeNames.push(report);  
    }  
    return employeeNames.join(' | ');  
}

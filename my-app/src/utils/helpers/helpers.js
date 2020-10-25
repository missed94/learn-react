export const mappingArraysInObject = (items, objPropName, actionPropName, newObjProps) => {
    return items.map(item => {
        if (item[objPropName] === actionPropName) {
            return {...item, ...newObjProps}
        }
        return item
    })
}
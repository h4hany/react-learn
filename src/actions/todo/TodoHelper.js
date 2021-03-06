export const addTodo = (list, item) => list.concat(item);
export const generateId = (list) => (list.length > 0 ) ? (list[list.length - 1].id) + 1: 1;
export const findById = (list, id) => list.find(item => item.id === id);
export const toggleTodo = (todo) => ({...todo, isCompleted: !todo.isCompleted});
export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
};
export const removeTodo = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id);
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex + 1)
    ]
};
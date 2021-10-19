export const required = (value) => {
    return !value ? "Field is required" : false
}
export const maxLength = (length) => (value) => {
    return value.length > length ? `Max length is ${length} symbols` : false
}
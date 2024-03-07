export const dateFormatter = (str) => {
    return new Date(str).toISOString().slice(0, 19).replace("T", " ");
};

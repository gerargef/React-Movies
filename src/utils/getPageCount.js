export const getPagesArray = (totalPages) => {
    let result = [];
    for (let index = 0; index < totalPages; index++) {
      result.push(index+1);
    }
    return result
}
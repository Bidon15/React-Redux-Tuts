export const DELETE_ITEM = "DELETE_ITEM";

export function deleteItem(item, index) {
  return {
    type: DELETE_ITEM,
    data: {
      item,
      index
    }
  }
}

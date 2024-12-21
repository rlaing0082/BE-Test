const UUIDUtilsCommonJS = require("./UUIDUtilsCommonJS");
const items_data = require("./items_data");

let items = items_data.items;

function createItem(item) {
  item.id = UUIDUtilsCommonJS.generateUUID(4);
  items.push(item);

  const message = `Item id: ${item.id} successfully created.`;
  console.log(message);

  return {
    status: "ok",
    message: message,
  };
}

function readItems(id = "") {
  let message = `Number of items fetched:`;

  if (id === "") {
    console.log(`${message} ${items.length}.`);
    return items;
  } else {
    console.log(`${message} 1.`);
    return items.filter((item) => {
      return item.id === id;
    });
  }
}

function updateItem(itemParam) {
  let itemToUpdate = items.find((item) => {
    return item.id === itemParam.idUpdate;
  });

  const keys = Object.keys(itemToUpdate);
  delete keys.id;

  keys.forEach((key) => {
    if (itemToUpdate[key] != itemParam[`${key}Update`]) {
      itemToUpdate[key] = itemParam[`${key}Update`];
    }
  });

  const message = `Items id: ${itemToUpdate.id} successfully updated.`;
  console.log(message);

  return { status: "ok", message: message };
}

function deleteItem(id) {
  items = items.filter((item) => {
    return item.id !== id;
  });

  const message = `Item id: ${id} successfully deleted.`;
  console.log(message);

  return { status: "ok", message: message };
}

module.exports = { createItem, readItems, updateItem, deleteItem };

const Model = (() => {
  const STORAGE_KEY = 'mvc-crud-items';
  let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  let nextId = items.reduce((max, item) => Math.max(max, item.id), 0) + 1;

  const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

  const getAll = () => [...items];

  const create = ({ title, description, link }) => {
    const newItem = {
      id: nextId++,
      title,
      description,
      link,
      createdAt: new Date().toISOString(),
    };
    items.push(newItem);
    save();
    return newItem;
  };

  const update = (id, changes) => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...changes };
    save();
    return items[index];
  };

  const remove = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return false;
    items.splice(index, 1);
    save();
    return true;
  };

  const find = (id) => items.find((item) => item.id === id) || null;

  return {
    getAll,
    create,
    update,
    remove,
    find,
  };
})();

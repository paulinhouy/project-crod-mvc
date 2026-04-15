const Controller = ((model, view) => {
  const init = () => {
    view.renderList(model.getAll());
    view.clearForm();
    view.bindFormSubmit(handleSave);
    view.bindEdit(handleEdit);
    view.bindDelete(handleDelete);
  };

  const handleSave = (formData) => {
    const itemData = {
      title: formData.title,
      description: formData.description,
      link: formData.link,
    };

    if (formData.id) {
      model.update(Number(formData.id), itemData);
    } else {
      model.create(itemData);
    }

    view.renderList(model.getAll());
    view.clearForm();
  };

  const handleEdit = (id) => {
    const item = model.find(id);
    if (!item) return;
    view.fillForm(item);
  };

  const handleDelete = (id) => {
    const item = model.find(id);
    if (!item) return;
    const confirmed = window.confirm('Deseja realmente excluir este item?');
    if (!confirmed) return;
    model.remove(id);
    view.renderList(model.getAll());
    view.clearForm();
  };

  return {
    init,
  };
})(Model, View);

Controller.init();

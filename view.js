const View = (() => {
  const form = document.getElementById('form');
  const inputId = document.getElementById('id');
  const inputTitulo = document.getElementById('titulo');
  const textareaDescricao = document.getElementById('descricao');
  const inputLink = document.getElementById('link');
  const submitButton = document.getElementById('submitButton');
  const lista = document.getElementById('lista');

  const buildItemCard = (item) => {
    const linkHtml = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">Acessar</a>`
      : '<span class="sem-link">Sem link</span>';

    return `
      <article class="item-card">
        <div class="item-header">
          <h3>${item.title}</h3>
          <div class="item-actions">
            <button type="button" class="btn btn-edit" data-id="${item.id}">Editar</button>
            <button type="button" class="btn btn-delete" data-id="${item.id}">Excluir</button>
          </div>
        </div>
        <p>${item.description}</p>
        <div class="item-footer">${linkHtml}</div>
      </article>
    `;
  };

  const renderList = (items) => {
    if (!items.length) {
      lista.innerHTML = '<p class="empty">Nenhum item cadastrado. Adicione um item no formulário.</p>';
      return;
    }

    lista.innerHTML = items.map(buildItemCard).join('');
  };

  const getFormData = () => ({
    id: inputId.value.trim(),
    title: inputTitulo.value.trim(),
    description: textareaDescricao.value.trim(),
    link: inputLink.value.trim(),
  });

  const clearForm = () => {
    inputId.value = '';
    inputTitulo.value = '';
    textareaDescricao.value = '';
    inputLink.value = '';
    submitButton.textContent = 'Salvar';
  };

  const fillForm = (item) => {
    inputId.value = item.id;
    inputTitulo.value = item.title;
    textareaDescricao.value = item.description;
    inputLink.value = item.link || '';
    submitButton.textContent = 'Atualizar';
    inputTitulo.focus();
  };

  const bindFormSubmit = (handler) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      handler(getFormData());
    });
  };

  const bindEdit = (handler) => {
    lista.addEventListener('click', (event) => {
      if (!event.target.matches('.btn-edit')) return;
      const id = Number(event.target.dataset.id);
      handler(id);
    });
  };

  const bindDelete = (handler) => {
    lista.addEventListener('click', (event) => {
      if (!event.target.matches('.btn-delete')) return;
      const id = Number(event.target.dataset.id);
      handler(id);
    });
  };

  return {
    renderList,
    bindFormSubmit,
    bindEdit,
    bindDelete,
    fillForm,
    clearForm,
  };
})();

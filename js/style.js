function cadastrarCliente() {
    try {
      var nome = document.getElementById("nome");
      var id = document.getElementById("id");
      var tipoCliente = document.querySelector('input[name="tipoCliente"]:checked');
      var cep = document.getElementById("cep");
      var rua = document.getElementById("rua");
      var numero = document.getElementById("numero");
      var bairro = document.getElementById("bairro");
      var pontoReferencia = document.getElementById("pontoReferencia");
      var cidade = document.getElementById("cidade");
      var dataNascimento = document.getElementById("dataNascimento");
      var vendedor = document.getElementById("vendedor");
      var limiteCredito = document.getElementById("limiteCredito");

      // Validar os campos obrigatórios
      if (!nome.value || !id.value || !tipoCliente.value || !cep.value || !rua.value || !numero.value || !bairro.value || !pontoReferencia.value || !cidade.value || !dataNascimento.value || !vendedor.value || !limiteCredito.value) {
        throw "Todos os campos devem ser preenchidos";
      }

      // Validar o formato do ID
      if (!/^\d+$/.test(id.value)) {
        throw "ID inválido. Deve conter apenas números";
      }

      // Validar o formato do CEP
      if (!/^\d{5}-\d{3}$/.test(cep.value)) {
        throw "CEP inválido. Formato esperado: 12345-678";
      }

      // Validar o nome (apenas letras)
      if (!/^[a-zA-Z]+$/.test(nome.value)) {
        throw "Nome inválido. Deve conter apenas letras";
      }

      // Outras validações necessárias...

      if (!/^\d+$/.test(rua.value) && !/^[a-zA-Z]+$/.test(nome.value)) {
        throw "Número de rua inválido. Deve conter apenas números ou letras";
      }

      if (!/^\d+$/.test(numero.value)) {
        throw "Numero da casa inválido. Deve conter apenas números";
      }

      if (!/^[a-zA-Z]+$/.test(bairro.value)) {
        throw "Bairro inválido. Deve conter apenas letras";
      }

      if (!/^[a-zA-Z]+$/.test(cidade.value)) {
        throw "Cidade inválida. Deve conter apenas letras";
      }

      if (!/^\d+$/.test(limiteCredito.value)) {
        throw "Limite de crédito inválido. Deve conter apenas números";
      }

      if (!/^[a-zA-Z]+$/.test(vendedor.value)) {
        throw "Nome do vendedor inválido. Deve conter apenas letras";
      }

      // Armazenar nome e ID nos cookies
      document.cookie = "nome=" + nome.value;
      document.cookie = "id=" + id.value;
      document.cookie = "cep=" + cep.value;
      document.cookie = "rua=" + rua.value;
      document.cookie = "numero=" + numero.value;
      document.cookie = "bairro=" + bairro.value;
      document.cookie = "pontoReferencia=" + pontoReferencia.value;
      document.cookie = "cidade=" + cidade.value;
      document.cookie = "vendedor=" + vendedor.value;
      document.cookie = "limiteCredito=" + limiteCredito.value;

      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      var errorContainer = document.getElementById("errorContainer");
      errorContainer.innerHTML = error;
      errorContainer.style.display = "block";
    }
  }
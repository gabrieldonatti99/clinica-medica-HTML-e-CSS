const form = document.querySelector("form");
          const nomeCompleto = document.querySelector("input[name=nome_completo]");
          const senha = document.querySelector("input[name=senha]");
          const confirmarSenha = document.querySelector("input[name=confirmar_senha]");
          const email = document.querySelector("input[name=email]");
          const cpf = document.querySelector("input[name=cpf]");
          const telefone = document.querySelector("input[name=telefone]");
          
          const botao = document.querySelector(".botao1");
          
          
          botao.addEventListener("click", function(event) {
            event.preventDefault();
          
            if (nomeCompleto.value.trim() === "") {
              alert("Por favor, informe seu nome completo.");
              nomeCompleto.focus();
              return;
            }
          
            if (senha.value.trim() === "") {
              alert("Por favor, crie uma senha.");
              senha.focus();
              return;
            }
          
            if (senha.value !== confirmarSenha.value) {
              alert("As senhas não coincidem.");
              confirmarSenha.focus();
              return;
            }
          
            if (email.value.trim() === "") {
              alert("Por favor, informe seu e-mail.");
              email.focus();
              return;
            }
          
            if (cpf.value.trim() === "") {
              alert("Por favor, informe seu CPF.");
              cpf.focus();
              return;
            }
          
            if (telefone.value.trim() === "") {
              alert("Por favor, informe seu telefone.");
              telefone.focus();
              return;
            }
          
            alert("Cadastro criado com sucesso!");
            form.reset();
          });

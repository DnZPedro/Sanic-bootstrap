function enviar(){
    var nome = document.getElementById("nome");
         if (nome.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
            window.location.assign('/')
        }else{
            alert('Preencha todos os campos obrigatórios!')
        }
    }
    
    function redefinir(){
      var txt;
      if (confirm("Você tem certeza?")) {
        window.location.reload();
      } else {
        alert("Ok!");
      }
    }
    
    function cancelar()
    {
    alert("Cancelado!");
    window.location.assign('/')
    }
    
    function ValidaCPF(){   
    
        var ao_cpf=document.forms.formulario.ao_cpf.value; 
        var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;     
        if (cpfValido.test(ao_cpf) == false)    { 
             
           ao_cpf = ao_cpf.replace( /\D/g , ""); //Remove tudo o que não é dígito
                    
           if (ao_cpf.length==11){
              ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
              ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
              //de novo (para o segundo bloco de números)
              ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
                        
              var valorValido = document.getElementById("ao_cpf").value = ao_cpf;
            }else{
              console.log("CPF invalido");
            }
                
        }
        }
    
    function ValidaRG(){
    
        var ao_rg=document.forms.formulario2.ao_rg.value; 
        var rgValido = /^(([0-11]{2}.[0-11]{3}.[0-11]{3}-[0-11]{2}))$/;     
        if (rgValido.test(ao_rg) == false)    { 
             
           ao_rg = ao_rg.replace( /\D/g , ""); //Remove tudo o que não é dígito
                    
           if (ao_rg.length==9){
              ao_rg = ao_rg.replace( /(\d{2})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
              ao_rg = ao_rg.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
              //de novo (para o segundo bloco de números)
              ao_rg = ao_rg.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
                        
              var valorValido = document.getElementById("ao_rg").value = ao_rg;
            }else{
              console.log("RG inválido");
            }
                
        }
    }
    
    function FormataFixo(){
       
        var telfixo = document.forms.telefones.telfixo.value;
        var telValido = /^(([0-10]{1}.[0-10]{4}-[0-10]{4}))$/;
        if (telValido.test(telfixo) == false) {
    
            telfixo = telfixo.replace( /\D/g , "");
    
            if (telfixo.length==10){
                telfixo = telfixo.replace( /(\d{1})(\d)/ , "($1$2)");
                telfixo - telfixo.replace( /(\d{4})(\d)/ , "$1$2");
                telfixo = telfixo.replace( /(\d{4})(\d)/ , "$1-$2");
    
                var valorValido = document.getElementById("telfixo").value = telfixo;
            }else{
                console.log("Telefone Inválido!")
            }
        }
    
    }
    
    function FormataCelular(){
       
        var celular = document.forms.NumCelular.celular.value;
        var celValido = /^(([0-10]{1}.[0-11]{4}-[0-11]{5}))$/;
        if (celValido.test(celular) == false) {
    
            celular = celular.replace( /\D/g , "");
    
            if (celular.length==11){
                celular = celular.replace( /(\d{1})(\d)/ , "($1$2)");
                celular - celular.replace( /(\d{4})(\d)/ , "$1$2");
                celular = celular.replace( /(\d{5})(\d)/ , "$1-$2");
    
                var valorValido = document.getElementById("celular").value = celular;
            }else{
                console.log("Celular Inválido!")
            }
        }
    
    }
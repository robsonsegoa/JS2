var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){

	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		for(var i=0; i < pacientes.length; i++){

			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			var expressaoDigitada = new RegExp(this.value, "i");

			if( !expressaoDigitada.test(nome)){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}

			/*
			var comparavel = nome.substr(0, this.value.length);
			var comparavelMinusculo = comparavel.toLowerCase();
			var valorDigitadoMinusculo = this.value.toLowerCase();

			if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
			    paciente.classList.add("invisivel");
			} else{
			    paciente.classList.remove("invisivel");
			}*/

		}	
	}else{
		for(var i=0; i < pacientes.length; i++){

			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}
	

});
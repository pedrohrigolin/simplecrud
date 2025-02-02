document.addEventListener("DOMContentLoaded", () => {

    const modalOpen = [...document.querySelectorAll(".modalOpen")]

    modalOpen.map((el) => {
    
        el.addEventListener("click", () => {
            document.getElementById(el.getAttribute("modal")+"Modal").showModal()
        })
    
    })

    const modalClose = [...document.querySelectorAll(".modalClose")]

    modalClose.map((el) => {
    
        el.addEventListener("click", () => {

            el.parentElement.parentElement.close()

            if(el.parentElement.parentElement.getAttribute('id') === 'editModal'){

                el.parentElement.parentElement.querySelector('form input[name="clientID"]').remove()

            }

        })
    
    })

    const identify = Array.from( document.querySelectorAll('[name="identify"]') )

    identify.map((el) => {
        
        el.addEventListener("input", () => {
        
            el.value = el.value.replace(/\D/g,'')
    
            if(el.value.length <= 14){
    
                const identifyValue = el.value
                const forms = el.parentElement.parentElement.parentElement.parentElement

                if(el.value.length === 11){

                    if(validaCPF(el.value)){

                        forms.querySelector('[name="identify"]').style.border= ''
                        forms.querySelector('[name="identify"]').style.boxShadow = ''
        
                        if( forms.querySelector('[name="identify"]').parentElement.querySelector('.error') !== null ){
                            forms.querySelector('[name="identify"]').parentElement.querySelector('.error').remove()
                        }

                    }
                    else{

                        forms.querySelector('[name="identify"]').style.border= '2px solid #FF0000'
                        forms.querySelector('[name="identify"]').style.boxShadow = 'none'

                        var p = document.createElement('p')
                        p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                        p.setAttribute('class', 'error')
                        p.append(document.createTextNode('CPF ou CNPJ inválido!'))
                        forms.querySelector('[name="identify"]').parentElement.append(p)

                    }

                }
                else{

                    forms.querySelector('[name="identify"]').style.border= ''
                    forms.querySelector('[name="identify"]').style.boxShadow = ''
    
                    if( forms.querySelector('[name="identify"]').parentElement.querySelector('.error') !== null ){
                        forms.querySelector('[name="identify"]').parentElement.querySelector('.error').remove()
                    }

                }

                forms.reset()
                el.value = identifyValue
                
                const companyBox = [...forms.querySelectorAll('.companyBox')]
                const company = [...forms.querySelectorAll('.companyBox input')]
                const person = [...forms.querySelectorAll('.personBox input')]
                const personRequired = [...forms.querySelectorAll('.personBox .required')]
                const personOpcional = [...forms.querySelectorAll('.personBox .opcional')]
                
                if(el.value.length < 14){
    
    
                    companyBox.map((el) => {
    
                        el.style.display = 'none'
    
                    })
    
                    company.map((el) => {
    
                        el.disabled = true
                        el.required = false
    
                    })
    
                    person.map((el) => {
    
                        el.required = true
    
                    })
    
                    personRequired.map((el) => {
    
                        el.style.display = 'inline-block'
    
                    })
    
                    personOpcional.map((el) => {
    
                        el.style.display = 'none'
    
                    })
    
                    forms.querySelector('[name="nomeContato"]').required = false
                    forms.querySelector('[name="nome"]').disabled = false
                    forms.querySelector('[name="nascimento"]').disabled = false
                    forms.querySelector('[name="abertura"]').disabled = false
                    forms.querySelector('[name="emailCompany"]').disabled = false
                    forms.querySelector('[name="telCompany"]').disabled = false
                    forms.querySelector('[name="cep"]').disabled = false
                    forms.querySelector('[name="number"]').disabled = false
                    forms.querySelector('[name="complemento"]').disabled = false
                    forms.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = ''
                    forms.querySelector('[name="tipo"]').value = 'Pessoa'
    
                }
                else{
    
                    companyBox.map((el) => {
    
                        el.style.display = 'flex'
    
                    })
    
                    company.map((el) => {
    
                        el.disabled = false
                        el.required = true
    
                    })
    
                    person.map((el) => {
    
                        el.required = false
    
                    })
    
                    personRequired.map((el) => {
    
                        el.style.display = 'none'
    
                    })
    
                    personOpcional.map((el) => {
    
                        el.style.display = 'inline-block'
    
                    })
    
                    forms.querySelector('[name="nome"]').disabled = true
                    forms.querySelector('[name="nascimento"]').disabled = true
                    forms.querySelector('[name="abertura"]').disabled = true
                    forms.querySelector('[name="emailCompany"]').disabled = true
                    forms.querySelector('[name="telCompany"]').disabled = true
                    forms.querySelector('[name="cep"]').disabled = true
                    forms.querySelector('[name="number"]').disabled = true
                    forms.querySelector('[name="complemento"]').disabled = true
                    forms.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = 'none'
                    forms.querySelector('[name="tipo"]').value = 'Empresa'
    
                }
    
            }
    
            identifyMasc(el)
    
        })

    })

    const date = [...document.querySelectorAll(".date")]

    date.map((el) => {

        el.addEventListener("input", () => {

            el.value = el.value.replace(/\D/g,'')

            if(el.value.length >= 8 || el.value.length === 0){

                el.style.border= ''
                el.style.boxShadow = ''

                if( el.parentElement.querySelector('.error') !== null ){
                    el.parentElement.querySelector('.error').remove()
                }

            }
            else{

                el.style.border= '2px solid #FF0000'
                el.style.boxShadow = 'none'

                if( el.parentElement.querySelector('.error') === null ){

                    var p = document.createElement('p')
                    p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                    p.setAttribute('class', 'error')
                    p.append(document.createTextNode('Data incorreta!'))
                    el.parentElement.append(p)

                }

            }

            dateMasc(el)

        })

    })

    const email = Array.from( document.querySelectorAll('.email') )

    email.map((el) => {

        el.addEventListener('input', () => {

            if(Mailcheck.check(el.value) || el.value.length === 0){

                el.style.border= ''
                el.style.boxShadow = ''

                if( el.parentElement.querySelector('.error') !== null ){
                    el.parentElement.querySelector('.error').remove()
                }

            }
            else{

                el.style.border= '2px solid #FF0000'
                el.style.boxShadow = 'none'

                if( el.parentElement.querySelector('.error') === null ){

                    var p = document.createElement('p')
                    p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                    p.setAttribute('class', 'error')
                    p.append(document.createTextNode('Email inválido!'))
                    el.parentElement.append(p)

                }

            }
    
        })

    })

    const tel = [...document.querySelectorAll(".tel")]

    tel.map((el) => {
        
        el.addEventListener("input", () => {

            el.value = el.value.replace(/\D/g,'')

            if(el.value.length >= 10 || el.value.length === 0){

                el.style.border= ''
                el.style.boxShadow = ''

                if( el.parentElement.querySelector('.error') !== null ){
                    el.parentElement.querySelector('.error').remove()
                }

            }
            else{

                el.style.border= '2px solid #FF0000'
                el.style.boxShadow = 'none'

                if( el.parentElement.querySelector('.error') === null ){

                    var p = document.createElement('p')
                    p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                    p.setAttribute('class', 'error')
                    p.append(document.createTextNode('Telefone incorreto!'))
                    el.parentElement.append(p)

                }

            }

            telMasc(el)

        })

    })

    const cep = Array.from( document.querySelectorAll('[name="cep"]') )

    cep.map((el) => {

        el.addEventListener("input", () => {

            el.value = el.value.replace(/\D/g,'')

            if(el.value.length > 8){
                el.value = el.value.substring(0, 8)
            }
            
            const forms = el.parentElement.parentElement.parentElement.parentElement

            if(el.value.length >= 8 || el.value.length === 0){

                el.style.border= ''
                el.style.boxShadow = ''

                if( el.parentElement.querySelector('.error') !== null ){
                    el.parentElement.querySelector('.error').remove()
                }

            }
            else{

                el.style.border= '2px solid #FF0000'
                el.style.boxShadow = 'none'

                if( el.parentElement.querySelector('.error') === null ){

                    var p = document.createElement('p')
                    p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                    p.setAttribute('class', 'error')
                    p.append(document.createTextNode('CEP inválido!'))
                    el.parentElement.append(p)

                }

            }
            
            if(el.value.length === 8){
                getCep(el.value, forms)
            }
            else if(el.value.length < 8){
                forms.querySelector('[name="estado"]').value = ""
                forms.querySelector('[name="city"]').value = ""
                forms.querySelector('[name="bairro"]').value = ""
                forms.querySelector('[name="rua"]').value = ""
            }
    
            cepMasc(el)
    
        })

    })

    const number = Array.from( document.querySelectorAll('[name="number"]') )

    number.map((el) => {

        el.addEventListener("input", () => {

            el.value = el.value.replace(/\D/g,'')
    
        })

    })

    const forms = [...document.querySelectorAll('.modalForms form')]

    forms.map((form) => {

        form.addEventListener('submit', (event) => {

            event.preventDefault()

            const inputs = [...form.querySelectorAll("input")]
            const inputsDisabled = [...form.querySelectorAll("input[disabled")]
        
            inputs.map((el) => {
                el.disabled = false
            })

            const formData = new FormData(form)
            
            inputsDisabled.map((el) => {
                el.disabled = true
            })
           
            if(form.getAttribute('id') === 'cadastrar'){

                if( changeBD("create", formData) ){

                    form.reset()
                    form.parentElement.parentElement.close()

                    const companyBox = [...form.querySelectorAll('.companyBox')]
                    const company = [...form.querySelectorAll('.companyBox input')]
                    const person = [...form.querySelectorAll('.personBox input')]
                    const personRequired = [...form.querySelectorAll('.personBox .required')]
                    const personOpcional = [...form.querySelectorAll('.personBox .opcional')]
                    
                    companyBox.map((el) => {

                        el.style.display = 'none'

                    })

                    company.map((el) => {

                        el.disabled = true
                        el.required = false

                    })

                    person.map((el) => {

                        el.required = true

                    })

                    personRequired.map((el) => {

                        el.style.display = 'inline-block'

                    })

                    personOpcional.map((el) => {

                        el.style.display = 'none'

                    })

                    form.querySelector('[name="nomeContato"]').required = false
                    form.querySelector('[name="nome"]').disabled = false
                    form.querySelector('[name="nascimento"]').disabled = false
                    form.querySelector('[name="abertura"]').disabled = false
                    form.querySelector('[name="emailCompany"]').disabled = false
                    form.querySelector('[name="telCompany"]').disabled = false
                    form.querySelector('[name="cep"]').disabled = false
                    form.querySelector('[name="number"]').disabled = false
                    form.querySelector('[name="complemento"]').disabled = false
                    form.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = ''
                    form.querySelector('[name="tipo"]').value = 'Pessoa'

                    swal({
                        title: "Sucesso",
                        text: "Cliente cadastrado com sucesso!",
                        icon: "success",
                        timer: 3000,
                    }); 

                }
                else{

                    swal({
                        title: "Erro",
                        text: "Erro ao cadastrar cliente, tente novamente!",
                        icon: "error",
                        timer: 3000,
                    });

                }

            }
            else{
                
                if( changeBD("edit", formData) ){

                    form.reset()
                    form.parentElement.parentElement.close()
                    form.querySelector('input[name="clientID"]').remove()

                    const companyBox = [...form.querySelectorAll('.companyBox')]
                    const company = [...form.querySelectorAll('.companyBox input')]
                    const person = [...form.querySelectorAll('.personBox input')]
                    const personRequired = [...form.querySelectorAll('.personBox .required')]
                    const personOpcional = [...form.querySelectorAll('.personBox .opcional')]
                    
                    companyBox.map((el) => {

                        el.style.display = 'none'

                    })

                    company.map((el) => {

                        el.disabled = true
                        el.required = false

                    })

                    person.map((el) => {

                        el.required = true

                    })

                    personRequired.map((el) => {

                        el.style.display = 'inline-block'

                    })

                    personOpcional.map((el) => {

                        el.style.display = 'none'

                    })

                    form.querySelector('[name="nomeContato"]').required = false
                    form.querySelector('[name="nome"]').disabled = false
                    form.querySelector('[name="nascimento"]').disabled = false
                    form.querySelector('[name="abertura"]').disabled = false
                    form.querySelector('[name="emailCompany"]').disabled = false
                    form.querySelector('[name="telCompany"]').disabled = false
                    form.querySelector('[name="cep"]').disabled = false
                    form.querySelector('[name="number"]').disabled = false
                    form.querySelector('[name="complemento"]').disabled = false
                    form.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = ''
                    form.querySelector('[name="tipo"]').value = 'Pessoa'

                    swal({
                        title: "Sucesso",
                        text: "Cliente editado com sucesso!",
                        icon: "success",
                        timer: 3000,
                    }); 

                }
                else{

                    swal({
                        title: "Erro",
                        text: "Erro ao editar cliente, tente novamente!",
                        icon: "error",
                        timer: 3000,
                    });

                }                
                
            }

        })

    })

    getBD()

})

window.addEventListener('resize', () => {

    if( document.querySelector('.tableBody') !== null ){
        getH()
    }

})

function identifyMasc(el){

    if(el.value.length <= 11){

        el.value = el.value.replace(/(\d{3})(\d)/,"$1.$2")
        el.value = el.value.replace(/(\d{3})(\d)/,"$1.$2") 
        el.value = el.value.replace(/(\d{3})(\d)/,"$1-$2")

    }
    else if(el.value.length <= 14){

        if(el.value.length === 14){
            getCNPJ(el.value, el)
        }

        el.value = el.value.replace(/(\d{2})(\d)/,"$1.$2")
        el.value = el.value.replace(/(\d{3})(\d)/,"$1.$2") 
        el.value = el.value.replace(/(\d{3})(\d)/,"$1/$2")
        el.value = el.value.replace(/(\d{4})(\d)/,"$1-$2")

    }
    else{

        el.value = el.value.substring(0, 14)

        el.value = el.value.replace(/(\d{2})(\d)/,"$1.$2")
        el.value = el.value.replace(/(\d{3})(\d)/,"$1.$2") 
        el.value = el.value.replace(/(\d{3})(\d)/,"$1/$2")
        el.value = el.value.replace(/(\d{4})(\d)/,"$1-$2")

    }

}

function dateMasc(el){

    if(el.value.length <= 8){

        el.value = el.value.replace(/(\d{2})(\d)/,"$1/$2")
        el.value = el.value.replace(/(\d)(\d{4})$/,"$1/$2")

    }
    else{

        el.value = el.value.substring(0, 8)
        el.value = el.value.replace(/(\d{2})(\d)/,"$1/$2")
        el.value = el.value.replace(/(\d)(\d{4})$/,"$1/$2")

    }

}

function telMasc(el){

    if(el.value.length <= 11){

        el.value = el.value.replace(/(\d{2})(\d)/,"($1) $2")
        el.value = el.value.replace(/(\d)(\d{4})$/,"$1-$2")

    }
    else{

        el.value = el.value.substring(0, 11)
        el.value = el.value.replace(/(\d{2})(\d)/,"($1) $2")
        el.value = el.value.replace(/(\d)(\d{4})$/,"$1-$2")

    }

}

function cepMasc(el){

    if(el.value.length <= 8){
        el.value = el.value.replace(/(\d{5})(\d)/,"$1-$2")
    }
    else{
        el.value = el.value.substring(0, 8)
        el.value = el.value.replace(/(\d{5})(\d)/,"$1-$2")
    }

}

function validaCPF(cpf) {

    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
  
    for (i=1; i<=9; i++){
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    }
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0
    }
  
    if (Resto != parseInt(strCPF.substring(9, 10)) ){
      return false
    }
  
    Soma = 0
  
    for (i = 1; i <= 10; i++){
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
    }
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0
    }
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) ){
      return false
    }
  
    return true

  }

function getCNPJ(cnpj, el){
    
    const forms = el.parentElement.parentElement.parentElement.parentElement

    const url = "https://open.cnpja.com/office/" + cnpj

    const promise = fetch(url)

    promise.then((response) => {
        
        if(response.ok){
            return response.json()
        }
        else{
            return false
        }

    }).then((data) => {
        
        if(data){

            forms.querySelector('[name="identify"]').style.border = ''
            forms.querySelector('[name="identify"]').style.boxShadow = ''

            if( forms.querySelector('[name="identify"]').parentElement.querySelector('.error') !== null ){
                forms.querySelector('[name="identify"]').parentElement.querySelector('.error').remove()
            }

            if(data.hasOwnProperty('address')){

                forms.querySelector('[name="cep"]').value = data.address.zip
                cepMasc(forms.querySelector('[name="cep"]'))

                forms.querySelector('[name="number"]').value = data.address.number
                forms.querySelector('[name="complemento"]').value = data.address.details

                getCep(data.address.zip, forms)

            }

            if(data.hasOwnProperty('company')){
                forms.querySelector('[name="nome"]').value = data.company.name           
            }

            if(data.hasOwnProperty('emails')){
                forms.querySelector('[name="emailCompany"]').value = data.emails[0].address
            }

            if(data.hasOwnProperty('founded')){
                forms.querySelector('[name="abertura"]').value = data.founded.substring(8, 10) + data.founded.substring(5, 7) + data.founded.substring(0, 4)
                dateMasc(forms.querySelector('[name="abertura"]'))
            }

            if(data.hasOwnProperty('phones')){
                forms.querySelector('[name="telCompany"]').value = data.phones[0].area + data.phones[0].number
                telMasc(forms.querySelector('[name="telCompany"]'))
            }

        }
        else{
            
            forms.querySelector('[name="identify"]').style.border = '2px solid #FF0000'
            forms.querySelector('[name="identify"]').style.boxShadow = 'none'

            var p = document.createElement('p')
            p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
            p.setAttribute('class', 'error')
            p.append(document.createTextNode('CPF ou CNPJ inválido!'))
            forms.querySelector('[name="identify"]').parentElement.append(p)

        }

    })

}

function getCep(cep, forms){

    const url = "https://viacep.com.br/ws/"+cep+"/json/"

    const promise = fetch(url)

    promise.then((response) => {

        return response.json()

    }).then((data) => {
        
        if(data.erro === undefined){

            forms.querySelector('[name="cep"]').style.border = ''
            forms.querySelector('[name="cep"]').style.boxShadow = ''

            if( forms.querySelector('[name="cep"]').parentElement.querySelector('.error') !== null ){
                forms.querySelector('[name="cep"]').parentElement.querySelector('.error').remove()
            }

            forms.querySelector('[name="estado"]').value = data.estado
            forms.querySelector('[name="city"]').value = data.localidade
            forms.querySelector('[name="bairro"]').value = data.bairro
            forms.querySelector('[name="rua"]').value = data.logradouro

        }
        else{

            forms.querySelector('[name="cep"]').style.border = '2px solid #FF0000'
            forms.querySelector('[name="cep"]').style.boxShadow = 'none'

            if( forms.querySelector('[name="cep"]').parentElement.querySelector('.error') === null ){

                var p = document.createElement('p')
                p.setAttribute('style', 'font-size: 12px; font-weight: 600; color: #FF0000; margin-top: 2px;')
                p.setAttribute('class', 'error')
                p.append(document.createTextNode('CEP inválido!'))
                forms.querySelector('[name="cep"]').parentElement.append(p)

            }

        }

    })

}

function getH(){

    const moreItems = Array.from( document.querySelectorAll('.moreItems') )

    moreItems.map((el) => {

        const itemContent = Array.from( el.querySelectorAll('.itemContent') )

        var height = 0

        itemContent.map((item) => {

            height += item.getBoundingClientRect().height

        })

        el.setAttribute('style', 'height: ' + height + 'px;')

    })

}

function getBD(){

    if(localStorage.getItem('crudSimplesBD')){
        constructTable( JSON.parse(localStorage.getItem('crudSimplesBD')) )
    }
    else{ 

        const url = "./Banco de Dados/database.json"

        const promise = fetch(url)

        promise.then((response) => {
            
            return response.json()
            
        }).then((data) => {
            
            localStorage.setItem('crudSimplesBD', JSON.stringify(data))

            constructTable( JSON.parse(localStorage.getItem('crudSimplesBD')) )

        })
        
    }

}

function changeBD(operation, data){

    var bd = JSON.parse(localStorage.getItem('crudSimplesBD'))

    switch(operation){

        case 'delete':

            delete bd.clientes[data]

            localStorage.setItem('crudSimplesBD', JSON.stringify(bd))
            
            if( JSON.parse(localStorage.getItem('crudSimplesBD')).clientes[data] === undefined){
                getBD()
                return true
            }
            else{
                return false
            }

            break;

        case 'create':

            const ID = bd.clientes.lastID + 1
        
            const date = new Date()
        
            const day = (date.getDate() + 1) < 10 ? "0" + date.getDate() : date.getDate()
        
            const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
        
            const dados = Array.from(data.values())
            
            const object = {
                "id" : ID,
                "tipo": dados[0],
                "identidade": dados[1],
                "nome": dados[2],
                "nomeContato": dados[3],
                "nascimento": dados[4],
                "abertura": dados[5],
                "emailEmpresa": dados[6],
                "emailPessoal": dados[7],
                "telEmpresa": dados[8],
                "telPessoal": dados[9],
                "endereço": {
                    "cep": dados[10],
                    "estado": dados[11],
                    "cidade": dados[12],
                    "bairro": dados[13],
                    "rua": dados[14],
                    "numero": dados[15],
                    "complemento": dados[16]
                },
                "clienteDesde": day + "/" + month + "/" + date.getFullYear()
            }
            
            bd.clientes[ID] = object
            bd.clientes.lastID = ID
        
            localStorage.setItem('crudSimplesBD', JSON.stringify(bd))
        
            if( JSON.parse(localStorage.getItem('crudSimplesBD')).clientes[ID] !== undefined){
                getBD()
                return true
            }
            else{
                return false
            } 

            break;

        case 'edit':

            const editDados = Array.from(data.values())
            
            const editID = editDados[17]
            
            const editObject = {
                "id" : parseInt(editID),
                "tipo": editDados[0],
                "identidade": editDados[1],
                "nome": editDados[2],
                "nomeContato": editDados[3],
                "nascimento": editDados[4],
                "abertura": editDados[5],
                "emailEmpresa": editDados[6],
                "emailPessoal": editDados[7],
                "telEmpresa": editDados[8],
                "telPessoal": editDados[9],
                "endereço": {
                    "cep": editDados[10],
                    "estado": editDados[11],
                    "cidade": editDados[12],
                    "bairro": editDados[13],
                    "rua": editDados[14],
                    "numero": editDados[15],
                    "complemento": editDados[16]
                },
                "clienteDesde": bd.clientes[editID].clienteDesde
            }

            var objectBefore = Array.from( Object.entries( bd.clientes[editID] ) ).flat() 
            objectBefore[23] = Array.from( Object.entries( objectBefore[23] ) ).flat()
            objectBefore = objectBefore.flat()

            bd.clientes[editID] = editObject

            var objectAfter = Array.from( Object.entries( bd.clientes[editID] ) ).flat() 
            objectAfter[23] = Array.from( Object.entries( objectAfter[23] ) ).flat()
            objectAfter = objectAfter.flat()

            if(objectBefore.length === objectAfter.length){

                const length = objectBefore.length
                var changeIndex = new Array()
                var changeValue = new Array()
                var hasChange = false

                for(i=0; i<length; i++){

                    if(objectBefore[i] !== objectAfter[i]){
                        changeIndex.push(i)
                        changeValue.push(objectAfter[i])
                        hasChange = true
                    }

                }

            }
            else{
                return false
            }

            if(hasChange){

                localStorage.setItem('crudSimplesBD', JSON.stringify(bd))

                var change = Array.from( Object.entries( JSON.parse(localStorage.getItem('crudSimplesBD')).clientes[editID] ) ).flat()
                change[23] = Array.from( Object.entries( change[23] ) ).flat()
                change = change.flat()

                var isCorrect = true

                for(i=0; i<changeIndex.length; i++){

                    if(change[changeIndex[i]] !== changeValue[i]){
                        isCorrect = false
                        return false
                    }

                }

                if(isCorrect){
                    getBD()
                    return true
                }
                else{
                    return false
                }

            }
            else{
                return true
            }

            break;

    }

}

function constructTable(data){

    const bd = data

    const keys = Object.keys(bd.clientes).filter((el) => el !== "lastID")
    
    const tableBody = document.createElement("div")
    tableBody.setAttribute('class', 'tableBody')

    keys.map((key) => {

        var bodyContent = document.createElement("div")
        bodyContent.setAttribute('class', 'bodyContent')
        var itemContent = document.createElement("div")
        itemContent.setAttribute('class', 'itemContent')

        var itemBody = document.createElement("div")
        itemBody.setAttribute('class', 'itemBody nome')
        var p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].nome))
        itemBody.append(p)
        itemContent.append(itemBody)

        itemBody = document.createElement("div")
        itemBody.setAttribute('class', 'itemBody tipo')
        p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].tipo))
        itemBody.append(p)
        itemContent.append(itemBody)

        itemBody = document.createElement("div")
        itemBody.setAttribute('class', 'itemBody documento')
        p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].identidade))
        itemBody.append(p)
        itemContent.append(itemBody)

        itemBody = document.createElement("div")
        itemBody.setAttribute('class', 'itemBody actions')
        var button = document.createElement("button")
        button.setAttribute('class', 'editButton modalOpen')
        button.setAttribute('modal', 'edit')
        button.setAttribute('type', 'button')
        button.setAttribute('toggle', 'Editar')

        button.addEventListener('click', () => {

            const editModal = document.getElementById("editModal")
            const editForm = editModal.querySelector('form')

            editForm.reset()

            editForm.querySelector('#tipoEdit').value = bd.clientes[key].tipo
            editForm.querySelector('#identifyEdit').value = bd.clientes[key].identidade
            editForm.querySelector('#nomeEdit').value = bd.clientes[key].nome
            editForm.querySelector('#nomeContatoEdit').value = bd.clientes[key].nomeContato
            editForm.querySelector('#nascimentoEdit').value = bd.clientes[key].nascimento
            editForm.querySelector('#aberturaEdit').value = bd.clientes[key].abertura
            editForm.querySelector('#emailCompanyEdit').value = bd.clientes[key].emailEmpresa
            editForm.querySelector('#emailPersonEdit').value = bd.clientes[key].emailPessoal
            editForm.querySelector('#telCompanyEdit').value = bd.clientes[key].telEmpresa
            editForm.querySelector('#telPersonEdit').value = bd.clientes[key].telPessoal
            editForm.querySelector('#cepEdit').value = bd.clientes[key].endereço.cep
            editForm.querySelector('#estadoEdit').value = bd.clientes[key].endereço.estado
            editForm.querySelector('#cityEdit').value = bd.clientes[key].endereço.cidade
            editForm.querySelector('#bairroEdit').value = bd.clientes[key].endereço.bairro
            editForm.querySelector('#ruaEdit').value = bd.clientes[key].endereço.rua
            editForm.querySelector('#numberEdit').value = bd.clientes[key].endereço.numero
            editForm.querySelector('#complementoEdit').value = bd.clientes[key].endereço.complemento

            const companyBox = [...editForm.querySelectorAll('.companyBox')]
            const company = [...editForm.querySelectorAll('.companyBox input')]
            const person = [...editForm.querySelectorAll('.personBox input')]
            const personRequired = [...editForm.querySelectorAll('.personBox .required')]
            const personOpcional = [...editForm.querySelectorAll('.personBox .opcional')]
            
            const identifyValue  = editForm.querySelector('#identifyEdit').value.replace(/\D/g,'')

            if(identifyValue.length < 14){


                companyBox.map((el) => {

                    el.style.display = 'none'

                })

                company.map((el) => {

                    el.disabled = true
                    el.required = false

                })

                person.map((el) => {

                    el.required = true

                })

                personRequired.map((el) => {

                    el.style.display = 'inline-block'

                })

                personOpcional.map((el) => {

                    el.style.display = 'none'

                })

                editForm.querySelector('[name="nomeContato"]').required = false
                editForm.querySelector('[name="nome"]').disabled = false
                editForm.querySelector('[name="nascimento"]').disabled = false
                editForm.querySelector('[name="abertura"]').disabled = false
                editForm.querySelector('[name="emailCompany"]').disabled = false
                editForm.querySelector('[name="telCompany"]').disabled = false
                editForm.querySelector('[name="cep"]').disabled = false
                editForm.querySelector('[name="number"]').disabled = false
                editForm.querySelector('[name="complemento"]').disabled = false
                editForm.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = ''
                editForm.querySelector('[name="tipo"]').value = 'Pessoa'

            }
            else{

                companyBox.map((el) => {

                    el.style.display = 'flex'

                })

                company.map((el) => {

                    el.disabled = false
                    el.required = true

                })

                person.map((el) => {

                    el.required = false

                })

                personRequired.map((el) => {

                    el.style.display = 'none'

                })

                personOpcional.map((el) => {

                    el.style.display = 'inline-block'

                })

                editForm.querySelector('[name="nome"]').disabled = true
                editForm.querySelector('[name="nascimento"]').disabled = true
                editForm.querySelector('[name="abertura"]').disabled = true
                editForm.querySelector('[name="emailCompany"]').disabled = true
                editForm.querySelector('[name="telCompany"]').disabled = true
                editForm.querySelector('[name="cep"]').disabled = true
                editForm.querySelector('[name="number"]').disabled = true
                editForm.querySelector('[name="complemento"]').disabled = true
                editForm.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = 'none'
                editForm.querySelector('[name="tipo"]').value = 'Empresa'

            }

            var inputHidden = document.createElement('input')
            inputHidden.setAttribute('type', 'hidden')
            inputHidden.setAttribute('name', 'clientID')
            inputHidden.setAttribute('id', 'clientID')
            inputHidden.setAttribute('value', key)
            editForm.append(inputHidden)

            editModal.showModal()

        })

        const xmlns = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(xmlns, "svg")
        svg.setAttributeNS(null, 'viewBox', '0 0 512 512')
        svg.setAttribute('class', 'svgAction')
        var path = document.createElementNS(xmlns, "path")
        path.setAttributeNS(null, 'd', 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z')
        svg.append(path)
        button.append(svg)
        itemBody.append(button)
        button = document.createElement("button")
        button.setAttribute('class', 'deleteButton')
        button.setAttribute('type', 'button')
        button.setAttribute('toggle', 'Excluir')

        button.addEventListener('click', () => {

            swal({
                title: "Tem certeza?",
                text: "Depois de deletado não será mais possível recuperar!",
                icon: "warning",
                buttons: {
                    cancel: {
                        text: "Cancelar",
                        value: false,
                        visible: true,
                    },
                    confirm: {
                        text: "Deletar",
                        value: true,
                    },
                },
                dangerMode: true,
            })
            .then((response) => {
                
                if (response) {

                    if( changeBD('delete', key) ){

                        swal({
                            title: "Sucesso",
                            text: "Cliente deletado com sucesso!",
                            icon: "success",
                            timer: 3000,
                        }); 

                    }
                    else{

                        swal({
                            title: "Erro",
                            text: "Erro ao excluir cliente, tente novamente!",
                            icon: "error",
                            timer: 3000,
                        });

                    }

                } 

            });

        })

        svg = document.createElementNS(xmlns, "svg")
        svg.setAttributeNS(null, 'viewBox', '0 0 448 512')
        svg.setAttribute('class', 'svgAction')
        path = document.createElementNS(xmlns, "path")
        path.setAttributeNS(null, 'd', 'M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z')
        svg.append(path)
        button.append(svg)
        itemBody.append(button)
        itemContent.append(itemBody)

        bodyContent.append(itemContent)

        var moreItems = document.createElement("div")
        moreItems.setAttribute('class', 'moreItems inactive')

        itemContent = document.createElement("div")
        itemContent.setAttribute('class', 'itemContent tipoMobile')
        var ibHeader = document.createElement("div")
        ibHeader.setAttribute('class', 'itemBody header')
        p = document.createElement("p")
        p.append(document.createTextNode("Tipo"))
        ibHeader.append(p)
        itemContent.append(ibHeader)
        var ibBody = document.createElement('div')
        ibBody.setAttribute('class', 'itemBody body')
        p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].tipo))
        ibBody.append(p)
        itemContent.append(ibBody)
        moreItems.append(itemContent)

        itemContent = document.createElement("div")
        itemContent.setAttribute('class', 'itemContent documentoMobile')
        ibHeader = document.createElement("div")
        ibHeader.setAttribute('class', 'itemBody header')
        p = document.createElement("p")
        p.append(document.createTextNode("Doumento"))
        ibHeader.append(p)
        itemContent.append(ibHeader)
        ibBody = document.createElement('div')
        ibBody.setAttribute('class', 'itemBody body')
        p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].identidade))
        ibBody.append(p)
        itemContent.append(ibBody)
        moreItems.append(itemContent)

        if(bd.clientes[key].tipo === "Pessoa"){

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Data de nascimento"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].nascimento))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Email pessoal"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].emailPessoal))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Telefone pessoal"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].telPessoal))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Endereço"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")

            const endereço = bd.clientes[key].endereço.rua + " " + bd.clientes[key].endereço.numero + " " + bd.clientes[key].endereço.complemento + ", " + bd.clientes[key].endereço.bairro + ", " + bd.clientes[key].endereço.cidade + ", " + bd.clientes[key].endereço.estado + ", " + bd.clientes[key].endereço.cep

            p.append(document.createTextNode(endereço))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

        }
        else{

            var itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            var ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Data de abertura"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            var ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].abertura))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Email da empresa"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].emailEmpresa))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Telefone da empresa"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")
            p.append(document.createTextNode(bd.clientes[key].telEmpresa))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

            if(bd.clientes[key].nomeContato !== ''){

                itemContent = document.createElement("div")
                itemContent.setAttribute('class', 'itemContent')
                ibHeader = document.createElement("div")
                ibHeader.setAttribute('class', 'itemBody header')
                p = document.createElement("p")
                p.append(document.createTextNode("Nome para contato"))
                ibHeader.append(p)
                itemContent.append(ibHeader)
                ibBody = document.createElement('div')
                ibBody.setAttribute('class', 'itemBody body')
                p = document.createElement("p")
                p.append(document.createTextNode(bd.clientes[key].nomeContato))
                ibBody.append(p)
                itemContent.append(ibBody)
                moreItems.append(itemContent)

            }

            if(bd.clientes[key].emailPessoal !== ''){

                itemContent = document.createElement("div")
                itemContent.setAttribute('class', 'itemContent')
                ibHeader = document.createElement("div")
                ibHeader.setAttribute('class', 'itemBody header')
                p = document.createElement("p")
                p.append(document.createTextNode("Email pessoal"))
                ibHeader.append(p)
                itemContent.append(ibHeader)
                ibBody = document.createElement('div')
                ibBody.setAttribute('class', 'itemBody body')
                p = document.createElement("p")
                p.append(document.createTextNode(bd.clientes[key].emailPessoal))
                ibBody.append(p)
                itemContent.append(ibBody)
                moreItems.append(itemContent)

            }

            if(bd.clientes[key].telPessoal !== ''){

                itemContent = document.createElement("div")
                itemContent.setAttribute('class', 'itemContent')
                ibHeader = document.createElement("div")
                ibHeader.setAttribute('class', 'itemBody header')
                p = document.createElement("p")
                p.append(document.createTextNode("Telefone pessoal"))
                ibHeader.append(p)
                itemContent.append(ibHeader)
                ibBody = document.createElement('div')
                ibBody.setAttribute('class', 'itemBody body')
                p = document.createElement("p")
                p.append(document.createTextNode(bd.clientes[key].telPessoal))
                ibBody.append(p)
                itemContent.append(ibBody)
                moreItems.append(itemContent)

            }

            itemContent = document.createElement("div")
            itemContent.setAttribute('class', 'itemContent')
            ibHeader = document.createElement("div")
            ibHeader.setAttribute('class', 'itemBody header')
            p = document.createElement("p")
            p.append(document.createTextNode("Endereço"))
            ibHeader.append(p)
            itemContent.append(ibHeader)
            ibBody = document.createElement('div')
            ibBody.setAttribute('class', 'itemBody body')
            p = document.createElement("p")

            const endereço = bd.clientes[key].endereço.rua + " " + bd.clientes[key].endereço.numero + " " + bd.clientes[key].endereço.complemento + ", " + bd.clientes[key].endereço.bairro + ", " + bd.clientes[key].endereço.cidade + ", " + bd.clientes[key].endereço.estado + ", " + bd.clientes[key].endereço.cep

            p.append(document.createTextNode(endereço))
            ibBody.append(p)
            itemContent.append(ibBody)
            moreItems.append(itemContent)

        }

        itemContent = document.createElement("div")
        itemContent.setAttribute('class', 'itemContent')
        ibHeader = document.createElement("div")
        ibHeader.setAttribute('class', 'itemBody header')
        p = document.createElement("p")
        p.append(document.createTextNode("Cliente desde"))
        ibHeader.append(p)
        itemContent.append(ibHeader)
        ibBody = document.createElement('div')
        ibBody.setAttribute('class', 'itemBody body')
        p = document.createElement("p")
        p.append(document.createTextNode(bd.clientes[key].clienteDesde))
        ibBody.append(p)
        itemContent.append(ibBody)
        moreItems.append(itemContent)

        itemContent = document.createElement("div")
        itemContent.setAttribute('class', 'itemContent actionsMobile')
        ibHeader = document.createElement("div")
        ibHeader.setAttribute('class', 'itemBody header')
        p = document.createElement("p")
        p.append(document.createTextNode("Ações"))
        ibHeader.append(p)
        itemContent.append(ibHeader)
        ibBody = document.createElement('div')
        ibBody.setAttribute('class', 'itemBody body')

        button = document.createElement("button")
        button.setAttribute('class', 'editButtonMobile modalOpen')
        button.setAttribute('modal', 'edit')
        button.setAttribute('type', 'button')

        button.addEventListener('click', () => {

            const editModal = document.getElementById("editModal")
            const editForm = editModal.querySelector('form')

            editForm.reset()

            editForm.querySelector('#tipoEdit').value = bd.clientes[key].tipo
            editForm.querySelector('#identifyEdit').value = bd.clientes[key].identidade
            editForm.querySelector('#nomeEdit').value = bd.clientes[key].nome
            editForm.querySelector('#nomeContatoEdit').value = bd.clientes[key].nomeContato
            editForm.querySelector('#nascimentoEdit').value = bd.clientes[key].nascimento
            editForm.querySelector('#aberturaEdit').value = bd.clientes[key].abertura
            editForm.querySelector('#emailCompanyEdit').value = bd.clientes[key].emailEmpresa
            editForm.querySelector('#emailPersonEdit').value = bd.clientes[key].emailPessoal
            editForm.querySelector('#telCompanyEdit').value = bd.clientes[key].telEmpresa
            editForm.querySelector('#telPersonEdit').value = bd.clientes[key].telPessoal
            editForm.querySelector('#cepEdit').value = bd.clientes[key].endereço.cep
            editForm.querySelector('#estadoEdit').value = bd.clientes[key].endereço.estado
            editForm.querySelector('#cityEdit').value = bd.clientes[key].endereço.cidade
            editForm.querySelector('#bairroEdit').value = bd.clientes[key].endereço.bairro
            editForm.querySelector('#ruaEdit').value = bd.clientes[key].endereço.rua
            editForm.querySelector('#numberEdit').value = bd.clientes[key].endereço.numero
            editForm.querySelector('#complementoEdit').value = bd.clientes[key].endereço.complemento

            const companyBox = [...editForm.querySelectorAll('.companyBox')]
            const company = [...editForm.querySelectorAll('.companyBox input')]
            const person = [...editForm.querySelectorAll('.personBox input')]
            const personRequired = [...editForm.querySelectorAll('.personBox .required')]
            const personOpcional = [...editForm.querySelectorAll('.personBox .opcional')]
            
            const identifyValue  = editForm.querySelector('#identifyEdit').value.replace(/\D/g,'')

            if(identifyValue.length < 14){


                companyBox.map((el) => {

                    el.style.display = 'none'

                })

                company.map((el) => {

                    el.disabled = true
                    el.required = false

                })

                person.map((el) => {

                    el.required = true

                })

                personRequired.map((el) => {

                    el.style.display = 'inline-block'

                })

                personOpcional.map((el) => {

                    el.style.display = 'none'

                })

                editForm.querySelector('[name="nomeContato"]').required = false
                editForm.querySelector('[name="nome"]').disabled = false
                editForm.querySelector('[name="nascimento"]').disabled = false
                editForm.querySelector('[name="abertura"]').disabled = false
                editForm.querySelector('[name="emailCompany"]').disabled = false
                editForm.querySelector('[name="telCompany"]').disabled = false
                editForm.querySelector('[name="cep"]').disabled = false
                editForm.querySelector('[name="number"]').disabled = false
                editForm.querySelector('[name="complemento"]').disabled = false
                editForm.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = ''
                editForm.querySelector('[name="tipo"]').value = 'Pessoa'

            }
            else{

                companyBox.map((el) => {

                    el.style.display = 'flex'

                })

                company.map((el) => {

                    el.disabled = false
                    el.required = true

                })

                person.map((el) => {

                    el.required = false

                })

                personRequired.map((el) => {

                    el.style.display = 'none'

                })

                personOpcional.map((el) => {

                    el.style.display = 'inline-block'

                })

                editForm.querySelector('[name="nome"]').disabled = true
                editForm.querySelector('[name="nascimento"]').disabled = true
                editForm.querySelector('[name="abertura"]').disabled = true
                editForm.querySelector('[name="emailCompany"]').disabled = true
                editForm.querySelector('[name="telCompany"]').disabled = true
                editForm.querySelector('[name="cep"]').disabled = true
                editForm.querySelector('[name="number"]').disabled = true
                editForm.querySelector('[name="complemento"]').disabled = true
                editForm.querySelector('[name="nascimento"]').parentElement.parentElement.parentElement.style.display = 'none'
                editForm.querySelector('[name="tipo"]').value = 'Empresa'

            }

            var inputHidden = document.createElement('input')
            inputHidden.setAttribute('type', 'hidden')
            inputHidden.setAttribute('name', 'clientID')
            inputHidden.setAttribute('id', 'clientID')
            inputHidden.setAttribute('value', key)
            editForm.append(inputHidden)

            editModal.showModal()

        })

        svg = document.createElementNS(xmlns, "svg")
        svg.setAttributeNS(null, 'viewBox', '0 0 512 512')
        svg.setAttribute('class', 'svgAction')
        path = document.createElementNS(xmlns, "path")
        path.setAttributeNS(null, 'd', 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z')
        svg.append(path)
        p = document.createElement('p')
        p.append(document.createTextNode('Editar'))
        button.append(p)
        button.append(svg)
        ibBody.append(button)

        button = document.createElement("button")
        button.setAttribute('class', 'deleteButtonMobile')
        button.setAttribute('type', 'button')

        button.addEventListener('click', () => {

            swal({
                title: "Tem certeza?",
                text: "Depois de deletado não será mais possível recuperar!",
                icon: "warning",
                buttons: {
                    cancel: {
                        text: "Cancelar",
                        value: false,
                        visible: true,
                    },
                    confirm: {
                        text: "Deletar",
                        value: true,
                    },
                },
                dangerMode: true,
            })
            .then((response) => {
                
                if (response) {

                    if( changeBD('delete', key) ){

                        swal({
                            title: "Sucesso",
                            text: "Cliente deletado com sucesso!",
                            icon: "success",
                            timer: 3000,
                        }); 

                    }
                    else{

                        swal({
                            title: "Erro",
                            text: "Erro ao excluir cliente, tente novamente!",
                            icon: "error",
                            timer: 3000,
                        });

                    }

                } 

            });

        })

        svg = document.createElementNS(xmlns, "svg")
        svg.setAttributeNS(null, 'viewBox', '0 0 448 512')
        svg.setAttribute('class', 'svgAction')
        path = document.createElementNS(xmlns, "path")
        path.setAttributeNS(null, 'd', 'M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z')
        svg.append(path)
        p = document.createElement('p')
        p.append(document.createTextNode('Excluir'))
        button.append(p)
        button.append(svg)

        ibBody.append(button)
        itemContent.append(ibBody)
        moreItems.append(itemContent)

        var actionBox = document.createElement("div")
        actionBox.setAttribute('class', 'actionBox')
        button = document.createElement("button")
        button.setAttribute('class', 'moreButton')
        button.setAttribute('type', 'button')

        actionBox.addEventListener('click', () => {
            
            if(moreItems.classList.contains('active')){
                moreItems.classList.remove('active')
                moreItems.classList.add('inactive')
            }
            else{
                moreItems.classList.remove('inactive')
                moreItems.classList.add('active')
            }

        })

        svg = document.createElementNS(xmlns, "svg")
        svg.setAttributeNS(null, 'viewBox', '0 0 512 512')
        svg.setAttribute('class', 'svgMore')
        path = document.createElementNS(xmlns, "path")
        path.setAttributeNS(null, 'd', 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z')
        svg.append(path)
        button.append(svg)
        actionBox.append(button)
        
        bodyContent.append(moreItems)
        bodyContent.append(actionBox)
        tableBody.append(bodyContent)

    })

    if(document.querySelector('.tableBody') === null){
        document.querySelector('.table').append(tableBody)
    }
    else{
        document.querySelector('.tableBody').replaceWith(tableBody)
    }

    getH()

}
class Mailcheck{
     
    check(email, type = false) {

        if(type !== false){
        
            if(type === 1){
                
                const regex = RegExp('^[a-zA-Z0-9._%+-ç]+@[a-zA-Z0-9.-]+(.com|.com.br|.br)$')
                
                return regex.test(email)
            
            }
            else if(type === 2){
                
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@(gmail.com|outlook.com|outlook.com.br|hotmail.com|hotmail.com.br|live.com|live.com.br|yahoo.com|yahoo.com.br|terra.com|terra.com.br|icloud.com|estudante.ufscar.br|uol.com.br|myyahoo.com|myyahoo.com.br)$')
                
                return regex.test(email)
            
            }
            else if(Array.isArray(type)){
            
                let rstring = ''
                
                type.map((string, index) => {
                
                    if(index === type.length - 1){
                        rstring = rstring+string.replace(new RegExp(/([^a-zA-Z.])/g), '')
                    }
                    else{
                        rstring = rstring+string.replace(new RegExp(/([^a-zA-Z.])/g), '')+'|'
                    }
                    
                })
            
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@('+rstring+')$')
            
                return regex.test(email)
            
            }
            else if(typeof type === 'string'){
            
                type = type.replace(',', '|')
                type = type.replace(new RegExp(/([^a-zA-Z.|])/g), '')
                
                const regex = new RegExp('^[a-zA-Z0-9._%+-çÇ]+@('+type+')$')
                
                return regex.test(email)
            
            }
            else{
                return false;
            }
        
        }
        else{
            
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
                
                return regex.test(email)
            
        }
    
    }

    //Função estática, util para usar a classe Mailcheck com a função check chamando apenas por Mailcheck.check()
    //sem a necessidade de inicializar antes com new Mailcheck().
    static check(email, type = false) {

        if(type !== false){
        
            if(type === 1){
                
                const regex = RegExp('^[a-zA-Z0-9._%+-ç]+@[a-zA-Z0-9.-]+(.com|.com.br|.br)$')
                
                return regex.test(email)
            
            }
            else if(type === 2){
                
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@(gmail.com|outlook.com|outlook.com.br|hotmail.com|hotmail.com.br|live.com|live.com.br|yahoo.com|yahoo.com.br|terra.com|terra.com.br|icloud.com|estudante.ufscar.br|uol.com.br|myyahoo.com|myyahoo.com.br)$')
                
                return regex.test(email)
            
            }
            else if(Array.isArray(type)){
            
                let rstring = ''
                
                type.map((string, index) => {
                
                    if(index === type.length - 1){
                        rstring = rstring+string.replace(new RegExp(/([^a-zA-Z.])/g), '')
                    }
                    else{
                        rstring = rstring+string.replace(new RegExp(/([^a-zA-Z.])/g), '')+'|'
                    }
                    
                })
            
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@('+rstring+')$')
            
                return regex.test(email)
            
            }
            else if(typeof type === 'string'){
            
                type = type.replace(',', '|')
                type = type.replace(new RegExp(/([^a-zA-Z.|])/g), '')
                
                const regex = new RegExp('^[a-zA-Z0-9._%+-çÇ]+@('+type+')$')
                
                return regex.test(email)
            
            }
            else{
                return false;
            }
        
        }
        else{
            
                const regex = RegExp('^[a-zA-Z0-9._%+-çÇ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
                
                return regex.test(email)
            
        }
    
    }    
    
}
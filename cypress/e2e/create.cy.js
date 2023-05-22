


var faker = require('faker');
describe ('Tela Login',function(){
  beforeEach(() => {
      cy.visit ('https://venia.magento.com/')
      
        
      
  })



  /it('Primeiro Caso de Teste',function (){

    // let emailFaker = faker.Internet.email()
         var nomeFaker = faker.name.firstName()
         var sobrenomeFaker = faker.name.lastName()
         var emailFaker = faker.internet.email()
         var password = faker.internet.password()
         cy.viewport(1366, 768)

       
          
     
     cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4').click()
     cy.get('.signIn-buttonsContainer-1vC > .button-root_normalPriority-F4F > .button-content-3wD').click()
     cy.get('#firstName').type(nomeFaker, { delay: 100 }).trigger('mouseover'); // Simula o movimento do mouse após digitar o nome
     cy.wait(3000); // Atraso de 1 segundo
     cy.get('#lastName').type(sobrenomeFaker , { delay: 100 })
     cy.wait(2000); // Atraso de 2 segundos
     cy.get('#Email').focus().type(emailFaker , { delay: 100 }).trigger('mouseover'); // Simula o movimento do mouse após digitar o nome
 
     cy.get('#Password').type(password + '@', { delay: 100 })
     cy.wait(4000); // Atraso de 3 segundos
     cy.get('.createAccount-submitButton-3OJ').click()
    
  // Preencha o formulário de criação de conta com os dados desejados
  // ...
})

 


  })
  
    







 
  

  

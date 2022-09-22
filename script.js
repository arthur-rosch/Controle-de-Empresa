class Funcionário {
  Name;
  Wage;
}
class Manager extends Funcionário {
  Department;

  ExibirInformation() {
    console.log(`Informação: ${this.Name} ${this.Wage} ${this.Department}`);
  }
}
class Seller extends Funcionário {
  Commission_Percentage;

  CalcularSalario() {}
  ExibirInformation() {
    console.log(
      `Informação: ${this.Name} ${this.Wage} ${this.Commission_Percentage}`
    );
  }
}
let loop = true;
while (loop) {
  let choice = Number(
    prompt("1-Cadastrar Vendedor \n2-Cadastrar Gerente \n3-Vendas \n4-Sair")
  );
  switch (choice) {
    case 1:
      registerSeller();
      break;
    case 2:
      registerManager();
      break;
    case 3:
      break;
    case 4:
      loop = false;
      break;
    default:
      alert("Opção Invalida!!!");
      break;
  }
}
function registerSeller() {
  let newSeller = new Seller();
  newSeller.Name = String(prompt("Nome do Vendedor:"));
  newSeller.Wage = parseFloat(prompt("Salario do Vendedor:"));
  newSeller.Commission_Percentage = parseFloat(prompt("Comissão do Vendedor:"));
}
function registerManager() {
  let newManager = new Manager();
}

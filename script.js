let productList = [],
  manager = [],
  seller = [];
class Employee {
  Name;
  Wage;

  constructor(name, wage) {
    this.Name = name;
    this.Wage = wage;
  }
}
class Manager extends Employee {
  Department;

  constructor(name, wage, department) {
    super(name, wage);
    this.Department = department;
  }

  View_Manager_Information(managerName) {
    manager.forEach((check) => {
      if (check.Name == managerName) {
        alert(
          `Gerente:${check.Name} \nSalario:${check.Wage}R$ \nDepartamento: ${check.Department}`
        );
      }
    });
  }
}
class Seller extends Employee {
  Commission_Percentage;

  constructor(name, wage, commission) {
    super(name, wage);
    this.Commission_Percentage = commission;
  }

  Calculate_Salary() {}
  View_Seller_Information(sellerName) {
    seller.forEach((check) => {
      if (check.Name == sellerName) {
        alert(
          `Vendedor: ${check.Name} \nSalario: ${check.Wage}R$ \nPorcentagem: ${check.Commission_Percentage}`
        );
      }
    });
  }
}
class Product {
  Name;
  Price;

  constructor(name, price) {
    this.Name = name;
    this.Price = price;
  }
}
class Sell {
  Seller;
  ProductList;
  FinalValue;
  Add_New_Product() {
    let newProduct = new Product(Name, Price);
    const Name = String(prompt("Nome do Produto:")),
      Price = Number(prompt("Valor do Produto:"));
    productList.push(newProduct);
    productList.forEach((check) => {
      if (check.Name == "" || check.Price == "") {
        productList.pop(newProduct);
        alert("Não Foi Possível Cadastrar,Adicione valores Validos");
      }
    });
    this.ProductList = productList;
  }
  Calculate_Total() {
    var result = 0;
    productList.forEach((value) => {
      result = Number(result + value.Price);
    });
    return result;
  }
  Finalize_Sale() {
    alert(`Vendedor: ${this.Seller} \nValor Final: ${this.FinalValue}`);
  }
}

let loop = true;
while (loop) {
  let choice = Number(
    prompt(
      "1-Cadastrar Vendedor \n2-Cadastrar Gerente \n3-Informações \n4-Vendas  \n5-Sair"
    )
  );
  switch (choice) {
    case 1:
      create_Seller();
      break;
    case 2:
      create_Manager();
      break;
    case 3:
      information();
      break;
    case 4:
      sales();
      break;
    case 5:
      loop = false;
      break;
    default:
      alert("Opção Invalida!!!");
      break;
  }
}

function information() {
  let loopInfo = true;
  while (loopInfo) {
    let choiceSeller = Number(
      prompt("1-Informação Vendedor \n2-Informação Gerente \n3-Sair")
    );
    switch (choiceSeller) {
      case 1:
        if (seller.length > 0) {
          const sellerName = prompt("Qual nome do Vendedor:");
          seller[0].View_Seller_Information(sellerName);
        } else {
          alert("Cadastre um Vendedor Primeiro!!!");
        }
        break;
      case 2:
        if (manager.length > 0) {
          const managerName = prompt("Qual nome do Gerente:");
          manager[0].View_Manager_Information(managerName);
        } else {
          alert("Cadastre um Gerente Primeiro!!!");
        }
        break;
      case 3:
        loopInfo = false;
        break;
      default:
        break;
    }
  }
}
function create_Seller() {
  const Name = String(prompt("Nome do Vendedor:")),
    Wage = Number(prompt("Salario do Vendedor:")),
    Commission_Percentage = parseFloat(prompt("Comissão do Vendedor:"));
  let newSeller = new Seller(Name, Wage, Commission_Percentage);
  seller.push(newSeller);
  seller.forEach((check) => {
    if (
      check.Name == "" ||
      check.Wage == "" ||
      check.Commission_Percentage == ""
    ) {
      seller.pop(newSeller);
      alert("Não Foi Possível Cadastrar,Adicione valores Validos");
    }
  });
}
function create_Manager() {
  const Name = String(prompt("Nome do Gerente:")),
    Wage = Number(prompt("Salario do Gerente:")),
    Department = String(prompt("Departamento do Gerente:"));
  let newManager = new Manager(Name, Wage, Department);
  manager.push(newManager);
  manager.forEach((check) => {
    if (check.Name == "" || check.Wage == "" || check.Department == "") {
      manager.pop(newManager);
      alert("Não Foi Possível Cadastrar,Adicione valores Validos");
    }
  });
}
function sales() {
  let loopSales = true;
  if (seller.length === 0) {
    alert("Cadastre um Vendedor Primeiro");
  } else {
    let newSell = new Sell();
    newSell.Seller = String(prompt("Nome do Vendedor:"));
    seller.forEach((seller) => {
      if (seller.Name == newSell.Seller) {
        while (loopSales) {
          let choiceSales = Number(
            prompt("1-Adicionar Produtos \n2-Finalizar Venda \n3-Sair")
          );
          switch (choiceSales) {
            case 1:
              newSell.Add_New_Product();
              newSell.FinalValue = newSell.Calculate_Total();
              break;
            case 2:
              if (productList.length == 0) {
                alert("Adicione um Produto Primeiro");
              } else {
                newSell.Finalize_Sale();
              }
              break;
            case 3:
              loopSales = false;
              break;
            default:
              alert("Opção Invalida!!!");
              break;
          }
        }
      }
    });
  }
}

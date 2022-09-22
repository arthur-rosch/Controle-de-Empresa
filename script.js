let productList = [],
  manager = [],
  seller = [];
class Employee {
  Name;
  Wage;
}
class Manager extends Employee {
  Department;

  View_Manager_Information() {
    console.log(
      `Informação Gerente \nNome:${this.Name} \nSalario:${this.Wage}R$ \nDepartamento:${this.Department}`
    );
  }
}
class Seller extends Employee {
  Commission_Percentage;

  Calculate_Salary() {}
  View_Seller_Information() {
    console.log(
      `Informação Vendedor \nNome:${this.Name} \nSalario:${this.Wage}R$ \nComissão:${this.Commission_Percentage}%`
    );
  }
}
class Product {
  Name;
  Price;
}
class Sell {
  Seller;
  ProductList;
  FinalValue;

  Add_New_Product() {
    let newProduct = new Product();
    newProduct.Name = String(prompt("Nome do Produto:"));
    newProduct.Price = Number(prompt("Valor do Produto:"));
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
      sales();
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
  newSeller.Wage = Number(prompt("Salario do Vendedor:"));
  newSeller.Commission_Percentage = parseFloat(prompt("Comissão do Vendedor:"));
  seller.push(newSeller);
  seller.forEach((check) => {
    if (
      check.Name == "" ||
      check.Wage == "" ||
      check.Commission_Percentage == ""
    ) {
      seller.pop(newSeller);
      alert("Não Foi Possível Cadastrar,Adicione valores Validos");
    } else {
      newSeller.View_Seller_Information();
    }
  });
}
function registerManager() {
  let newManager = new Manager();
  newManager.Name = String(prompt("Nome do Gerente:"));
  newManager.Wage = Number(prompt("Salario do Gerente:"));
  newManager.Department = String(prompt("Departamento do Gerente:"));
  manager.push(newManager);
  newManager.View_Manager_Information();
  manager.forEach((check) => {
    if (check.Name == "" || check.Wage == "" || check.Department == "") {
      manager.pop(newManager);
      alert("Não Foi Possível Cadastrar,Adicione valores Validos");
    } else {
      newManager.View_Manager_Information();
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
      } else {
        alert("Vendedor Invalido!!!");
      }
    });
  }
}

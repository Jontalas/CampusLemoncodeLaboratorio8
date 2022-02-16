import * as Client_business from "./client-business";
import * as Data_business from "./data-business";

function printClientsAccounts() {
    const clients = Data_business.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = Client_business.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

  export { printClientsAccounts };